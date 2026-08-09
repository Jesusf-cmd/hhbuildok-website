import { priorityCities, services } from "@/lib/site-data";

export type CityServiceEntry = {
  citySlug: string;
  serviceSlug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  localAngle: string[];
  applications: string[];
  bundlePitch: string;
  faqs: { question: string; answer: string }[];
};

export const cityServicePages: CityServiceEntry[] = [
  // ── Oklahoma City × Concrete ──────────────────────────────────────────
  {
    citySlug: "oklahoma-city",
    serviceSlug: "concrete-construction",
    h1: "Commercial Concrete Construction in Oklahoma City",
    metaTitle: "Commercial Concrete in Oklahoma City, OK",
    metaDescription:
      "H&H Construction places structural and flatwork concrete for Oklahoma City commercial, industrial, and MAPS-related public work. Based in Norman, serving the OKC metro.",
    heroDescription:
      "Structural foundations, slabs, sidewalks, curbs, and site concrete for Oklahoma City commercial and public projects — coordinated from our Norman headquarters with short metro mobilization.",
    localAngle: [
      "Oklahoma City’s concrete demand sits on three overlapping engines: industrial and warehouse growth along the I-40 and I-240 corridors, continuous retail and medical construction across the metro, and MAPS 4 public capital work that still runs through 2028. Sidewalks, trails, transit stops, parks, and youth-center sites all need flatwork that will be measured for ADA compliance — running slope, cross slope, landings, and detectable warnings — not estimated by eye.",
      "Heavy truck sites near the interstate corridors and the airport change what “good enough” means for a slab. Dock approaches, dumpster pads, and drive aisles that see loaded trailers need thicker sections, better base prep, and jointing that matches the traffic pattern. A stall-area mix poured across a truck aisle fails early, and replacing it means shutting down operations a second time.",
      "Projects in the metro often brush multiple jurisdictions as they move outward into Edmond, Moore, Midwest City, or Del City. Permitting and inspection expectations are not identical across those cities, so foundation and flatwork packages need a contractor who has already worked those handoffs — not one discovering them at the first pour.",
    ],
    applications: [
      "Building pads and foundations for industrial and warehouse projects along I-40 and I-240",
      "ADA sidewalks, curb ramps, and accessible routes tied to MAPS 4 sidewalk, trail, and transit work",
      "Dock approaches, dumpster pads, and heavy-use site concrete at truck-served facilities",
      "Retail and medical flatwork where occupied sites require phased placement",
      "Concrete repair and replacement on aging commercial lots across the metro",
    ],
    bundlePitch:
      "Most Oklahoma City sites need more than a pour. Foundations and slabs come first, asphalt or heavy-duty paving follows, and many industrial or municipal packages finish with a metal building. When H&H holds the concrete, the asphalt, and the metal building under one contract, the dock pad, the truck aisle, and the building shell share one schedule instead of three punch lists.",
    faqs: [
      {
        question: "Do you handle MAPS-related and public concrete work in Oklahoma City?",
        answer:
          "Yes. We place sidewalks, curb ramps, site concrete, and facility flatwork that must meet inspected ADA and municipal standards. Public capital packages are coordinated around access and inspection, not just placement speed.",
      },
      {
        question: "Can you pour concrete for industrial sites with heavy truck traffic?",
        answer:
          "Yes. We design and place thicker sections, dock approaches, and dumpster pads for facilities that see loaded trailer traffic along the I-40, I-240, and airport corridors — not passenger-car parking standards stretched to cover truck use.",
      },
      {
        question: "Where is H&H Construction based relative to Oklahoma City projects?",
        answer:
          "We are headquartered in Norman, so Oklahoma City jobs get short metro mobilization, same-day response on punch items when needed, and crews that are already working the corridor regularly.",
      },
    ],
  },

  // ── Oklahoma City × Asphalt ───────────────────────────────────────────
  {
    citySlug: "oklahoma-city",
    serviceSlug: "asphalt-paving",
    h1: "Commercial Asphalt Paving in Oklahoma City",
    metaTitle: "Commercial Asphalt Paving in Oklahoma City, OK",
    metaDescription:
      "H&H Construction builds and rehabilitates Oklahoma City parking lots, industrial yards, and municipal paving — including overlays, patching, and heavy-duty sections for truck traffic.",
    heroDescription:
      "New paving, overlays, patching, and parking lot construction for Oklahoma City commercial developments, industrial yards, and public sites across the metro.",
    localAngle: [
      "Oklahoma City pavement fails for predictable reasons: water that never leaves the lot, sections designed for cars that then take loaded semis, and overlays placed over bases that were already moving. Industrial sites near I-40, I-240, and the airport see the worst of it — drive aisles and dock approaches alligator while stall areas still look serviceable.",
      "MAPS 4 puts real money into sidewalks, bike lanes, trails, streetlights, and transit — including bus stop improvements — through 2028. That work sits next to commercial paving more often than people expect: approaches, connecting lots, and municipal roadways that have to match grades and stay open while the capital program moves. Drainage and phasing matter as much as the mat itself.",
      "Occupied retail, medical, and industrial properties cannot close for a full rebuild. The useful skill in Oklahoma City is sequencing a lot section by section so deliveries, patients, and tenants keep parking while the failed areas come out and the new section goes down hot and compacted.",
    ],
    applications: [
      "Industrial yard and dock-approach paving sized for loaded trailer traffic",
      "Commercial parking lot overlays where the base is still sound",
      "Full-depth repair on lots that have already failed structurally",
      "Municipal and transit-adjacent paving coordinated with public access",
      "Phased rehabilitation at occupied retail, medical, and warehouse sites",
    ],
    bundlePitch:
      "On Oklahoma City industrial and commercial sites, asphalt rarely stands alone. Dumpster pads and dock approaches often need concrete; many warehouse packages include a metal building shell. One contractor across paving, concrete, and the building means the truck aisle, the pad, and the foundation elevations are coordinated before the first mill day — not discovered when the steel arrives.",
    faqs: [
      {
        question: "Do you pave industrial yards for heavy trucks in Oklahoma City?",
        answer:
          "Yes. We build heavier sections for drive aisles, dock approaches, and yards that see loaded trailer traffic, and we will tell you when concrete is the better answer for the highest-load zones.",
      },
      {
        question: "When is an overlay the wrong answer for an OKC parking lot?",
        answer:
          "When cracking is load-related or the base has failed. An overlay over a moving base reflects the same cracks through within a season or two. We evaluate that before recommending mill-and-overlay versus full-depth repair.",
      },
      {
        question: "Can you pave without shutting down an occupied Oklahoma City property?",
        answer:
          "Usually yes. We phase work in sections so parking, deliveries, and emergency access stay available, which is how most retail, medical, and warehouse jobs in the metro have to run.",
      },
    ],
  },

  // ── Oklahoma City × Metal ─────────────────────────────────────────────
  {
    citySlug: "oklahoma-city",
    serviceSlug: "metal-buildings-roofing",
    h1: "Metal Buildings & Roofing in Oklahoma City",
    metaTitle: "Metal Buildings & Roofing in Oklahoma City, OK",
    metaDescription:
      "H&H Construction erects pre-engineered metal buildings and installs commercial metal roofing for Oklahoma City warehouses, industrial facilities, and municipal structures.",
    heroDescription:
      "Pre-engineered metal building erection and metal roofing for Oklahoma City warehouses, industrial facilities, and commercial shells — coordinated with the foundation work that has to be waiting when the steel arrives.",
    localAngle: [
      "Oklahoma City’s warehouse and industrial growth along the interstate corridors is exactly the market pre-engineered metal buildings were built for: clear-span storage, shop space, and municipal utility buildings that need to close in fast. The schedule only works when the foundation and anchor bolts match the manufacturer’s drawings before the crane shows up.",
      "Wind governs much of central Oklahoma design. Exposure category, risk category for the occupancy, and collateral load for rooftop equipment should be settled when the building is ordered — not after someone hangs a unit the frame never accounted for. Sites near Tinker Air Force Base or Will Rogers World Airport can also add access, badging, or delivery constraints that belong in the erection plan from day one.",
      "A metal building package in this metro often sits next to paving and site concrete that has to finish on the same calendar. When those trades are split across three subcontractors, the foundation elevation, the dock pad, and the truck aisle each get their own punch list. Holding them together is how a shell actually opens on time.",
    ],
    applications: [
      "Warehouse and distribution shells along the I-40 and I-240 industrial corridors",
      "Shop and industrial facility buildings for manufacturers and contractors",
      "Municipal and public-agency metal buildings tied to capital programs",
      "Developer shells ready for interior tenant build-out",
      "Commercial metal roofing replacement on existing industrial structures",
    ],
    bundlePitch:
      "Anchor bolts are the highest-risk interface on a metal building, and they live in the concrete pour. On Oklahoma City industrial projects, H&H can place the foundation, erect the steel, and pave the yard under one contract — so the building, the dock, and the truck aisle share one set of elevations and one schedule.",
    faqs: [
      {
        question: "Do you erect metal buildings for Oklahoma City warehouses and industrial sites?",
        answer:
          "Yes. We erect pre-engineered metal buildings for warehouses, shops, municipal facilities, and developer shells across the Oklahoma City metro, working from the engineered manufacturer drawings for the project.",
      },
      {
        question: "Can you handle the foundation and the metal building together?",
        answer:
          "Yes — and that is usually the right way to buy it. Anchor bolt placement has to match the steel drawings within tight tolerance, which is considerably easier when one contractor holds both the concrete and the erection.",
      },
      {
        question: "Do secure or restricted OKC sites change how a metal building project runs?",
        answer:
          "They can. Facilities near Tinker AFB or the airport may require access planning, badging, or delivery windows that affect crane days and steel laydown. Those constraints need to be in the schedule before mobilization.",
      },
    ],
  },

  // ── Edmond × Concrete ─────────────────────────────────────────────────
  {
    citySlug: "edmond",
    serviceSlug: "concrete-construction",
    h1: "Commercial Concrete Construction in Edmond",
    metaTitle: "Commercial Concrete in Edmond, OK",
    metaDescription:
      "H&H Construction provides commercial concrete foundations, slabs, sidewalks, and site flatwork for Edmond retail, medical, school, and university projects.",
    heroDescription:
      "Foundations, slabs, sidewalks, curbs, and site concrete for Edmond’s growth-driven commercial, medical, school, and university work — phased around occupied properties and academic calendars.",
    localAngle: [
      "Edmond’s concrete work is driven by growth: new retail centers, medical offices, church expansions, and the continuous campus needs of Edmond Public Schools and the University of Central Oklahoma. That means a lot of ground-up pads and flatwork delivered against a developer’s or district’s calendar — not a contractor’s preferred pour window.",
      "Institutional work here is governed by the academic calendar. Summer is the window for school and university concrete that cannot interrupt classes, and campus access has to stay open the entire time. A pour that slips two weeks can push a project into the next break cycle, which is why schedule honesty matters more than an aggressive bid date.",
      "Access comes mostly from I-35 on the east and the Broadway Extension corridor on the west. Peak-hour traffic on those routes constrains concrete deliveries — the mix has a placement window, and a truck sitting in commute traffic does not help it. Delivery timing and site access get planned around those corridors, not hoped for.",
    ],
    applications: [
      "Building pads and slabs for new Edmond retail and medical developments",
      "School and university sidewalks, curb, and site concrete inside summer windows",
      "Church and institutional flatwork on occupied campuses",
      "Sidewalks, curbs, and accessible routes for commercial site plans",
      "Concrete repair and replacement at aging Edmond commercial properties",
    ],
    bundlePitch:
      "Edmond growth sites rarely need concrete alone. A new retail or medical pad usually needs paving and striping next; many commercial shells include metal building packages. Buying concrete from the same Norman-based contractor who also paves and erects metal buildings keeps the pad, the lot, and the shell on one calendar — which is what developer and district schedules actually require.",
    faqs: [
      {
        question: "Can you complete Edmond school or university concrete during summer break?",
        answer:
          "Yes. Institutional concrete in Edmond is commonly scheduled inside academic break windows, with campus access maintained throughout. We plan pours and curing around that calendar rather than treating it as a soft preference.",
      },
      {
        question: "Do you pour foundations for new Edmond commercial developments?",
        answer:
          "Yes. We place building pads, foundations, slabs, and site flatwork for retail, medical, church, and office projects tied to Edmond’s ongoing growth.",
      },
      {
        question: "How do I-35 and Broadway Extension affect concrete deliveries in Edmond?",
        answer:
          "Peak-hour congestion on those corridors can eat into a pour window. We plan delivery timing and site access around commute traffic so the mix arrives ready to place, not delayed in traffic.",
      },
    ],
  },

  // ── Edmond × Asphalt ──────────────────────────────────────────────────
  {
    citySlug: "edmond",
    serviceSlug: "asphalt-paving",
    h1: "Commercial Asphalt Paving in Edmond",
    metaTitle: "Commercial Asphalt Paving in Edmond, OK",
    metaDescription:
      "H&H Construction builds and rehabilitates Edmond parking lots and commercial paving for retail, medical, school, and university sites — including phased work on occupied properties.",
    heroDescription:
      "Parking lot construction, overlays, and patching for Edmond retail, medical, school, and university properties — sequenced so tenants, patients, and campuses keep operating.",
    localAngle: [
      "Edmond paving is mostly growth and rehabilitation, not empty greenfield freeways. New retail and medical centers need lots built to the site plan the first time; existing shopping centers and campuses need overlays and full-depth repairs without closing the property. The common failure mode is treating both like the same job.",
      "School district and University of Central Oklahoma work runs on the academic calendar. A parking lot that has to be ready before fall semester cannot slip into September because a subgrade repair was discovered late. Evaluation up front — overlay versus full-depth — is what keeps those windows real.",
      "Commuter traffic on I-35 and the Broadway Extension also shapes how paving gets done. Haul trucks, milling operations, and lane closures on corridor-adjacent sites need planning so the public stays safe and the mat still goes down inside the temperature window asphalt requires.",
    ],
    applications: [
      "New parking lots for Edmond retail, medical, and office developments",
      "Phased overlays at occupied shopping centers and medical campuses",
      "School and university lot rehabilitation inside academic break windows",
      "Full-depth repair where base failure makes an overlay the wrong answer",
      "Striping and accessible-space layout that matches Edmond site plans",
    ],
    bundlePitch:
      "An Edmond commercial lot is rarely just asphalt. Accessible routes and dumpster pads need concrete; many growth sites include a metal building or shell that shares the same civil package. H&H self-performs paving, concrete, and metal buildings so the lot, the pad, and the building elevations are one scope — not three subcontractors arguing over who owns the grade.",
    faqs: [
      {
        question: "Can you resurface an Edmond parking lot without closing the business?",
        answer:
          "In most cases, yes. We phase milling and paving section by section so tenants, patients, and congregations keep usable parking while the work moves across the site.",
      },
      {
        question: "Do you pave for Edmond Public Schools or the University of Central Oklahoma?",
        answer:
          "Yes. Institutional paving is scheduled around academic calendars, with the evaluation of overlay versus reconstruction done early enough that the break window is still achievable.",
      },
      {
        question: "What causes Edmond parking lots to fail early?",
        answer:
          "Usually water that never leaves the surface, or sections that see heavier traffic than they were built for. We look at drainage and actual use before recommending patch, overlay, or rebuild.",
      },
    ],
  },

  // ── Edmond × Metal ────────────────────────────────────────────────────
  {
    citySlug: "edmond",
    serviceSlug: "metal-buildings-roofing",
    h1: "Metal Buildings & Roofing in Edmond",
    metaTitle: "Metal Buildings & Roofing in Edmond, OK",
    metaDescription:
      "H&H Construction erects pre-engineered metal buildings and installs metal roofing for Edmond commercial, institutional, and light industrial projects.",
    heroDescription:
      "Pre-engineered metal buildings and commercial metal roofing for Edmond retail support buildings, shops, institutional facilities, and developer shells in a growth market that runs on tight calendars.",
    localAngle: [
      "Edmond’s commercial growth creates a steady need for metal building shells — storage and shop space behind retail, medical support buildings, church multipurpose structures, and light industrial facilities on the city’s edges. These are schedule-sensitive packages: the foundation has to be waiting, the steel has to arrive in sequence, and the shell has to dry in so interior trades can start.",
      "Institutional buyers in Edmond — schools, the university, churches — often need the building usable before a semester, a program year, or an event season. That makes foundation-to-erection coordination non-negotiable. Anchor bolts that miss the manufacturer’s template by a fraction of an inch stop a crane day, and crane days do not move easily around academic calendars.",
      "Because so much Edmond work sits next to occupied campuses and retail, site access and laydown for steel have to be planned with neighbors in mind. Erection sequences that ignore parking and public access create the kind of disruption that gets a project shut down mid-frame.",
    ],
    applications: [
      "Shop, storage, and support buildings for Edmond retail and medical campuses",
      "Church and institutional metal building shells on occupied sites",
      "Light industrial and contractor shop buildings on the city’s edges",
      "Developer metal building shells ready for tenant improvement",
      "Metal roofing repair and replacement on existing commercial structures",
    ],
    bundlePitch:
      "Edmond metal building projects almost always share a site with concrete and paving. The foundation and anchor bolts are concrete work; the parking lot and drives are asphalt. H&H holds all three trades, so the shell, the pad, and the lot are bid and sequenced as one package instead of three handoffs that each threaten the opening date.",
    faqs: [
      {
        question: "Do you build metal buildings for Edmond churches, schools, and commercial owners?",
        answer:
          "Yes. We erect pre-engineered metal buildings for institutional, commercial, and light industrial use in Edmond, coordinated around occupied-site access and institutional calendars when required.",
      },
      {
        question: "Why does foundation coordination matter so much on Edmond metal buildings?",
        answer:
          "Anchor bolts have to match the manufacturer’s drawings within tight tolerance. When the concrete and steel are split across contractors, that interface is where schedules die. Holding both scopes under one contract removes most of that risk.",
      },
      {
        question: "Can you install metal roofing on an existing Edmond commercial building?",
        answer:
          "Yes. We install and replace commercial metal roofing systems in addition to new pre-engineered building erection.",
      },
    ],
  },

  // ── Norman × Concrete ─────────────────────────────────────────────────
  {
    citySlug: "norman",
    serviceSlug: "concrete-construction",
    h1: "Commercial Concrete Construction in Norman",
    metaTitle: "Commercial Concrete in Norman, OK",
    metaDescription:
      "H&H Construction is based in Norman and places commercial concrete foundations, slabs, sidewalks, and site flatwork for Cleveland County private and public projects.",
    heroDescription:
      "Structural and flatwork concrete for Norman commercial, university-adjacent, and Cleveland County public projects — from the contractor headquartered in the city where the work is.",
    localAngle: [
      "Norman is where H&H Construction is based, which changes the practical economics of a concrete job here. Mobilization is short, someone can be on site the same morning a question comes up, and punch items do not require scheduling a trip from another metro. On phased work at an occupied property, that responsiveness usually matters more than the gap between two bids.",
      "Commercial concrete in Norman splits between the university corridor, retail and medical development along the I-35 frontage, and public infrastructure through the City of Norman and Cleveland County. Campus-adjacent pours have to respect OU event schedules, football weekends, and student move-in — closing a lot on the wrong Saturday is not a recoverable mistake.",
      "Central Oklahoma’s expansive clay soils and freeze-thaw cycling drive base preparation and jointing decisions. A slab detailed for a milder climate will not hold up through a Norman winter. Subgrade moisture conditioning, compacted base, air-entrained mixes, and honest joint spacing are what separate a pour that lasts from one that maps every soft spot underneath within two seasons.",
    ],
    applications: [
      "Commercial foundations and slabs for Norman retail and medical sites along I-35",
      "University-adjacent flatwork phased around OU event and academic calendars",
      "City of Norman and Cleveland County sidewalks, curbs, and ADA ramps",
      "School campus concrete inside Norman Public Schools break windows",
      "Site concrete and repair work with same-day local crew response",
    ],
    bundlePitch:
      "Being headquartered in Norman means the same local crew stack can place your concrete, pave the lot, and erect a metal building without three separate mobilizations into Cleveland County. For university-adjacent and public work especially, one contractor across those scopes keeps access, inspections, and punch items under one schedule.",
    faqs: [
      {
        question: "Is H&H Construction actually based in Norman?",
        answer:
          "Yes. Our office is at 770 W Rock Creek #115 in Norman. Norman projects get the shortest mobilization and the fastest on-site response of anywhere we work.",
      },
      {
        question: "Do you do City of Norman or Cleveland County public concrete?",
        answer:
          "Yes. We place sidewalks, curbs, ADA ramps, and facility concrete that must meet inspected public standards, coordinated around public access.",
      },
      {
        question: "How do OU schedules affect concrete work near campus?",
        answer:
          "Event weekends, football Saturdays, and student move-in can block lot closures and deliveries. We phase campus-adjacent pours around those dates so the work does not get shut down mid-placement.",
      },
    ],
  },

  // ── Norman × Asphalt ──────────────────────────────────────────────────
  {
    citySlug: "norman",
    serviceSlug: "asphalt-paving",
    h1: "Commercial Asphalt Paving in Norman",
    metaTitle: "Commercial Asphalt Paving in Norman, OK",
    metaDescription:
      "H&H Construction is based in Norman and builds commercial parking lots, overlays, and municipal paving for Cleveland County private and public sites.",
    heroDescription:
      "Parking lot construction, overlays, and patching for Norman commercial, university-adjacent, and Cleveland County public sites — from crews that start the day in the same city.",
    localAngle: [
      "Norman paving benefits from the same headquarters advantage as our concrete work: short haul routes from I-35 and Highway 9, crews already in town, and the ability to answer a weather delay or punch item without waiting on a distant mobilization. Asphalt is temperature-sensitive; being local helps keep the mat above minimum temperature when it hits the grade.",
      "University-adjacent lots are a Norman specialty problem. OU event schedules and student move-in constrain when a lot can close, and a poorly timed mill day can strand parking for a weekend the campus cannot spare. Phasing and calendar coordination are part of the paving scope here, not extras.",
      "City of Norman and Cleveland County work brings inspected grades, drainage expectations, and public access requirements. Overlay versus full-depth decisions have to be honest up front — reflecting cracks through a cheap overlay on a public lot is an expensive way to win a bid.",
    ],
    applications: [
      "Commercial parking lots for Norman retail and medical sites along I-35",
      "University-adjacent lot rehabilitation phased around OU calendars",
      "Municipal paving and public facility lots for Norman and Cleveland County",
      "School parking lot work inside academic break windows",
      "Industrial and contractor yard paving with local crew response",
    ],
    bundlePitch:
      "Norman commercial sites usually need the lot, the concrete pads, and sometimes a metal building shell finished on one calendar. Because we are based here, H&H can self-perform asphalt, concrete, and metal buildings with one local mobilization — which is the practical advantage of hiring the Norman contractor for Norman work.",
    faqs: [
      {
        question: "Why does being based in Norman matter for asphalt work?",
        answer:
          "Asphalt has to be placed and compacted while it is still hot. Short haul routes, local crews, and fast response to weather delays help keep the mat inside the temperature window — and punch items do not wait on a crew driving in from another county.",
      },
      {
        question: "Can you pave near the University of Oklahoma without disrupting campus?",
        answer:
          "We phase university-adjacent paving around event schedules, football weekends, and move-in so lots stay usable when campus needs them. Closing the wrong Saturday is avoided by putting those dates in the plan before milling starts.",
      },
      {
        question: "Do you handle Norman municipal paving projects?",
        answer:
          "Yes. We work on municipal and Cleveland County paving and facility lots that require documented grades, drainage, and public access coordination.",
      },
    ],
  },

  // ── Norman × Metal ────────────────────────────────────────────────────
  {
    citySlug: "norman",
    serviceSlug: "metal-buildings-roofing",
    h1: "Metal Buildings & Roofing in Norman",
    metaTitle: "Metal Buildings & Roofing in Norman, OK",
    metaDescription:
      "H&H Construction is based in Norman and erects pre-engineered metal buildings and metal roofing for Cleveland County commercial, industrial, and municipal projects.",
    heroDescription:
      "Pre-engineered metal building erection and commercial metal roofing for Norman warehouses, shops, municipal buildings, and commercial shells — coordinated locally from our Norman headquarters.",
    localAngle: [
      "A metal building in Norman should not require a contractor to mobilize from another metro. Our office and equipment are here, which shortens the foundation-to-erection loop: anchor bolts get verified against the manufacturer’s template, questions get answered on site the same day, and steel laydown does not wait on a crew’s travel schedule.",
      "Norman projects range from contractor shops and light industrial shells to municipal buildings and commercial support structures along the I-35 corridor. Wind and collateral loads still govern the design, and expansive clay soils still govern the foundation — both are central Oklahoma realities, not special cases.",
      "University-adjacent and public sites add scheduling constraints familiar to anyone who has worked Norman: access around OU events, public inspection expectations, and neighbors who will not tolerate an unplanned crane day. Those constraints belong in the erection plan before the building is released for fabrication.",
    ],
    applications: [
      "Contractor shops and light industrial metal buildings in Norman",
      "Municipal and Cleveland County facility buildings",
      "Commercial support shells along the I-35 corridor",
      "Warehouse and storage buildings for local businesses",
      "Metal roofing replacement on existing Norman commercial structures",
    ],
    bundlePitch:
      "The strongest argument for a Norman metal building with H&H is the same as for our concrete and asphalt: we are already here, and we self-perform the foundation and the paving that sit next to the shell. One local contractor for concrete, asphalt, and metal buildings is how Cleveland County projects stay on a single calendar.",
    faqs: [
      {
        question: "Do you erect metal buildings in Norman as a local contractor?",
        answer:
          "Yes. H&H Construction is headquartered in Norman at 770 W Rock Creek #115. Norman metal building projects get local mobilization, local foundation coordination, and local crew response.",
      },
      {
        question: "Can you pour the foundation and erect the metal building?",
        answer:
          "Yes. Anchor bolt placement is the highest-risk interface on a pre-engineered building. Holding the concrete and the erection under one contract is how that interface stays within tolerance.",
      },
      {
        question: "Do you install metal roofing in Norman as well as new buildings?",
        answer:
          "Yes. We install and replace commercial metal roofing systems in addition to new pre-engineered metal building erection.",
      },
    ],
  },
];

export function getCityService(citySlug: string, serviceSlug: string) {
  return cityServicePages.find(
    (entry) =>
      entry.citySlug === citySlug && entry.serviceSlug === serviceSlug,
  );
}

export function getCityServiceParams() {
  return cityServicePages.map((entry) => ({
    slug: entry.citySlug,
    service: entry.serviceSlug,
  }));
}

export function getCityServicesForCity(citySlug: string) {
  return cityServicePages.filter((entry) => entry.citySlug === citySlug);
}

export function getCityServicesForService(serviceSlug: string) {
  return cityServicePages.filter((entry) => entry.serviceSlug === serviceSlug);
}

export function cityServiceHref(citySlug: string, serviceSlug: string) {
  return `/service-area/${citySlug}/${serviceSlug}`;
}

export function resolveCityService(citySlug: string, serviceSlug: string) {
  const entry = getCityService(citySlug, serviceSlug);
  const city = priorityCities.find((item) => item.slug === citySlug);
  const service = services.find((item) => item.slug === serviceSlug);

  if (!entry || !city || !service) {
    return null;
  }

  return { entry, city, service };
}
