import type { Metadata } from "next";
import { isProductionSite } from "@/lib/site-env";

/** Explicit robots on indexable pages so metadata is not layout-only (and survives CDN edge cases). */
export const productionRobots: NonNullable<Metadata["robots"]> = isProductionSite
  ? { index: true, follow: true }
  : { index: false, follow: false };

export function withProductionRobots(metadata: Metadata): Metadata {
  return {
    ...metadata,
    robots: productionRobots,
  };
}
