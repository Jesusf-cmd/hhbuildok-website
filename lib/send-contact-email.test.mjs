import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  ContactPrimaryDeliveryError,
  deliverContactEmails,
  sanitizeProviderError,
} from "./contact-email-delivery.ts";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const baseValues = {
  name: "QA Tester",
  email: "customer@example.com",
  phone: "(405) 555-0100",
  description: "INTERNAL WEBSITE DELIVERY TEST — NOT A REAL BID.",
  website: "",
};

const deps = {
  recipient: "Bryan@hhbuildok.com",
  fromEmail: "Bryan@hhbuildok.com",
  fromName: "H&H Construction",
  companyReplyTo: "Bryan@hhbuildok.com",
  sanitizeForm: (values) => ({
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    phone: values.phone.trim(),
    description: values.description.trim(),
    website: values.website.trim(),
  }),
  buildPrimaryBody: (data, attachmentNames) =>
    [
      `Name: ${data.name}`,
      `Email: ${data.email || "Not provided"}`,
      data.description,
      ...attachmentNames,
    ].join("\n"),
  buildConfirmationBody: (name) => `Thanks ${name}`,
};

function createAttachment(name = "plans.pdf") {
  return {
    filename: name,
    type: "application/pdf",
    content: new TextEncoder().encode("fake-pdf").buffer,
  };
}

describe("production wrangler confirmation flag", () => {
  it("persists CONTACT_CONFIRMATION_EMAILS=false in wrangler.jsonc", () => {
    const wrangler = JSON.parse(
      readFileSync(join(repoRoot, "wrangler.jsonc"), "utf8").replace(
        /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g,
        "",
      ),
    );

    assert.equal(wrangler.vars.CONTACT_CONFIRMATION_EMAILS, "false");
  });
});

describe("sanitizeProviderError", () => {
  it("keeps Cloudflare-style error codes", () => {
    assert.equal(
      sanitizeProviderError({ code: "E_SENDER_DOMAIN_NOT_CONFIGURED" }),
      "E_SENDER_DOMAIN_NOT_CONFIGURED",
    );
  });

  it("drops non-code payloads", () => {
    assert.equal(
      sanitizeProviderError({
        message: "failed for customer@example.com",
        body: "secret",
      }),
      undefined,
    );
  });
});

