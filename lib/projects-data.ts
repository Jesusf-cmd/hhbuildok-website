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
  /** Only include with written permission to publish the quote. */
  testimonial?: {
    quote: string;
    attribution: string;
  };
};

/**
 * Real projects only.
 *
 * This stays empty until H&H supplies actual project details, which is what
 * keeps the site from publishing an invented case study. Adding an entry builds
 * its page, lists it on /projects, and adds it to the sitemap automatically —
 * and once at least one entry exists, /projects stops being noindexed.
 *
 * Template for a new entry:
 *
 * {
 *   slug: "moore-school-district-parking-lot",
 *   title: "Moore School District Parking Lot",
 *   h1: "Rebuilding a 400-Stall School Parking Lot Between Semesters",
 *   metaTitle: "School Parking Lot Paving Case Study in Moore, OK",
 *   metaDescription:
 *     "How H&H Construction rebuilt a 400-stall school parking lot in Moore, Oklahoma inside a six-week summer window.",
 *   serviceSlug: "asphalt-paving",
 *   city: "Moore",
 *   clientType: "School district",
 *   completedAt: "2025-07-15",
 *   summary: "Two sentences a facilities director can skim and understand.",
 *   metrics: [
 *     { label: "Asphalt placed", value: "1,800 tons" },
 *     { label: "Stalls restriped", value: "400" },
 *     { label: "Duration", value: "6 weeks" },
 *   ],
 *   challenge: "What made the job hard — access, schedule, spec, or weather.",
 *   approach: "What H&H actually did about it, specifically.",
 *   outcome: "The measurable result, including whether it beat the deadline.",
 *   images: [
 *     { src: "/images/projects/moore-lot-01.jpg", alt: "Crew placing asphalt across a school parking lot" },
 *   ],
 * }
 */
export const caseStudies: CaseStudy[] = [];

export const hasCaseStudies = caseStudies.length > 0;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
