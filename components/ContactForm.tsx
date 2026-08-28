"use client";

import { useId, useState, type FormEvent } from "react";
import { nap } from "@/lib/site-data";
import {
  CONTACT_FORM_ACCEPT,
  CONTACT_FORM_MAX_FILES,
  initialContactFormValues,
  validateContactAttachments,
  validateContactForm,
  type ContactFormField,
  type ContactFormValues,
} from "@/lib/contact-form";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

const inputClassName =
  "w-full border border-border bg-surface px-4 py-3 text-sm text-charcoal placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";

const labelClassName =
  "block text-sm font-semibold uppercase tracking-wider text-charcoal";

function formatPhoneInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function formatFileList(files: File[]) {
  if (files.length === 0) {
    return null;
  }

  if (files.length === 1) {
    return files[0].name;
  }

  return `${files.length} files selected`;
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
};

function Field({
  id,
  label,
  error,
  required = false,
  optional = false,
  children,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
        {optional ? (
          <span className="ml-2 text-xs font-normal normal-case tracking-normal text-text-muted">
            (optional)
          </span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues);
  const [projectDocs, setProjectDocs] = useState<File[]>([]);
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>(
    {},
  );
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitError, setSubmitError] = useState("");

  function updateField(field: ContactFormField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    const attachmentError = validateContactAttachments(files);

    setProjectDocs(files);
    setFileError(attachmentError ?? "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    const attachmentError = validateContactAttachments(projectDocs);

    if (Object.keys(validationErrors).length > 0 || attachmentError) {
      setErrors(validationErrors);
      setFileError(attachmentError ?? "");
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("description", values.description);
    formData.set("website", values.website);

    for (const file of projectDocs) {
      formData.append("projectDocs", file);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string; errors?: Partial<Record<ContactFormField, string>> }
          | null;

        if (payload?.errors) {
          setErrors(payload.errors);
        }

        throw new Error(payload?.error || "Unable to send your request.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your request right now.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-sm border border-border bg-surface p-8 text-left shadow-sm sm:p-10"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-heading text-2xl font-bold uppercase text-charcoal">
          Request Received
        </h3>
        <p className="mt-4 text-base leading-relaxed text-charcoal-light">
          Thanks — we&apos;ll review your project and follow up within 1–2
          business days.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          Need to talk sooner? Call{" "}
          <PhoneLink className="font-semibold text-charcoal transition-colors hover:text-accent" />
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      noValidate
      encType="multipart/form-data"
      className="rounded-sm border border-border bg-surface p-6 text-left shadow-sm sm:p-8"
      aria-labelledby={`${formId}-title`}
    >
      <h3
        id={`${formId}-title`}
        className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl"
      >
        Request a Bid
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        Share your project details and our team will follow up to discuss scope
        and next steps.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        <Field id={`${formId}-name`} label="Name" error={errors.name} required>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={inputClassName}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Email"
          error={errors.email}
          optional
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClassName}
          />
        </Field>

        <Field id={`${formId}-phone`} label="Phone" error={errors.phone} required>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={values.phone}
            onChange={(event) =>
              updateField("phone", formatPhoneInput(event.target.value))
            }
            placeholder="(405) 555-0123"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={inputClassName}
          />
        </Field>

        <Field
          id={`${formId}-description`}
          label="Project Description"
          error={errors.description}
          required
        >
          <textarea
            id={`${formId}-description`}
            name="description"
            required
            rows={5}
            value={values.description}
            onChange={(event) => updateField("description", event.target.value)}
            placeholder="Tell us about the project: location, scope, timeline, and anything else we should know."
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description ? `${formId}-description-error` : undefined
            }
            className={`${inputClassName} min-h-32 resize-y`}
          />
        </Field>

        <Field
          id={`${formId}-project-docs`}
          label="Project Docs"
          error={fileError}
          optional
        >
          <input
            id={`${formId}-project-docs`}
            name="projectDocs"
            type="file"
            multiple
            accept={CONTACT_FORM_ACCEPT}
            onChange={handleFileChange}
            aria-invalid={Boolean(fileError)}
            aria-describedby={
              fileError ? `${formId}-project-docs-error` : `${formId}-project-docs-help`
            }
            className={`${inputClassName} file:mr-4 file:border-0 file:bg-charcoal file:px-4 file:py-2 file:text-sm file:font-semibold file:uppercase file:tracking-wider file:text-surface hover:file:bg-charcoal/90`}
          />
          <p
            id={`${formId}-project-docs-help`}
            className="mt-2 text-xs leading-relaxed text-text-muted"
          >
            PDF, images, spreadsheets, or zip files. Up to {CONTACT_FORM_MAX_FILES}{" "}
            files, 4 MB total.
          </p>
          {formatFileList(projectDocs) ? (
            <p className="mt-2 text-sm text-charcoal">{formatFileList(projectDocs)}</p>
          ) : null}
        </Field>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {status === "error" ? (
        <div
          className="mt-6 rounded-sm border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-charcoal"
          role="alert"
        >
          <p>{submitError}</p>
          <p className="mt-2 text-text-muted">
            Having trouble? Call us directly at{" "}
            <PhoneLink className="font-semibold text-charcoal transition-colors hover:text-accent" />{" "}
            or email{" "}
            <EmailLink className="font-semibold text-charcoal transition-colors hover:text-accent" />
            .
          </p>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Submit Bid Request"}
        </button>
        <PhoneLink className="inline-flex items-center justify-center border border-charcoal/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5">
          Call {nap.phone}
        </PhoneLink>
      </div>
    </form>
  );
}
