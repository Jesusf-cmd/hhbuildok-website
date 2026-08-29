import { asphaltCityHref } from "@/lib/asphalt-city-index";
import { concreteCityHref } from "@/lib/concrete-service-page";

export const parkingLotHubHref = "/services/commercial-parking-lots";

export const parkingLotMeta = {
  title: "Commercial Parking Lot Construction in Oklahoma",
  description:
    "H&H Construction builds and rehabilitates commercial parking lots across Oklahoma — asphalt or concrete paving, site concrete, curb and gutter, approaches, striping, and ADA work from one contractor.",
  h1: "Commercial Parking Lot Construction in Oklahoma",
  heroDescription:
    "New parking lots, full-depth reconstruction, and occupied-site rehabilitation — asphalt or concrete paving, site concrete, curb and gutter, approaches, and ADA flatwork coordinated from our Norman headquarters.",
} as const;

export const parkingLotIntro = {
  heading: "One Parking Lot Package — Paving, Site Concrete, and Civil Flatwork",
  paragraphs: [
    "A commercial parking lot is rarely just a mat of asphalt. Most projects include site concrete — curb and gutter, sidewalks, handicap ramps, drive approaches, dumpster pads, and dock aprons — plus drainage, base prep, and striping before the owner can open the doors. H&H Construction self-performs the paving and the site concrete scopes that usually travel together on Oklahoma commercial jobs, so general contractors and developers are not stitching together three subcontractors for one lot.",
    "Whether the drawings call for asphalt or concrete pavement, we evaluate subgrade, traffic loading, and drainage before recommending a section that will actually survive Oklahoma's expansive clay and freeze-thaw cycles. On rehabilitation work, we will tell you when mill-and-overlay is the honest answer — and when the base has already failed and full-depth reconstruction is the only fix that lasts.",
  ],
} as const;

export const parkingLotDivision32 = {
  heading: "Division 32 & Exterior Improvements Scope",
  paragraphs: [
    "If you are bidding or building from CSI MasterFormat specs, parking lot work usually lives under Division 32 — Exterior Improvements: asphalt paving (32 12 16), concrete paving (32 13 13), curbs and gutters (32 16 13), sidewalks, pavement markings, and the site flatwork tied to the lot. H&H Construction regularly executes that civil package for commercial developers, property managers, and general contractors who need a subcontractor that understands spec sections, inspection holds, and phasing around an occupied property — not just a crew with a paver.",
  ],
} as const;

export const parkingLotServices = [
  {
    title: "Asphalt Parking Lots",
    items: [
      "New commercial lot construction and expansion",
      "Mill-and-overlay and resurfacing",
      "Full-depth reconstruction and base repair",
      "Drive aisles, truck courts, and heavy-load sections",
      "Sealcoating, crack sealing, and pothole repair",
    ],
  },
  {
    title: "Concrete Parking Lots & Pavement",
    items: [
      "Concrete lot installation where spec or load demands it",
      "Dock approaches, aprons, and dumpster pads",
      "Truck terminals and industrial yard concrete",
      "Concrete drives, entrances, and approaches",
      "Concrete repair, replacement, and joint sealing",
    ],
  },
  {
    title: "Site Concrete & Civil Flatwork",
    items: [
      "Curb and gutter — new install and replacement",
      "Sidewalks, walks, and accessible routes",
      "ADA curb ramps, landings, and detectable warnings",
      "Loading dock pads and equipment pads",
      "Site drainage coordination and flatwork tied to paving",
    ],
  },
  {
    title: "Finishing & Compliance",
    items: [
      "Parking lot striping and pavement markings",
      "ADA stall layout, fire lanes, and directional marking",
      "Phased work to keep tenants and traffic moving",
      "Municipal and inspected public lot standards",
    ],
  },
] as const;

