"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { buttonClassName } from "@/components/ui/Button";
import { useRetainingWallEstimate } from "@/components/retaining-walls/RetainingWallEstimateContext";
import {
  RETAINING_WALL_PROJECT_MINIMUM,
  RETAINING_WALL_RATE_HIGH,
  RETAINING_WALL_RATE_LOW,
  estimateRetainingWall,
  formatBudgetRange,
  formatFeet,
  formatSquareFeet,
  formatUsd,
  parseDimension,
  type RetainingWallMinimumStatus,
} from "@/lib/retaining-wall-estimate";

type DimensionField = "length" | "height";

const inputClassName =
  "min-h-[3.125rem] w-full rounded-none border border-line-strong bg-paper px-4 py-3 text-base text-graphite placeholder:text-[#737876] transition-colors hover:border-graphite/60 focus:border-graphite aria-[invalid=true]:border-error aria-[invalid=true]:bg-[#fdf6f5]";

const fieldLabels: Record<DimensionField, string> = {
  length: "wall length",
  height: "average wall height",
};

const minimum = formatUsd(RETAINING_WALL_PROJECT_MINIMUM);

const minimumMessages: Record<RetainingWallMinimumStatus, string> = {
  below: `This calculated range falls below this campaign’s ${minimum} project minimum.`,
  crosses: `This calculated range crosses this campaign’s ${minimum} project minimum. Whether the project meets the minimum depends on the reviewed scope.`,
  "at-or-above": `A calculated range at or above the ${minimum} project minimum does not confirm eligibility or pricing. H&H reviews each scope before providing a quote.`,
};

