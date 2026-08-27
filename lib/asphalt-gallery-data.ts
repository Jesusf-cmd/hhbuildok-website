import {
  chandlerCountyCourthousePhotos,
  chandlerCountyCourthouseServiceImage,
} from "@/lib/chandler-county-courthouse-data";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

/** Additional commercial/industrial asphalt job photos (SEO filenames). */
export const commercialAsphaltProjectPhotos: GalleryImage[] = [
  {
    src: "/images/asphalt/commercial-asphalt-parking-lot-aerial-striping-oklahoma.jpg",
    alt: "Aerial view of a freshly paved and restriped commercial parking lot with directional arrows and accessible spaces",
    caption: "Aerial view of a completed commercial parking lot",
  },
  {
    src: "/images/asphalt/asphalt-paver-dump-truck-commercial-lot-oklahoma.jpg",
    alt: "Crew operating an asphalt paver and dump truck laying hot mix across a commercial truck terminal lot",
    caption: "Hot-mix paving with paver and dump truck",
  },
  {
    src: "/images/asphalt/commercial-asphalt-paving-warehouse-loading-dock-oklahoma.jpg",
    alt: "Fresh asphalt lane paved beside warehouse loading docks with semi-trailers",
    caption: "Industrial loading-dock approach paving",
  },
  {
    src: "/images/asphalt/commercial-asphalt-milling-industrial-yard-oklahoma.jpg",
    alt: "Cold planer milling asphalt at an industrial yard with FedEx trailers nearby",
    caption: "Asphalt milling at an industrial yard",
  },
  {
    src: "/images/asphalt/commercial-asphalt-parking-lot-resurfacing-oklahoma.jpg",
    alt: "Newly resurfaced asphalt section cordoned with traffic cones at a commercial lot",
    caption: "Commercial parking lot resurfacing",
  },
  {
    src: "/images/asphalt/commercial-asphalt-patching-truck-terminal-oklahoma.jpg",
    alt: "Workers placing a rectangular asphalt patch across a truck terminal parking lot",
    caption: "Full-depth asphalt patching in a drive lane",
  },
];

/**
 * Asphalt service gallery: commercial field photos first, then Chandler County
 * Courthouse case study images.
 */
export const asphaltGalleryImages: GalleryImage[] = [
  ...commercialAsphaltProjectPhotos,
  ...chandlerCountyCourthousePhotos,
];

/** Homepage asphalt service block + /services/asphalt-paving hero. */
export const asphaltServiceHeroImage = commercialAsphaltProjectPhotos[0];

/** Kept for callers that specifically want the courthouse service still. */
export const asphaltCourthouseHeroImage = chandlerCountyCourthouseServiceImage;
