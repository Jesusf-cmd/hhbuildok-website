import { siteConfig } from "@/lib/site-data";

export const CONTACT_FORM_ACCEPT =
  ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp,.txt,.zip";

export const CONTACT_FORM_MAX_FILES = 5;
export const CONTACT_FORM_MAX_FILE_BYTES = 4 * 1024 * 1024;
export const CONTACT_FORM_MAX_TOTAL_ATTACHMENT_BYTES = 4 * 1024 * 1024;

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  description: string;
  website: string;
};

export type ContactFormField = keyof ContactFormValues;

export type ContactFormAttachment = {
  filename: string;
  type: string;
  content: ArrayBuffer;
};

export const initialContactFormValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  description: "",
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhoneDigits(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }
  return digits;
}

export function validateContactForm(
  values: ContactFormValues,
): Partial<Record<ContactFormField, string>> {
  const errors: Partial<Record<ContactFormField, string>> = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Enter your full name.";
  }

  const email = values.email.trim();
  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = normalizePhoneDigits(values.phone);
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length !== 10) {
    errors.phone = "Enter a valid 10-digit US phone number.";
  }

  const description = values.description.trim();
  if (!description) {
    errors.description = "Project description is required.";
  } else if (description.length < 10) {
    errors.description = "Add a bit more detail about your project.";
  }

  return errors;
}

export function validateContactAttachments(
  files: File[],
): string | null {
  if (files.length === 0) {
    return null;
  }

  if (files.length > CONTACT_FORM_MAX_FILES) {
    return `Upload up to ${CONTACT_FORM_MAX_FILES} files.`;
  }

  let totalBytes = 0;

  for (const file of files) {
    if (file.size === 0) {
      return `"${file.name}" is empty.`;
    }

    if (file.size > CONTACT_FORM_MAX_FILE_BYTES) {
      return `"${file.name}" is too large. Each file must be under 4 MB.`;
    }

    totalBytes += file.size;
  }

  if (totalBytes > CONTACT_FORM_MAX_TOTAL_ATTACHMENT_BYTES) {
    return "Combined file size must be under 4 MB.";
  }

  return null;
}

export function sanitizeContactForm(values: ContactFormValues) {
  return {
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    phone: values.phone.trim(),
    description: values.description.trim(),
    website: values.website.trim(),
  };
}

export function buildContactEmailBody(
  data: ReturnType<typeof sanitizeContactForm>,
  attachmentNames: string[],
) {
  const lines = [
    "New bid request from hhbuildok.com",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email || "Not provided"}`,
    `Phone: ${data.phone}`,
    "",
    "Project Description:",
    data.description,
  ];

  if (attachmentNames.length > 0) {
    lines.push("", "Attached files:", ...attachmentNames.map((name) => `- ${name}`));
  }

  return lines.join("\n");
}

export function buildAutoReplyBody(name: string) {
  return [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to H&H Construction. We received your bid request and will review your project details.",
    "",
    "A member of our team will follow up within 1–2 business days to discuss scope and next steps.",
    "",
    "If your project is urgent, call us directly at 405-476-5476.",
    "",
    "— H&H Construction",
    siteConfig.email,
    "770 W Rock Creek #115, Norman, OK 73069",
  ].join("\n");
}
