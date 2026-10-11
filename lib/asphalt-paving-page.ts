import { parkingLotHubHref } from "@/lib/parking-lot-service-page";
import { foundationsHubHref } from "@/lib/commercial-foundations-page";
import {
  chandlerCountyCourthousePhotos,
  chandlerCountyCourthouseSlug,
} from "@/lib/chandler-county-courthouse-data";
import { nap } from "@/lib/site-data";

export { asphaltHubHref } from "@/lib/parking-lot-service-page";

type PageLink = { href: string; label: string };

const concreteHref = "/services/concrete-construction";
const oklahomaCityAsphaltHref = "/services/asphalt-paving/oklahoma-city";

/**
 * Statewide /services/asphalt-paving content. The shared `services` entry in
 * site-data also feeds the services index, homepage, footer, and city pages,
 * so copy that only this page should show lives here.
 */
export const asphaltStatewidePage = {
  h1: "Commercial Asphalt Paving in Oklahoma",
  metaDescription:
    "Commercial asphalt paving, repair, overlays, milling, and parking lot rehabilitation for Oklahoma property owners, contractors, and industrial sites.",
  opening: [
    "H&H Construction provides new commercial asphalt paving, asphalt repair, overlays and resurfacing, milling, and parking lot rehabilitation for property owners, facility managers, general contractors, and industrial sites in Oklahoma. Projects are coordinated from Norman.",
    "We can bid a standalone paving scope or a coordinated lot package that includes curb, concrete, and striping.",
  ],
} as const;

export const asphaltServiceSections: {
  title: string;
  body: string;
  link?: PageLink;
}[] = [
  {
    title: "New commercial asphalt paving",
    body: "Asphalt for new commercial pads, drive lanes, and parking areas, installed to the project plans and specifications and coordinated with grading, utilities, and site concrete.",
  },
  {
    title: "Asphalt repair, patching, overlays, and resurfacing",
    body: "Patching of distressed areas, overlays, and resurfacing on existing pavement. The method depends on pavement condition, base and subgrade, drainage, traffic loading, project specifications, and an on-site evaluation. Photos help us prepare, but we do not diagnose pavement from a photo alone.",
  },
  {
    title: "Industrial and heavy-duty asphalt paving",
    body: "Truck courts, yards, dock approaches, and drive lanes that carry loaded trucks and equipment. Concentrated heavy loads affect the pavement section and base, and can make concrete a better fit for dock aprons, dumpster pads, or tight turning areas. Sections follow the project specifications or the owner's engineer.",
    link: {
      href: concreteHref,
      label: "Commercial concrete for truck pads, curbs, and approaches",
    },
  },
  {
    title: "Asphalt milling and preparation",
    body: "Cold milling removes deteriorated surface, adjusts elevations at curbs, gutters, and inlets, and prepares the pavement for an overlay or new paving. Not every overlay needs milling; that depends on curb reveal, existing elevations, drainage, and surface condition.",
  },
  {
    title: "Parking lot rehabilitation",
    body: "Repair, overlay, sealcoating, and restriping on existing commercial lots. When the project also includes curb, concrete sections, or full lot reconstruction, our parking lot service covers the coordinated package.",
    link: {
      href: parkingLotHubHref,
      label: "Commercial parking lot construction and rehabilitation",
    },
  },
];

export const asphaltMethodDecision = {
  heading: "Repair, Overlay, or Rebuild: How the Method Is Chosen",
  intro:
    "Most bids on existing pavement come down to one decision: surface work, localized repair, an overlay, or reconstruction. We recommend a method after evaluating the site. These are the factors that decide it.",
  factors: [
    {
      title: "Surface condition",
      body: "Distress limited to the wearing surface, such as oxidation, minor cracking, or loss of texture, may suit sealcoating, an overlay, or resurfacing.",
    },
    {
      title: "Base and subgrade",
      body: "Widespread alligator cracking, rutting, or pavement that moves under load can point to base or subgrade problems that an overlay alone may not address. Isolated failures over a sound base may be patch candidates.",
    },
    {
      title: "Drainage",
      body: "Areas that hold water are checked for grade and drainage problems, because water on or under the pavement affects any method chosen.",
    },
    {
      title: "Traffic loading",
      body: "Truck lanes, dock approaches, and dumpster pads carry different loads than car stalls and may call for a different section or concrete.",
    },
    {
      title: "Specifications and operations",
      body: "Project specifications, budget, schedule, and which areas must stay open also shape the recommendation. The proposal states the method and the areas it covers.",
    },
  ],
} as const;

