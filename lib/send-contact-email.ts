import { siteConfig } from "@/lib/site-data";
import {
  buildAutoReplyBody,
  buildContactEmailBody,
  sanitizeContactForm,
  type ContactFormAttachment,
  type ContactFormValues,
} from "@/lib/contact-form";

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

async function sendViaResend(apiKey: string, payload: EmailPayload, from: string) {
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
    attachments: payload.attachments,
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
  attachments: ContactFormAttachment[] = [],
) {
  const data = sanitizeContactForm(values);
  const recipient = env.CONTACT_TO_EMAIL || siteConfig.email;
  const emailAttachments = attachments.map((attachment) => ({
    filename: attachment.filename,
    type: attachment.type || "application/octet-stream",
    content: attachment.content,
    disposition: "attachment" as const,
  }));

  await dispatchEmail(env, {
    to: recipient,
    subject: `Bid Request from ${data.name}`,
    text: buildContactEmailBody(
      data,
      attachments.map((attachment) => attachment.filename),
    ),
    replyTo: data.email || undefined,
    attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
  });

  if (data.email) {
    await dispatchEmail(env, {
      to: data.email,
      subject: "We received your bid request — H&H Construction",
      text: buildAutoReplyBody(data.name),
    });
  }
}
