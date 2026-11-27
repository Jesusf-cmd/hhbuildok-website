"use client";

import { useId, useMemo, useRef, useState } from "react";
import {
  DEFAULT_VISUALIZATION_DISCLAIMER,
  type EngineeringQuantity,
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

  const qty = useMemo(() => quantityMap(config.quantities), [config.quantities]);

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

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:gap-12 xl:gap-16">
          <figure className="pev-stage relative min-w-0 overflow-hidden border border-white/15 bg-[#12151a]">
            <div className="pointer-events-none absolute inset-0 pev-vignette" aria-hidden="true" />

            <div className="hidden sm:block">
              {config.illustration === "paving-specimens" ? (
                <DesktopCadSheet
                  uid={uid}
                  qty={qty}
                  projectTitle={config.projectTitle}
                  location={config.location}
                  statusLabel={config.statusLabel}
                  ariaLabel={`Conceptual CAD paving study for ${config.projectTitle}. ${quantityListLabel}. ${disclaimer}.`}
                />
              ) : null}
            </div>

            <div className="sm:hidden">
              {config.illustration === "paving-specimens" ? (
                <MobileCadSheet
                  uid={`${uid}-m`}
                  qty={qty}
                  projectTitle={config.projectTitle}
                  ariaLabel={`Conceptual CAD paving study for ${config.projectTitle}. ${quantityListLabel}. ${disclaimer}.`}
                />
              ) : null}
            </div>

            <figcaption className="sr-only">
              {disclaimer}. Conceptual paving geometry only; not a construction
              drawing and not to scale. {quantityListLabel}.
            </figcaption>
          </figure>

          <aside className="min-w-0">
            <div className="pev-schedule border border-white/15 bg-[#0e1116]">
              <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 sm:px-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9aa0a6]">
                  Qty Schedule · Sheet C-101
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-light">
                  Plan Qty
                </p>
              </div>

              <h3 className="type-h3 border-b border-white/10 px-4 py-4 text-paper sm:px-5">
                {config.quantitiesHeading ?? "Project specifications"}
              </h3>

              {config.quantitiesNote ? (
                <p className="type-body border-b border-white/10 px-4 py-3 text-on-dark-muted sm:px-5">
                  {config.quantitiesNote}
                </p>
              ) : null}

              <dl className="pev-specs">
                {config.quantities.map((item, index) => (
                  <div
                    key={item.id}
                    className="pev-spec-row grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-3 border-b border-white/10 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4"
                    style={{ ["--pev-delay" as string]: `${index * 140}ms` }}
                  >
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f767e]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
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

              <p className="px-4 py-4 font-mono text-[10px] leading-relaxed uppercase tracking-[0.12em] text-[#7a828a] sm:px-5">
                Illustrative paving geometry — not a facility plan, utility
                drawing, or construction document.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

type QuantityLookup = {
  lot6: string;
  paving8: string;
  sidewalk: string;
  curb: string;
  total: string;
};

function quantityMap(quantities: EngineeringQuantity[]): QuantityLookup {
  const byId = Object.fromEntries(quantities.map((q) => [q.id, q.value]));
  return {
    lot6: byId["lot-6in"] ?? "3,753 SF",
    paving8: byId["paving-8in"] ?? "3,780 SF",
    sidewalk: byId["sidewalk"] ?? "468 SF",
    curb: byId["curb"] ?? "132 LF",
    total: byId["total"] ?? "8,001 SF",
  };
}

const MONO =
  'ui-monospace, "Cascadia Mono", Consolas, "Liberation Mono", monospace';

function CadDefs({ uid }: { uid: string }) {
  return (
    <defs>
      <filter id={`glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id={`softglow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="1.6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <pattern id={`paper-${uid}`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" stroke="#2a3038" strokeWidth="0.6" fill="none" />
      </pattern>
      <pattern id={`paper-major-${uid}`} width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M120 0H0V120" stroke="#343b45" strokeWidth="0.75" fill="none" />
      </pattern>
      <pattern
        id={`hatch-${uid}`}
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <path d="M0 0V10" stroke="#c24a52" strokeWidth="0.85" opacity="0.45" />
      </pattern>
      <pattern id={`aggregate-${uid}`} width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="4" r="0.7" fill="#d56a70" opacity="0.55" />
        <circle cx="11" cy="9" r="0.55" fill="#e0898e" opacity="0.45" />
        <circle cx="7" cy="14" r="0.65" fill="#c24a52" opacity="0.5" />
        <path
          d="M14 3l2 1.2-0.8 2.1z M2 11l1.8 1.4-0.6 1.7z"
          stroke="#d8797f"
          strokeWidth="0.55"
          fill="none"
          opacity="0.55"
        />
      </pattern>
      <pattern
        id={`sidewalk-hatch-${uid}`}
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-35)"
      >
        <path d="M0 0V8" stroke="#8a9199" strokeWidth="0.55" opacity="0.35" />
      </pattern>
      <linearGradient id={`scan-${uid}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ff3748" stopOpacity="0" />
        <stop offset="78%" stopColor="#ff3748" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ff6a72" stopOpacity="0.55" />
      </linearGradient>
      <linearGradient id={`sheet-${uid}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#161a20" />
        <stop offset="55%" stopColor="#12151a" />
        <stop offset="100%" stopColor="#0e1116" />
      </linearGradient>
      <clipPath id={`sheetclip-${uid}`}>
        <rect x="28" y="28" width="1144" height="664" />
      </clipPath>
    </defs>
  );
}

function Dimension({
  x1,
  y1,
  x2,
  y2,
  label,
  offset = -14,
  mono = MONO,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  offset?: number;
  mono?: string;
}) {
  const horizontal = Math.abs(y2 - y1) < 0.5;
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  if (horizontal) {
    const y = y1 + offset;
    return (
      <g className="pev-dim" fill="none" stroke="#9aa3ad" strokeWidth="0.85">
        <path d={`M${x1} ${y1}V${y} M${x2} ${y2}V${y}`} />
        <path d={`M${x1} ${y}H${x2}`} />
        <path d={`M${x1} ${y - 3}L${x1} ${y + 3} M${x2} ${y - 3}L${x2} ${y + 3}`} />
        <text
          x={midX}
          y={y - 5}
          textAnchor="middle"
          fill="#c5ccd4"
          fontSize="9"
          fontFamily={mono}
          letterSpacing="0.6"
        >
          {label}
        </text>
      </g>
    );
  }

  const x = x1 + offset;
  return (
    <g className="pev-dim" fill="none" stroke="#9aa3ad" strokeWidth="0.85">
      <path d={`M${x1} ${y1}H${x} M${x2} ${y2}H${x}`} />
      <path d={`M${x} ${y1}V${y2}`} />
      <path d={`M${x - 3} ${y1}L${x + 3} ${y1} M${x - 3} ${y2}L${x + 3} ${y2}`} />
      <text
        x={x - 6}
        y={midY + 3}
        textAnchor="end"
        fill="#c5ccd4"
        fontSize="9"
        fontFamily={mono}
        letterSpacing="0.6"
      >
        {label}
      </text>
    </g>
  );
}

function Leader({
  x1,
  y1,
  x2,
  y2,
  x3,
  label,
  mono = MONO,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  label: string;
  mono?: string;
}) {
  return (
    <g className="pev-leader">
      <path
        d={`M${x1} ${y1}L${x2} ${y2}H${x3}`}
        fill="none"
        stroke="#b7bfc8"
        strokeWidth="0.9"
      />
      <circle cx={x1} cy={y1} r="2.2" fill="#ff6a72" />
      <text
        x={x3 > x2 ? x3 + 4 : x3 - 4}
        y={y2 + 3}
        textAnchor={x3 > x2 ? "start" : "end"}
        fill="#e8edf2"
        fontSize="9"
        fontFamily={mono}
        letterSpacing="0.7"
      >
        {label}
      </text>
    </g>
  );
}

function DesktopCadSheet({
  uid,
  qty,
  projectTitle,
  location,
  statusLabel,
  ariaLabel,
}: {
  uid: string;
  qty: QuantityLookup;
  projectTitle: string;
  location: string;
  statusLabel: string;
  ariaLabel: string;
}) {
  const glow = `url(#glow-${uid})`;
  const soft = `url(#softglow-${uid})`;

  return (
    <svg
      className="pev-svg block h-auto w-full"
      viewBox="0 0 1200 720"
      role="img"
      aria-label={ariaLabel}
    >
      <CadDefs uid={uid} />

      {/* Drafting paper */}
      <rect width="1200" height="720" fill={`url(#sheet-${uid})`} />
      <rect width="1200" height="720" fill={`url(#paper-${uid})`} opacity="0.55" />
      <rect width="1200" height="720" fill={`url(#paper-major-${uid})`} opacity="0.4" />

      {/* Outer / inner borders */}
      <g fill="none" stroke="#d7dde4" strokeWidth="1.25">
        <rect x="14" y="14" width="1172" height="692" />
        <rect x="22" y="22" width="1156" height="676" stroke="#8b949e" strokeWidth="0.75" />
      </g>
      <g fill="none" stroke="#5c6570" strokeWidth="0.7">
        <path d="M28 48H1172 M28 672H1172 M210 48V672 M920 48V520" />
      </g>

      {/* Left revision / notes column */}
      <g fontFamily={MONO}>
        <text x="40" y="70" fill="#8b949e" fontSize="8" letterSpacing="1.4">
          REV
        </text>
        <text x="40" y="88" fill="#c5ccd4" fontSize="9" letterSpacing="0.8">
          A
        </text>
        <text x="40" y="108" fill="#8b949e" fontSize="8" letterSpacing="1.2">
          DATE
        </text>
        <text x="40" y="126" fill="#c5ccd4" fontSize="9" letterSpacing="0.6">
          11.26.26
        </text>
        <text
          x="52"
          y="360"
          fill="#6f7882"
          fontSize="9"
          letterSpacing="2.2"
          transform="rotate(-90 52 360)"
        >
          CONCEPTUAL PAVING SCOPE · NOT A SITE PLAN
        </text>
      </g>

      {/* Sheet header */}
      <g fontFamily={MONO}>
        <text x="230" y="42" fill="#9aa3ad" fontSize="9" letterSpacing="1.8">
          H&amp;H CONSTRUCTION — CIVIL FLATWORK STUDY
        </text>
        <text x="910" y="42" textAnchor="end" fill="#9aa3ad" fontSize="9" letterSpacing="1.4">
          SHEET C-101 · N.T.S.
        </text>
        <text x="230" y="68" fill="#ff8a90" fontSize="13" fontWeight="700" letterSpacing="1.8">
          FIG. 01 / CONCEPTUAL PAVING GEOMETRY
        </text>
        <text x="910" y="68" textAnchor="end" fill="#d0d6dc" fontSize="10" letterSpacing="1">
          ILLUMINATED SCOPE STUDY
        </text>
      </g>

      {/* Main plan — independently composed parking / paving / sidewalk / curb */}
      <g className="pev-layer pev-layer--lot" transform="translate(240 95)">
        {/* Reference existing apron (gray, non-accent) */}
        <path
          d="M0 310H520V360H0Z"
          fill="#1c2229"
          stroke="#6f7882"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <text x="12" y="340" fill="#8b949e" fontSize="9" fontFamily={MONO} letterSpacing="1">
          MATCH EXIST. GRADE (REF.)
        </text>

        {/* 8" heavy paving bay */}
        <g className="pev-layer pev-layer--heavy">
          <path
            d="M0 40H210V300H0Z"
            fill={`url(#aggregate-${uid})`}
            fillOpacity="0.55"
          />
          <path d="M0 40H210V300H0Z" fill={`url(#hatch-${uid})`} opacity="0.28" />
          <path
            className="pev-breath"
            d="M0 40H210V300H0Z"
            fill="none"
            stroke="#ff3d4c"
            strokeWidth="7"
            opacity="0.35"
            filter={glow}
          />
          <path
            className="pev-glow-line"
            d="M0 40H210V300H0Z"
            fill="none"
            stroke="#ff6068"
            strokeWidth="1.8"
            filter={soft}
          />
          <path
            d="M0 105H210 M0 170H210 M0 235H210 M70 40V300 M140 40V300"
            stroke="#e35a63"
            strokeWidth="0.9"
            fill="none"
            opacity="0.75"
          />
        </g>

        {/* 6" parking surface */}
        <g>
          <path
            d="M210 40H520V260H210Z"
            fill={`url(#aggregate-${uid})`}
            fillOpacity="0.4"
          />
          <path d="M210 40H520V260H210Z" fill={`url(#hatch-${uid})`} opacity="0.22" />
          <path
            className="pev-breath"
            d="M210 40H520V260H210Z"
            fill="none"
            stroke="#ff3d4c"
            strokeWidth="6"
            opacity="0.32"
            filter={glow}
            style={{ animationDelay: "-2.1s" }}
          />
          <path
            className="pev-glow-line"
            d="M210 40H520V260H210Z"
            fill="none"
            stroke="#ff7078"
            strokeWidth="1.7"
            filter={soft}
          />
          {/* Control joints */}
          <path
            className="pev-trace"
            d="M210 95H520 M210 150H520 M210 205H520 M313 40V260 M416 40V260"
            stroke="#ff9aa0"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
          {/* Corner ticks */}
          <path
            d="M210 40h14 M210 40v14 M520 40h-14 M520 40v14 M210 260h14 M210 260v-14 M520 260h-14 M520 260v-14"
            stroke="#ffe0e2"
            strokeWidth="1.4"
            fill="none"
          />
        </g>

        {/* Sidewalk ribbon */}
        <g className="pev-layer pev-layer--walk">
          <path
            d="M210 260H520V300H210Z"
            fill={`url(#sidewalk-hatch-${uid})`}
            fillOpacity="0.9"
          />
          <path
            className="pev-glow-line"
            d="M210 260H520V300H210Z"
            fill="#ff4449"
            fillOpacity="0.06"
            stroke="#d0d6dc"
            strokeWidth="1.2"
          />
        </g>

        {/* Curb & gutter line */}
        <g className="pev-layer pev-layer--curb">
          <path
            className="pev-breath"
            d="M0 300H520"
            stroke="#ff4a56"
            strokeWidth="5"
            opacity="0.35"
            filter={glow}
            style={{ animationDelay: "-3.5s" }}
          />
          <path
            className="pev-glow-line"
            d="M0 300H520"
            stroke="#ff8086"
            strokeWidth="2.2"
            fill="none"
          />
          <path d="M0 306H520" stroke="#9aa3ad" strokeWidth="1" fill="none" />
        </g>

        {/* Drive approach fillet — conceptual only */}
        <path
          d="M520 180C560 180 575 210 575 260V300H520"
          fill={`url(#aggregate-${uid})`}
          fillOpacity="0.35"
          stroke="#ff7078"
          strokeWidth="1.4"
        />

        {/* Dimensions */}
        <Dimension x1={210} y1={28} x2={520} y2={28} label={`PARKING · ${qty.lot6}`} offset={-18} />
        <Dimension x1={0} y1={28} x2={210} y2={28} label={`HEAVY PAVING · ${qty.paving8}`} offset={-18} />
        <Dimension x1={532} y1={40} x2={532} y2={260} label="TYP." offset={18} />
        <Dimension x1={210} y1={312} x2={520} y2={312} label={`SIDEWALK · ${qty.sidewalk}`} offset={16} />

        {/* Leaders / callouts */}
        <Leader
          x1={350}
          y1={120}
          x2={560}
          y2={88}
          x3={640}
          label={`6" CONC. PARKING (UPGRADE)`}
        />
        <Leader
          x1={105}
          y1={190}
          x2={-8}
          y2={148}
          x3={-48}
          label={`8" CONC. PAVING`}
        />
        <Leader
          x1={365}
          y1={280}
          x2={560}
          y2={330}
          x3={640}
          label={`CONC. SIDEWALK`}
        />
        <Leader
          x1={260}
          y1={300}
          x2={260}
          y2={350}
          x3={360}
          label={`CURB & GUTTER · ${qty.curb}`}
        />

        <g fontFamily={MONO}>
          <rect x={555} y={108} width={118} height={20} fill="#14181e" stroke="#6f7882" />
          <text
            x={614}
            y={122}
            textAnchor="middle"
            fill="#ffb0b4"
            fontSize="8"
            letterSpacing="1.1"
          >
            JOINT LAYOUT
          </text>
          <text x={0} y={390} fill="#9aa3ad" fontSize="8" letterSpacing="1.1">
            INDEPENDENTLY COMPOSED SPECIMEN — NOT FIRE-STATION SITE GEOMETRY
          </text>
        </g>
      </g>

      {/* Detail callout — curb / sidewalk section */}
      <g transform="translate(940 70)" fontFamily={MONO}>
        <rect
          x="0"
          y="0"
          width="220"
          height="230"
          fill="#10141a"
          stroke="#c5ccd4"
          strokeWidth="1"
        />
        <rect x="6" y="6" width="208" height="218" fill="none" stroke="#5c6570" strokeWidth="0.7" />
        <text x="14" y="28" fill="#ff8a90" fontSize="10" letterSpacing="1.4" fontWeight="700">
          DETAIL A
        </text>
        <text x="14" y="44" fill="#9aa3ad" fontSize="8" letterSpacing="1">
          CURB / SIDEWALK SECTION · ILLUS.
        </text>

        <g transform="translate(28 78)" className="pev-layer pev-layer--curb">
          <path d="M0 70H150V90H0Z" fill="#1c2229" stroke="#6f7882" strokeWidth="1" />
          <path
            d="M0 50H110V70H0Z"
            fill={`url(#sidewalk-hatch-${uid})`}
            stroke="#d0d6dc"
            strokeWidth="1"
          />
          <path
            className="pev-glow-line"
            d="M110 50H128V28H146V70H110Z"
            fill="#ff4449"
            fillOpacity="0.12"
            stroke="#ff6068"
            strokeWidth="1.6"
            filter={soft}
          />
          <path
            className="pev-breath"
            d="M110 50H128V28H146V70H110Z"
            fill="none"
            stroke="#ff3d4c"
            strokeWidth="5"
            opacity="0.35"
            filter={glow}
          />
          <path d="M0 50H110" stroke="#ff9aa0" strokeWidth="1" className="pev-trace" />
          <text x="8" y="64" fill="#c5ccd4" fontSize="8" letterSpacing="0.8">
            WALK
          </text>
          <text x="118" y="22" fill="#ffb0b4" fontSize="8" letterSpacing="0.8">
            CURB
          </text>
          <text x="8" y="108" fill="#8b949e" fontSize="8" letterSpacing="0.8">
            SUBGRADE (REF.)
          </text>
        </g>

        <text x="14" y="210" fill="#8b949e" fontSize="8" letterSpacing="0.9">
          SEE QTY SCHEDULE →
        </text>
      </g>

      {/* Material hatch key */}
      <g transform="translate(940 318)" fontFamily={MONO}>
        <rect x="0" y="0" width="220" height="118" fill="#10141a" stroke="#6f7882" strokeWidth="1" />
        <text x="12" y="22" fill="#c5ccd4" fontSize="9" letterSpacing="1.3">
          MATERIAL KEY
        </text>
        <rect x="12" y="36" width="28" height="14" fill={`url(#aggregate-${uid})`} stroke="#ff6068" />
        <text x="48" y="47" fill="#d0d6dc" fontSize="8" letterSpacing="0.7">
          CONCRETE (AGGREGATE)
        </text>
        <rect
          x="12"
          y="60"
          width="28"
          height="14"
          fill={`url(#sidewalk-hatch-${uid})`}
          stroke="#d0d6dc"
        />
        <text x="48" y="71" fill="#d0d6dc" fontSize="8" letterSpacing="0.7">
          SIDEWALK
        </text>
        <rect x="12" y="84" width="28" height="14" fill="#1c2229" stroke="#6f7882" strokeDasharray="3 2" />
        <text x="48" y="95" fill="#d0d6dc" fontSize="8" letterSpacing="0.7">
          EXIST. / MATCH GRADE
        </text>
      </g>

      {/* Title block */}
      <g transform="translate(210 540)" fontFamily={MONO}>
        <rect x="0" y="0" width="710" height="120" fill="#0e1218" stroke="#d7dde4" strokeWidth="1.1" />
        <path d="M160 0V120 M470 0V120 M0 36H710 M0 72H470" stroke="#5c6570" strokeWidth="0.75" />

        {/* Mark */}
        <g transform="translate(28 28)">
          <rect x="0" y="0" width="10" height="42" fill="#e8edf2" />
          <rect x="14" y="0" width="10" height="42" fill="#e13440" />
          <rect x="28" y="0" width="10" height="42" fill="#8b949e" />
          <text x="48" y="18" fill="#e8edf2" fontSize="11" fontWeight="700" letterSpacing="1.5">
            H&amp;H
          </text>
          <text x="48" y="34" fill="#9aa3ad" fontSize="8" letterSpacing="1.6">
            CONSTRUCTION
          </text>
        </g>

        <text x="172" y="24" fill="#8b949e" fontSize="8" letterSpacing="1.2">
          PROJECT
        </text>
        <text x="172" y="44" fill="#e8edf2" fontSize="12" fontWeight="700" letterSpacing="0.8">
          {projectTitle.toUpperCase()}
        </text>
        <text x="172" y="64" fill="#8b949e" fontSize="8" letterSpacing="1.2">
          LOCATION
        </text>
        <text x="172" y="84" fill="#d0d6dc" fontSize="11" letterSpacing="0.6">
          {location.toUpperCase()}
        </text>
        <text x="172" y="108" fill="#ff8a90" fontSize="10" letterSpacing="1">
          STATUS · {statusLabel.toUpperCase()}
        </text>

        <text x="482" y="24" fill="#8b949e" fontSize="8" letterSpacing="1.2">
          DRAWING TITLE
        </text>
        <text x="482" y="48" fill="#e8edf2" fontSize="11" fontWeight="700" letterSpacing="0.7">
          CONCEPTUAL PAVING
        </text>
        <text x="482" y="66" fill="#e8edf2" fontSize="11" fontWeight="700" letterSpacing="0.7">
          SCOPE STUDY
        </text>
        <text x="482" y="92" fill="#8b949e" fontSize="8" letterSpacing="1">
          TOTAL PLAN QTY
        </text>
        <text
          className="pev-spec-value"
          x="482"
          y="112"
          fill="#ff8a90"
          fontSize="16"
          fontWeight="700"
          letterSpacing="0.5"
        >
          {qty.total}
        </text>

        <text x="620" y="48" fill="#9aa3ad" fontSize="8" letterSpacing="1.1">
          SHEET
        </text>
        <text x="620" y="78" fill="#e8edf2" fontSize="28" fontWeight="700" letterSpacing="1">
          C-101
        </text>
        <text x="620" y="102" fill="#8b949e" fontSize="8" letterSpacing="1">
          OF 01
        </text>
      </g>

      {/* Disclaimer strip */}
      <g fontFamily={MONO}>
        <text x="40" y="694" fill="#ff8a90" fontSize="10" fontWeight="700" letterSpacing="1.6">
          NOT FOR CONSTRUCTION
        </text>
        <text x="260" y="694" fill="#8b949e" fontSize="9" letterSpacing="1.1">
          PLAN QUANTITIES · ILLUSTRATIVE ONLY · DO NOT SCALE
        </text>
        <text x="1160" y="694" textAnchor="end" fill="#8b949e" fontSize="9" letterSpacing="1.1">
          © H&amp;H CONSTRUCTION
        </text>
      </g>

      {/* Scan sweep */}
      <g clipPath={`url(#sheetclip-${uid})`} aria-hidden="true">
        <g className="pev-scan-y">
          <rect x="28" y="-80" width="1144" height="120" fill={`url(#scan-${uid})`} />
          <path d="M28 40H1172" stroke="#ff6a72" strokeWidth="1" opacity="0.28" />
        </g>
      </g>
    </svg>
  );
}

function MobileCadSheet({
  uid,
  qty,
  projectTitle,
  ariaLabel,
}: {
  uid: string;
  qty: QuantityLookup;
  projectTitle: string;
  ariaLabel: string;
}) {
  const glow = `url(#glow-${uid})`;
  const soft = `url(#softglow-${uid})`;

  return (
    <svg
      className="pev-svg block h-auto w-full"
      viewBox="0 0 390 860"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <filter id={`glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`softglow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={`paper-${uid}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M18 0H0V18" stroke="#2a3038" strokeWidth="0.55" fill="none" />
        </pattern>
        <pattern id={`aggregate-${uid}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="4" r="0.65" fill="#d56a70" opacity="0.55" />
          <circle cx="10" cy="10" r="0.5" fill="#e0898e" opacity="0.45" />
          <path d="M12 3l1.6 1-0.6 1.7z" stroke="#d8797f" strokeWidth="0.5" fill="none" />
        </pattern>
        <pattern
          id={`hatch-${uid}`}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0V8" stroke="#c24a52" strokeWidth="0.7" opacity="0.4" />
        </pattern>
        <pattern
          id={`sidewalk-hatch-${uid}`}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-35)"
        >
          <path d="M0 0V7" stroke="#8a9199" strokeWidth="0.5" opacity="0.35" />
        </pattern>
        <linearGradient id={`scan-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff3748" stopOpacity="0" />
          <stop offset="100%" stopColor="#ff6a72" stopOpacity="0.5" />
        </linearGradient>
        <clipPath id={`mclip-${uid}`}>
          <rect x="12" y="12" width="366" height="836" />
        </clipPath>
      </defs>

      <rect width="390" height="860" fill="#12151a" />
      <rect width="390" height="860" fill={`url(#paper-${uid})`} opacity="0.5" />
      <rect
        x="10"
        y="10"
        width="370"
        height="840"
        fill="none"
        stroke="#d7dde4"
        strokeWidth="1.1"
      />
      <rect
        x="16"
        y="16"
        width="358"
        height="828"
        fill="none"
        stroke="#5c6570"
        strokeWidth="0.7"
      />

      <g fontFamily={MONO}>
        <text x="28" y="40" fill="#9aa3ad" fontSize="8" letterSpacing="1.3">
          SHEET C-101 · N.T.S.
        </text>
        <text x="28" y="60" fill="#ff8a90" fontSize="11" fontWeight="700" letterSpacing="1.3">
          CONCEPTUAL PAVING GEOMETRY
        </text>
        <text x="28" y="78" fill="#c5ccd4" fontSize="9" letterSpacing="0.6">
          {projectTitle.toUpperCase()}
        </text>
      </g>

      {/* Plan specimen */}
      <g className="pev-layer pev-layer--lot" transform="translate(40 100)">
        <path
          d="M0 20H120V250H0Z"
          fill={`url(#aggregate-${uid})`}
          fillOpacity="0.5"
        />
        <path d="M0 20H120V250H0Z" fill={`url(#hatch-${uid})`} opacity="0.25" />
        <path
          className="pev-breath"
          d="M0 20H120V250H0Z"
          fill="none"
          stroke="#ff3d4c"
          strokeWidth="5"
          filter={glow}
          opacity="0.35"
        />
        <path
          className="pev-glow-line"
          d="M0 20H120V250H0Z"
          fill="none"
          stroke="#ff6068"
          strokeWidth="1.6"
          filter={soft}
        />

        <path
          d="M120 20H310V210H120Z"
          fill={`url(#aggregate-${uid})`}
          fillOpacity="0.38"
        />
        <path d="M120 20H310V210H120Z" fill={`url(#hatch-${uid})`} opacity="0.2" />
        <path
          className="pev-breath"
          d="M120 20H310V210H120Z"
          fill="none"
          stroke="#ff3d4c"
          strokeWidth="5"
          filter={glow}
          opacity="0.32"
          style={{ animationDelay: "-1.8s" }}
        />
        <path
          className="pev-glow-line"
          d="M120 20H310V210H120Z"
          fill="none"
          stroke="#ff7078"
          strokeWidth="1.5"
          filter={soft}
        />
        <path
          className="pev-trace"
          d="M120 70H310 M120 120H310 M120 165H310 M183 20V210 M246 20V210"
          stroke="#ff9aa0"
          strokeWidth="0.9"
          fill="none"
        />

        <path
          d="M120 210H310V250H120Z"
          fill={`url(#sidewalk-hatch-${uid})`}
          stroke="#d0d6dc"
          strokeWidth="1"
        />
        <path
          className="pev-glow-line"
          d="M0 250H310"
          stroke="#ff8086"
          strokeWidth="2"
          fill="none"
        />

        <text x="8" y="280" fill="#e8edf2" fontSize="14" fontWeight="700" fontFamily={MONO}>
          8 IN. · {qty.paving8}
        </text>
        <text x="8" y="300" fill="#9aa3ad" fontSize="8" letterSpacing="0.8" fontFamily={MONO}>
          HEAVY CONCRETE PAVING
        </text>
        <text x="8" y="328" fill="#e8edf2" fontSize="14" fontWeight="700" fontFamily={MONO}>
          6 IN. · {qty.lot6}
        </text>
        <text x="8" y="348" fill="#9aa3ad" fontSize="8" letterSpacing="0.8" fontFamily={MONO}>
          PARKING SURFACE (ASPHALT UPGRADE)
        </text>
        <text x="8" y="376" fill="#e8edf2" fontSize="14" fontWeight="700" fontFamily={MONO}>
          {qty.sidewalk} · {qty.curb}
        </text>
        <text x="8" y="396" fill="#9aa3ad" fontSize="8" letterSpacing="0.8" fontFamily={MONO}>
          SIDEWALK · CURB &amp; GUTTER
        </text>
      </g>

      {/* Detail */}
      <g transform="translate(40 520)" fontFamily={MONO}>
        <rect x="0" y="0" width="310" height="150" fill="#10141a" stroke="#c5ccd4" strokeWidth="1" />
        <text x="14" y="24" fill="#ff8a90" fontSize="10" letterSpacing="1.2" fontWeight="700">
          DETAIL A · CURB / WALK
        </text>
        <g transform="translate(40 50)" className="pev-layer pev-layer--curb">
          <path d="M0 55H230V75H0Z" fill="#1c2229" stroke="#6f7882" />
          <path
            d="M0 35H160V55H0Z"
            fill={`url(#sidewalk-hatch-${uid})`}
            stroke="#d0d6dc"
          />
          <path
            className="pev-glow-line"
            d="M160 35H182V14H204V55H160Z"
            fill="#ff4449"
            fillOpacity="0.12"
            stroke="#ff6068"
            strokeWidth="1.5"
            filter={soft}
          />
        </g>
        <text x="14" y="138" fill="#8b949e" fontSize="8" letterSpacing="0.8">
          ILLUSTRATIVE SECTION · NOT TO SCALE
        </text>
      </g>

      {/* Title strip */}
      <g transform="translate(28 700)" fontFamily={MONO}>
        <rect x="0" y="0" width="334" height="100" fill="#0e1218" stroke="#d7dde4" strokeWidth="1" />
        <text x="14" y="28" fill="#e8edf2" fontSize="12" fontWeight="700" letterSpacing="1">
          H&amp;H CONSTRUCTION
        </text>
        <text x="14" y="48" fill="#9aa3ad" fontSize="9" letterSpacing="0.8">
          TOTAL PLAN QTY · {qty.total}
        </text>
        <text x="14" y="72" fill="#ff8a90" fontSize="11" fontWeight="700" letterSpacing="1.3">
          NOT FOR CONSTRUCTION
        </text>
        <text x="14" y="90" fill="#8b949e" fontSize="8" letterSpacing="0.9">
          CONCEPTUAL SPECIMEN · DO NOT SCALE
        </text>
      </g>

      <g clipPath={`url(#mclip-${uid})`} aria-hidden="true">
        <g className="pev-scan-y">
          <rect x="12" y="-70" width="366" height="100" fill={`url(#scan-${uid})`} />
        </g>
      </g>
    </svg>
  );
}
