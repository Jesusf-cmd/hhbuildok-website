import { parkingLotHubHref } from "@/lib/parking-lot-service-page";
import { foundationsHubHref } from "@/lib/commercial-foundations-page";
import { chandlerCountyCourthouseSlug } from "@/lib/chandler-county-courthouse-data";

export { asphaltHubHref } from "@/lib/parking-lot-service-page";

export const asphaltAudience = {
  heading: "Who This Service Is For",
  paragraphs: [
    "This page is the commercial asphalt trade page — new paving, overlays and resurfacing, full-depth patching, milling and preparation, and heavy-duty industrial mats. It is written for property owners, general contractors, facility managers, and municipalities who already know the work is asphalt and need a contractor who will bid the section that actually matches the traffic.",
    "H&H Construction paves commercial and industrial asphalt across Oklahoma from our Norman headquarters, including Oklahoma City and the rest of the OKC metro. When the job is a full parking-lot package — curb, approaches, striping, and mixed asphalt/concrete sections — use the commercial parking lots page instead of stretching this trade page into civil site work it is not meant to replace.",
  ],
} as const;

export const asphaltBidPrep = {
  heading: "What to Send for a Paving Bid",
  intro:
    "Send what you have. An address and a short description of the pavement problem is enough to start; plans, photos, and operating constraints let us price more accurately.",
  items: [
    "Project address and property type (retail, warehouse, school, municipal, other)",
    "Intended use and traffic — cars only, delivery trucks, loaded semis, or mixed",
    "Approximate area or drawings, if you have them",
    "Photos of pavement condition, ponding, or failed areas",
    "Known drainage or access issues",
    "Desired schedule and whether the site has to stay open during work",
  ],
} as const;

export const asphaltOfferedScopes = [
  {
    title: "New commercial asphalt paving",
    body: "Ground-up mats for commercial pads, industrial yards, and site paving where the drawings call for hot-mix asphalt. Subgrade, base, and the asphalt section are treated as one structure — not a surface applied over whatever is already there.",
  },
  {
    title: "Overlays and resurfacing",
    body: "Mill-and-overlay or overlay on pavement whose base is still sound and whose distress is mostly in the wearing surface. We will tell you when an overlay is the honest answer and when it would only hide a failing base.",
  },
  {
    title: "Full-depth patching and pothole repair",
    body: "Isolated failures cut out and rebuilt through the section when the surrounding pavement is still structurally useful. Widespread alligatoring is not a patching job.",
  },
  {
    title: "Parking-lot rehabilitation",
    body: "Asphalt repair, overlay, or reconstruction on existing lots. When curb, approaches, striping, and mixed concrete sections travel with the paving, that package lives on the commercial parking lots page.",
  },
  {
    title: "Industrial and heavy-duty paving",
    body: "Truck courts, yards, and drive aisles designed for loaded traffic rather than passenger-car stall areas. Concentrated truck zones often need a thicker asphalt section or concrete — we do not pretend one mix works everywhere.",
  },
  {
    title: "Milling and preparation",
    body: "Cold milling to remove failed surface, restore profile, and prepare a bond for overlay or new paving. Field photos on this page include milling at an industrial yard, not a stock illustration.",
  },
] as const;

export const asphaltRelatedLinks = [
  {
    href: parkingLotHubHref,
    label: "Commercial parking lots — full lot packages",
  },
  {
    href: "/services/concrete-construction",
    label: "Commercial concrete — truck pads, curbs, and approaches",
  },
  {
    href: foundationsHubHref,
    label: "Commercial foundations and site concrete",
  },
  {
    href: `/projects/${chandlerCountyCourthouseSlug}`,
    label: "Chandler County Courthouse parking lot case study",
  },
  {
    href: "/services/asphalt-paving/oklahoma-city",
    label: "Asphalt paving in Oklahoma City",
  },
] as const;
