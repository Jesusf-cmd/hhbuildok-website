import { services } from "@/lib/site-data";

export type ServiceSlug = (typeof services)[number]["slug"];

export type CaseStudyMetric = {
  /** Short label, e.g. "Slab area" or "Asphalt placed". */
  label: string;
  /** Include the unit, e.g. "42,000 sq ft" or "1,800 tons". */
  value: string;
};

export type CaseStudyImage = {
  src: string;
  /** Describe what is visible. This is the text image search reads. */
  alt: string;
  /** Optional caption for the project photo gallery. */
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  /** Card and breadcrumb label. */
  title: string;
  /** On-page headline. Keep it distinct from metaTitle. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  serviceSlug: ServiceSlug;
  city: string;
  /** e.g. "School district", "General contractor", "Industrial facility". */
  clientType: string;
  /** ISO date, e.g. "2025-09-01". */
  completedAt: string;
  /** One or two sentences a buyer can skim. */
  summary: string;
  metrics: CaseStudyMetric[];
  challenge: string;
  approach: string;
  outcome: string;
  images: CaseStudyImage[];
  /** Surface this project on the homepage and projects index. */
  featured?: boolean;
  /** Only include with written permission to publish the quote. */
  testimonial?: {
    quote: string;
    attribution: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chandler-county-courthouse-parking-lot",
    title: "Chandler County Courthouse Parking Lot",
    h1: "Sealcoating, Overlay, and Restriping at the Chandler County Courthouse",
    metaTitle:
      "Chandler County Courthouse Parking Lot Paving Case Study | Chandler, OK",
    metaDescription:
      "H&H Construction sealcoated and restriped the Chandler County Courthouse parking lot, then overlaid failing pavement, patched distressed areas, replaced 120 LF of curb, and restriped for ADA compliance in Chandler, Oklahoma.",
    serviceSlug: "asphalt-paving",
    city: "Chandler",
    clientType: "County government",
    completedAt: "2025-10-15",
    summary:
      "Two-phase parking lot rehabilitation for Chandler County — a sealcoat and restriping package followed by an asphalt overlay, full-depth patching, 120 linear feet of curb replacement, and fresh stall layout including accessible spaces.",
    featured: true,
    metrics: [
      { label: "Curb replaced", value: "120 LF" },
      { label: "Phases", value: "2" },
      { label: "Scope", value: "Seal, overlay, patch, stripe" },
    ],
    challenge:
      "The courthouse parking lot serves daily county staff and visitors on a site that could not close for an extended reconstruction. Existing pavement showed surface oxidation, isolated base failures, and curb sections that had settled and cracked at the tie-in to the drives. Striping had faded to the point where stall layout and accessible spaces were hard to read from a vehicle.",
    approach:
      "H&H sequenced the work in two phases. Phase one focused on sealcoating the sound pavement sections and restriping stalls, drive aisles, and accessible spaces to current layout standards. Phase two targeted the areas that needed structural attention: milling and overlay where the section was still stable, full-depth patching where distress was load-related, and replacement of 120 linear feet of curb before a final seal and stripe tied the lot together.",
    outcome:
      "The lot returned to service between phases with usable parking throughout. Finished surfaces drain cleanly, curb lines are restored at the drives, and the restriped layout includes clearly marked accessible stalls. The aerial documentation shows the contrast between treated and untreated sections — useful for county facilities staff planning maintenance on the remaining lot area.",
    images: [
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
    ],
  },
];

export const hasCaseStudies = caseStudies.length > 0;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((study) => study.featured);
}

export function getPrimaryFeaturedCaseStudy() {
  return getFeaturedCaseStudies()[0];
}
