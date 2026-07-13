"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  durationMs = 1800,
  className = "",
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.4 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setDisplayValue(Math.round(easeOutCubic(progress) * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [durationMs, isInView, prefersReducedMotion, value]);

  return (
    <span
      ref={ref}
      className={`font-display text-4xl font-bold tabular-nums text-accent sm:text-5xl ${className}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
