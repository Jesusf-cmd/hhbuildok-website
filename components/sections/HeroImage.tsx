"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type HeroImageProps = {
  src: string;
  alt: string;
};

export function HeroImage({ src, alt }: HeroImageProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className={`object-cover ${prefersReducedMotion ? "" : "hero-ken-burns"}`}
        sizes="100vw"
      />
    </div>
  );
}
