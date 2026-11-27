import { tuttleFireStationVisualization } from "@/lib/project-engineering-visualization";

export type TuttleProjectPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export const tuttleFireStationSlug = "tuttle-fire-station-2" as const;

/**
 * Authentic Tuttle Fire Station No. 2 construction photos.
 * Add JPGs under public/images/projects/tuttle-fire-station-2/ and list them here.
 * Do not substitute stock imagery or the engineering visualization for project photos.
 */
export const tuttleFireStationPhotos: TuttleProjectPhoto[] = [];

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
  completedAt: "2026-11-01",
  statusLabel: "Nearing completion",
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
    "A new public-safety facility needs parking and site paving that can take emergency-vehicle loads, stay open for staged construction traffic, and meet municipal expectations for finish and drainage — without treating the lot as an afterthought to the building package.",
  approach:
    "H&H scoped the civil flatwork as a coordinated concrete package: 6-inch concrete for the parking lot (replacing the asphalt originally specified), 8-inch concrete paving where heavier sections were required, sidewalk, and curb and gutter. Quantities shown on this page are plan quantities from the project documents.",
  outcome:
    "The project is nearing completion. The parking lot material upgrade to 6-inch concrete gives the station a durable paved apron and stall area matched to public-safety use. Final as-built verification will follow closeout; published figures remain plan quantities until then.",
  images: tuttleFireStationPhotos,
  visualization: tuttleFireStationVisualization,
  relatedServices: [
    {
      // Literal keeps this module free of parking-lot circular imports.
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
} as const;
