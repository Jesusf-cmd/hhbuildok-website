"use client";

import { useId, useRef, useState, type FormEvent } from "react";
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
import {
  buildEstimateRequestLines,
  type RetainingWallEstimate,
} from "@/lib/retaining-wall-estimate";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";
import { buttonClassName } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

const inputClassName =
  "min-h-[3.125rem] w-full rounded-none border border-line-strong bg-paper px-4 py-3 text-base text-graphite placeholder:text-[#737876] transition-colors hover:border-graphite/60 focus:border-graphite aria-[invalid=true]:border-error aria-[invalid=true]:bg-[#fdf6f5]";

const labelClassName = "type-label block text-graphite";

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
          <span className="ml-2 text-xs font-medium normal-case tracking-normal text-text-muted">
            (optional)
          </span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p
          id={errorId}
          className="mt-2 border-l-2 border-error pl-3 text-sm font-medium text-error"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm({
  retainingWall = false,
  retainingWallEstimate = null,
}: {
  retainingWall?: boolean;
  retainingWallEstimate?: RetainingWallEstimate | null;
}) {
  const formId = useId();
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [qualificationError, setQualificationError] = useState("");
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
  // The disabled button only applies after React re-renders, so submits fired
  // before then (or via requestSubmit) would otherwise send duplicate requests.
  const submitInFlight = useRef(false);

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

    if (submitInFlight.current) {
      return;
    }

    const validationErrors = validateContactForm(values);
    const attachmentError = validateContactAttachments(projectDocs);
    if (retainingWall && (!city || !budget)) {
      setQualificationError("Select your project location and budget range.");
      setErrors(validationErrors);
      setFileError(attachmentError ?? "");
      return;
    }
    setQualificationError("");

    if (Object.keys(validationErrors).length > 0 || attachmentError) {
      setErrors(validationErrors);
      setFileError(attachmentError ?? "");
      setStatus("idle");
      return;
    }

    submitInFlight.current = true;
    setStatus("submitting");
    setSubmitError("");

    const formData = new FormData();
    const attribution = retainingWall
      ? ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid"]
          .flatMap((key) => {
            const value = new URLSearchParams(window.location.search).get(key);
            return value ? [`${key}: ${value.replace(/[\r\n]/g, " ").slice(0, 300)}`] : [];
          }).join("\n")
      : "";
    const estimateLines =
      retainingWall && retainingWallEstimate
        ? buildEstimateRequestLines(retainingWallEstimate).map((line) => `\n${line}`).join("")
        : "";
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("description", retainingWall
      ? `Service: Retaining wall construction\nOrigin: /retaining-walls\nProject location: ${city}\nBudget range: ${budget}${estimateLines}${attribution ? `\n${attribution}` : ""}\n\n${values.description}`
      : values.description);
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
    } finally {
      submitInFlight.current = false;
    }
  }

  if (status === "success") {
    return (
      <div
        className="tone-light border border-line border-t-4 border-t-success bg-white p-6 text-left text-graphite shadow-[0_24px_60px_rgb(23_26_26/0.12)] sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span
          aria-hidden="true"
          className="mb-6 flex h-12 w-12 items-center justify-center bg-success text-white"
        >
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="type-h2-sm text-graphite">
          Request Received
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#3a3f3e]">
          Thanks — we&apos;ll review your project and follow up within 1–2
          business days.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          Need to talk sooner? Call{" "}
          <PhoneLink className="font-semibold text-graphite underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent" />
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
      className="tone-light border border-line border-t-4 border-t-accent bg-white p-6 text-left text-graphite shadow-[0_24px_60px_rgb(23_26_26/0.12)] sm:p-10"
      aria-labelledby={`${formId}-title`}
    >
      <h3
        id={`${formId}-title`}
        className="type-h2-sm text-graphite"
      >
        Request a Bid
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[0.9375rem]">
        Share your project details and our team will follow up to discuss scope
        and next steps.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {retainingWall ? (
          <>
            <p className="border-l-4 border-accent bg-warm p-4 text-sm leading-relaxed">This campaign is for retaining-wall construction projects of $10,000 or more in Yukon and Edmond. Your final price depends on the site and agreed scope.</p>
            <Field id={`${formId}-city`} label="Project location" required>
              <select id={`${formId}-city`} required value={city} onChange={(event) => setCity(event.target.value)} className={inputClassName} aria-describedby={qualificationError ? `${formId}-qualification-error` : undefined} aria-invalid={Boolean(qualificationError && !city)}>
                <option value="">Select location</option>
                <option>Yukon, OK</option><option>Edmond, OK</option><option>Other location</option>
              </select>
            </Field>
            <Field id={`${formId}-budget`} label="Project budget" required>
              <select id={`${formId}-budget`} required value={budget} onChange={(event) => setBudget(event.target.value)} className={inputClassName} aria-describedby={qualificationError ? `${formId}-qualification-error` : undefined} aria-invalid={Boolean(qualificationError && !budget)}>
                <option value="">Select budget range</option>
                <option>Under $10,000</option><option>$10,000–$25,000</option><option>$25,000–$50,000</option><option>$50,000+</option><option>Not sure yet</option>
              </select>
            </Field>
            {qualificationError ? <p id={`${formId}-qualification-error`} role="alert" className="text-sm text-error">{qualificationError}</p> : null}
            {retainingWallEstimate ? (
              <div className="border border-line bg-warm p-4 text-sm leading-relaxed">
                <p className="type-label text-graphite">Included with this request</p>
                <ul className="mt-2 space-y-1 text-[#3a3f3e]">
                  {buildEstimateRequestLines(retainingWallEstimate).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-text-muted">
                  To change these, update the budget calculator above.
                </p>
              </div>
            ) : null}
          </>
        ) : null}
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
            placeholder={retainingWall ? "Approximate wall length and height, property type, new wall or replacement, site access, and desired timeline." : "Tell us about the project: location, scope, timeline, and anything else we should know."}
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
            className="block w-full cursor-pointer border border-dashed border-line-strong bg-warm px-4 py-5 text-sm text-graphite transition-colors hover:border-graphite/60 aria-[invalid=true]:border-error file:mr-4 file:min-h-11 file:cursor-pointer file:border-0 file:bg-graphite file:px-5 file:text-xs file:font-bold file:uppercase file:tracking-[0.08em] file:text-paper hover:file:bg-graphite-2"
          />
          <p
            id={`${formId}-project-docs-help`}
            className="mt-2 text-xs leading-relaxed text-text-muted"
          >
            PDF, images, spreadsheets, or zip files. Up to {CONTACT_FORM_MAX_FILES}{" "}
            files, 4 MB total.
          </p>
          {formatFileList(projectDocs) ? (
            <p className="mt-2 text-sm font-medium text-graphite">{formatFileList(projectDocs)}</p>
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
          className="mt-6 border-l-4 border-error bg-[#fbf1f0] px-5 py-4 text-sm text-graphite"
          role="alert"
        >
          <p className="font-semibold text-error">{submitError}</p>
          <p className="mt-2 leading-relaxed text-[#3a3f3e]">
            Having trouble? Call us directly at{" "}
            <PhoneLink className="font-semibold text-graphite underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent" />{" "}
            or email{" "}
            <EmailLink className="break-all font-semibold text-graphite underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent" />
            .
          </p>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={buttonClassName(
            "primary",
            "min-h-[3.25rem] px-7 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
          )}
        >
          {status === "submitting" ? (
            <span
              aria-hidden="true"
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none"
            />
          ) : null}
          {status === "submitting" ? "Sending..." : "Submit Bid Request"}
        </button>
        <PhoneLink className={buttonClassName("outline-dark", "min-h-[3.25rem] px-7")}>
          Call {nap.phone}
        </PhoneLink>
      </div>
    </form>
  );
}
