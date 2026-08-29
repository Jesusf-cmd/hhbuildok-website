import { foundationsHubHref } from "@/lib/commercial-foundations-page";
import { parkingLotHubHref } from "@/lib/parking-lot-service-page";
import { cityServiceHref, getCityServicesForService } from "@/lib/city-service-data";
import { priorityCities } from "@/lib/site-data";

export const metalBuildingsHubHref = "/services/commercial-metal-buildings";

export const metalBuildingsMeta = {
  title: "Commercial Metal Building Construction in Oklahoma",
  description:
    "H&H Construction erects pre-engineered metal buildings and commercial metal roofing across Oklahoma — red iron framing, anchor bolt coordination, wall and roof systems, and GC-scheduled erection from Norman.",
  h1: "Commercial Metal Building Construction in Oklahoma",
  heroDescription:
    "Pre-engineered metal building erection, red iron primary framing, and commercial metal roofing for warehouses, industrial facilities, and municipal structures — coordinated with foundation and paving scopes from our Norman headquarters across Oklahoma.",
} as const;

export const metalBuildingsIntro = {
  heading: "Metal Building Erection That Starts Before the Crane Arrives",
  paragraphs: [
    "A pre-engineered metal building closes in fast — but only when the foundation, anchor bolts, and erection sequence were right before the crane mobilized. If bolt projection is off, the frame does not plumb, or steel arrives out of sequence, erection days turn into field engineering and the interior trades never get a clean start. H&H Construction self-performs commercial metal building erection and metal roofing across Oklahoma, from primary red iron frames and secondary members through wall and roof sheeting, with the drawing review and anchor bolt coordination that keeps PEMB projects on the GC's schedule.",
    "We work as a subcontractor to general contractors and developers — erection from manufacturer-supplied packages, coordinated with the concrete and paving trades on the same pad site. That means reviewing drawings against foundation plans before steel releases, verifying anchor bolts during the pour, and sequencing erection so the building dries in on schedule.",
  ],
} as const;

export const metalBuildingsDivision13 = {
  heading: "Division 13 & Pre-Engineered Metal Building Scope",
  paragraphs: [
    "If you are bidding from CSI MasterFormat, pre-engineered metal buildings typically fall under Division 13 — Special Construction: metal building systems, structural framing, and related erection scope. H&H Construction regularly executes that package for commercial developers and GCs who need an erector that understands manufacturer tolerances, bracing sequences, and weathertight details at panel endlaps — not just a crew with a crane and a torque wrench.",
  ],
} as const;

export const metalBuildingsRedIron = {
  heading: "Red Iron & Pre-Engineered Metal Building Framing",
  paragraphs: [
    "Red iron is the industry term for the primary structural steel frame in a pre-engineered metal building — welded I-beam columns and rafters coated with red oxide primer before erection. It is not a separate building type from PEMB; it is the load-bearing skeleton the manufacturer engineers for your wind load, clear span, and collateral loads. H&H erects that frame, installs purlins and girts, and closes the building with the wall and roof systems the drawings specify — standing seam or through-fastened panels, trim, and flashing at every opening.",
  ],
} as const;

export const metalBuildingsServices = [
  {
    title: "Structural Erection & Framing",
    items: [
      "Primary red iron columns and rigid frames",
      "Secondary purlins, girts, and bracing",
      "Crane-set erection per manufacturer sequence",
      "Plumb, align, and bolt-up to spec tolerance",
      "Mezzanine and platform framing where specified",
    ],
  },
  {
    title: "Wall & Roof Systems",
    items: [
      "Wall panel installation and endlap detail",
      "Standing seam and through-fastened roofing",
      "Insulation, vapor retarders, and condensation control",
      "Ridge, eave, and corner trim",
      "Roof penetration flashings and curbs",
    ],
  },
  {
    title: "Anchor Bolts & Foundation Coordination",
    items: [
      "Manufacturer drawing review against foundation plans",
      "Anchor bolt template setting and verification",
      "Pre-erection survey of bolt projection and pattern",
      "Coordination with Division 03 concrete scope",
      "Field fixes scoped before fabrication release",
    ],
  },
  {
    title: "Accessories & Closeout",
    items: [
      "Commercial roll-up and walk doors",
      "Windows, louvers, and framed openings",
      "Downspouts and gutter systems",
      "Metal roofing repair and replacement",
      "Weathertight closeout before interior trades",
    ],
  },
] as const;

export const metalBuildingsIndustries = [
  "Warehouses and distribution centers",
  "Industrial and manufacturing facilities",
  "Municipal and public agency buildings",
  "Churches and institutional structures",
  "Retail and commercial pad sites",
  "Agricultural and equipment storage (commercial scale)",
] as const;