export function RetainingWallBudgetCalculator() {
  const formId = useId();
  const { estimate, setEstimate } = useRetainingWallEstimate();
  const [values, setValues] = useState<Record<DimensionField, string>>({
    length: "",
    height: "",
  });
  const [errors, setErrors] = useState<Partial<Record<DimensionField, string>>>({});
  const [inputsChanged, setInputsChanged] = useState(false);
  const lengthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  function updateField(field: DimensionField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }

    if (estimate) {
      setEstimate(null);
      setInputsChanged(true);
    }
  }

  function handleCalculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const length = parseDimension(values.length, fieldLabels.length);
    const height = parseDimension(values.height, fieldLabels.height);
    const nextErrors: Partial<Record<DimensionField, string>> = {};

    if (!length.ok) nextErrors.length = length.error;
    if (!height.ok) nextErrors.height = height.error;

    const nextEstimate =
      length.ok && height.ok ? estimateRetainingWall(length.value, height.value) : null;

    if (length.ok && height.ok && !nextEstimate) {
      nextErrors.length = "Enter smaller wall dimensions.";
    }

    setErrors(nextErrors);
    setEstimate(nextEstimate);
    setInputsChanged(false);

    if (nextErrors.length) {
      lengthRef.current?.focus();
    } else if (nextErrors.height) {
      heightRef.current?.focus();
    }
  }

  const fields: {
    field: DimensionField;
    label: string;
    help: string;
    placeholder: string;
    ref: React.RefObject<HTMLInputElement | null>;
  }[] = [
    {
      field: "length",
      label: "Wall length (feet)",
      help: "Total length along the face of the wall.",
      placeholder: "e.g. 50",
      ref: lengthRef,
    },
    {
      field: "height",
      label: "Average height above footing (feet)",
      help: "If the height changes along the wall, use the average exposed height.",
      placeholder: "e.g. 4",
      ref: heightRef,
    },
  ];

  return (
    <div className="tone-light border border-line border-t-4 border-t-accent bg-white p-6 text-left text-graphite shadow-[0_24px_60px_rgb(23_26_26/0.12)] sm:p-10">
      <form noValidate onSubmit={handleCalculate} aria-labelledby={`${formId}-title`}>
        <h3 id={`${formId}-title`} className="type-h2-sm text-graphite">
          Budget calculator
        </h3>
        <p id={`${formId}-measure`} className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[0.9375rem]">
          Measure one face of the wall. Do not count both sides or include the
          footing area.
        </p>

        <div className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {fields.map(({ field, label, help, placeholder, ref }, index) => {
            const inputId = `${formId}-${field}`;
            const error = errors[field];

            return (
              <div
                key={field}
                className={`row-span-4 grid grid-rows-subgrid ${index > 0 ? "mt-4 sm:mt-0" : ""}`}
              >
                <label htmlFor={inputId} className="type-label block self-end text-graphite">
                  {label}
                </label>
                <p id={`${inputId}-help`} className="text-xs leading-relaxed text-text-muted">
                  {help}
                </p>
                <input
                  ref={ref}
                  id={inputId}
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  spellCheck={false}
                  required
                  value={values[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  placeholder={placeholder}
                  aria-invalid={Boolean(error)}
                  aria-describedby={`${inputId}-help ${formId}-measure${error ? ` ${inputId}-error` : ""}`}
                  className={inputClassName}
                />
                {error ? (
                  <p
                    id={`${inputId}-error`}
                    className="border-l-2 border-error pl-3 text-sm font-medium text-error"
                    role="alert"
                  >
                    {error}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className={buttonClassName("dark", "mt-8 min-h-[3.25rem] w-full px-7 sm:w-auto")}
        >
          Calculate budget
        </button>
      </form>

      <div aria-live="polite" className="mt-8 border-t border-line pt-8">
        {estimate ? (
          <div>
            <p className="type-label text-text-muted">Preliminary planning budget</p>
            <p className="mt-2 font-display text-4xl font-medium leading-none text-graphite sm:text-5xl">
              {formatBudgetRange(estimate)}
            </p>
            <dl className="mt-6 grid grid-cols-1 border-t border-line text-sm min-[420px]:grid-cols-3">
              <div className="border-b border-line py-3 min-[420px]:pr-4">
                <dt className="text-text-muted">Wall length</dt>
                <dd className="mt-1 font-semibold">{formatFeet(estimate.lengthFt)}</dd>
              </div>
              <div className="border-b border-line py-3 min-[420px]:px-4">
                <dt className="text-text-muted">Average height</dt>
                <dd className="mt-1 font-semibold">{formatFeet(estimate.heightFt)}</dd>
              </div>
              <div className="border-b border-line py-3 min-[420px]:pl-4">
                <dt className="text-text-muted">Wall-face area</dt>
                <dd className="mt-1 font-semibold">{formatSquareFeet(estimate.areaSqFt)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-text-muted">
              {formatSquareFeet(estimate.areaSqFt)} ×{" "}
              <span className="whitespace-nowrap">{`$${RETAINING_WALL_RATE_LOW}–$${RETAINING_WALL_RATE_HIGH}`}</span>{" "}
              per square foot of wall face.
            </p>
            <p
              data-minimum-status={estimate.minimumStatus}
              className="mt-5 border-l-4 border-accent bg-warm p-4 text-sm leading-relaxed text-graphite"
            >
              {minimumMessages[estimate.minimumStatus]}
            </p>
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-text-muted">
            {inputsChanged
              ? "Your dimensions changed. Select Calculate budget to update the estimate."
              : "Enter both dimensions and select Calculate budget to see a preliminary range."}
          </p>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-text-muted">
        This calculator provides a preliminary budget, not a quote or structural
        design. Final pricing depends on the wall system, footing and
        reinforcement requirements, excavation, drainage, access, demolition,
        engineering, permits, and the agreed scope.
      </p>

      <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
        <a href="#request-bid" className={buttonClassName("primary", "min-h-[3.25rem] px-7 sm:self-start")}>
          Request a project review
        </a>
        <p className="text-xs leading-relaxed text-text-muted">
          Calculating does not send anything to H&amp;H.{" "}
          {estimate
            ? "These dimensions and this range are included only if you submit the bid request below."
            : "You can request a review with or without a calculation."}
        </p>
      </div>
    </div>
  );
}
