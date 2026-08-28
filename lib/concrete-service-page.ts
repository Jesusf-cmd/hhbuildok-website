export const concreteTrustItems = [
  {
    title: "Licensed",
    body: "Fully licensed to perform commercial concrete work throughout Oklahoma, meeting state and local contractor requirements on every project we take on.",
    icon: "document" as const,
  },
  {
    title: "Bonded",
    body: "Bonded to guarantee every commitment — your project is protected from start to finish, with no surprises on scope or schedule.",
    icon: "shield" as const,
  },
  {
    title: "Insured",
    body: "Comprehensive insurance coverage across every phase of the project, giving owners and general contractors documented protection through turnover.",
    icon: "check" as const,
  },
] as const;

export const concreteRiskIntro = {
  heading: "Commercial Concrete Built Right the First Time",
  paragraphs: [
    "Commercial concrete work carries real risk when it is not handled correctly. Poor material specification, misjudged reinforcement, or uncoordinated scheduling with other trades can lead to structural instability, code compliance failures, and budget overruns that delay your occupancy timeline. In Oklahoma, expansive clay soils and seasonal freeze-thaw cycles add another layer of risk for foundations and slabs that are not engineered for local conditions.",
    "H&H Construction addresses those risks with detailed planning, precise execution, and direct coordination with general contractors, engineers, and other trades on every job. From foundations and footings to parking lots and loading dock pads, every pour is scoped to meet design intent and engineering requirements — so you get a structure that performs under load, not just one that looks finished on day one.",
  ],
} as const;

export const concreteHubFaqs = [
  {
    question: "What types of commercial concrete projects do you handle?",
    answer:
      "We handle the full range of commercial concrete work — structural foundations and footings, slab-on-grade for warehouses and retail, parking lot and site concrete, loading dock pads, dumpster pads, sidewalks, curbs, gutters, and retaining walls. Our crews adapt to project size and industry requirements, from single-building pads to multi-phase commercial programs where schedule and spec have to hold across every pour.",
  },
  {
    question: "Do you coordinate with general contractors and other trades?",
    answer:
      "Yes. Commercial concrete usually sits at the center of the site package — before asphalt, before steel, and often alongside underground utilities. We coordinate placement windows, embeds, sleeves, and handoffs with GCs, engineers, and mechanical and electrical trades so foundations and flatwork meet the drawings without holding up the rest of the job.",
  },
  {
    question: "How do Oklahoma soils and weather affect commercial concrete?",
    answer:
      "Central Oklahoma's expansive clay and hard freeze-thaw cycles punish slabs and foundations that are not detailed for local conditions. Subgrade preparation, base thickness, air entrainment, joint layout, and curing are not optional here — they are what keeps a commercial pour from cracking, heaving, or failing inspection after the first season.",
  },
  {
    question: "Do you work on public, municipal, and ADA-regulated concrete?",
    answer:
      "Yes. We place sidewalks, curb ramps, accessible routes, and facility flatwork that must meet inspected ADA and municipal standards. Public and institutional work is coordinated around access, inspection, and occupied-site schedules — not just placement speed.",
  },
  {
    question: "How do I request a bid for a commercial concrete project?",
    answer:
      "Call 405-476-5476 or submit a bid request through our contact form with your project location, scope, and any plans or specs you have. We review the details, ask the questions that affect price and schedule, and follow up within one to two business days to discuss next steps.",
  },
] as const;

export const concreteServiceAreaCities = [
  { slug: "norman", name: "Norman" },
  { slug: "edmond", name: "Edmond" },
  { slug: "oklahoma-city", name: "Oklahoma City" },
  { slug: "yukon", name: "Yukon" },
  { slug: "tulsa", name: "Tulsa" },
  { slug: "midwest-city", name: "Midwest City" },
] as const;

export function concreteCityHref(citySlug: string) {
  return `/services/concrete-construction/${citySlug}`;
}
