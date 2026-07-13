"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealElement = "div" | "article" | "section" | "li";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealElement;
} & HTMLAttributes<HTMLElement>;

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Tag
      ref={ref as never}
      data-visible={isInView ? "true" : "false"}
      className={`reveal ${className}`}
      style={{
        ...style,
        ...(prefersReducedMotion || delay === 0
          ? undefined
          : { transitionDelay: `${delay}ms` }),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
