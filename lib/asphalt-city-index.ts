/** Lightweight city list for nav/sitemap — keep heavy copy out of shared routes. */
export const asphaltCityIndex = [
  { citySlug: "norman", cityName: "Norman" },
  { citySlug: "oklahoma-city", cityName: "Oklahoma City" },
  { citySlug: "edmond", cityName: "Edmond" },
  { citySlug: "moore", cityName: "Moore" },
  { citySlug: "yukon", cityName: "Yukon" },
  { citySlug: "midwest-city", cityName: "Midwest City" },
  { citySlug: "tulsa", cityName: "Tulsa" },
] as const;

export type AsphaltCityIndexEntry = (typeof asphaltCityIndex)[number];

export function asphaltCityHref(citySlug: string) {
  return `/services/asphalt-paving/${citySlug}`;
}

export function getAsphaltCityParams() {
  return asphaltCityIndex.map((city) => ({
    city: city.citySlug,
  }));
}
