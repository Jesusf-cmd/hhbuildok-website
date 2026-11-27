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
          <figure className="pev-stage relative min-w-0 overflow-hidden border border-white/12 bg-[#0e1111]">
            <div className="pointer-events-none absolute inset-0 pev-vignette" aria-hidden="true" />

            {/* Desktop / tablet specimen board */}
            <div className="hidden sm:block">
              {config.illustration === "paving-specimens" ? (
                <PavingSpecimensBoard
                  uid={uid}
                  ariaLabel={`Conceptual paving specimens for ${config.projectTitle}. ${quantityListLabel}. ${disclaimer}.`}
                />
              ) : null}
            </div>

            {/* Dedicated stacked mobile composition */}
            <div className="sm:hidden">
              {config.illustration === "paving-specimens" ? (
                <PavingSpecimensMobile
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
              Illustration shows conceptual paving specimens only — not a site
              plan, facility layout, utility drawing, or construction document.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function SharedDefs({
  uid,
  hatchA,
  hatchB,
}: {
  uid: string;
  hatchA: string;
  hatchB: string;
}) {
  return (
    <defs>
      <filter id={`glow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2.4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id={`glow-soft-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <pattern id={`grid-${uid}`} width="20" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M20 0H0V20"
          fill="none"
          stroke="rgba(185,50,40,0.07)"
          strokeWidth="1"
        />
        <path
          d="M20 0H0M0 0V20"
          fill="none"
          stroke="rgba(255,255,255,0.035)"
          strokeWidth="0.5"
        />
      </pattern>
      <pattern
        id={hatchA}
        width="9"
        height="9"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(40)"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="9"
          stroke="rgba(185,50,40,0.45)"
          strokeWidth="1.5"
        />
      </pattern>
      <pattern
        id={hatchB}
        width="7"
        height="7"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-48)"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="7"
          stroke="rgba(238,122,112,0.4)"
          strokeWidth="1.75"
        />
      </pattern>
      <linearGradient id={`scan-${uid}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(185,50,40,0)" />
        <stop offset="50%" stopColor="rgba(238,122,112,0.22)" />
        <stop offset="100%" stopColor="rgba(185,50,40,0)" />
      </linearGradient>
    </defs>
  );
}

function TitleBlock({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width="248"
        height="72"
        fill="rgba(14,17,17,0.92)"
        stroke="rgba(185,50,40,0.55)"
        strokeWidth="1"
      />
      <text
        x="14"
        y="22"
        fill="rgba(185,191,188,0.85)"
        fontSize="9"
        letterSpacing="0.16em"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        H&amp;H CONSTRUCTION
      </text>
      <text
        x="14"
        y="42"
        fill="#fffefa"
        fontSize="14"
        letterSpacing="0.04em"
        fontFamily="var(--font-oswald), system-ui, sans-serif"
      >
        PAVING SPECIMENS
      </text>
      <text
        x="14"
        y="60"
        fill="#ee7a70"
        fontSize="9"
        letterSpacing="0.14em"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        CONCEPTUAL · SHEET V-01
      </text>
    </g>
  );
}

function PavingSpecimensBoard({
  uid,
  ariaLabel,
}: {
  uid: string;
  ariaLabel: string;
}) {
  const hatchA = `hatch-a-${uid}`;
  const hatchB = `hatch-b-${uid}`;
  const glow = `url(#glow-${uid})`;
  const glowSoft = `url(#glow-soft-${uid})`;

  return (
    <svg
      className="pev-svg block h-auto w-full"
      viewBox="0 0 960 640"
      role="img"
      aria-label={ariaLabel}
    >
      <SharedDefs uid={uid} hatchA={hatchA} hatchB={hatchB} />
      <rect width="960" height="640" fill="#0e1111" />
      <rect width="960" height="640" fill={`url(#grid-${uid})`} />

      <g className="pev-layer pev-layer--frame" filter={glowSoft}>
        <rect
          x="24"
          y="24"
          width="912"
          height="592"
          fill="none"
          stroke="rgba(185,50,40,0.45)"
          strokeWidth="1.25"
        />
        <path
          d="M24 52V24H52M908 24h28v28M936 588v28h-28M52 616H24v-28"
          fill="none"
          stroke="#b93228"
          strokeWidth="2"
        />
      </g>

      <TitleBlock x={668} y={40} />

      {/* Specimen A — 6" parking lot */}
      <g className="pev-layer pev-layer--lot" filter={glow}>
        <rect
          className="pev-draw pev-glow-line"
          x="56"
          y="120"
          width="420"
          height="200"
          fill={`url(#${hatchA})`}
          stroke="#b93228"
          strokeWidth="2"
        />
        <path
          className="pev-draw"
          d="M56 280 H476"
          fill="none"
          stroke="rgba(255,250,240,0.2)"
          strokeWidth="1"
        />
        {/* Section depth ticks */}
        <path
          className="pev-draw"
          d="M76 280 V300 M76 300 H140 M140 280 V300"
          fill="none"
          stroke="#ee7a70"
          strokeWidth="1.25"
        />
        <text
          x="266"
          y="188"
          textAnchor="middle"
          fill="rgba(255,250,240,0.92)"
          fontSize="15"
          letterSpacing="0.14em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          SPECIMEN A
        </text>
        <text
          x="266"
          y="214"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="18"
          letterSpacing="0.04em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          6&quot; CONCRETE PARKING
        </text>
        <text
          x="266"
          y="240"
          textAnchor="middle"
          fill="rgba(255,250,240,0.78)"
          fontSize="14"
          letterSpacing="0.08em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          3,753 SF · PLAN QTY
        </text>
        <text
          x="108"
          y="316"
          fill="rgba(238,122,112,0.9)"
          fontSize="11"
          letterSpacing="0.1em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          6&quot; SECTION
        </text>
      </g>

      {/* Material upgrade callout */}
      <g className="pev-layer pev-layer--callout" filter={glowSoft}>
        <path
          className="pev-draw"
          d="M360 150 L420 110 L468 110"
          fill="none"
          stroke="rgba(238,122,112,0.7)"
          strokeWidth="1.25"
        />
        <rect
          className="pev-draw pev-callout-panel"
          x="468"
          y="86"
          width="176"
          height="52"
          fill="rgba(14,17,17,0.94)"
          stroke="rgba(185,50,40,0.7)"
          strokeWidth="1.25"
        />
        <text
          x="480"
          y="108"
          fill="#ee7a70"
          fontSize="10"
          letterSpacing="0.14em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          MATERIAL UPGRADE
        </text>
        <text
          x="480"
          y="126"
          fill="rgba(255,250,240,0.88)"
          fontSize="12"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          Asphalt → 6&quot; concrete
        </text>
      </g>

      {/* Specimen B — 8" paving */}
      <g className="pev-layer pev-layer--heavy" filter={glow}>
        <rect
          className="pev-draw pev-glow-line"
          x="520"
          y="170"
          width="384"
          height="240"
          fill={`url(#${hatchB})`}
          stroke="#ee7a70"
          strokeWidth="2.25"
        />
        <path
          className="pev-draw"
          d="M540 210 H884 M540 250 H884 M540 290 H884 M540 330 H884 M540 370 H884"
          fill="none"
          stroke="rgba(185,50,40,0.28)"
          strokeWidth="1"
        />
        <text
          x="712"
          y="268"
          textAnchor="middle"
          fill="rgba(255,250,240,0.92)"
          fontSize="15"
          letterSpacing="0.14em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          SPECIMEN B
        </text>
        <text
          x="712"
          y="296"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="18"
          letterSpacing="0.04em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          8&quot; CONCRETE PAVING
        </text>
        <text
          x="712"
          y="322"
          textAnchor="middle"
          fill="rgba(255,250,240,0.78)"
          fontSize="14"
          letterSpacing="0.08em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          3,780 SF · PLAN QTY
        </text>
      </g>

      {/* Specimen C — sidewalk */}
      <g className="pev-layer pev-layer--walk" filter={glow}>
        <rect
          className="pev-draw pev-glow-line"
          x="56"
          y="360"
          width="420"
          height="72"
          fill="rgba(185,50,40,0.14)"
          stroke="#b93228"
          strokeWidth="1.75"
        />
        <path
          className="pev-draw"
          d="M90 396 H140 M180 396 H230 M270 396 H320 M360 396 H410"
          fill="none"
          stroke="rgba(255,250,240,0.25)"
          strokeWidth="1.25"
          strokeDasharray="4 6"
        />
        <text
          x="266"
          y="392"
          textAnchor="middle"
          fill="rgba(255,250,240,0.9)"
          fontSize="13"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          SPECIMEN C · SIDEWALK
        </text>
        <text
          x="266"
          y="414"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="14"
          letterSpacing="0.06em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          468 SF
        </text>
      </g>

      {/* Specimen D — curb & gutter profile */}
      <g className="pev-layer pev-layer--curb" filter={glow}>
        <path
          className="pev-draw pev-glow-line"
          d="M56 500 H300 V470 H340 V520 H56 Z"
          fill="rgba(238,122,112,0.12)"
          stroke="#ee7a70"
          strokeWidth="2"
        />
        <path
          className="pev-draw"
          d="M300 470 V520"
          fill="none"
          stroke="rgba(255,250,240,0.35)"
          strokeWidth="1"
        />
        <text
          x="198"
          y="548"
          textAnchor="middle"
          fill="rgba(255,250,240,0.9)"
          fontSize="12"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          SPECIMEN D · CURB &amp; GUTTER
        </text>
        <text
          x="198"
          y="568"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="14"
          letterSpacing="0.06em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          132 LF
        </text>
      </g>

      {/* Total band */}
      <g className="pev-layer pev-layer--total" filter={glowSoft}>
        <rect
          className="pev-draw pev-callout-panel"
          x="520"
          y="460"
          width="384"
          height="100"
          fill="rgba(14,17,17,0.9)"
          stroke="rgba(185,50,40,0.55)"
          strokeWidth="1.25"
        />
        <text
          x="712"
          y="500"
          textAnchor="middle"
          fill="rgba(185,191,188,0.9)"
          fontSize="11"
          letterSpacing="0.16em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          TOTAL CONCRETE PAVING + SIDEWALK
        </text>
        <text
          x="712"
          y="536"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="28"
          letterSpacing="0.04em"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          8,001 SF
        </text>
      </g>

      <g className="pev-scan" aria-hidden="true">
        <rect
          className="pev-scan-beam"
          x="24"
          y="24"
          width="64"
          height="592"
          fill={`url(#scan-${uid})`}
        />
      </g>
    </svg>
  );
}

function PavingSpecimensMobile({
  uid,
  ariaLabel,
}: {
  uid: string;
  ariaLabel: string;
}) {
  const hatchA = `hatch-a-${uid}`;
  const hatchB = `hatch-b-${uid}`;
  const glow = `url(#glow-${uid})`;

  return (
    <svg
      className="pev-svg block h-auto w-full"
      viewBox="0 0 390 920"
      role="img"
      aria-label={ariaLabel}
    >
      <SharedDefs uid={uid} hatchA={hatchA} hatchB={hatchB} />
      <rect width="390" height="920" fill="#0e1111" />
      <rect width="390" height="920" fill={`url(#grid-${uid})`} />

      <g filter={`url(#glow-soft-${uid})`}>
        <rect
          x="14"
          y="14"
          width="362"
          height="892"
          fill="none"
          stroke="rgba(185,50,40,0.45)"
          strokeWidth="1.25"
        />
      </g>

      <text
        x="195"
        y="48"
        textAnchor="middle"
        fill="rgba(185,191,188,0.85)"
        fontSize="10"
        letterSpacing="0.16em"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        H&amp;H · PAVING SPECIMENS
      </text>
      <text
        x="195"
        y="70"
        textAnchor="middle"
        fill="#ee7a70"
        fontSize="11"
        letterSpacing="0.12em"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        CONCEPTUAL · NOT TO SCALE
      </text>

      {/* Stacked specimens with large mobile labels */}
      <g className="pev-layer pev-layer--lot" filter={glow}>
        <rect
          className="pev-draw pev-glow-line"
          x="34"
          y="96"
          width="322"
          height="150"
          fill={`url(#${hatchA})`}
          stroke="#b93228"
          strokeWidth="2"
        />
        <text
          x="195"
          y="152"
          textAnchor="middle"
          fill="rgba(255,250,240,0.95)"
          fontSize="13"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          6&quot; CONCRETE PARKING
        </text>
        <text
          x="195"
          y="180"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="22"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          3,753 SF
        </text>
        <text
          x="195"
          y="206"
          textAnchor="middle"
          fill="rgba(185,191,188,0.85)"
          fontSize="11"
          letterSpacing="0.1em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          ASPHALT → 6&quot; CONCRETE
        </text>
      </g>

      <g className="pev-layer pev-layer--heavy" filter={glow}>
        <rect
          className="pev-draw pev-glow-line"
          x="34"
          y="270"
          width="322"
          height="150"
          fill={`url(#${hatchB})`}
          stroke="#ee7a70"
          strokeWidth="2.25"
        />
        <text
          x="195"
          y="330"
          textAnchor="middle"
          fill="rgba(255,250,240,0.95)"
          fontSize="13"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          8&quot; CONCRETE PAVING
        </text>
        <text
          x="195"
          y="362"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="22"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          3,780 SF
        </text>
      </g>

      <g className="pev-layer pev-layer--walk" filter={glow}>
        <rect
          className="pev-draw pev-glow-line"
          x="34"
          y="444"
          width="322"
          height="110"
          fill="rgba(185,50,40,0.16)"
          stroke="#b93228"
          strokeWidth="1.75"
        />
        <text
          x="195"
          y="492"
          textAnchor="middle"
          fill="rgba(255,250,240,0.95)"
          fontSize="13"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          CONCRETE SIDEWALK
        </text>
        <text
          x="195"
          y="524"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="22"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          468 SF
        </text>
      </g>

      <g className="pev-layer pev-layer--curb" filter={glow}>
        <path
          className="pev-draw pev-glow-line"
          d="M34 590 H250 V560 H290 V620 H34 Z"
          fill="rgba(238,122,112,0.14)"
          stroke="#ee7a70"
          strokeWidth="2"
        />
        <text
          x="195"
          y="656"
          textAnchor="middle"
          fill="rgba(255,250,240,0.95)"
          fontSize="13"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
        >
          CURB &amp; GUTTER
        </text>
        <text
          x="195"
          y="688"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="22"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          132 LF
        </text>
      </g>

      <g className="pev-layer pev-layer--total" filter={`url(#glow-soft-${uid})`}>
        <rect
          className="pev-draw pev-callout-panel"
          x="34"
          y="730"
          width="322"
          height="120"
          fill="rgba(14,17,17,0.94)"
          stroke="rgba(185,50,40,0.6)"
          strokeWidth="1.5"
        />
        <text
          x="195"
          y="776"
          textAnchor="middle"
          fill="rgba(185,191,188,0.9)"
          fontSize="11"
          letterSpacing="0.12em"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          TOTAL PAVING + SIDEWALK
        </text>
        <text
          x="195"
          y="818"
          textAnchor="middle"
          fill="#ee7a70"
          fontSize="30"
          fontFamily="var(--font-oswald), system-ui, sans-serif"
        >
          8,001 SF
        </text>
      </g>

      <g className="pev-scan" aria-hidden="true">
        <rect
          className="pev-scan-beam"
          x="14"
          y="14"
          width="48"
          height="892"
          fill={`url(#scan-${uid})`}
        />
      </g>
    </svg>
  );
}
