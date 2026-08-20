export type GalleryImage = {
  src: string;
  alt: string;
  /** Optional caption shown below the image on the service page. */
  caption: string;
};

/**
 * H&H asphalt project photography.
 *
 * Filenames use descriptive, hyphenated keywords plus "oklahoma" for local SEO.
 * Alt text describes what is visible — not keyword lists.
 *
 * Drop the matching JPG into public/images/asphalt/ with the same basename.
 */
export const asphaltGalleryImages: GalleryImage[] = [
  {
    src: "/images/asphalt/asphalt-paver-commercial-parking-lot-construction-oklahoma.jpg",
    alt: "Crew operating an asphalt paver and dump truck laying hot mix across a shipping terminal lot",
    caption: "Hot-mix paving at a commercial shipping terminal",
  },
  {
    src: "/images/asphalt/commercial-asphalt-paving-industrial-loading-dock-oklahoma.jpg",
    alt: "Fresh asphalt lane paved at an industrial warehouse with semi-trailers at loading docks",
    caption: "Industrial loading-dock approach paving",
  },
  {
    src: "/images/asphalt/asphalt-milling-commercial-parking-lot-oklahoma.jpg",
    alt: "Cold planer milling the top course of asphalt at a distribution center parking lot",
    caption: "Asphalt milling before resurfacing",
  },
  {
    src: "/images/asphalt/commercial-asphalt-parking-lot-resurfacing-oklahoma.jpg",
    alt: "Newly paved asphalt section cordoned with traffic cones at a commercial truck terminal",
    caption: "Parking lot resurfacing at a truck terminal",
  },
  {
    src: "/images/asphalt/commercial-asphalt-patching-parking-lot-repair-oklahoma.jpg",
    alt: "Workers placing a rectangular asphalt patch across a truck depot parking lot",
    caption: "Full-depth asphalt patching in a drive lane",
  },
];

/** Primary hero image for the asphalt paving service page and homepage service block. */
export const asphaltServiceHeroImage = asphaltGalleryImages[0];

/** Featured project card images keyed by project id in site-data. */
export const asphaltFeaturedProjectImages = {
  "industrial-paving": asphaltGalleryImages[1],
  "school-parking": asphaltGalleryImages[3],
} as const;