export const metalBuildingsOklahomaWind = {
  heading: "Engineered for Oklahoma Wind & Exposure",
  paragraphs: [
    "Oklahoma wind loads and exposure categories govern PEMB design more than almost any other variable on a commercial pad site. Risk category, collateral loads for rooftop units and sprinkler mains, and the bracing plan that keeps the frame stable during erection all have to match the actual site — not a catalog building ordered before geotechnical and foundation work was settled. We review design loads against local conditions and flag conflicts between manufacturer drawings and foundation plans before steel is fabricated, because correcting bolt layout or frame line after the pour is far more expensive than catching it on paper.",
  ],
} as const;

export const metalBuildingsProcess = {
  heading: "How We Execute Commercial Metal Building Work",
  paragraphs: [
    "Our process starts with drawing review — manufacturer erection drawings checked against foundation plans for anchor bolt pattern, projection, and elevation before fabrication releases. Anchor bolts are set and verified during the concrete scope, then we mobilize for frame erection in the sequence the manufacturer requires for stability. Wall and roof sheeting follow with specified trim and flashing at every penetration, then doors, accessories, and closeout so interior trades start on a weathertight shell.",
  ],
} as const;

export const metalBuildingsWhyHh = {
  heading: "Why One Contractor for Concrete, Metal Buildings, and Paving",
  paragraphs: [
    "Metal buildings fail in the interfaces GCs remember — anchor bolts cast an inch off pattern, a frame erected before the slab cured, or a roof endlap that leaks because the erector and concrete contractor never shared the same elevation benchmark. H&H self-performs commercial concrete, metal building erection, and asphalt paving from Norman, so foundation, anchor bolt, and erection scopes can sit under one schedule owner instead of three subcontractors pointing at each other at the crane pad.",
    "When we hold both the foundation and the erection scope, manufacturer and structural drawings get reconciled before the pour. The same team can scope truck court asphalt and dock approach concrete — one mobilization from footing to weathertight shell.",
  ],
} as const;

export const metalBuildingsRelatedLinks = {
  foundations: foundationsHubHref,
  parkingLots: parkingLotHubHref,
  metalServiceHub: "/services/metal-buildings-roofing",
} as const;

export const metalBuildingsCityLinks = getCityServicesForService(
  "metal-buildings-roofing",
).flatMap((entry) => {
  const city = priorityCities.find((item) => item.slug === entry.citySlug);
  if (!city) return [];
  return [
    {
      slug: entry.citySlug,
      name: city.name,
      href: cityServiceHref(entry.citySlug, "metal-buildings-roofing"),
    },
  ];
});

export const metalBuildingsFaqs = [
  {
    question: "Do you erect pre-engineered metal buildings from manufacturer packages?",
    answer:
      "Yes. We erect pre-engineered metal buildings from manufacturer packages — frames, secondary members, panels, trim, and accessories — from the engineered erection drawings for your project.",
  },
  {
    question: "Do you coordinate anchor bolts and foundations with metal building erection?",
    answer:
      "Yes. Anchor bolt layout is the highest-risk interface on a PEMB job. We review manufacturer foundation plans, set templates during the pour when we hold concrete scope, and verify pattern and projection before erection mobilizes.",
  },
  {
    question: "What is red iron, and do you erect it?",
    answer:
      "Red iron refers to the primary welded steel frame — columns and rafters — in a pre-engineered metal building, named for the red oxide primer applied at fabrication. We erect red iron frames, install secondary members, and close the building with the wall and roof systems specified on your drawings. It is standard PEMB scope, not a separate product line.",
  },
  {
    question: "Can you bid Division 13 metal building erection for our commercial project?",
    answer:
      "Yes. We regularly work from Division 13 specs covering pre-engineered metal building systems and erection. Send manufacturer drawings, foundation plans, and spec sections with your bid request.",
  },
  {
    question: "Do you install metal roofing on existing buildings?",
    answer:
      "Yes. We install and replace commercial metal roofing systems on existing structures in addition to new building erection — standing seam and through-fastened panels, trim, and penetration flashings scoped to the slope, exposure, and leak risk the roof actually carries.",
  },
] as const;

/** Rough word count for main page prose (excludes nav/footer and bullet lists). */
export function countCommercialMetalBuildingsWords() {
  const parts = [
    metalBuildingsMeta.heroDescription,
    ...metalBuildingsIntro.paragraphs,
    ...metalBuildingsDivision13.paragraphs,
    ...metalBuildingsRedIron.paragraphs,
    ...metalBuildingsOklahomaWind.paragraphs,
    ...metalBuildingsProcess.paragraphs,
    ...metalBuildingsWhyHh.paragraphs,
    ...metalBuildingsFaqs.flatMap((faq) => [faq.question, faq.answer]),
  ];
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}
