import {
  concreteConsolidationRedirects,
  type PermanentRedirect,
} from "./concrete-city-consolidation";

export const asphaltCitySlugs = [
  "norman",
  "oklahoma-city",
  "edmond",
  "moore",
  "yukon",
  "midwest-city",
  "tulsa",
] as const;

/** Existing asphalt consolidation. Sources and destinations are unchanged. */
export function asphaltCityRedirects(): PermanentRedirect[] {
  return asphaltCitySlugs.map((citySlug) => ({
    source: `/service-area/${citySlug}/asphalt-paving`,
    destination: `/services/asphalt-paving/${citySlug}`,
    permanent: true,
  }));
}

/**
 * Same path Next.js inserts when skipTrailingSlashRedirect is left unset.
 * It must be last so a retired concrete URL with a trailing slash can match
 * a direct consolidation rule first.
 */
export function trailingSlashNormalizationRedirect(): PermanentRedirect {
  return {
    source: "/:path+/",
    destination: "/:path+",
    permanent: true,
  };
}

export function siteRedirects(): PermanentRedirect[] {
  return [
    ...concreteConsolidationRedirects(),
    ...asphaltCityRedirects(),
    trailingSlashNormalizationRedirect(),
  ];
}
