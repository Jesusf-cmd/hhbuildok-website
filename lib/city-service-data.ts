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
  /** Process copy kept from a retired duplicate page. Omitted when that page had no separate approach section. */
  approach?: string;
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
      "Projects in the metro often brush multiple jurisdictions as they move outward into Edmond, Moore, Midwest City, or Del City. Permitting and inspection expectations are not identical across those cities, so foundation and flatwork packages need a contractor who has already worked those handoffs — not one discovering them at the first pour. Public and municipal packages add bid documentation, ADA inspection, and access plans that have to be built into the schedule from day one.",
      "Downtown and Bricktown-adjacent commercial work — including projects like the Boardwalk at Bricktown — adds urban access, inspection, and phasing constraints that a greenfield pad in the suburbs does not have. Continuous retail and medical construction across a metro of more than 700,000 residents keeps that flatwork on the same calendar as the industrial corridors and MAPS 4 work.",
      "Large private developers running multi-building pads across the metro face the same coordination problem at a different scale: one pour delay on a foundation package can hold steel, paving, and tenant work on the whole site. We treat OKC work as schedule-critical civil scope, not a commodity line item that can float week to week.",
      "OKC’s scale also means repair and replacement work on aging commercial lots — drive aisles, dumpster pads, and sidewalk panels that failed after years of truck traffic and clay movement. Those jobs need section phasing that keeps the tenant operating while the worst areas get rebuilt to a spec that will survive the next decade, not a skim coat that maps cracks again within two seasons.",
    ],
    applications: [
      "Building pads and foundations for industrial and warehouse projects along I-40 and I-240",
      "ADA sidewalks, curb ramps, and accessible routes tied to MAPS 4 sidewalk, trail, and transit work",
      "Dock approaches, dumpster pads, and heavy-use site concrete at truck-served facilities",
      "Retail and medical flatwork where occupied sites require phased placement",
      "Concrete repair and replacement on aging commercial lots across the metro",
    ],
    approach:
      "Oklahoma City work starts with scope clarity across trades. On multi-phase commercial and public packages, we confirm where our concrete scope hands off to paving, utilities, and steel before mobilization — embeds, sleeve locations, and elevation benchmarks get resolved in preconstruction, not at the edge of a pour. Subgrade evaluation is standard on every OKC site: proof-rolling, moisture conditioning on clay, and base compaction to spec before reinforcement goes in. For municipal and MAPS-related work, we build the inspection and access plan into the sequence — ADA slopes, detectable warnings, and public right-of-way constraints are part of the pour, not punch-list surprises. Industrial and corridor sites get section design matched to traffic: thicker concrete and better base in truck zones, honest jointing, and cure protection sized for Oklahoma heat and cold. We coordinate placement with the GC schedule and keep Norman-based crews on a short metro mobilization so weather delays and coordination issues get a same-week response. When a downtown or Bricktown-adjacent site cannot close entirely, we pour in sections with maintained egress and documented cure times before the next trade loads the slab.",
    bundlePitch:
      "Most Oklahoma City sites need more than a pour. Foundations and slabs come first, asphalt or heavy-duty paving follows, and many industrial or municipal packages finish with a metal building. When H&H holds the concrete, the asphalt, and the metal building under one contract, the dock pad, the truck aisle, and the building shell share one schedule instead of three punch lists.",
    faqs: [
      {
        question: "Do you handle MAPS-related and public concrete work in Oklahoma City?",
        answer:
          "Yes. We place sidewalks, curb ramps, site concrete, and facility flatwork that must meet inspected ADA and municipal standards. Public capital packages are coordinated around access and inspection, not just placement speed. If your package requires prevailing documentation or inspection holds, those milestones are identified before the first truck — not discovered when the inspector walks the site.",
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
      {
        question: "Do you pour concrete for Bricktown-adjacent and downtown OKC commercial work?",
        answer:
          "Yes. We handle urban commercial flatwork and site concrete where access, phasing, and occupied-property constraints require section-by-section placement — not a single closure that assumes an empty block. Bricktown-adjacent and downtown work often shares the right-of-way with pedestrians and operating businesses; our sequence keeps those constraints in the plan from day one.",
      },
      {
        question: "How do you coordinate concrete scope with other trades on large OKC projects?",
        answer:
          "We align embeds, sleeves, elevation benchmarks, and pour sequences with the GC and MEP trades before placement. On multi-phase work, that coordination is what keeps foundations and slabs from becoming the bottleneck that holds up steel, paving, and tenant improvement. When three trades share the same pad line, we resolve conflicts in preconstruction instead of stopping a pour mid-truck.",
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
      "Edmond’s concrete work is driven by growth: new retail centers, medical offices, church expansions, and the continuous campus needs of Edmond Public Schools and the University of Central Oklahoma. The East Edmond 15A development plan alone adds more than a hundred acres of planned commercial space — pads, drives, and accessible routes that have to match site plans and developer opening dates, not a contractor’s preferred pour window.",
      "Institutional work here is governed by the academic calendar. Summer is the window for school and university concrete that cannot interrupt classes, and campus access has to stay open the entire time. A pour that slips two weeks can push a project into the next break cycle, which is why schedule honesty matters more than an aggressive bid date. Retail and medical sites along I-35 and the Broadway Extension corridor add occupied-property phasing — tenants, patients, and worship schedules still need parking while the work moves.",
      "Access comes mostly from I-35 on the east and the Broadway Extension corridor on the west. Peak-hour traffic on those routes constrains concrete deliveries — the mix has a placement window, and a truck sitting in commute traffic does not help it. Delivery timing and site access get planned around those corridors, not hoped for. Underneath it all, the same expansive clay and freeze-thaw exposure that governs Norman work governs Edmond: base prep, air entrainment, and joint layout are engineering decisions, not finish details.",
      "Edmond’s higher-income retail and medical market also means owners expect occupied-site execution — patients still park, shoppers still enter, and congregations still meet while sidewalks and drives are rebuilt. That is where section phasing, cure protection, and honest schedule communication matter as much as the mix design on the ticket.",
      "Contractors bidding Edmond work from outside the metro often underestimate how much time corridor traffic and institutional calendars consume. A pour scheduled for Tuesday morning that loses an hour on Broadway Extension can miss the placement window entirely. We plan Edmond deliveries and section sequencing around those realities so the GC is not explaining a failed closure to an owner who expected the lot open by Thursday.",
    ],
    applications: [
      "Building pads and slabs for new Edmond retail and medical developments",
      "East Edmond growth-corridor foundations and site flatwork packages",
      "School and university sidewalks, curb, and site concrete inside summer windows",
      "Church and institutional flatwork on occupied campuses",
      "Sidewalks, curbs, and accessible routes for commercial site plans",
      "Concrete repair and replacement at aging Edmond commercial properties",
    ],
    approach:
      "Edmond jobs begin with a site read tied to how the property actually operates. On retail and medical sites, we map phasing so entrances, fire lanes, and accessible routes stay open while forms go in and concrete cures. On school and UCO work, the academic calendar sets the pour window — we confirm subgrade and base early in the break so a late discovery does not eat the only weeks available. Subgrade proof-rolling and moisture conditioning come first on Edmond clay; reinforcement placement and embed coordination happen before the first truck, because there is no correction after the pour. We match mix design to exposure and wear, set joint spacing to slab thickness, and cut control joints on schedule before random cracking picks its own path. We plan delivery routes around I-35 and Broadway Extension peak traffic so the mix arrives within spec, and we protect pours through Oklahoma’s temperature swings — curing compound, blankets, or adjusted placement timing when the forecast demands it. Coordination with the GC and other trades is part of the scope, not a change order after the fact. When paving or shell trades follow our flatwork, we leave elevations and joint layouts that the next crew can actually build to.",
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
      {
        question: "Can you pour concrete at occupied Edmond retail or institutional sites during business hours?",
        answer:
          "Yes. We phase retail, medical, and church work so the property stays operational — staging pours by section, maintaining accessible routes, and sequencing deliveries so tenants and patients are not stranded by a full-site closure. Fire lanes and primary entrances stay open unless the GC and owner approve a defined shutdown window.",
      },
      {
        question: "Do you handle foundation work for East Edmond and corridor commercial growth?",
        answer:
          "Yes. We place building pads, foundations, and site flatwork for new commercial development along Edmond’s growth corridors, including packages tied to master-planned commercial space where the pad and civil scope have to match a fixed opening date. East Edmond and corridor pads often share a site with paving and shell work — we coordinate elevations so the building, drives, and accessible routes tie together at turnover.",
      },
      {
        question: "Do you provide ADA-compliant flatwork for Edmond medical and office development?",
        answer:
          "Yes. We place sidewalks, curb ramps, and accessible routes to inspected tolerances — running slope, cross slope, landings, and detectable warnings — for medical, office, and retail site plans that will be measured, not eyeballed. Edmond medical and office development often triggers third-party inspection; we pour to the tolerance on the plans, not to what looks close from the curb.",
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
      "Commercial concrete in Norman splits between the university corridor, retail and medical development along the I-35 frontage, and public infrastructure through the City of Norman and Cleveland County. Campus-adjacent pours have to respect OU event schedules, football weekends, and student move-in — closing a lot on the wrong Saturday is not a recoverable mistake. Medical expansion around Norman Regional adds another layer: occupied-campus access, vibration-sensitive adjacent operations, and flatwork that has to meet inspected tolerances while the facility stays open.",
      "Central Oklahoma’s expansive clay soils and freeze-thaw cycling drive base preparation and jointing decisions. A slab detailed for a milder climate will not hold up through a Norman winter. Subgrade moisture conditioning, compacted base, air-entrained mixes, and honest joint spacing are what separate a pour that lasts from one that maps every soft spot underneath within two seasons. That is true on a warehouse pad and on a public sidewalk where running slope and cross slope get measured, not estimated.",
      "Norman contractors and developers also pull H&H across the I-35 corridor into Moore, south Oklahoma City, and Cleveland County public work where the same soil and inspection standards apply. Holding a local crew stack that already knows those jurisdictions shortens the preconstruction loop when a pad, a MAPS-adjacent walk, or a school campus package has to move inside a fixed calendar window.",
      "Developers comparing Norman bids should weigh mobilization and response time alongside line-item price. A lower number from a contractor two hours away often disappears when weather delays need same-day protection, an inspector flags a slope, or a tenant opening date moves up a week. Being headquartered here is not marketing — it is how phased campus and medical work actually gets finished on calendar.",
    ],
    applications: [
      "Commercial foundations and slabs for Norman retail and medical sites along I-35",
      "University-adjacent flatwork phased around OU event and academic calendars",
      "City of Norman and Cleveland County sidewalks, curbs, and ADA ramps",
      "School campus concrete inside Norman Public Schools break windows",
      "Site concrete and repair work with same-day local crew response",
    ],
    approach:
      "Every Norman pour starts with what is underneath the forms. We proof-roll the subgrade, moisture-condition expansive clay where the soils report demands it, and compact base to the elevation the drawings call for before a single chair is set. On campus-adjacent and medical sites, that evaluation happens alongside a traffic and access plan — deliveries, pump lines, and cure protection have to fit around patients, students, and event holds, not the other way around. Reinforcement gets verified at mid-depth before placement; embeds and sleeves are coordinated with the mechanical and electrical scopes so the slab is not opened up again after the finish. Mix design follows exposure: air entrainment for freeze-thaw durability, water-cement ratio matched to wear and permeability, and aggregate sizing that works with the slab thickness on the drawings. Placement windows follow the forecast: hot, dry days need evaporation control and timely jointing; cold snaps need protection until the concrete gains strength. Because our office is in Norman, weather delays and punch items get a same-day response instead of waiting on a crew driving in from another county. Turnover includes cure verification and a clean handoff to paving or steel — not a slab that looks done while it is still green.",
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
          "Yes. We place sidewalks, curbs, ADA ramps, and facility concrete that must meet inspected public standards, coordinated around public access. Cleveland County and City of Norman packages often require proof of compliance before acceptance — we build that documentation into the workflow instead of treating inspection as a surprise at the end of the pour.",
      },
      {
        question: "How do OU schedules affect concrete work near campus?",
        answer:
          "Event weekends, football Saturdays, and student move-in can block lot closures and deliveries. We phase campus-adjacent pours around those dates so the work does not get shut down mid-placement. When OU holds a home weekend or a move-in window, we sequence sections and cure protection so the GC is not explaining a failed closure to campus facilities on Monday.",
      },
      {
        question: "Do you pour foundations and flatwork for Norman medical and healthcare expansion?",
        answer:
          "Yes. We place structural and flatwork concrete for medical office and healthcare facility work around Norman, including phased placement at occupied sites where access, vibration, and cure protection have to be planned alongside the hospital or clinic schedule. That includes slab-on-grade tied to expansion wings, accessible routes, and site flatwork where tolerances will be inspected against ADA and facility standards.",
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

  // ── Moore × Concrete ──────────────────────────────────────────────────
  {
    citySlug: "moore",
    serviceSlug: "concrete-construction",
    h1: "Commercial Concrete Construction in Moore",
    metaTitle: "Commercial Concrete in Moore, OK",
    metaDescription:
      "H&H Construction places commercial concrete foundations, slabs, sidewalks, and site flatwork for Moore, OK — short mobilization from our Norman headquarters on the I-35 corridor.",
    heroDescription:
      "Foundations, slabs, sidewalks, curbs, and site concrete for Moore commercial, school, and retail projects — from crews based one city south in Norman.",
    localAngle: [
      "Moore sits on I-35 between Norman and Oklahoma City, which makes it one of the shortest concrete mobilizations H&H runs. Haul routes are short, punch items do not wait on a cross-metro drive, and pour windows are easier to protect when the plant and the crew are already working the south corridor.",
      "Commercial concrete here is driven by interstate-frontage retail and medical pads, Moore Public Schools campus work, and municipal sidewalk and curb packages. School and institutional flatwork still has to land inside summer windows, with campus access maintained the entire time — the calendar sets the pour schedule, not the other way around.",
      "Central Oklahoma clay and freeze-thaw cycling do not care that Moore is a suburb. Soft subgrade, poor base, and light jointing show up as mapped cracks within a couple of seasons. Proof-rolling and moisture conditioning before forming are what keep a Moore slab from becoming a callback.",
    ],
    applications: [
      "Building pads and slabs for Moore retail and medical sites along I-35",
      "School campus sidewalks, curb, and site concrete inside summer break windows",
      "Municipal sidewalks, curb ramps, and ADA routes",
      "Dumpster pads and heavy-use site concrete at commercial properties",
      "Concrete repair and replacement on aging Moore lots and walks",
    ],
    bundlePitch:
      "Moore growth sites rarely stop at a pour. The pad needs a lot next, and many commercial packages include a metal building or shell. Because we are based in Norman, H&H can place the concrete, pave the lot, and erect the building with one short south-metro mobilization instead of three separate crew stacks arguing over grade.",
    faqs: [
      {
        question: "How close is H&H Construction to Moore projects?",
        answer:
          "We are headquartered in Norman, one city south on I-35. Moore jobs get short mobilization, fast punch response, and crews that already work the south metro corridor regularly.",
      },
      {
        question: "Can you complete Moore school concrete during summer break?",
        answer:
          "Yes. Campus concrete is commonly scheduled inside academic break windows, with access maintained for staff and summer programs throughout placement and curing.",
      },
      {
        question: "Do you handle City of Moore public concrete work?",
        answer:
          "Yes. We place sidewalks, curb ramps, and facility flatwork that must meet inspected municipal and ADA standards.",
      },
    ],
  },

  // ── Moore × Asphalt ───────────────────────────────────────────────────
  {
    citySlug: "moore",
    serviceSlug: "asphalt-paving",
    h1: "Commercial Asphalt Paving in Moore",
    metaTitle: "Commercial Asphalt Paving in Moore, OK",
    metaDescription:
      "H&H Construction builds and rehabilitates Moore parking lots and commercial paving for retail, school, and municipal sites along the I-35 corridor.",
    heroDescription:
      "Parking lot construction, overlays, and patching for Moore retail, school, and commercial properties — phased so businesses and campuses keep operating.",
    localAngle: [
      "Moore paving is mostly corridor retail, school lots, and occupied commercial rehabilitation — not empty industrial freeways. New pads along I-35 need lots built correctly the first time; existing centers need overlays or full-depth repair without shutting the property down. Treating those as the same job is how schedules and budgets break.",
      "School-district work runs on the academic calendar. A bus loop or staff lot that has to be ready before fall cannot absorb a late discovery that the base has failed. Evaluating overlay versus full-depth repair up front is what keeps a summer window real.",
      "Short haul distance from Norman helps keep asphalt above minimum temperature when it hits the grade — a practical advantage on south-metro work where plant-to-site time still decides whether the mat densifies or oxidizes early.",
    ],
    applications: [
      "New parking lots for Moore retail and medical developments along I-35",
      "Phased overlays at occupied shopping centers",
      "School parking lot and bus-loop rehabilitation inside break windows",
      "Full-depth repair where base failure makes an overlay the wrong answer",
      "Municipal facility paving and approach work",
    ],
    bundlePitch:
      "A Moore commercial lot usually shares the site with concrete pads and sometimes a metal building. H&H self-performs asphalt, concrete, and metal buildings from Norman, so the aisle, the dumpster pad, and the shell elevations are one coordinated package — which is how south-metro developer and district schedules actually get met.",
    faqs: [
      {
        question: "Can you resurface a Moore parking lot without closing the business?",
        answer:
          "In most cases, yes. We phase milling and paving section by section so tenants and customers keep usable parking while the work moves across the site.",
      },
      {
        question: "Do you pave for Moore Public Schools?",
        answer:
          "Yes. School paving is scheduled around academic calendars, with overlay-versus-reconstruction decisions made early enough that the break window remains achievable.",
      },
      {
        question: "Why does local mobilization matter for Moore asphalt work?",
        answer:
          "Asphalt has to be placed and compacted while hot. Short haul routes from our Norman base help keep the mat inside the temperature window and make weather-delay recovery faster.",
      },
    ],
  },

  // ── Moore × Metal ─────────────────────────────────────────────────────
  {
    citySlug: "moore",
    serviceSlug: "metal-buildings-roofing",
    h1: "Metal Buildings & Roofing in Moore",
    metaTitle: "Metal Buildings & Roofing in Moore, OK",
    metaDescription:
      "H&H Construction erects pre-engineered metal buildings and installs metal roofing for Moore commercial, school-support, and light industrial projects.",
    heroDescription:
      "Pre-engineered metal buildings and commercial metal roofing for Moore shops, commercial shells, and institutional support buildings — coordinated from nearby Norman.",
    localAngle: [
      "Moore's I-35 growth creates demand for metal building shells behind retail, contractor shops, storage buildings, and school or church support structures. These packages only stay on schedule when the foundation and anchor bolts match the manufacturer drawings before the crane day.",
      "Being one city north of our Norman headquarters means steel laydown, foundation verification, and punch response do not wait on a long metro mobilization. That matters when an occupied retail or campus neighbor will not tolerate an unplanned second crane day.",
      "Wind and collateral loads still govern central Oklahoma design, and expansive clay still governs the foundation. Ordering the building without settling rooftop equipment loads — or pouring concrete from a generic foundation plan — is how Moore metal building schedules die at erection.",
    ],
    applications: [
      "Contractor shops and storage buildings in Moore",
      "Commercial support shells along the I-35 corridor",
      "Church and school support metal buildings on occupied campuses",
      "Light industrial and warehouse shells",
      "Metal roofing repair and replacement on existing commercial structures",
    ],
    bundlePitch:
      "Moore metal building projects almost always share a site with concrete and paving. H&H holds the foundation, the lot, and the erection from Norman — so anchor bolts, dock pads, and truck aisles share one set of elevations and one short south-metro schedule.",
    faqs: [
      {
        question: "Do you erect metal buildings for Moore commercial and shop projects?",
        answer:
          "Yes. We erect pre-engineered metal buildings for commercial shells, contractor shops, storage, and institutional support buildings in Moore, working from the engineered manufacturer drawings.",
      },
      {
        question: "Can you pour the foundation and erect the building in Moore?",
        answer:
          "Yes. Anchor bolt placement is the highest-risk interface on a pre-engineered building. Holding concrete and erection under one contract is how that interface stays within tolerance.",
      },
      {
        question: "Do you install metal roofing in Moore as well?",
        answer:
          "Yes. We install and replace commercial metal roofing systems in addition to new building erection.",
      },
    ],
  },

  // ── Yukon × Concrete ──────────────────────────────────────────────────
  {
    citySlug: "yukon",
    serviceSlug: "concrete-construction",
    h1: "Commercial Concrete Construction in Yukon",
    metaTitle: "Commercial Concrete in Yukon, OK",
    metaDescription:
      "H&H Construction places commercial concrete foundations, slabs, sidewalks, and site flatwork for Yukon, OK — including I-40 and Garth Brooks corridor development.",
    heroDescription:
      "Foundations, slabs, sidewalks, curbs, and site concrete for Yukon retail, medical, and mixed-use growth along the I-40 and Kilpatrick Turnpike corridor.",
    localAngle: [
      "Yukon's concrete demand follows the I-40 and Garth Brooks Boulevard trade area — one of the stronger west-metro retail corridors — plus continuing pad development along Czech Hall Road and other growth streets. The corridor’s population is up roughly 17% since 2020. That is ground-up work delivered against developer and tenant opening dates: building pads, sidewalks, accessible routes, and site flatwork that have to be ready when the certificate of occupancy clock starts.",
      "Canadian County growth also brings medical offices, hospitality, and school-district packages that cannot slip casually. Institutional flatwork still has to finish inside break windows; retail pads still have to be ready when the tenant's opening date hits. Schedule honesty on the pour matters as much as the mix. Private development and HOA-governed commercial sites add another constraint — civil scope has to match approved site plans and inspection sign-offs before the next trade can start.",
      "From Norman, Yukon is a west-metro mobilization. Concrete still has a placement window, so plant timing and haul planning are part of the job — not an afterthought once the trucks are already in traffic on I-40. Haul routes also use the Kilpatrick Turnpike. Underneath the growth story is the same clay-heavy subgrade reality as the rest of central Oklahoma: a pad that skips base prep to hit a date will show it in mapped cracks within a season or two.",
      "Yukon’s mix of national retail anchors and local restaurant pads along Garth Brooks Boulevard creates two different scheduling pressures on the same corridor. Anchor-tenant packages run on hard opening dates tied to lease commencement; smaller outparcel work often has to fit between the anchor schedule and the paving crew. Sidewalks, curb ramps, and accessible routes on those sites get inspected against ADA tolerances before the certificate of occupancy — not after the tenant is already stocking shelves.",
      "Canadian County’s inspection and permitting path is not identical to Oklahoma City’s, and Yukon developers who assume one set of rules covers the whole west metro learn that on the first failed slope check. We work from approved civil plans and coordinate with the GC on inspection holds so the concrete package does not become the reason shell or paving trades sit idle waiting for a sign-off.",
    ],
    applications: [
      "Building pads for Yukon retail and restaurant sites near I-40 and Garth Brooks Boulevard",
      "Medical office and mixed-use site concrete packages",
      "HOA and private development sidewalks, curb, and accessible routes",
      "School and church sidewalks, curb, and accessible routes",
      "Sidewalks and ADA ramps for commercial site plans",
      "Concrete repair at existing Yukon commercial properties",
    ],
    approach:
      "Yukon projects move fast, so our preconstruction is built around dates that do not flex. We confirm subgrade conditions and base requirements early — proof-rolling, moisture treatment, and compaction before forming — so a soft spot does not appear under half the pad on pour day. On retail and mixed-use corridors, phasing keeps customer access and deliveries viable while sections cure. We coordinate with the GC on embeds and utility sleeves, plan concrete delivery across west-metro haul routes so the mix stays within temperature and time limits, and protect pours through Oklahoma weather swings. For HOA and private development work, we align with the approved site plan and inspection sequence so the civil package does not hold up shell or paving trades. Restaurant and hospitality pads along the I-40 frontage get section design matched to grease interceptors, delivery zones, and dumpster approaches — not a generic slab detail copied from an office park. When school or church work falls inside a break window, we confirm subgrade and reinforcement before the break starts so a late discovery does not eat the only weeks available. Timeline expectations are set against real placement and cure windows, not optimistic calendar guesses.",
    bundlePitch:
      "Yukon growth pads rarely need concrete alone. The same civil package usually includes paving and often a metal building or shell. H&H self-performs all three, so the pad, the lot, and the building elevations are bid and sequenced together instead of becoming three west-metro handoffs.",
    faqs: [
      {
        question: "Do you pour foundations for new Yukon commercial developments?",
        answer:
          "Yes. We place building pads, foundations, slabs, and site flatwork for retail, medical, restaurant, and mixed-use projects tied to Yukon's I-40 growth corridor. Anchor-tenant and outparcel work often share one site plan; we sequence pours so the civil package supports certificate-of-occupancy milestones instead of blocking them.",
      },
      {
        question: "Can you handle Yukon school or church concrete on a fixed calendar?",
        answer:
          "Yes. Institutional concrete is scheduled around academic and occupancy calendars, with access maintained while the work proceeds.",
      },
      {
        question: "How do you manage concrete deliveries to Yukon from Norman?",
        answer:
          "We plan plant timing and haul routes around the placement window so the mix arrives ready to place, accounting for west-metro traffic on I-40 and the turnpike approaches.",
      },
      {
        question: "Can you handle concrete scope for private and HOA-governed Yukon developments?",
        answer:
          "Yes. We work from approved site plans and inspection requirements on private commercial development, coordinating sidewalks, drives, and accessible routes so the civil package matches what the owner, engineer, and jurisdiction expect at turnover. HOA-governed sites often require documented slope and drainage compliance before acceptance — we build that into the pour sequence rather than treating inspection as a surprise at closeout.",
      },
      {
        question: "What timeline should a Yukon developer expect for new construction concrete?",
        answer:
          "Timeline depends on scope, weather, and cure requirements — not a generic calendar. We outline pour sequences, inspection holds, and strength milestones in preconstruction so a developer knows when paving, steel, or tenant work can follow without guessing. On fast-track retail along I-40, we identify which sections can cure in parallel and which inspection holds gate the next trade so the schedule reflects reality, not a spreadsheet assumption.",
      },
    ],
  },

  // ── Yukon × Asphalt ───────────────────────────────────────────────────
  {
    citySlug: "yukon",
    serviceSlug: "asphalt-paving",
    h1: "Commercial Asphalt Paving in Yukon",
    metaTitle: "Commercial Asphalt Paving in Yukon, OK",
    metaDescription:
      "H&H Construction builds and rehabilitates Yukon parking lots and commercial paving for retail, medical, and growth sites along I-40 and Garth Brooks Boulevard.",
    heroDescription:
      "Parking lot construction, overlays, and patching for Yukon's high-traffic retail corridor and west-metro commercial growth — built for volume and phased for occupied sites.",
    localAngle: [
      "Yukon parking lots take real traffic. The I-40 and Garth Brooks trade area sees heavy daily volume through national retail and restaurants, which means drainage, section thickness, and striping layout are not cosmetic details — they decide whether the lot lasts or alligators in the drive aisles.",
      "New mixed-use and commercial growth adds ground-up lots that have to open with the buildings. Existing centers need overlays or full-depth repair without closing stores. The wrong call between those two options is how owners pay for the same square footage twice.",
      "West-metro haul distance still matters for asphalt temperature. We plan plant-to-site timing so the mat hits the grade hot enough to compact to density — the difference between a durable lot and one that raveling starts early.",
    ],
    applications: [
      "New parking lots for Yukon retail and restaurant developments",
      "High-traffic overlays at occupied shopping centers",
      "Medical office and mixed-use paving packages",
      "School parking lot rehabilitation inside academic windows",
      "Full-depth repair where base failure has already started",
    ],
    bundlePitch:
      "Yukon commercial sites usually need the lot, the concrete pads, and sometimes a metal building finished on one calendar. H&H holds asphalt, concrete, and metal buildings so west-metro growth packages do not fragment into three subcontractors and three punch lists.",
    faqs: [
      {
        question: "Can you pave a busy Yukon retail lot without shutting it down?",
        answer:
          "Usually yes. We phase work in sections so stores keep customer parking and deliveries while milling and paving move across the site.",
      },
      {
        question: "Do Yukon's high traffic counts change how you design a parking lot?",
        answer:
          "They should. Drive aisles and approaches that see constant volume need honest section design and drainage. Building a high-traffic corridor lot like a quiet office park is how early failure starts.",
      },
      {
        question: "Do you build new lots for Yukon ground-up developments?",
        answer:
          "Yes. We construct parking lots, drives, and striping packages for retail, medical, and mixed-use projects along the I-40 growth corridor.",
      },
    ],
  },

  // ── Yukon × Metal ─────────────────────────────────────────────────────
  {
    citySlug: "yukon",
    serviceSlug: "metal-buildings-roofing",
    h1: "Metal Buildings & Roofing in Yukon",
    metaTitle: "Metal Buildings & Roofing in Yukon, OK",
    metaDescription:
      "H&H Construction erects pre-engineered metal buildings and installs metal roofing for Yukon commercial, medical-support, and light industrial projects.",
    heroDescription:
      "Pre-engineered metal buildings and commercial metal roofing for Yukon retail-support, shop, medical, and growth-corridor shells along I-40.",
    localAngle: [
      "Yukon's commercial growth creates steady demand for metal building shells — storage and shop space behind retail, medical-support buildings, light industrial structures, and developer shells that need to dry in fast for tenant improvement. The schedule only works when foundation and steel are coordinated before fabrication ships.",
      "Mixed-use and hospitality-adjacent development along corridors like Yukon Parkway and I-40 adds packages where the building, the lot, and the site concrete share one opening date. Splitting those trades across three subcontractors is how a west-metro shell misses its tenant date.",
      "Oklahoma wind loads and collateral equipment still belong in the order. Adding rooftop units after the frame is standing is far more expensive than sizing the building correctly when it is released for fabrication.",
    ],
    applications: [
      "Retail-support and shop buildings behind Yukon commercial centers",
      "Medical and mixed-use support metal buildings",
      "Light industrial and contractor shop shells",
      "Developer metal building shells ready for tenant improvement",
      "Metal roofing replacement on existing Yukon commercial structures",
    ],
    bundlePitch:
      "Yukon metal building projects almost always share a site with concrete and paving. H&H self-performs the foundation, the lot, and the erection so anchor bolts, grades, and truck access are one package — the practical way to keep a west-metro growth site on a single calendar.",
    faqs: [
      {
        question: "Do you erect metal buildings for Yukon commercial developments?",
        answer:
          "Yes. We erect pre-engineered metal buildings for commercial shells, shops, medical-support, and light industrial use in Yukon, working from the engineered manufacturer drawings.",
      },
      {
        question: "Can one contractor handle the foundation and the metal building in Yukon?",
        answer:
          "Yes — and that is usually the right buy. Anchor bolt placement has to match the steel drawings within tight tolerance, which is considerably easier when one contractor holds both scopes.",
      },
      {
        question: "Do you install metal roofing in Yukon?",
        answer:
          "Yes. We install and replace commercial metal roofing systems in addition to new pre-engineered building erection.",
      },
    ],
  },

  // ── Midwest City × Concrete ───────────────────────────────────────────
  {
    citySlug: "midwest-city",
    serviceSlug: "concrete-construction",
    h1: "Commercial Concrete Construction in Midwest City",
    metaTitle: "Commercial Concrete in Midwest City, OK",
    metaDescription:
      "H&H Construction places commercial concrete for Midwest City, OK — including retail, industrial, and defense-adjacent sites near Tinker Air Force Base and I-40.",
    heroDescription:
      "Foundations, slabs, sidewalks, and site concrete for Midwest City retail, industrial, and Tinker-adjacent projects along the I-40 corridor.",
    localAngle: [
      "Midwest City concrete work sits next to Tinker Air Force Base — Oklahoma's largest single-site employer — and the retail and hospitality corridors that serve it. SE 29th Street, Douglas Boulevard, and I-40 frontage keep a steady cycle of commercial pads, sidewalks, and flatwork tied to traffic that does not slow down for a pour.",
      "Defense-adjacent and industrial sites can add access, badging, or delivery constraints a normal retail pad does not have. Those belong in the schedule before forming starts. Rose State College and school work add the familiar academic-calendar constraint on top of private commercial demand.",
      "Industrial and aerospace-support facilities near the base often need thicker slabs, dock approaches, and dumpster pads built for truck and equipment loads — not passenger-car parking standards stretched to cover a yard. High-retail-traffic commercial sites punish weak sections and poor drainage; designing those lots like quiet office parks is how early cracking starts in the drive aisles.",
      "Town Center Plaza and the SE 29th Street / Douglas Boulevard gateway feed daily traffic through national retail anchors. Pads, sidewalks, and flatwork on those sites have to survive volume from day one, not after a honeymoon period. Tinker Air Force Base has roughly $7.5 billion in annual regional economic impact, and much of Midwest City’s commercial concrete demand sits next to that installation.",
      "Midwest City’s position on I-40 and the Tinker Parkway corridor makes it a daily destination for regional traffic — not just base employees. Retail pads along SE 29th Street and Air Depot Boulevard see loaded delivery trucks, commuter volume, and weekend shopping peaks on the same pavement. Drainage, joint layout, and section depth have to account for that mix from the first pour, because retrofitting a failed drive aisle at an operating anchor tenant is far more expensive than building it correctly once.",
      "From Norman, Midwest City is an east-metro mobilization with short response time when weather or coordination issues threaten a pour window. That matters on defense-adjacent sites where delivery windows are fixed and on retail corridors where a delayed section can hold up certificate of occupancy for the whole pad.",
    ],
    applications: [
      "Retail and hospitality pads along I-40 and SE 29th Street corridors",
      "Industrial and aerospace-support slabs and dock approaches near Tinker",
      "Tinker Business & Industrial Park facility and yard concrete",
      "Sidewalks, curb ramps, and ADA routes for commercial and public sites",
      "School and Rose State College campus flatwork inside academic windows",
      "Concrete repair at high-traffic Midwest City commercial properties",
    ],
    approach:
      "Midwest City pours start with how the site is used — retail traffic, industrial loads, or defense-adjacent access rules. We evaluate subgrade and base for the actual load, not a generic spec, and we place thicker sections and heavier reinforcement where forklifts, trailers, or equipment cycling demand it. When a site near Tinker requires delivery windows or access coordination, that plan is set before mobilization. On high-traffic retail corridors, phasing keeps the property open while sections cure; on industrial yards, joint layout and finish tolerances match how the slab will actually be operated. We coordinate embeds and utility conflicts with other trades, schedule deliveries to avoid peak corridor congestion where possible, and protect concrete through Oklahoma’s seasonal swings. Rose State and school packages get the same calendar discipline as Edmond work — subgrade and base confirmed early in the break so a late discovery does not push the pour into the next semester. For Tinker Business & Industrial Park facilities, we align section design with dock frequency and yard equipment paths so the owner is not replacing truck-court concrete two years after turnover. Punch and weather response run from our Norman headquarters on a short east-metro mobilization.",
    bundlePitch:
      "Midwest City sites near Tinker and I-40 often need concrete, heavy-duty paving, and a metal building shell in the same package. H&H self-performs all three, which keeps dock pads, truck aisles, and building elevations coordinated — and keeps access constraints in one schedule instead of three.",
    faqs: [
      {
        question: "Do you work on projects near Tinker Air Force Base?",
        answer:
          "Yes. We place commercial and industrial concrete for Midwest City sites that serve or sit near Tinker, and we plan for access or delivery constraints when the site requires them. When badging, delivery windows, or security rules apply, those constraints go into the schedule before forming — not after a truck is turned away at the gate.",
      },
      {
        question: "Can you pour heavy-duty slabs for industrial yards in Midwest City?",
        answer:
          "Yes. We place thickened slabs, dock approaches, and dumpster pads sized for truck and equipment traffic, not light retail parking loads.",
      },
      {
        question: "Do you handle Midwest City retail and restaurant concrete work?",
        answer:
          "Yes. We place building pads, sidewalks, and site flatwork for retail and hospitality projects along the I-40 and SE 29th corridors. Phasing keeps primary entrances and fire lanes open while sections cure so anchor tenants are not explaining a full-site closure to customers on a Saturday.",
      },
      {
        question: "What slab requirements apply to high-retail-traffic Midwest City commercial sites?",
        answer:
          "Drive aisles, approaches, and dumpster pads often need thicker sections and better base prep than stall areas. We match section design to traffic pattern and tell you when concrete outlasts asphalt in the highest-load zones — before the owner pays for the same area twice. On Town Center Plaza–style corridors, that usually means honest joint spacing in drive aisles and proof-rolled base under every truck path, not just under the building pad.",
      },
    ],
  },

  // ── Midwest City × Asphalt ────────────────────────────────────────────
  {
    citySlug: "midwest-city",
    serviceSlug: "asphalt-paving",
    h1: "Commercial Asphalt Paving in Midwest City",
    metaTitle: "Commercial Asphalt Paving in Midwest City, OK",
    metaDescription:
      "H&H Construction builds and rehabilitates Midwest City parking lots and industrial paving for retail, hospitality, and Tinker-adjacent sites along I-40.",
    heroDescription:
      "Parking lot construction, overlays, and heavy-duty paving for Midwest City retail, industrial, and defense-adjacent properties that see real daily traffic.",
    localAngle: [
      "Midwest City lots take Tinker-driven volume. Retail, hospitality, and service properties along I-40 and the SE 29th / Douglas gateway corridors see daytime traffic that punishes weak sections and poor drainage. Designing those lots like quiet office parks is how early alligatoring starts in the aisles.",
      "Industrial and aerospace-support yards near the base need a different answer again: thicker sections or concrete in truck zones, honest evaluation of overlay versus full-depth repair, and phasing that respects shift and shipping windows.",
      "Occupied retail cannot close for a full rebuild. The useful skill here is sequencing a high-traffic lot section by section so customers and deliveries keep moving while failed areas come out and new pavement goes down hot and compacted.",
    ],
    applications: [
      "High-traffic retail and hospitality parking lots along I-40",
      "Industrial yard and dock-approach paving near Tinker-adjacent sites",
      "Phased overlays at occupied Midwest City shopping centers",
      "School and campus lot rehabilitation inside academic windows",
      "Full-depth repair where base failure has already taken the lot",
    ],
    bundlePitch:
      "On Midwest City industrial and corridor sites, asphalt rarely stands alone. Dock pads often need concrete; many support facilities include a metal building. One contractor across paving, concrete, and the building means access constraints, truck aisles, and shell elevations share one plan — critical when the site sits near Tinker.",
    faqs: [
      {
        question: "Do you pave industrial yards near Tinker in Midwest City?",
        answer:
          "Yes. We build heavier sections for drive aisles, dock approaches, and yards that see truck and equipment traffic, and we will tell you when concrete is the better answer in the highest-load zones.",
      },
      {
        question: "Can you resurface a busy Midwest City retail lot without closing stores?",
        answer:
          "Usually yes. We phase milling and paving so customer parking and deliveries stay available while the work moves across the property.",
      },
      {
        question: "Do secure or restricted sites change paving schedules in Midwest City?",
        answer:
          "They can. Projects near Tinker may require delivery windows or access planning that belong in the schedule before mobilization, not after the mill crew arrives.",
      },
    ],
  },

  // ── Midwest City × Metal ──────────────────────────────────────────────
  {
    citySlug: "midwest-city",
    serviceSlug: "metal-buildings-roofing",
    h1: "Metal Buildings & Roofing in Midwest City",
    metaTitle: "Metal Buildings & Roofing in Midwest City, OK",
    metaDescription:
      "H&H Construction erects pre-engineered metal buildings and installs metal roofing for Midwest City industrial, aerospace-support, and commercial projects near Tinker and I-40.",
    heroDescription:
      "Pre-engineered metal buildings and commercial metal roofing for Midwest City industrial, aerospace-support, and commercial shells — including sites with Tinker-adjacent access constraints.",
    localAngle: [
      "Midwest City is one of the clearest metal building markets in the metro because of the aerospace and industrial cluster around Tinker Air Force Base, including the Tinker Business & Industrial Park area and related support facilities. Clear-span shops, storage, and industrial shells are everyday demand — not specialty one-offs.",
      "Defense-adjacent sites can change erection logistics: delivery windows, badging, and laydown limits may constrain crane days. Those constraints have to be in the plan before the building is released for fabrication, or the foundation waits on steel that cannot enter the site when expected.",
      "Retail and commercial shells along I-40 still need the same foundation-to-erection discipline as industrial work. Anchor bolts, wind loads, and collateral equipment do not get easier because the building sits next to a restaurant pad instead of a hangar-support shop.",
    ],
    applications: [
      "Industrial and aerospace-support metal buildings near Tinker",
      "Contractor shops and warehouse shells in Midwest City",
      "Commercial support buildings along the I-40 retail corridor",
      "Developer shells ready for tenant or agency build-out",
      "Metal roofing repair and replacement on existing industrial structures",
    ],
    bundlePitch:
      "Midwest City metal building packages often include heavy-duty paving and foundation concrete on sites that already have access rules. H&H self-performs concrete, asphalt, and metal buildings so the shell, the dock, and the yard are one coordinated scope — the difference between a building that opens on time and one that stalls at the gate.",
    faqs: [
      {
        question: "Do you erect metal buildings for industrial sites near Tinker?",
        answer:
          "Yes. We erect pre-engineered metal buildings for industrial, aerospace-support, shop, and warehouse use in Midwest City, and we plan around site access requirements when the project needs them.",
      },
      {
        question: "Can you handle foundation and erection together on a restricted site?",
        answer:
          "Yes. Holding concrete and steel under one contract is especially useful when delivery windows and access rules already constrain the schedule — fewer handoffs means fewer chances to miss a crane day.",
      },
      {
        question: "Do you install metal roofing in Midwest City?",
        answer:
          "Yes. We install and replace commercial and industrial metal roofing systems in addition to new building erection.",
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
  // Asphalt city landings live at /services/asphalt-paving/[city].
  return cityServicePages
    .filter((entry) => entry.serviceSlug !== "asphalt-paving")
    .map((entry) => ({
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
  if (serviceSlug === "asphalt-paving") {
    return `/services/asphalt-paving/${citySlug}`;
  }

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
