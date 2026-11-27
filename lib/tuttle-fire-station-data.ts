import { tuttleFireStationVisualization } from "@/lib/project-engineering-visualization";

export type TuttleProjectPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export const tuttleFireStationSlug = "tuttle-fire-station-2" as const;

/** Substantive content revision date for sitemap lastmod. */
export const tuttleFireStationContentUpdatedAt = "2026-11-26" as const;

/**
 * Authentic Tuttle Fire Station No. 2 construction photos (optimized, EXIF stripped).
 * Captions stay clearly in-progress — do not invent completion claims.
 */
export const tuttleFireStationPhotos: TuttleProjectPhoto[] = [
  {
    src: "/images/projects/tuttle-fire-station-2/tuttle-fire-station-concrete-parking-lot.jpg",
    alt: "Newly poured concrete parking lot in front of Tuttle Fire Station No. 2.",
    caption: "In progress — newly poured concrete parking lot",
  },
  {
    src: "/images/projects/tuttle-fire-station-2/tuttle-fire-station-concrete-paving-and-curb.jpg",
    alt: "Concrete parking lot with visible joints and curb edge at a fire station in Tuttle.",
    caption: "In progress — concrete paving with joints and curb edge",
  },
  {
    src: "/images/projects/tuttle-fire-station-2/tuttle-fire-station-drive-approach.jpg",
    alt: "New concrete drive approach beside the existing roadway at Tuttle Fire Station.",
    caption: "In progress — concrete drive approach at the roadway",
  },
];

export const tuttleFireStationCaseStudy = {
  slug: tuttleFireStationSlug,
  title: "Tuttle Fire Station No. 2",
  h1: "Concrete Parking Lot and Site Paving at Tuttle Fire Station No. 2",
  metaTitle:
    "Tuttle Fire Station No. 2 Concrete Parking Lot Case Study | Tuttle, OK",
  metaDescription:
    "H&H Construction is delivering commercial concrete parking lot and site paving for Tuttle Fire Station No. 2 in Tuttle, Oklahoma — including an owner-confirmed upgrade from asphalt to 6-inch concrete paving.",
  serviceSlug: "concrete-construction" as const,
  city: "Tuttle",
  clientType: "Municipal / public safety",
  statusLabel: "Nearing completion",
  contentUpdatedAt: tuttleFireStationContentUpdatedAt,
  /** Split primary/additional galleries around the engineering visualization. */
  splitPhotoLayout: true,
  outcomeHeading: "Current Progress",
  summary:
    "Commercial concrete parking lot and site paving for Tuttle Fire Station No. 2 in Tuttle, Oklahoma. The owner upgraded the originally specified asphalt parking lot to 6-inch concrete paving. Plan quantities total 8,001 SF of concrete paving and sidewalk plus 132 LF of curb and gutter.",
  featured: true,
  metrics: [
    { label: "6\" concrete parking lot", value: "3,753 SF" },
    { label: "8\" concrete paving", value: "3,780 SF" },
    { label: "Sidewalk", value: "468 SF" },
    { label: "Curb & gutter", value: "132 LF" },
  ],
  challenge:
    "A municipal fire-station site needed parking lot and site paving delivered as a coordinated concrete package — parking section, heavier paving where specified, sidewalk, and curb and gutter — while work stayed sequenced with the broader station project.",
  approach:
    "H&H scoped the civil flatwork as a coordinated concrete package: 6-inch concrete for the parking lot (replacing the asphalt originally specified), 8-inch concrete paving where heavier sections were required, sidewalk, and curb and gutter. Quantities shown on this page are plan quantities from the project documents.",
  outcome:
    "The project is nearing completion. The parking lot was upgraded from the originally specified asphalt to 6-inch concrete paving. Published figures remain plan quantities until as-built verification at closeout.",
  images: tuttleFireStationPhotos,
  visualization: tuttleFireStationVisualization,
  relatedServices: [
    {
      href: "/services/commercial-parking-lots",
      label: "Commercial parking lot construction and rehabilitation",
      description:
        "Planning a concrete or asphalt parking lot with curb, sidewalk, and striping as one package? Review our commercial parking lot services.",
    },
    {
      href: "/service-area/oklahoma-city/concrete-construction",
      label: "Commercial concrete in Oklahoma City",
      description:
        "Need foundations, slabs, or site concrete in the Oklahoma City metro? See how we scope commercial concrete work.",
    },
  ],
};

export const tuttleFireStationProjectEvidence = {
  heading: "Tuttle Fire Station No. 2",
  href: `/projects/${tuttleFireStationSlug}`,
  location: "Tuttle, Oklahoma",
  statusLabel: "Nearing completion",
  summary:
    "Owner-confirmed upgrade from asphalt to 6-inch concrete parking lot paving, plus 8-inch concrete paving, sidewalk, and curb and gutter for Tuttle Fire Station No. 2. Plan quantities: 8,001 SF of concrete paving and sidewalk and 132 LF of curb and gutter.",
  photos: tuttleFireStationPhotos,
};
