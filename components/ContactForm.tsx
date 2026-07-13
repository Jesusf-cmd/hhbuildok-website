"use client";

import { useId, useState, type FormEvent } from "react";
import { nap, siteConfig } from "@/lib/site-data";
import {
  PROJECT_TYPES,
  REFERRAL_SOURCES,
  TIMELINES,
  initialContactFormValues,
  validateContactForm,
  type ContactFormField,
  type ContactFormValues,
} from "@/lib/contact-form";

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

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ id, label, error, required = false, children }: FieldProps) {
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
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>(
    {},
  );
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
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
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-semibold text-charcoal transition-colors hover:text-accent"
          >
            {nap.phone}
          </a>
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

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
          id={`${formId}-company`}
          label="Company / Organization"
          error={errors.company}
        >
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClassName}
          />
        </Field>

        <Field id={`${formId}-email`} label="Email" error={errors.email} required>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
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
          id={`${formId}-project-type`}
          label="Project Type"
          error={errors.projectType}
          required
        >
          <select
            id={`${formId}-project-type`}
            name="projectType"
            required
            value={values.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? `${formId}-project-type-error` : undefined
            }
            className={inputClassName}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-project-location`}
          label="Project Location"
          error={errors.projectLocation}
          required
        >
          <input
            id={`${formId}-project-location`}
            name="projectLocation"
            type="text"
            required
            value={values.projectLocation}
            onChange={(event) =>
              updateField("projectLocation", event.target.value)
            }
            placeholder="City, site address, or general area"
            aria-invalid={Boolean(errors.projectLocation)}
            aria-describedby={
              errors.projectLocation ? `${formId}-project-location-error` : undefined
            }
            className={inputClassName}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            id={`${formId}-scope`}
            label="Project Scope / Description"
            error={errors.scope}
            required
          >
            <textarea
              id={`${formId}-scope`}
              name="scope"
              required
              rows={5}
              value={values.scope}
              onChange={(event) => updateField("scope", event.target.value)}
              placeholder="Tell us about the project: size, timeline, and any specs you have."
              aria-invalid={Boolean(errors.scope)}
              aria-describedby={errors.scope ? `${formId}-scope-error` : undefined}
              className={`${inputClassName} resize-y min-h-32`}
            />
          </Field>
        </div>

        <Field id={`${formId}-timeline`} label="Timeline" error={errors.timeline}>
          <select
            id={`${formId}-timeline`}
            name="timeline"
            value={values.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className={inputClassName}
          >
            <option value="">Select a timeline (optional)</option>
            {TIMELINES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-referral`}
          label="How did you hear about us?"
          error={errors.referralSource}
        >
          <select
            id={`${formId}-referral`}
            name="referralSource"
            value={values.referralSource}
            onChange={(event) => updateField("referralSource", event.target.value)}
            className={inputClassName}
          >
            <option value="">Select one (optional)</option>
            {REFERRAL_SOURCES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="font-semibold text-charcoal transition-colors hover:text-accent"
            >
              {nap.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-charcoal transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
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
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center justify-center border border-charcoal/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
        >
          Call {nap.phone}
        </a>
      </div>
    </form>
  );
}
