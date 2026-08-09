// Fails closed: any deploy that does not explicitly declare itself production
// is treated as staging and kept out of search indexes.
export const isProductionSite =
  process.env.NEXT_PUBLIC_SITE_ENV === "production";
