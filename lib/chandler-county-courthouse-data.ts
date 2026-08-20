export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
};

/** SEO-friendly paths under public/images/projects/chandler-county-courthouse/ */
export const chandlerCountyCourthousePhotos: ProjectPhoto[] = [
  {
    src: "/images/projects/chandler-county-courthouse/sealcoating-parking-lot-striping-chandler-oklahoma.jpg",
    alt: "Aerial view of a freshly sealcoated courthouse parking lot with white stall lines and a blue handicap space",
    caption: "Phase 1 — sealcoating and parking lot striping",
  },
  {
    src: "/images/projects/chandler-county-courthouse/asphalt-overlay-patching-chandler-oklahoma.jpg",
    alt: "Aerial view of a dark sealcoated parking section beside a small green-roof county building",
    caption: "Phase 2 — asphalt overlay and patching around the courthouse annex",
  },
  {
    src: "/images/projects/chandler-county-courthouse/curb-replacement-striping-chandler-oklahoma.jpg",
    alt: "Aerial view of a courthouse parking lot showing new curb, directional arrows, and angled parking stalls",
    caption: "120 LF of curb replacement and drive-aisle striping",
  },
  {
    src: "/images/projects/chandler-county-courthouse/finished-parking-lot-aerial-chandler-oklahoma.jpg",
    alt: "Finished aerial view of the Chandler County Courthouse parking lot with traffic arrows and restriped stalls",
    caption: "Completed lot — overlay, patch, curb, and final striping",
  },
];

export const chandlerCountyCourthouseSlug =
  "chandler-county-courthouse-parking-lot" as const;

/** Service block, service page hero, and /services listing card. */
export const chandlerCountyCourthouseServiceImage = chandlerCountyCourthousePhotos[0];
