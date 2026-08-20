import {
  chandlerCountyCourthousePhotos,
  chandlerCountyCourthouseServiceImage,
} from "@/lib/chandler-county-courthouse-data";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

/** Real H&H asphalt project photography — Chandler County Courthouse case study. */
export const asphaltGalleryImages: GalleryImage[] = chandlerCountyCourthousePhotos;

export const asphaltServiceHeroImage = chandlerCountyCourthouseServiceImage;
