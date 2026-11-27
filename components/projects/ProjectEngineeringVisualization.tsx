"use client";

import { useId, useMemo, useRef, useState } from "react";
import {
  DEFAULT_VISUALIZATION_DISCLAIMER,
  type ProjectEngineeringVisualizationConfig,
} from "@/lib/project-engineering-visualization";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/ui/Container";

type ProjectEngineeringVisualizationProps = {
  config: ProjectEngineeringVisualizationConfig;
  className?: string;
};

export function ProjectEngineeringVisualization({
  config,
  className = "",
}: ProjectEngineeringVisualizationProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { threshold: 0.15, once: true });
  const reactId = useId();
  const uid = reactId.replace(/:/g, "");

  const motionActive = inView && !prefersReducedMotion && !paused;
  const disclaimer = config.disclaimer ?? DEFAULT_VISUALIZATION_DISCLAIMER;

  const quantityListLabel = useMemo(
    () =>
      config.quantities
        .map((q) => `${q.label}: ${q.srValue ?? q.value}`)
        .join("; "),
    [config.quantities],
  );

  return (
    <section
      ref={sectionRef}
      id="engineering-visualization"
      aria-labelledby="engineering-visualization-heading"
      className={`pev tone-dark overflow-hidden ${className}`}
      data-motion={motionActive ? "on" : "off"}
      data-entered={inView || prefersReducedMotion ? "true" : "false"}
    >
      <Container className="band">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="type-eyebrow">
              {config.eyebrow ?? "Engineering Visualization"}
            </p>
            <h2
              id="engineering-visualization-heading"
              className="type-h2 mt-3 text-paper"
            >
              {config.projectTitle}
            </h2>
            <p className="type-lead mt-4 max-w-2xl">
              {config.location}
              <span className="mx-2 text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="text-accent-light">{config.statusLabel}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-on-dark-muted">
              {disclaimer}
            </p>
            {!prefersReducedMotion ? (
              <button
                type="button"
                className="pev-pause inline-flex min-h-11 items-center border border-white/25 px-4 text-xs font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:border-accent-light hover:text-accent-light"
                aria-pressed={paused}
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? "Play animation" : "Pause animation"}
              </button>
            ) : null}
          </div>
        </div>

        {config.highlight ? (
          <div className="pev-highlight mt-10 max-w-3xl border-l-2 border-accent pl-5 sm:pl-6">
            <p className="type-label text-accent-light">{config.highlight.label}</p>
            <p className="type-body mt-2 text-[#d6d9d7]">{config.highlight.body}</p>
          </div>
        ) : null}

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-12 xl:gap-16">
          <figure className="pev-stage relative min-w-0 overflow-hidden border border-white/12 bg-[#0b0d11]">
            <div className="pointer-events-none absolute inset-0 pev-vignette" aria-hidden="true" />

            <div className="hidden sm:block">
              {config.illustration === "paving-specimens" ? (
                <DesktopBlueprint
                  uid={uid}
                  ariaLabel={`Conceptual paving specimens for ${config.projectTitle}. ${quantityListLabel}. ${disclaimer}.`}
                />
              ) : null}
            </div>

            <div className="sm:hidden">
              {config.illustration === "paving-specimens" ? (
                <MobileBlueprint
                  uid={`${uid}-m`}
                  ariaLabel={`Conceptual paving specimens for ${config.projectTitle}. ${quantityListLabel}. ${disclaimer}.`}
                />
              ) : null}
            </div>

            <figcaption className="sr-only">
              {disclaimer}. Conceptual paving specimens only; not a construction
              drawing and not to scale. {quantityListLabel}.
            </figcaption>
          </figure>

          <aside className="min-w-0">
            <h3 className="type-h3 text-paper">
              {config.quantitiesHeading ?? "Project specifications"}
            </h3>
            {config.quantitiesNote ? (
              <p className="type-body mt-3 text-on-dark-muted">
                {config.quantitiesNote}
              </p>
            ) : null}

            <dl className="pev-specs mt-8 border-t border-white/12">
              {config.quantities.map((item, index) => (
                <div
                  key={item.id}
                  className="pev-spec-row grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-white/12 py-4"
                  style={{ ["--pev-delay" as string]: `${index * 140}ms` }}
                >
                  <dt className="text-sm leading-snug text-[#d6d9d7] sm:text-[0.9375rem]">
                    {item.label}
                  </dt>
                  <dd className="pev-spec-value font-display text-xl font-medium uppercase leading-none text-accent-light sm:text-2xl">
                    <span aria-hidden="true">{item.value}</span>
                    <span className="sr-only">{item.srValue ?? item.value}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-relaxed text-on-dark-muted">
              Illustrative paving specimens — not a facility plan, utility
              drawing, or construction document.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function BlueprintDefs({ uid }: { uid: string }) {
  return (
    <defs>
      <filter id={`glow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <pattern id={`grid-${uid}`} width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M28 0H0V28" stroke="#39232a" strokeWidth="0.7" fill="none" />
      </pattern>
      <pattern id={`major-${uid}`} width="140" height="140" patternUnits="userSpaceOnUse">
        <path d="M140 0H0V140" stroke="#45262c" strokeWidth="0.8" fill="none" />
      </pattern>
      <pattern
        id={`hatch-${uid}`}
        width="11"
        height="11"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <path d="M0 0V11" stroke="#aa3d47" strokeWidth="1" opacity="0.4" />
      </pattern>
      <pattern id={`aggregate-${uid}`} width="23" height="23" patternUnits="userSpaceOnUse">
        <path
          d="M5 6l3 2-1 3z M17 17l-2-4 4 1z"
          stroke="#b7636b"
          strokeWidth="0.65"
          fill="none"
          opacity="0.6"
        />
      </pattern>
      <linearGradient id={`scan-${uid}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ff3748" stopOpacity="0" />
        <stop offset="88%" stopColor="#ff3748" stopOpacity="0.11" />
        <stop offset="100%" stopColor="#ff6974" stopOpacity="0.6" />
      </linearGradient>
      <radialGradient id={`field-${uid}`}>
        <stop offset="0%" stopColor="#342026" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#0a0b0f" stopOpacity="0" />
      </radialGradient>
      <clipPath id={`scanclip-${uid}`}>
        <rect x="20" y="20" width="1100" height="570" />
      </clipPath>
    </defs>
  );
}

function DesktopBlueprint({
  uid,
  ariaLabel,
}: {
  uid: string;
  ariaLabel: string;
}) {
  const glow = `url(#glow-${uid})`;

  return (
    <svg
      className="pev-svg block h-auto w-full"
      viewBox="0 0 1140 610"
      role="img"
      aria-label={ariaLabel}
    >
      <BlueprintDefs uid={uid} />
      <rect width="1140" height="610" fill="#0b0d11" />
      <rect width="1140" height="610" fill={`url(#grid-${uid})`} opacity="0.65" />
      <rect width="1140" height="610" fill={`url(#major-${uid})`} opacity="0.75" />
      <ellipse cx="545" cy="288" rx="565" ry="350" fill={`url(#field-${uid})`} />

      {/* Drafting frame */}
      <g fill="none" stroke="#6d444b" strokeWidth="1">
        <rect x="20" y="20" width="1100" height="570" strokeDasharray="3 6" />
        <path d="M20 55V20H55 M1085 20H1120V55 M20 555V590H55 M1085 590H1120V555" />
        <path d="M40 94H1100 M40 526H1100 M568 115V510" strokeDasharray="4 8" />
      </g>
      <text
        x="42"
        y="48"
        fill="#5f5962"
        fontSize="8"
        letterSpacing="1.5"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        FIG 01  /  MATERIAL &amp; SCOPE VISUALIZATION
      </text>
      <text
        x="1098"
        y="48"
        textAnchor="end"
        fill="#5f5962"
        fontSize="8"
        letterSpacing="1.5"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        SCHEMATIC · NOT TO SCALE
      </text>
      <text
        x="42"
        y="76"
        fill="#ff999d"
        fontSize="12"
        fontWeight="600"
        letterSpacing="1.6"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        PAVING STUDIES
      </text>
      <text
        x="1098"
        y="76"
        textAnchor="end"
        fill="#a5a0a4"
        fontSize="10"
        letterSpacing="1"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        SURFACE / SECTION / EDGE
      </text>

      {/* A — parking surface specimen */}
      <g className="pev-layer pev-layer--lot" transform="translate(47 118)">
        <text
          x="0"
          y="20"
          fill="#ff999d"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.6"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          A  /  PARKING SURFACE
        </text>
        <text
          x="0"
          y="37"
          fill="#a5a0a4"
          fontSize="10"
          letterSpacing="1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          CONCRETE REPLACES PLANNED ASPHALT
        </text>
        <rect x="18" y="68" width="468" height="235" fill="#ff4449" opacity="0.05" />
        <rect
          className="pev-breath"
          x="18"
          y="68"
          width="468"
          height="235"
          stroke="#fa3949"
          strokeWidth="9"
          fill="none"
          opacity="0.5"
          filter={glow}
        />
        <rect
          className="pev-glow-line"
          x="18"
          y="68"
          width="468"
          height="235"
          stroke="#ff6068"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="27"
          y="77"
          width="450"
          height="217"
          stroke="#ad3b44"
          strokeWidth="1.15"
          fill="none"
        />
        <path
          d="M27 133H477 M27 186H477 M27 241H477 M139 77V294 M251 77V294 M363 77V294"
          stroke="#ad3b44"
          strokeWidth="1.15"
          fill="none"
        />
        <path
          className="pev-breath"
          d="M27 133H477 M27 186H477 M27 241H477 M139 77V294 M251 77V294 M363 77V294"
          stroke="#ff444e"
          strokeWidth="4"
          fill="none"
          filter={glow}
          opacity="0.35"
          style={{ animationDelay: "-1.7s" }}
        />
        <rect
          x="27"
          y="77"
          width="450"
          height="217"
          fill={`url(#hatch-${uid})`}
          opacity="0.23"
        />
        <path
          d="M18 68h16 M18 68v16 M486 68h-16 M486 68v16 M18 303h16 M18 303v-16 M486 303h-16 M486 303v-16"
          stroke="#ffb2b4"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="pev-trace"
          d="M39 314H465"
          stroke="#b72c3b"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M251 186H322L351 158H446"
          stroke="#6d444b"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="251" cy="186" r="4" fill="#ffb0b4" />
        <circle cx="251" cy="186" r="9" stroke="#90464d" fill="none" />
        <rect x="334" y="139" width="111" height="22" fill="#151014" stroke="#734148" />
        <text
          x="389"
          y="154"
          textAnchor="middle"
          fill="#d98e94"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          JOINT STUDY
        </text>
        <text
          x="18"
          y="345"
          fill="#eee9e9"
          fontSize="25"
          fontWeight="700"
          letterSpacing="-0.9"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          6 IN.
        </text>
        <text
          x="486"
          y="345"
          textAnchor="end"
          fill="#eee9e9"
          fontSize="25"
          fontWeight="700"
          letterSpacing="-0.9"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          3,753 SF
        </text>
        <text
          x="18"
          y="362"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          CONCRETE THICKNESS
        </text>
        <text
          x="486"
          y="362"
          textAnchor="end"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          PLANNED PARKING AREA
        </text>
      </g>

      {/* B — illustrative material section */}
      <g className="pev-layer pev-layer--heavy" transform="translate(600 118)">
        <text
          x="0"
          y="20"
          fill="#ff999d"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.6"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          B  /  CONCRETE PAVING
        </text>
        <text
          x="0"
          y="37"
          fill="#a5a0a4"
          fontSize="10"
          letterSpacing="1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          ILLUSTRATIVE MATERIAL SECTION
        </text>
        <g transform="translate(30 55)">
          <path d="M0 61L264 0 422 71 158 132Z" fill="#e13440" opacity="0.09" />
          <path
            className="pev-breath"
            d="M0 61L264 0 422 71 158 132Z M0 61V96L158 167 422 106V71 M158 132V167"
            stroke="#ff3948"
            strokeWidth="7"
            filter={glow}
            fill="none"
            style={{ animationDelay: "-3.4s" }}
          />
          <path
            className="pev-glow-line"
            d="M0 61L264 0 422 71 158 132Z M0 61V96L158 167 422 106V71 M158 132V167"
            stroke="#ff6068"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 61V96L158 167V132Z M158 132L422 71V106L158 167Z"
            fill={`url(#aggregate-${uid})`}
            stroke="#bd414b"
            strokeWidth="1"
          />
          <path
            d="M88 41L246 112 M176 20L334 92 M79 96L343 35"
            stroke="#ad3b44"
            strokeWidth="1.15"
            fill="none"
          />
          <circle cx="158" cy="132" r="3.5" fill="#ffa4aa" />
        </g>
        <text
          x="18"
          y="280"
          fill="#eee9e9"
          fontSize="25"
          fontWeight="700"
          letterSpacing="-0.9"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          8 IN.
        </text>
        <text
          x="486"
          y="280"
          textAnchor="end"
          fill="#eee9e9"
          fontSize="25"
          fontWeight="700"
          letterSpacing="-0.9"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          3,780 SF
        </text>
        <text
          x="18"
          y="297"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          CONCRETE THICKNESS
        </text>
        <text
          x="486"
          y="297"
          textAnchor="end"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          PLAN QUANTITY
        </text>
      </g>

      {/* C — sidewalk & curb */}
      <g className="pev-layer pev-layer--walk" transform="translate(607 455)">
        <text
          x="0"
          y="3"
          fill="#ff999d"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.6"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          C  /  SIDEWALK &amp; CURB
        </text>
        <g transform="translate(246 -7)" className="pev-breath pev-layer--curb">
          <path
            className="pev-glow-line"
            d="M0 0H17V-12H26V0H58V9H0Z"
            stroke="#ff646e"
            strokeWidth="1.6"
            fill="#7b2934"
            fillOpacity="0.15"
          />
        </g>
        <text
          x="0"
          y="28"
          fill="#f9e7e8"
          fontSize="13"
          letterSpacing="0.75"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          468 SF
        </text>
        <text
          x="0"
          y="42"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          SIDEWALK
        </text>
        <text
          x="175"
          y="28"
          fill="#f9e7e8"
          fontSize="13"
          letterSpacing="0.75"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          132 LF
        </text>
        <text
          x="175"
          y="42"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          CURB &amp; GUTTER
        </text>
      </g>

      {/* Vertical scan sweep (prototype language) */}
      <g clipPath={`url(#scanclip-${uid})`} aria-hidden="true">
        <g className="pev-scan-y">
          <rect x="21" y="-74" width="1098" height="110" fill={`url(#scan-${uid})`} />
          <path d="M21 36H1119" stroke="#ff6a72" strokeWidth="1" opacity="0.25" />
        </g>
      </g>

      <text
        x="42"
        y="547"
        fill="#77747c"
        fontSize="8"
        letterSpacing="1.1"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        ILLUSTRATIVE PAVING SPECIMENS — NOT A FACILITY PLAN
      </text>
      <text
        x="42"
        y="567"
        fill="#a5a0a4"
        fontSize="10"
        letterSpacing="1"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        H&amp;H CONSTRUCTION  /  PROJECT SCOPE STUDY
      </text>
      <text
        x="1098"
        y="547"
        textAnchor="end"
        fill="#77747c"
        fontSize="8"
        letterSpacing="1.1"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        NOT FOR CONSTRUCTION
      </text>
      <text
        x="1098"
        y="567"
        textAnchor="end"
        fill="#a5a0a4"
        fontSize="10"
        letterSpacing="1"
        fontFamily="ui-monospace, Consolas, monospace"
      >
        SHEET 01 / 01
      </text>
    </svg>
  );
}

function MobileBlueprint({
  uid,
  ariaLabel,
}: {
  uid: string;
  ariaLabel: string;
}) {
  const glow = `url(#glow-${uid})`;

  return (
    <svg
      className="pev-svg block h-auto w-full"
      viewBox="0 0 380 740"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <filter id={`glow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={`grid-${uid}`} width="19" height="19" patternUnits="userSpaceOnUse">
          <path d="M19 0H0V19" stroke="#43262d" strokeWidth="0.65" fill="none" />
        </pattern>
        <pattern
          id={`hatch-${uid}`}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0V8" stroke="#b94a54" opacity="0.35" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="380" height="740" fill="#0b0d11" />
      <rect width="380" height="740" fill={`url(#grid-${uid})`} opacity="0.6" />
      <rect
        x="12"
        y="12"
        width="356"
        height="716"
        fill="none"
        stroke="#6d444b"
        strokeWidth="1"
        strokeDasharray="3 5"
      />

      <g transform="translate(25 28)">
        <text
          y="8"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          FIG 01 / CONCEPTUAL SCOPE STUDIES
        </text>
        <text
          y="34"
          fill="#ff999d"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.6"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          A / PARKING SURFACE
        </text>
        <text
          y="50"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          ASPHALT PLAN UPGRADED TO CONCRETE
        </text>

        <g className="pev-layer pev-layer--lot">
          <rect
            className="pev-glow-line"
            x="12"
            y="66"
            width="306"
            height="136"
            stroke="#ff6068"
            strokeWidth="2"
            fill="none"
          />
          <rect
            className="pev-breath"
            x="12"
            y="66"
            width="306"
            height="136"
            stroke="#ff424e"
            strokeWidth="7"
            fill="none"
            filter={glow}
          />
          <rect
            x="18"
            y="72"
            width="294"
            height="124"
            fill={`url(#hatch-${uid})`}
            stroke="#ad3b44"
            strokeWidth="1.15"
          />
          <path
            d="M18 113H312 M18 155H312 M92 72V196 M165 72V196 M239 72V196"
            stroke="#ad3b44"
            strokeWidth="1.15"
            fill="none"
          />
          <text
            x="12"
            y="235"
            fill="#eee9e9"
            fontSize="22"
            fontWeight="700"
            fontFamily="ui-monospace, Consolas, monospace"
          >
            6 IN.
          </text>
          <text
            x="318"
            y="235"
            textAnchor="end"
            fill="#eee9e9"
            fontSize="22"
            fontWeight="700"
            fontFamily="ui-monospace, Consolas, monospace"
          >
            3,753 SF
          </text>
        </g>

        <path d="M0 263H330" stroke="#6d444b" strokeWidth="1" strokeDasharray="4 5" />

        <text
          y="287"
          fill="#ff999d"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.6"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          B / CONCRETE PAVING
        </text>
        <text
          y="303"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          ILLUSTRATIVE MATERIAL SECTION
        </text>

        <g className="pev-layer pev-layer--heavy" transform="translate(20 321)">
          <path
            className="pev-breath"
            d="M0 45L184 0 291 50 107 95Z M0 45V68L107 118 291 73V50 M107 95V118"
            stroke="#f83d4b"
            strokeWidth="6"
            filter={glow}
            fill="none"
            style={{ animationDelay: "-1.7s" }}
          />
          <path
            className="pev-glow-line"
            d="M0 45L184 0 291 50 107 95Z M0 45V68L107 118 291 73V50 M107 95V118"
            stroke="#ff6068"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 45V68L107 118V95Z M107 95L291 50V73L107 118Z"
            fill={`url(#hatch-${uid})`}
          />
        </g>
        <text
          x="12"
          y="476"
          fill="#eee9e9"
          fontSize="22"
          fontWeight="700"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          8 IN.
        </text>
        <text
          x="318"
          y="476"
          textAnchor="end"
          fill="#eee9e9"
          fontSize="22"
          fontWeight="700"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          3,780 SF
        </text>

        <path d="M0 504H330" stroke="#6d444b" strokeWidth="1" strokeDasharray="4 5" />

        <text
          y="529"
          fill="#ff999d"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1.6"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          C / SIDEWALK &amp; CURB
        </text>
        <g className="pev-layer pev-layer--curb">
          <path
            className="pev-glow-line"
            d="M12 555H146V543H156V555H318V566H12Z"
            stroke="#ff6068"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="pev-breath"
            d="M12 555H146V543H156V555H318V566H12Z"
            stroke="#ff424e"
            strokeWidth="6"
            filter={glow}
            fill="none"
            style={{ animationDelay: "-3.4s" }}
          />
        </g>
        <text
          x="12"
          y="596"
          fill="#eee9e9"
          fontSize="22"
          fontWeight="700"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          468 SF
        </text>
        <text
          x="318"
          y="596"
          textAnchor="end"
          fill="#eee9e9"
          fontSize="22"
          fontWeight="700"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          132 LF
        </text>
        <text
          x="12"
          y="609"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          SIDEWALK
        </text>
        <text
          x="318"
          y="609"
          textAnchor="end"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          CURB &amp; GUTTER
        </text>

        <text
          y="650"
          fill="#77747c"
          fontSize="8"
          letterSpacing="1.1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          ILLUSTRATIVE SPECIMENS · NOT A FACILITY PLAN
        </text>
        <text
          y="666"
          fill="#a5a0a4"
          fontSize="10"
          letterSpacing="1"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          NOT FOR CONSTRUCTION / N.T.S.
        </text>
      </g>
    </svg>
  );
}
