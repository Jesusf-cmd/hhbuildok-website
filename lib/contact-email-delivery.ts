export type ContactEmailFormValues = {
  name: string;
  email: string;
  phone: string;
  description: string;
  website: string;
};

export type ContactEmailAttachment = {
  filename: string;
  type: string;
  content: ArrayBuffer;
};

type EmailAttachment = {
  filename: string;
  type: string;
  content: ArrayBuffer;
  disposition: "attachment";
};

type EmailPayload = {
  to: string | string[];
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
};

type EmailBinding = {
  send(message: {
    to:
      | string
      | { email: string; name?: string }
      | Array<string | { email: string; name?: string }>;
    from: { email: string; name?: string };
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string | { email: string; name?: string };
    attachments?: Array<{
      filename: string;
      type: string;
      content: string | ArrayBuffer | ArrayBufferView;
      disposition: "attachment" | "inline";
      contentId?: string;
    }>;
  }): Promise<{ messageId?: string }>;
};

type DeliveryEnv = {
  EMAIL?: EmailBinding;
  RESEND_API_KEY?: string;
  CONTACT_CONFIRMATION_EMAILS?: string;
};

export type ContactEmailDeliveryResult = {
  ok: boolean;
  messageId?: string;
  errorCode?: string;
  skipped?: boolean;
  reason?: string;
};

export type ContactEmailSendSummary = {
  primary: ContactEmailDeliveryResult;
  confirmation: ContactEmailDeliveryResult;
};

export type SanitizedContactForm = {
  name: string;
  email: string;
  phone: string;
  description: string;
  website: string;
};

export type ContactEmailDeliveryDeps = {
  recipient: string;
  fromEmail: string;
  fromName: string;
  companyReplyTo: string;
  buildPrimaryBody: (
    data: SanitizedContactForm,
    attachmentNames: string[],
  ) => string;
  buildConfirmationBody: (name: string) => string;
  sanitizeForm: (values: ContactEmailFormValues) => SanitizedContactForm;
};

export class ContactPrimaryDeliveryError extends Error {
  readonly code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.name = "ContactPrimaryDeliveryError";
    this.code = code;
  }
}

function textToHtml(text: string) {
  return text
    .split("\n")
    .map((line) => `<p>${line || "&nbsp;"}</p>`)
    .join("");
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

/** Keep only provider error codes / generic labels — never raw bodies or addresses. */
export function sanitizeProviderError(error: unknown): string | undefined {
  if (!error || typeof error !== "object") {
    return undefined;
  }

  const code = (error as { code?: unknown }).code;
  if (typeof code === "string" && /^[A-Z0-9_]{1,64}$/.test(code)) {
    return code;
  }

  if (typeof code === "number" && Number.isFinite(code)) {
    return String(code);
  }

  return undefined;
}

async function sendViaResend(
  apiKey: string,
  payload: EmailPayload,
  from: string,
): Promise<ContactEmailDeliveryResult> {
  const attachments = payload.attachments?.map((attachment) => ({
    filename: attachment.filename,
    content: arrayBufferToBase64(attachment.content),
  }));

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      html: textToHtml(payload.text),
      reply_to: payload.replyTo,
      attachments,
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      errorCode: `RESEND_HTTP_${response.status}`,
    };
  }

  const body = (await response.json().catch(() => null)) as {
    id?: string;
  } | null;

  return {
    ok: true,
    messageId: typeof body?.id === "string" ? body.id : undefined,
  };
}

async function sendViaCloudflare(
  emailBinding: EmailBinding,
  payload: EmailPayload,
  fromEmail: string,
  fromName: string,
): Promise<ContactEmailDeliveryResult> {
  try {
    const result = await emailBinding.send({
      to: payload.to,
      from: { email: fromEmail, name: fromName },
      subject: payload.subject,
      text: payload.text,
      html: textToHtml(payload.text),
      replyTo: payload.replyTo,
      attachments: payload.attachments,
    });

    return {
      ok: true,
      messageId:
        result && typeof result.messageId === "string"
          ? result.messageId
          : undefined,
    };
  } catch (error) {
    return {
      ok: false,
      errorCode: sanitizeProviderError(error) || "EMAIL_SEND_FAILED",
    };
  }
}

async function dispatchEmail(
  env: DeliveryEnv,
  payload: EmailPayload,
  fromEmail: string,
  fromName: string,
): Promise<ContactEmailDeliveryResult> {
  const from = `${fromName} <${fromEmail}>`;

  if (env.EMAIL) {
    return sendViaCloudflare(env.EMAIL, payload, fromEmail, fromName);
  }

  if (env.RESEND_API_KEY) {
    return sendViaResend(env.RESEND_API_KEY, payload, from);
  }

  return {
    ok: false,
    errorCode: "EMAIL_NOT_CONFIGURED",
  };
}

function confirmationEnabled(env: DeliveryEnv) {
  const flag = env.CONTACT_CONFIRMATION_EMAILS?.trim().toLowerCase();
  if (flag === "0" || flag === "false" || flag === "off") {
    return false;
  }
  return true;
}

export async function deliverContactEmails(
  env: DeliveryEnv,
  values: ContactEmailFormValues,
  attachments: ContactEmailAttachment[],
  deps: ContactEmailDeliveryDeps,
): Promise<ContactEmailSendSummary> {
  const data = deps.sanitizeForm(values);
  const emailAttachments = attachments.map((attachment) => ({
    filename: attachment.filename,
    type: attachment.type || "application/octet-stream",
    content: attachment.content,
    disposition: "attachment" as const,
  }));

  const primary = await dispatchEmail(
    env,
    {
      to: deps.recipient,
      subject: `Bid Request from ${data.name}`,
      text: deps.buildPrimaryBody(
        data,
        attachments.map((attachment) => attachment.filename),
      ),
      replyTo: data.email || undefined,
      attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
    },
    deps.fromEmail,
    deps.fromName,
  );

  if (!primary.ok) {
    throw new ContactPrimaryDeliveryError(
      "Primary bid notification failed.",
      primary.errorCode,
    );
  }

  if (!data.email) {
    return {
      primary,
      confirmation: {
        ok: true,
        skipped: true,
        reason: "NO_CUSTOMER_EMAIL",
      },
    };
  }

  if (!confirmationEnabled(env)) {
    return {
      primary,
      confirmation: {
        ok: true,
        skipped: true,
        reason: "CONFIRMATION_DISABLED",
      },
    };
  }

  const confirmation = await dispatchEmail(
    env,
    {
      to: data.email,
      subject: "We received your bid request — H&H Construction",
      text: deps.buildConfirmationBody(data.name),
      replyTo: deps.companyReplyTo,
    },
    deps.fromEmail,
    deps.fromName,
  );

  if (!confirmation.ok) {
    console.error("Contact confirmation email failed:", {
      errorCode: confirmation.errorCode || "EMAIL_SEND_FAILED",
    });
  }

  return { primary, confirmation };
}
