import { siteConfig } from "@/lib/site-data";
import {
  buildAutoReplyBody,
  buildContactEmailBody,
  formatProjectType,
  sanitizeContactForm,
  type ContactFormValues,
} from "@/lib/contact-form";

type EmailPayload = {
  to: string | string[];
  subject: string;
  text: string;
  replyTo?: string;
};

function textToHtml(text: string) {
  return text
    .split("\n")
    .map((line) => `<p>${line || "&nbsp;"}</p>`)
    .join("");
}

async function sendViaResend(apiKey: string, payload: EmailPayload, from: string) {
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
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error: ${response.status} ${errorBody}`);
  }
}

async function sendViaCloudflare(
  emailBinding: NonNullable<CloudflareEnv["EMAIL"]>,
  payload: EmailPayload,
  fromEmail: string,
  fromName: string,
) {
  await emailBinding.send({
    to: payload.to,
    from: { email: fromEmail, name: fromName },
    subject: payload.subject,
    text: payload.text,
    html: textToHtml(payload.text),
    replyTo: payload.replyTo,
  });
}

async function dispatchEmail(env: CloudflareEnv, payload: EmailPayload) {
  const fromEmail = env.CONTACT_FROM_EMAIL || siteConfig.email;
  const fromName = siteConfig.name;
  const from = `${fromName} <${fromEmail}>`;

  if (env.EMAIL) {
    await sendViaCloudflare(env.EMAIL, payload, fromEmail, fromName);
    return;
  }

  if (env.RESEND_API_KEY) {
    await sendViaResend(env.RESEND_API_KEY, payload, from);
    return;
  }

  throw new Error("Email service is not configured.");
}

export async function sendContactEmails(
  env: CloudflareEnv,
  values: ContactFormValues,
) {
  const data = sanitizeContactForm(values);
  const recipient = env.CONTACT_TO_EMAIL || siteConfig.email;
  const subjectLocation = data.projectLocation.split(",")[0]?.trim() || "Oklahoma";

  await dispatchEmail(env, {
    to: recipient,
    subject: `Bid Request: ${formatProjectType(data.projectType)} — ${subjectLocation}`,
    text: buildContactEmailBody(data),
    replyTo: data.email,
  });

  await dispatchEmail(env, {
    to: data.email,
    subject: "We received your bid request — H&H Construction",
    text: buildAutoReplyBody(data.name),
  });
}
