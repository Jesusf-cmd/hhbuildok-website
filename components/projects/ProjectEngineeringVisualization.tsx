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
  const inView = useInView(sectionRef, { threshold: 0.2, once: true });
  const reactId = useId();
  const uid = reactId.replace(/:/g, "");
  const filterId = `pev-glow-${uid}`;
  const hatchLotId = `pev-hatch-lot-${uid}`;
  const hatchHeavyId = `pev-hatch-heavy-${uid}`;
  const gridId = `pev-grid-${uid}`;
  const scanGradientId = `pev-scan-${uid}`;

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
            <p className="type-eyebrow">{config.eyebrow ?? "Engineering Visualization"}</p>
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
          <figure className="pev-stage relative min-w-0 overflow-hidden border border-white/12 bg-[#121515]">
            <div className="pointer-events-none absolute inset-0 pev-vignette" aria-hidden="true" />
            <svg
              className="pev-svg block h-auto w-full"
              viewBox="0 0 960 620"
              role="img"
              aria-label={`Conceptual engineering diagram for ${config.projectTitle}. ${quantityListLabel}. ${disclaimer}.`}
            >
              <defs>
                <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <pattern
                  id={gridId}
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M24 0H0V24"
                    fill="none"
                    stroke="rgba(255,255,255,0.045)"
                    strokeWidth="1"
                  />
                </pattern>
                <pattern
                  id={hatchLotId}
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(38)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="10"
                    stroke="rgba(185,50,40,0.28)"
                    strokeWidth="1.25"
                  />
                </pattern>
                <pattern
                  id={hatchHeavyId}
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(-42)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="8"
                    stroke="rgba(238,122,112,0.22)"
                    strokeWidth="1.5"
                  />
                </pattern>
                <linearGradient id={scanGradientId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(185,50,40,0)" />
                  <stop offset="45%" stopColor="rgba(185,50,40,0.12)" />
                  <stop offset="55%" stopColor="rgba(238,122,112,0.18)" />
                  <stop offset="100%" stopColor="rgba(185,50,40,0)" />
                </linearGradient>
              </defs>

              <rect width="960" height="620" fill="#121515" />
              <rect width="960" height="620" fill={`url(#${gridId})`} />

              {/* Outer drafting frame */}
              <g className="pev-layer pev-layer--frame" filter={`url(#${filterId})`}>
                <rect
                  x="28"
                  y="28"
                  width="904"
                  height="564"
                  fill="none"
                  stroke="rgba(185,50,40,0.35)"
                  strokeWidth="1"
                />
                <rect
                  x="36"
                  y="36"
                  width="888"
                  height="548"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                {/* Corner ticks */}
                <path
                  d="M28 56V28H56M904 28h28v28M932 564v28h-28M56 592H28v-28"
                  fill="none"
                  stroke="#b93228"
                  strokeWidth="1.5"
                  opacity="0.85"
                />
              </g>

              {config.illustration === "tuttle-paving-concept" ? (
                <TuttlePavingConcept
                  hatchLotId={hatchLotId}
                  hatchHeavyId={hatchHeavyId}
                />
              ) : null}

              {/* Restrained scan sweep */}
              <g className="pev-scan" aria-hidden="true">
                <rect
                  className="pev-scan-beam"
                  x="36"
                  y="36"
                  width="72"
                  height="548"
                  fill={`url(#${scanGradientId})`}
                />
              </g>
            </svg>
            <figcaption className="sr-only">
              {disclaimer}. Conceptual diagram only; not a construction drawing
              and not to scale. {quantityListLabel}.
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
                  style={{ ["--pev-delay" as string]: `${index * 120}ms` }}
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
              Illustration is conceptual and not to scale. It does not show the
              actual facility layout, utilities, or access geometry.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function TuttlePavingConcept({
  hatchLotId,
  hatchHeavyId,
}: {
  hatchLotId: string;
  hatchHeavyId: string;
}) {
  return (
    <g className="pev-illustration">
      {/* Building mass — abstract only */}
      <g className="pev-layer pev-layer--structure">
        <rect
          className="pev-draw"
          x="118"
          y="118"
          width="268"
          height="168"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(185,180,170,0.35)"
          strokeWidth="1.25"
        />
        <path
          className="pev-draw pev-glow-line"
          d="M118 148h268M118 178h268M148 118v168M208 118v168M268 118v168M328 118v168"
          fill="none"
          stroke="rgba(185,50,40,0.22)"
          strokeWidth="1"
        />
        <text
          x="252"
          y="206"
          textAnchor="middle"
          fill="rgba(255,250,240,0.55)"
          fontSize="11"
          letterSpacing="0.18em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          FACILITY MASS
        </text>
        <text
          x="252"
          y="224"
          textAnchor="middle"
          fill="rgba(185,191,188,0.55)"
          fontSize="9"
          letterSpacing="0.08em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          CONCEPTUAL · NOT TO SCALE
        </text>
      </g>

      {/* 6" parking lot zone */}
      <g className="pev-layer pev-layer--lot">
        <path
          className="pev-draw pev-glow-line"
          d="M118 310 H520 V520 H118 Z"
          fill={`url(#${hatchLotId})`}
          stroke="#b93228"
          strokeWidth="1.75"
          opacity="0.95"
        />
        <path
          className="pev-draw"
          d="M148 340 H250 M148 370 H220 M148 400 H240 M148 430 H210"
          fill="none"
          stroke="rgba(255,250,240,0.18)"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
        <text
          x="319"
          y="400"
          textAnchor="middle"
          fill="rgba(255,250,240,0.78)"
          fontSize="12"
          letterSpacing="0.14em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          6&quot; CONCRETE LOT
        </text>
        <text
          x="319"
          y="420"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="13"
          letterSpacing="0.06em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          3,753 SF
        </text>
      </g>

      {/* 8" heavy paving */}
      <g className="pev-layer pev-layer--heavy">
        <path
          className="pev-draw pev-glow-line"
          d="M540 170 H820 V520 H540 Z"
          fill={`url(#${hatchHeavyId})`}
          stroke="#ee7a70"
          strokeWidth="2"
        />
        <path
          className="pev-draw"
          d="M560 210 H800 M560 260 H800 M560 310 H800 M560 360 H800 M560 410 H800 M560 460 H800"
          fill="none"
          stroke="rgba(185,50,40,0.2)"
          strokeWidth="1"
        />
        <text
          x="680"
          y="330"
          textAnchor="middle"
          fill="rgba(255,250,240,0.82)"
          fontSize="12"
          letterSpacing="0.14em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          8&quot; CONCRETE PAVING
        </text>
        <text
          x="680"
          y="352"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="13"
          letterSpacing="0.06em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          3,780 SF
        </text>
      </g>

      {/* Sidewalk strip */}
      <g className="pev-layer pev-layer--walk">
        <path
          className="pev-draw pev-glow-line"
          d="M118 286 H520 V308 H118 Z"
          fill="rgba(185,50,40,0.12)"
          stroke="#b93228"
          strokeWidth="1.25"
        />
        <text
          x="319"
          y="302"
          textAnchor="middle"
          fill="rgba(255,250,240,0.7)"
          fontSize="10"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          SIDEWALK 468 SF
        </text>
      </g>

      {/* Curb & gutter indicator */}
      <g className="pev-layer pev-layer--curb">
        <path
          className="pev-draw pev-glow-line"
          d="M118 520 H520"
          fill="none"
          stroke="#ee7a70"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          className="pev-draw"
          d="M118 528 H520"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
        />
        {/* Dimension ticks */}
        <path
          d="M118 512v22M520 512v22"
          fill="none"
          stroke="rgba(238,122,112,0.7)"
          strokeWidth="1"
        />
        <text
          x="319"
          y="552"
          textAnchor="middle"
          fill="rgba(255,250,240,0.75)"
          fontSize="10"
          letterSpacing="0.14em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          CURB &amp; GUTTER · 132 LF
        </text>
      </g>

      {/* Material upgrade callout */}
      <g className="pev-layer pev-layer--callout">
        <path
          className="pev-draw"
          d="M420 250 L470 250 L490 270"
          fill="none"
          stroke="rgba(238,122,112,0.55)"
          strokeWidth="1"
        />
        <rect
          className="pev-draw pev-callout-panel"
          x="490"
          y="248"
          width="198"
          height="54"
          fill="rgba(23,26,26,0.92)"
          stroke="rgba(185,50,40,0.55)"
          strokeWidth="1"
        />
        <text
          x="504"
          y="270"
          fill="#ee7a70"
          fontSize="9"
          letterSpacing="0.16em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          MATERIAL UPGRADE
        </text>
        <text
          x="504"
          y="288"
          fill="rgba(255,250,240,0.78)"
          fontSize="10"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          Asphalt → 6&quot; concrete
        </text>
      </g>

      {/* Title block */}
      <g className="pev-layer pev-layer--titleblock">
        <rect
          x="640"
          y="48"
          width="252"
          height="78"
          fill="rgba(18,21,21,0.9)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
        <text
          x="656"
          y="72"
          fill="rgba(185,191,188,0.8)"
          fontSize="9"
          letterSpacing="0.16em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          H&amp;H CONSTRUCTION
        </text>
        <text
          x="656"
          y="94"
          fill="#fffefa"
          fontSize="13"
          letterSpacing="0.04em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          TUTTLE FS NO. 2
        </text>
        <text
          x="656"
          y="112"
          fill="rgba(238,122,112,0.9)"
          fontSize="9"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          PAVING CONCEPT · SHEET V-01
        </text>
      </g>
    </g>
  );
}