export const asphaltProcess = [
  {
    title: "Evaluation and scope",
    body: "We review the site, drainage, traffic, and any plans or specifications, then propose a method and the areas it covers.",
  },
  {
    title: "Preparation",
    body: "Milling, removal, or base repair where the scope calls for it.",
  },
  {
    title: "Paving and repair",
    body: "Patching, overlay, or new paving installed to the project plans and specifications.",
  },
  {
    title: "Striping and finishing",
    body: "Restriping and layout as shown on the project plans or agreed in the scope.",
  },
  {
    title: "Phasing and schedule",
    body: "On occupied properties, the work sequence and which entrances, lanes, and parking areas stay open are agreed in the scope. Schedule depends on area, method, site conditions, operations, and weather.",
  },
] as const;

export const asphaltAudience = {
  heading: "Who We Work With",
  items: [
    "Property owners and managers of retail, office, and mixed-use sites",
    "General contractors and developers on new commercial and industrial sites",
    "Industrial, warehouse, and distribution facilities",
    "Public and institutional owners, bid to their specifications",
  ],
} as const;

export const asphaltBidPrep = {
  heading: "What to Send for a Paving Bid",
  intro:
    "An address and a short description are enough to start. Complete drawings are not required; send what you have.",
  items: [
    "Site address and property type",
    "Approximate area to be paved or repaired",
    "New paving or work on existing pavement",
    "Traffic type: cars, delivery trucks, loaded semis, or equipment",
    "Known drainage or access issues, and whether the site stays open during work",
    "Desired schedule",
    "Photos, plans, or specifications, if available",
  ],
} as const;

export const asphaltProjectProof = {
  heading: "Parking Lot Rehabilitation in Chandler, Oklahoma",
  label: "Completed project",
  scopes: [
    "Sealcoating",
    "Asphalt overlay",
    "Patching of distressed pavement",
    "Curb replacement",
    "Restriping",
  ],
  relevance:
    "This project combined surface work, pavement repair, curb, and striping in one parking lot scope, the kind of coordinated package described above.",
  image: {
    src: chandlerCountyCourthousePhotos[0].src,
    alt: "Overhead drone view of a freshly sealcoated parking lot with new white stall lines and directional arrows beside a green-roofed building",
    caption: "Parking lot in Chandler, Oklahoma, after sealcoating and restriping",
  },
  href: `/projects/${chandlerCountyCourthouseSlug}`,
  linkLabel: "Read the Chandler parking lot case study",
} as const;

export const asphaltRelatedLinks: PageLink[] = [
  {
    href: parkingLotHubHref,
    label: "Commercial parking lot construction and rehabilitation",
  },
  {
    href: concreteHref,
    label: "Commercial concrete for truck pads, curbs, and approaches",
  },
  {
    href: foundationsHubHref,
    label: "Commercial foundations and site concrete",
  },
  {
    href: oklahomaCityAsphaltHref,
    label: "Commercial asphalt paving in Oklahoma City",
  },
];

export const asphaltFaqs = [
  {
    question: "What commercial asphalt services does H&H Construction offer?",
    answer:
      "New commercial asphalt paving, asphalt repair and patching, overlays and resurfacing, milling, industrial and heavy-duty paving, and parking lot rehabilitation. Each can be bid as a standalone scope or as part of a coordinated lot package.",
  },
  {
    question: "Can you handle heavy-duty industrial paving?",
    answer:
      "Yes. We pave truck courts, yards, dock approaches, and drive lanes that carry loaded trucks and equipment. The pavement section follows the project specifications, and some high-load zones may be better suited to concrete.",
  },
  {
    question: "Do I need an overlay or a full repair?",
    answer:
      "It depends on pavement condition, base and subgrade, drainage, traffic loading, and any project specifications. We recommend a method after evaluating the site; photos help us prepare, but we do not diagnose pavement from a photo alone.",
  },
  {
    question: "Can my lot stay open during the work?",
    answer:
      "On occupied properties, the work sequence and which entrances, lanes, and parking areas stay open are agreed in the scope before work starts. Schedule depends on area, method, site conditions, operations, and weather.",
  },
  {
    question: "Can you coordinate paving with curbs and striping?",
    answer:
      "Yes. When a project includes curb, concrete sections, and striping along with paving, we can bid it as a coordinated parking lot package through our commercial parking lot service.",
  },
  {
    question: "How do I request a paving bid?",
    answer: `Call ${nap.phone} or submit a bid request through our contact form. An address and a short description are enough to start; approximate area, photos, plans, or specifications help us price more accurately. Complete drawings are not required.`,
  },
] as const;
