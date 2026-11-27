import { siteConfig } from "@/lib/site-data";
import {
  buildAutoReplyBody,
  buildContactEmailBody,
  sanitizeContactForm,
  type ContactFormAttachment,
  type ContactFormValues,
} from "@/lib/contact-form";
import {
  ContactPrimaryDeliveryError,
  deliverContactEmails,
  type ContactEmailSendSummary,
} from "@/lib/contact-email-delivery";

export {
  ContactPrimaryDeliveryError,
  sanitizeProviderError,
  type ContactEmailDeliveryResult,
  type ContactEmailSendSummary,
} from "@/lib/contact-email-delivery";

export async function sendContactEmails(
  env: CloudflareEnv,
  values: ContactFormValues,
  attachments: ContactFormAttachment[] = [],
): Promise<ContactEmailSendSummary> {
  return deliverContactEmails(env, values, attachments, {
    recipient: env.CONTACT_TO_EMAIL || siteConfig.email,
    fromEmail: env.CONTACT_FROM_EMAIL || siteConfig.email,
    fromName: siteConfig.name,
    companyReplyTo: siteConfig.email,
    sanitizeForm: sanitizeContactForm,
    buildPrimaryBody: buildContactEmailBody,
    buildConfirmationBody: buildAutoReplyBody,
  });
}