describe("deliverContactEmails delivery separation", () => {
  it("reports primary success with messageId", async () => {
    const sends = [];
    const env = {
      EMAIL: {
        async send(message) {
          sends.push(message);
          return { messageId: "primary-msg-1" };
        },
      },
    };

    const result = await deliverContactEmails(
      env,
      { ...baseValues, email: "" },
      [],
      deps,
    );

    assert.equal(result.primary.ok, true);
    assert.equal(result.primary.messageId, "primary-msg-1");
    assert.equal(result.confirmation.skipped, true);
    assert.equal(result.confirmation.reason, "NO_CUSTOMER_EMAIL");
    assert.equal(sends.length, 1);
    assert.equal(sends[0].to, "Bryan@hhbuildok.com");
  });

  it("throws on primary failure and does not send confirmation", async () => {
    const sends = [];
    const env = {
      EMAIL: {
        async send(message) {
          sends.push(message);
          const error = new Error("blocked");
          error.code = "E_SENDER_DOMAIN_NOT_CONFIGURED";
          throw error;
        },
      },
    };

    await assert.rejects(
      () => deliverContactEmails(env, baseValues, [], deps),
      (error) => {
        assert.ok(error instanceof ContactPrimaryDeliveryError);
        assert.equal(error.code, "E_SENDER_DOMAIN_NOT_CONFIGURED");
        return true;
      },
    );
    assert.equal(sends.length, 1);
  });

  it("keeps primary success when customer confirmation fails", async () => {
    const sends = [];
    const env = {
      EMAIL: {
        async send(message) {
          sends.push(message);
          if (sends.length === 1) {
            return { messageId: "primary-ok" };
          }
          const error = new Error("plan");
          error.code = "E_RECIPIENT_PLAN_RESTRICTED";
          throw error;
        },
      },
    };

    const result = await deliverContactEmails(env, baseValues, [], deps);

    assert.equal(result.primary.ok, true);
    assert.equal(result.primary.messageId, "primary-ok");
    assert.equal(result.confirmation.ok, false);
    assert.equal(result.confirmation.errorCode, "E_RECIPIENT_PLAN_RESTRICTED");
    assert.equal(sends.length, 2);
    assert.equal(sends[1].to, "customer@example.com");
  });

  it("keeps primary success when confirmation Resend network request is rejected", async () => {
    const originalFetch = globalThis.fetch;
    let fetchCalls = 0;

    globalThis.fetch = async () => {
      fetchCalls += 1;
      if (fetchCalls === 1) {
        return {
          ok: true,
          async json() {
            return { id: "resend-primary-id" };
          },
        };
      }
      throw new TypeError("fetch failed");
    };

    try {
      const result = await deliverContactEmails(
        { RESEND_API_KEY: "test-key" },
        baseValues,
        [],
        deps,
      );

      assert.equal(result.primary.ok, true);
      assert.equal(result.primary.messageId, "resend-primary-id");
      assert.equal(result.confirmation.ok, false);
      assert.equal(result.confirmation.errorCode, "RESEND_NETWORK_ERROR");
      assert.equal(fetchCalls, 2);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("keeps primary success when confirmation provider returns HTTP rejection", async () => {
    const originalFetch = globalThis.fetch;
    let fetchCalls = 0;

    globalThis.fetch = async () => {
      fetchCalls += 1;
      if (fetchCalls === 1) {
        return {
          ok: true,
          async json() {
            return { id: "resend-primary-http" };
          },
        };
      }
      return {
        ok: false,
        status: 429,
        async json() {
          return { message: "rate limited" };
        },
      };
    };

    try {
      const result = await deliverContactEmails(
        { RESEND_API_KEY: "test-key" },
        baseValues,
        [],
        deps,
      );

      assert.equal(result.primary.ok, true);
      assert.equal(result.primary.messageId, "resend-primary-http");
      assert.equal(result.confirmation.ok, false);
      assert.equal(result.confirmation.errorCode, "RESEND_HTTP_429");
      assert.equal(fetchCalls, 2);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("keeps primary success when confirmation EMAIL send throws a network-style error", async () => {
    const sends = [];
    const env = {
      EMAIL: {
        async send(message) {
          sends.push(message);
          if (sends.length === 1) {
            return { messageId: "primary-before-network-fail" };
          }
          throw new TypeError("fetch failed");
        },
      },
    };

    const result = await deliverContactEmails(env, baseValues, [], deps);
    assert.equal(result.primary.ok, true);
    assert.equal(result.primary.messageId, "primary-before-network-fail");
    assert.equal(result.confirmation.ok, false);
    assert.equal(result.confirmation.errorCode, "EMAIL_SEND_FAILED");
    assert.equal(sends.length, 2);
  });

  it("keeps primary success when confirmation dispatch throws unexpectedly", async () => {
    const sends = [];
    const env = {
      EMAIL: {
        async send(message) {
          sends.push(message);
          if (sends.length === 1) {
            return { messageId: "primary-ok-unexpected" };
          }
          throw "non-error throw";
        },
      },
    };

    const result = await deliverContactEmails(env, baseValues, [], deps);
    assert.equal(result.primary.ok, true);
    assert.equal(result.primary.messageId, "primary-ok-unexpected");
    assert.equal(result.confirmation.ok, false);
    assert.equal(result.confirmation.errorCode, "EMAIL_SEND_FAILED");
  });

  it("skips confirmation when disabled by env", async () => {
    const sends = [];
    const env = {
      CONTACT_CONFIRMATION_EMAILS: "false",
      EMAIL: {
        async send(message) {
          sends.push(message);
          return { messageId: "primary-only" };
        },
      },
    };

    const result = await deliverContactEmails(env, baseValues, [], deps);
    assert.equal(sends.length, 1);
    assert.equal(result.confirmation.skipped, true);
    assert.equal(result.confirmation.reason, "CONFIRMATION_DISABLED");
  });

  it("preserves attachment payload on primary send", async () => {
    const sends = [];
    const env = {
      EMAIL: {
        async send(message) {
          sends.push(message);
          return { messageId: "with-attachment" };
        },
      },
    };

    await deliverContactEmails(
      env,
      { ...baseValues, email: "" },
      [createAttachment("site-plan.pdf")],
      deps,
    );

    assert.equal(sends.length, 1);
    assert.equal(sends[0].attachments?.length, 1);
    assert.equal(sends[0].attachments[0].filename, "site-plan.pdf");
    assert.equal(sends[0].attachments[0].disposition, "attachment");
    assert.match(sends[0].text, /site-plan\.pdf/);
  });

  it("fails clearly when no email provider is configured", async () => {
    await assert.rejects(
      () => deliverContactEmails({}, baseValues, [], deps),
      (error) => {
        assert.ok(error instanceof ContactPrimaryDeliveryError);
        assert.equal(error.code, "EMAIL_NOT_CONFIGURED");
        return true;
      },
    );
  });
});
