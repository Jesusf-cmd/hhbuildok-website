export type ConcreteCityPageContent = {
  citySlug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  localAngle: string[];
  applications: string[];
  approach: string;
  cityFaqs: { question: string; answer: string }[];
};

export const concreteCityPages: ConcreteCityPageContent[] = [
  // Edmond, Midwest City, Norman, Oklahoma City, and Yukon concrete
  // pages live at /service-area/{city}/concrete-construction.
  {
    citySlug: "tulsa",
    h1: "Commercial Concrete Construction in Tulsa",
    metaTitle: "Commercial Concrete in Tulsa, OK",
    metaDescription:
      "H&H Construction places commercial concrete foundations, slabs, and loading dock infrastructure for Tulsa's industrial and distribution facilities. Request a bid.",
    heroDescription:
      "Structural foundations, slabs, and loading dock infrastructure for Tulsa industrial, distribution, and logistics projects — engineered for operational load, not generic flatwork specs.",
    localAngle: [
      "Tulsa's industrial market is running at historic tightness — vacancy has held near 2.5%, close to an all-time low — while major capital continues flowing into the region, including a $3 billion data center campus now under construction north of the city. Every one of those industrial and distribution projects starts with concrete: foundations engineered for heavy equipment loads, slabs built to support racking and forklift traffic, and loading dock pads that hold up under constant truck cycling. That's the work H&H Construction does in Tulsa.",
      "Northeastern Oklahoma's clay-heavy soils shift with seasonal moisture the same way they do across the rest of the state, and a foundation or slab that isn't engineered to account for that movement ends up cracking and settling — expensive problems to fix once a facility is operational. Tulsa's industrial base raises the stakes further: a distribution facility slab isn't just carrying foot traffic, it's supporting racking systems, forklifts, and constant equipment cycling. Reinforcement, thickness, and finish tolerances all have to be engineered for actual operational load, not poured to a generic spec.",
      "Tulsa's logistics corridor along US-169, the Broken Arrow Expressway, and the Port of Catoosa feed a regional distribution network that depends on dock throughput — not just square footage. Loading dock pads and truck courts that fail early shut down operations in ways a retail sidewalk never will. Owners comparing bids on Tulsa industrial work should ask how the contractor sizes base prep and joint layout for cycling weight, not just who has the lowest cubic-yard number.",
      "H&H mobilizes to Tulsa from our Norman headquarters for industrial and distribution packages where structural and flatwork scope has to match a fixed construction calendar. Data center, warehouse, and manufacturing campuses run multi-phase civil work — foundations first, then interior slabs, then dock and yard concrete — and a gap in any phase holds shell, racking, and MEP trades. We treat Tulsa industrial concrete as schedule-critical scope coordinated with the GC, not a standalone pour booked when a crew happens to be free.",
    ],
    applications: [
      "Foundations and slabs engineered for warehouse and distribution facility loads",
      "Loading dock pads built for constant heavy truck and trailer cycling",
      "Industrial flooring for manufacturing and logistics operations",
      "Concrete infrastructure tied to Tulsa's growing data center and logistics development",
      "Site concrete and repair work for existing industrial and commercial facilities",
    ],
    approach:
      "Tulsa industrial work begins with load and movement — what the slab or foundation will actually carry once racking, forklifts, and dock traffic start. We review geotechnical recommendations and structural drawings together so subgrade prep, base thickness, and reinforcement match the facility's operation, not a residential-derived detail. Dock approaches and truck courts get section design honest about cycling weight; interior slabs get joint layout and finish tolerances suited to warehouse traffic. We coordinate pours with the GC and other trades on active industrial sites, plan delivery and placement around weather and cure requirements, and protect concrete through northeastern Oklahoma's moisture and temperature swings. When a logistics or data-center schedule is driving the calendar, we set pour sequences and strength milestones up front so downstream trades are not guessing. On large campus packages, we align embeds, sleeve locations, and elevation benchmarks with MEP and shell trades before mobilization — reopening a cured slab for a missed sleeve is not a punch item anyone wants on a data center timeline. Mix design follows exposure: air entrainment where freeze-thaw matters, water-cement ratio matched to wear, and aggregate sizing that works with the slab thickness on the drawings. Turnover includes cure verification and a clean handoff to racking and paving trades — not a slab that looks done while it is still green.",
    cityFaqs: [
      {
        question:
          "Do you pour concrete for Tulsa warehouse and distribution facilities?",
        answer:
          "Yes. We place foundations and slabs engineered for racking loads, forklift traffic, and warehouse operations — with reinforcement, thickness, and jointing matched to how the facility will actually run. We work from structural and geotechnical drawings together so the pour spec reflects operational load, not a generic flatwork detail.",
      },
      {
        question:
          "Can you build loading dock pads for heavy truck cycling in Tulsa?",
        answer:
          "Yes. We construct dock approaches and truck-court concrete sized for constant trailer traffic, with base prep and section depth designed for cycling loads rather than light commercial parking standards. Joint layout and drainage are part of that design — a dock pad that ponds water or maps cracks under trailer creep is a shutdown waiting to happen.",
      },
      {
        question:
          "Do you handle concrete for Tulsa data center and large industrial campus work?",
        answer:
          "Yes. We place site and facility concrete tied to large industrial and logistics development in the Tulsa market, coordinating scope and schedule with the GC on multi-phase packages where civil work has to stay ahead of shell and MEP trades. Data center and campus schedules rarely tolerate a week of guesswork on pour sequence — we set milestones in preconstruction so every trade knows when the slab is ready for the next load.",
      },
    ],
  },
];

export function getConcreteCityPage(citySlug: string) {
  return concreteCityPages.find((entry) => entry.citySlug === citySlug) ?? null;
}

export function concreteCityPageParams() {
  return concreteCityPages.map((entry) => ({ city: entry.citySlug }));
}

/** Rough word count for main page prose (excludes nav/footer). */
export function countConcreteCityWords(entry: ConcreteCityPageContent) {
  const parts = [
    entry.heroDescription,
    ...entry.localAngle,
    ...entry.applications,
    entry.approach,
    ...entry.cityFaqs.flatMap((faq) => [faq.question, faq.answer]),
  ];
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}
