/**
 * Five cities had two indexable concrete URLs with the same title, description,
 * and H1. Survivors are the service-area URLs.
 *
 * Edmond stays on /service-area/edmond/concrete-construction because that URL
 * is indexed and Google’s selected canonical. The other four cities were in
 * the discovered backlog with no Search Console performance row and no
 * available external-link evidence for either URL, so they follow the indexed
 * Edmond family. Moore and Tulsa are not in this map.
 *
 * The service-area paths are not shorter than the services paths. Length was
 * not the reason for the choice.
 */
export const consolidatedConcreteCitySlugs = [
  "edmond",
  "midwest-city",
  "norman",
  "oklahoma-city",
  "yukon",
] as const;

export type ConsolidatedConcreteCitySlug =
  (typeof consolidatedConcreteCitySlugs)[number];

/** Content revision date for the consolidated survivor pages. Reconcile with the merge date if this ships later. */
export const concreteConsolidationLastmod = "2026-10-27";

export function isConsolidatedConcreteCity(
  citySlug: string,
): citySlug is ConsolidatedConcreteCitySlug {
  return (consolidatedConcreteCitySlugs as readonly string[]).includes(
    citySlug,
  );
}

export function concreteSurvivorPath(citySlug: ConsolidatedConcreteCitySlug) {
  return `/service-area/${citySlug}/concrete-construction`;
}

export function retiredConcreteCityPath(citySlug: ConsolidatedConcreteCitySlug) {
  return `/services/concrete-construction/${citySlug}`;
}

export type PermanentRedirect = {
  source: string;
  destination: string;
  permanent: true;
};

/**
 * Slash sources are listed first so they can sit ahead of trailing-slash
 * normalization. Destinations omit query strings; Next.js passes the request
 * query through when the destination has none.
 */
export function concreteConsolidationRedirects(): PermanentRedirect[] {
  return consolidatedConcreteCitySlugs.flatMap((citySlug) => {
    const destination = concreteSurvivorPath(citySlug);
    const retired = retiredConcreteCityPath(citySlug);
    return [
      {
        source: `${retired}/`,
        destination,
        permanent: true as const,
      },
      {
        source: retired,
        destination,
        permanent: true as const,
      },
    ];
  });
}