export const parkingLotIndustries = [
  "Retail centers and restaurants",
  "Medical and office campuses",
  "Industrial, warehouse, and distribution facilities",
  "Churches, schools, and institutional sites",
  "HOAs, apartments, and multi-family",
  "Municipal and public agency properties",
] as const;

export const parkingLotWhyHh = {
  heading: "Why One Contractor for the Whole Lot",
  paragraphs: [
    "Parking lots fail at the seams — where asphalt meets concrete, where curb height does not match the gutter, or where a approach was poured before the paving crew knew the final elevation. H&H self-performs commercial concrete, asphalt paving, and metal building work from Norman, which means one mobilization, one schedule, and one team accountable for the lot turning over clean.",
    "Our Chandler County Courthouse parking lot rehabilitation — sealcoat, restriping, asphalt overlay, full-depth patching, and curb replacement — is the kind of multi-scope municipal lot work we bring to commercial and public projects across the metro. When a GC hands us Division 32 civil scope, we bid it as a coordinated package, not a line-item paving quote with everything else as an allowance.",
  ],
} as const;

export const parkingLotCityLinks = {
  asphalt: [
    { slug: "norman", name: "Norman" },
    { slug: "oklahoma-city", name: "Oklahoma City" },
    { slug: "edmond", name: "Edmond" },
    { slug: "yukon", name: "Yukon" },
    { slug: "tulsa", name: "Tulsa" },
    { slug: "midwest-city", name: "Midwest City" },
    { slug: "moore", name: "Moore" },
  ],
  concrete: [
    { slug: "norman", name: "Norman" },
    { slug: "oklahoma-city", name: "Oklahoma City" },
    { slug: "edmond", name: "Edmond" },
    { slug: "yukon", name: "Yukon" },
    { slug: "tulsa", name: "Tulsa" },
    { slug: "midwest-city", name: "Midwest City" },
  ],
} as const;

export const parkingLotFaqs = [
  {
    question: "Do you build parking lots with asphalt, concrete, or both?",
    answer:
      "Both. We install and reconstruct commercial lots in asphalt or concrete depending on traffic load, owner preference, and what the drawings specify. Drive aisles, dock zones, and dumpster approaches often need concrete even when the stall area is asphalt — we scope those sections honestly instead of stretching one material past where it performs.",
  },
  {
    question: "Do you handle site concrete with parking lot paving — curb, gutter, and approaches?",
    answer:
      "Yes. Site concrete is part of most parking lot packages we execute: curb and gutter, sidewalks, ADA ramps, drive approaches, and pads tied to the paving grade. Coordinating paving and site concrete under one contractor keeps elevations, drainage, and inspection sign-offs on one schedule.",
  },
  {
    question: "Can you bid Division 32 exterior improvements for our commercial project?",
    answer:
      "Yes. We regularly work from Division 32 specs covering asphalt paving, concrete paving, curbs and gutters, sidewalks, and related site flatwork. Send your civil drawings or spec sections and we will scope the package with the phasing, inspection, and occupied-site constraints your job actually has.",
  },
  {
    question: "When is overlay enough versus full parking lot reconstruction?",
    answer:
      "Overlay or mill-and-overlay works when the base is still structurally sound and the damage is mostly in the wearing surface. When cracking maps from soft spots, drainage is undermining the section, or alligatoring shows base failure, full-depth reconstruction is the fix that lasts — we evaluate that on site before recommending resurfacing.",
  },
  {
    question: "Do you phase parking lot work around an operating business?",
    answer:
      "Yes. Retail, medical, and institutional lots often have to stay partially open while sections are milled, paved, or restriped. We sequence work to maintain fire lanes, accessible routes, and primary entrances unless the owner approves a defined shutdown window.",
  },
] as const;

export function parkingLotAsphaltCityHref(citySlug: string) {
  return asphaltCityHref(citySlug);
}

export function parkingLotConcreteCityHref(citySlug: string) {
  return concreteCityHref(citySlug);
}
