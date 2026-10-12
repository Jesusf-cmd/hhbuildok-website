"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

type RevealElement = "div" | "article" | "section" | "li";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealElement;
} & HTMLAttributes<HTMLElement>;

/**
 * Content is rendered visible. After hydration, elements that start below the
 * fold are hidden and revealed on scroll, so no-JS, failed-hydration, and
 * reduced-motion visitors always see the content.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      element.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      return;
    }

    element.dataset.reveal = "armed";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      element.dataset.reveal = "shown";
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{
        ...style,
        ...(delay === 0 ? undefined : { transitionDelay: `${delay}ms` }),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
