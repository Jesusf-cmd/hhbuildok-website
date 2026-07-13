export const PROJECT_TYPES = [
  { value: "concrete", label: "Concrete Construction" },
  { value: "asphalt", label: "Asphalt Paving" },
  { value: "metal-buildings", label: "Metal Buildings & Roofing" },
  { value: "multiple", label: "Not Sure — Multiple Services" },
] as const;

export const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "30-days", label: "Within 30 Days" },
  { value: "1-3-months", label: "1–3 Months" },
  { value: "planning", label: "Planning Stage" },
  { value: "not-sure", label: "Not Sure" },
] as const;

export const REFERRAL_SOURCES = [
  { value: "referral", label: "Referral" },
  { value: "google", label: "Google Search" },
  { value: "existing-client", label: "Existing Client" },
  { value: "other", label: "Other" },
] as const;

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  scope: string;
  timeline: string;
  referralSource: string;
  website: string;
};

export type ContactFormField = keyof ContactFormValues;

export const initialContactFormValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  projectLocation: "",
  scope: "",
  timeline: "",
  referralSource: "",
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

function labelForValue<T extends { value: string; label: string }>(
  options: readonly T[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function formatProjectType(value: string) {
  return labelForValue(PROJECT_TYPES, value);
}

export function formatTimeline(value: string) {
  if (!value) return "Not provided";
  return labelForValue(TIMELINES, value);
}

export function formatReferralSource(value: string) {
  if (!value) return "Not provided";
  return labelForValue(REFERRAL_SOURCES, value);
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
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = normalizePhoneDigits(values.phone);
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length !== 10) {
    errors.phone = "Enter a valid 10-digit US phone number.";
  }

  if (!values.projectType) {
    errors.projectType = "Select a project type.";
  }

  const projectLocation = values.projectLocation.trim();
  if (!projectLocation) {
    errors.projectLocation = "Project location is required.";
  } else if (projectLocation.length < 3) {
    errors.projectLocation = "Enter the city or site address.";
  }

  const scope = values.scope.trim();
  if (!scope) {
    errors.scope = "Project scope is required.";
  } else if (scope.length < 20) {
    errors.scope = "Add a bit more detail so we can qualify your project.";
  }

  return errors;
}

export function sanitizeContactForm(values: ContactFormValues) {
  return {
    name: values.name.trim(),
    company: values.company.trim(),
    email: values.email.trim().toLowerCase(),
    phone: values.phone.trim(),
    projectType: values.projectType,
    projectLocation: values.projectLocation.trim(),
    scope: values.scope.trim(),
    timeline: values.timeline,
    referralSource: values.referralSource,
    website: values.website.trim(),
  };
}

export function buildContactEmailBody(data: ReturnType<typeof sanitizeContactForm>) {
  const lines = [
    "New bid request from hhbuildok.com",
    "",
    `Name: ${data.name}`,
    `Company / Organization: ${data.company || "Not provided"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Project Type: ${formatProjectType(data.projectType)}`,
    `Project Location: ${data.projectLocation}`,
    `Timeline: ${formatTimeline(data.timeline)}`,
    `How they heard about us: ${formatReferralSource(data.referralSource)}`,
    "",
    "Project Scope / Description:",
    data.scope,
  ];

  return lines.join("\n");
}

export function buildAutoReplyBody(name: string) {
  return [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to H&H Construction. We received your bid request and will review your project details.",
    "",
    "A member of our team will follow up within 1–2 business days to discuss scope, location, and next steps.",
    "",
    "If your project is urgent, call us directly at 405-476-5476.",
    "",
    "— H&H Construction",
    "info@hhbuildok.com",
    "770 W Rock Creek #115, Norman, OK 73069",
  ].join("\n");
}
