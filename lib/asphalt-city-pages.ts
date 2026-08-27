import { priorityCities, siteConfig } from "@/lib/site-data";

export type AsphaltCityServiceBlock = {
  title: string;
  body: string;
};

export type AsphaltCityAudience = {
  title: string;
  body: string;
};

export type AsphaltCityProcessStep = {
  title: string;
  body: string;
};

export type AsphaltCityPage = {
  citySlug: string;
  cityName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  introHeading: string;
  intro: string[];
  servicesHeading: string;
  services: AsphaltCityServiceBlock[];
  climateHeading: string;
  climate: string[];
  audiencesHeading: string;
  audiences: AsphaltCityAudience[];
  localPartnerHeading: string;
  localPartner: string[];
  processHeading: string;
  process: AsphaltCityProcessStep[];
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaBody: string;
};

/**
 * Commercial asphalt city landing pages at /services/asphalt-paving/[city].
 * Written for commercial intent: parking lots, mill & overlay, full-depth
 * reconstruction, industrial yards, striping, and pavement maintenance.
 */
export const asphaltCityPages: AsphaltCityPage[] = [
  {
    citySlug: "norman",
    cityName: "Norman",
    h1: "Commercial Asphalt Paving in Norman, OK",
    metaTitle:
      "Asphalt Paving Norman OK | Commercial Paving Contractor | H&H Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving, parking lot construction, mill-and-overlay, and pavement maintenance in Norman, OK. Serving contractors, developers, and the University of Oklahoma area. Request a bid today.",
    heroLead:
      "Commercial parking lot paving, mill-and-overlay resurfacing, full-depth reconstruction, and industrial asphalt work for Norman developments, property managers, and Cleveland County public sites — from a contractor based in Norman.",
    introHeading: "Commercial Asphalt Paving Built for Norman's Growth",
    intro: [
      "Norman is no longer just a college town anchored by the University of Oklahoma — it is Oklahoma's third-largest city and one of the fastest-growing commercial real estate markets in the state. With more than 132,000 residents and a metro area pushing past 1.5 million, Norman's development pipeline has accelerated sharply in recent years. In 2025 alone, the city issued permits for 44 new commercial buildings totaling $158 million in non-residential construction value. H&H Construction provides the commercial asphalt paving that keeps pace with that growth — from new commercial parking lot construction to mill-and-overlay resurfacing, full-depth reconstruction, and ongoing pavement maintenance.",
      "Whether you are developing near the OU Research Campus, building out retail in the fast-growing Cedar Lane corridor, managing pavement for a healthcare facility tied to Norman Regional's expansion, or rebuilding an industrial yard that sees loaded truck traffic, we deliver hot-mix asphalt paving built to commercial standards and Oklahoma's demanding climate.",
    ],
    servicesHeading: "Our Commercial Asphalt Paving Services in Norman",
    services: [
      {
        title: "New Commercial Asphalt Installation",
        body: "Full-depth commercial asphalt paving for new retail centers, office and medical pads, industrial yards, multi-family parking, and contractor facilities. We handle excavation, grading, aggregate base preparation, and hot-mix finish paving as a single scope, coordinated with your general contractor's schedule.",
      },
      {
        title: "Commercial Parking Lot Construction & Reconstruction",
        body: "From ground-up commercial parking lot builds to full-depth reconstruction of failed pavement, we design and install lots that meet ADA accessibility requirements, proper drainage slope, heavy-drive-aisle sections where trucks turn, and City of Norman / Cleveland County expectations.",
      },
      {
        title: "Asphalt Overlays, Mill-and-Overlay & Resurfacing",
        body: "When a commercial parking lot or private roadway has worn down but the base is still sound, mill-and-overlay or resurfacing extends pavement life without the cost of full replacement — a common need for Norman's older commercial corridors near downtown and Campus Corner. We will tell you when an overlay is the wrong answer because the base has already failed.",
      },
      {
        title: "Patching, Pothole Repair & Pavement Maintenance",
        body: "Targeted full-depth patches for cracked, sunken, or pothole-damaged commercial asphalt, plus crack sealing and sealcoat maintenance where the section is still structurally sound — addressed before minor damage becomes a liability and tenant-access issue for property owners and managers.",
      },
      {
        title: "Industrial Yard & Heavy-Duty Asphalt Paving",
        body: "Thicker commercial asphalt sections for industrial yards, contractor shops, dumpster approaches, and drive aisles that see loaded trucks — or an honest recommendation to use concrete in the highest-load zones so the rest of the lot can stay asphalt.",
      },
      {
        title: "Striping, Layout & ADA Marking",
        body: "Fresh commercial lot striping, ADA-compliant stall and access-aisle layout, directional arrows, fire-lane marking, and stop bars for new and resurfaced Norman parking lots.",
      },
    ],
    climateHeading: "Why Norman's Soil and Climate Matter for Commercial Asphalt",
    climate: [
      "Central Oklahoma's clay-heavy soil expands and contracts significantly with moisture, and Norman sees its share of both heavy spring rain and hard summer heat. Commercial asphalt that is not built on a properly compacted, well-drained base will crack, rut, or heave within a few years — regardless of how good the hot-mix design is on top.",
      "We grade and prepare every Norman commercial site to account for expansive clay, seasonal freeze-thaw cycles, and actual traffic loading before a single ton of asphalt goes down. That base work is the single biggest factor in how long a commercial parking lot or industrial yard actually lasts.",
    ],
    audiencesHeading: "Who We Serve with Commercial Asphalt in Norman",
    audiences: [
      {
        title: "Developers & General Contractors",
        body: "Site work and commercial paving packages that integrate with your project timeline — ground-up retail and mixed-use parking lots, campus-adjacent development, and industrial pads that need the asphalt and the concrete scopes coordinated.",
      },
      {
        title: "Property Owners & Managers",
        body: "Commercial parking lot rehabilitation, mill-and-overlay, striping refreshes, and preventive pavement maintenance plans that protect the asset, keep tenants parked, and reduce trip-and-fall liability exposure.",
      },
      {
        title: "Healthcare & Institutional Facilities",
        body: "Commercial asphalt scoped around active operations — clinics, medical office buildings, and campus facilities — with phased paving so patients, staff, and deliveries keep access throughout the work.",
      },
      {
        title: "Retail & Commercial Developments",
        body: "New commercial parking lot construction and ongoing asphalt maintenance for retail growth along Norman's northwest and southeast corridors, including high-turnover lots that need durable drive aisles and clean striping.",
      },
      {
        title: "Industrial & Contractor Facilities",
        body: "Heavy-duty asphalt paving and yard reconstruction for shops, yards, and facilities where passenger-car lot sections fail early under equipment and truck traffic.",
      },
      {
        title: "Municipal & Public Projects",
        body: "Road, parking, and public-facility asphalt paving delivered to City of Norman and Cleveland County specifications, including work that must stay open to the public during construction.",
      },
    ],
    localPartnerHeading: "A Local Commercial Paving Partner in Norman",
    localPartner: [
      `H&H Construction is based in Norman — ${siteConfig.address.street} ${siteConfig.address.suite} — and we built our business around commercial-scale concrete, asphalt paving, and metal building work across the Oklahoma City metro. Being local means we understand Norman's permitting process, know the contractors and inspectors working the same job sites, and can respond quickly when a paving window or project timeline shifts.`,
      "We work directly with general contractors, developers, property owners, and public entities to scope, bid, and deliver commercial asphalt paving on schedule. Every project starts with an on-site evaluation of soil conditions, drainage, existing pavement structure, and traffic loads before we provide a detailed proposal.",
    ],
    processHeading: "Our Commercial Asphalt Paving Process",
    process: [
      {
        title: "Site Evaluation",
        body: "We walk the commercial site to assess existing pavement condition, soil type, drainage flow, and expected traffic loads — including whether drive aisles need a heavier section than stall areas — before quoting anything.",
      },
      {
        title: "Detailed Proposal",
        body: "You receive a written scope covering mill-and-overlay versus full-depth reconstruction, base preparation, hot-mix specifications, phasing, timeline, and cost — no vague line items.",
      },
      {
        title: "Base Preparation",
        body: "Excavation, grading, and compaction are done to spec before any asphalt is laid. On Norman clay, this step determines whether the commercial lot lasts fifteen years or starts reflecting cracks in two.",
      },
      {
        title: "Paving & Finishing",
        body: "Hot-mix asphalt is installed to the designed thickness and compacted while the mat is still hot — whether the application is a retail parking lot, a medical campus drive, or an industrial yard.",
      },
      {
        title: "Striping & Walkthrough",
        body: "We stripe to the approved layout, confirm ADA stall and access-aisle compliance, and walk the finished commercial paving project with you before closing out the job.",
      },
    ],
    faqs: [
      {
        question: "How long does commercial asphalt paving take in Norman?",
        answer:
          "Most standard commercial parking lots take one to two weeks from mobilization to finished striping, depending on lot size and whether full-depth reconstruction is required. Mill-and-overlay and resurfacing projects are typically faster when the base is sound.",
      },
      {
        question: "Does Norman's clay soil really affect commercial asphalt lifespan?",
        answer:
          "Yes. Improperly prepared bases are the leading cause of early cracking and rutting in central Oklahoma. Proper grading, drainage, and compaction before paving is what allows commercial asphalt to reach a full 15–20 year service life under normal traffic.",
      },
      {
        question: "Do you handle both new commercial paving and repair work?",
        answer:
          "Yes. H&H Construction handles the full range of commercial asphalt work in Norman — new parking lot construction, industrial yard paving, mill-and-overlay, full-depth patching, pothole repair, sealcoat maintenance, and striping.",
      },
      {
        question: "Can you pave near the University of Oklahoma without disrupting campus?",
        answer:
          "We phase university-adjacent commercial paving around event schedules, football weekends, and move-in so lots stay usable when campus needs them. Those dates belong in the plan before milling starts.",
      },
      {
        question: "When is mill-and-overlay the wrong answer for a Norman parking lot?",
        answer:
          "When cracking is load-related or the base has failed. An overlay over a moving base reflects the same cracks through within a season or two. We evaluate that on site before recommending resurfacing versus full-depth reconstruction.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Paving Bid in Norman",
    ctaBody:
      "If you have a commercial paving project in Norman — new parking lot construction, mill-and-overlay, industrial yard work, or a lot in need of repair — H&H Construction is ready to review your scope and provide a competitive bid. Call 405-476-5476 or submit a bid request online. We serve Norman and the surrounding Oklahoma City metro, including Moore, Edmond, Oklahoma City, and beyond.",
  },

  {
    citySlug: "oklahoma-city",
    cityName: "Oklahoma City",
    h1: "Commercial Asphalt Paving in Oklahoma City, OK",
    metaTitle:
      "Asphalt Paving Oklahoma City OK | Commercial Paving Contractor | H&H Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving, parking lot construction, mill-and-overlay, and pavement maintenance in Oklahoma City, OK. Serving developers, municipalities, and property owners statewide. Request a bid today.",
    heroLead:
      "Commercial parking lot paving, industrial yard asphalt, mill-and-overlay resurfacing, full-depth reconstruction, and municipal paving for Oklahoma City developments, warehouses, and public sites across the metro.",
    introHeading:
      "Commercial Asphalt Paving for a City Under Constant Construction",
    intro: [
      "Oklahoma City has passed 700,000 residents and continues adding population faster than almost any city its size in the country. Downtown alone is in the middle of a generational build-out — MAPS 4 projects, the new Thunder arena backed by a $900 million bond, and the Boardwalk at Bricktown development are reshaping the city's core, while commercial and industrial growth continues to spread across the metro. That level of construction activity means a constant need for commercial-grade asphalt paving, and H&H Construction is built to deliver it — from new commercial parking lot installation to mill-and-overlay resurfacing and full-depth pavement reconstruction across the OKC metro.",
      "We work with general contractors, developers, municipalities, and property owners on commercial asphalt projects ranging from single retail lots to large industrial yard paving and municipal paving packages — including heavy-duty sections for truck traffic that passenger-car lot designs cannot survive.",
    ],
    servicesHeading: "Our Commercial Asphalt Paving Services in Oklahoma City",
    services: [
      {
        title: "New Commercial & Industrial Asphalt Installation",
        body: "Complete commercial paving for new developments, industrial yards, warehouse docks, and municipal roadways — excavation, grading, aggregate base preparation, and hot-mix finish paving delivered as one coordinated scope with section thickness matched to actual traffic loads.",
      },
      {
        title: "Commercial Parking Lot Construction & Reconstruction",
        body: "New commercial parking lot construction and full-depth reconstruction for failed or aging pavement, engineered for OKC's traffic loads, drainage requirements, ADA compliance, and drive aisles that see more than light passenger cars.",
      },
      {
        title: "Asphalt Overlays, Mill-and-Overlay & Resurfacing",
        body: "Commercial overlay and mill-and-overlay solutions for lots and private roadways where the base remains sound but the surface has oxidized or deteriorated — a frequent need across OKC's older commercial corridors and industrial districts. We will tell you when an overlay is the wrong answer because the base has already failed.",
      },
      {
        title: "Heavy-Duty Industrial Yard Paving",
        body: "Thicker commercial asphalt sections for dock approaches, trailer yards, dumpster pads, and distribution facilities handling constant truck traffic — or an honest recommendation to use concrete in the highest-load zones.",
      },
      {
        title: "Patching, Pothole Repair & Pavement Maintenance",
        body: "Fast, targeted full-depth patches for cracking, potholes, and drainage-related pavement failure, plus crack sealing and sealcoat maintenance where the commercial section is still structurally sound — before distress escalates into a larger liability.",
      },
      {
        title: "Striping, Layout & ADA Marking",
        body: "ADA-compliant commercial striping, stall layout, van-accessible access aisles, directional markings, and fire-lane designation for new and resurfaced Oklahoma City lots.",
      },
    ],
    climateHeading:
      "Paving Built for Oklahoma City's Soil, Weather, and Scale",
    climate: [
      "Oklahoma City's clay-heavy soil and dramatic seasonal swings — hard summer heat followed by winter freeze-thaw cycles — put real stress on commercial asphalt that is not properly engineered from the base up. Standing water and weak compaction destroy lots from the bottom up; the mat on top cannot save a section that was never drained correctly.",
      "On top of that, OKC's scale means many projects involve heavier truck traffic, higher-volume parking demand, or municipal-grade specifications that require tighter tolerances than a typical residential job. We grade, compact, and build every base to account for both the region's soil conditions and the specific traffic load of your commercial site, which is what keeps asphalt performing for well over a decade instead of failing early.",
    ],
    audiencesHeading: "Who We Serve with Commercial Asphalt in Oklahoma City",
    audiences: [
      {
        title: "General Contractors & Developers",
        body: "Site work and commercial paving packages that integrate with your broader construction schedule — from ground-up retail and industrial pads to downtown redevelopment next to MAPS and arena-related work.",
      },
      {
        title: "Municipalities & Public Entities",
        body: "Roadway, parking, and public-facility asphalt paving delivered to city and county specifications, including projects for courthouses, parks, transit-adjacent sites, and public works that must stay open during construction.",
      },
      {
        title: "School Districts",
        body: "Commercial parking lots, bus lanes, and campus paving scoped to minimize disruption to school operations and finish inside academic calendar windows.",
      },
      {
        title: "Industrial Facilities",
        body: "Heavy-duty commercial asphalt built for yards, loading areas, and distribution facilities handling constant truck traffic along the I-40, I-240, and airport corridors.",
      },
      {
        title: "Commercial Property Owners",
        body: "Parking lot rehabilitation, mill-and-overlay resurfacing, and preventive pavement maintenance for retail centers, offices, and mixed-use properties across the metro — phased so tenants and deliveries keep access.",
      },
    ],
    localPartnerHeading:
      "A Metro-Wide Contractor Rooted in Oklahoma City's Growth",
    localPartner: [
      "H&H Construction is based in Norman and works throughout the greater Oklahoma City metro on commercial concrete, asphalt paving, and metal building projects. Our Chandler County Courthouse parking lot rehabilitation — a two-phase project including sealcoat, restriping, asphalt overlay, full-depth patching, and curb replacement — reflects the kind of municipal-grade commercial asphalt work we deliver across the metro.",
      "We coordinate directly with general contractors, developers, municipal staff, and property managers, starting every bid with a full site evaluation of soil, drainage, existing pavement structure, and traffic conditions before recommending overlay versus full-depth reconstruction.",
    ],
    processHeading: "Our Commercial Asphalt Paving Process",
    process: [
      {
        title: "Site Evaluation",
        body: "We assess pavement condition, soil type, drainage flow, and expected traffic loads — including heavier volumes for municipal and industrial sites — before recommending mill-and-overlay or full-depth commercial reconstruction.",
      },
      {
        title: "Detailed Proposal",
        body: "A written commercial asphalt scope covering base preparation, hot-mix specs, phasing, timeline, and cost, scaled to the size and complexity of the Oklahoma City project.",
      },
      {
        title: "Base Preparation",
        body: "Excavation, grading, and compaction done to spec, since this is the step that most affects how long commercial pavement lasts under OKC's traffic and climate conditions.",
      },
      {
        title: "Paving & Finishing",
        body: "Hot-mix asphalt installed to the designed thickness and compacted while the mat is still hot, with equipment matched to the job — from retail parking lots to industrial yards and municipal roadways.",
      },
      {
        title: "Striping & Walkthrough",
        body: "Code-compliant commercial striping, ADA verification, fire-lane marking, and a final walkthrough before project closeout.",
      },
    ],
    faqs: [
      {
        question:
          "How long does a commercial paving project take in Oklahoma City?",
        answer:
          "Timeline depends heavily on scope — a standard commercial retail lot typically runs one to two weeks from mobilization to finished striping, while larger municipal or industrial projects with full-depth reconstruction can take longer. We provide a specific timeline with every proposal.",
      },
      {
        question: "Do you handle municipal and public sector paving projects?",
        answer:
          "Yes. We've completed municipal work including courthouse parking lot rehabilitation for Chandler County — sealcoat, restriping, asphalt overlay, full-depth patching, and curb replacement — and we regularly bid public infrastructure and commercial asphalt projects across the OKC metro.",
      },
      {
        question:
          "What makes Oklahoma City pavement different from other markets?",
        answer:
          "OKC's combination of clay-heavy soil, seasonal freeze-thaw cycles, and higher traffic volumes from the metro's growth means base preparation and material specification both need to be dialed in correctly — cutting corners on either shows up as commercial pavement failure within a few years.",
      },
      {
        question:
          "Do you pave industrial yards for heavy trucks in Oklahoma City?",
        answer:
          "Yes. We build heavier commercial asphalt sections for drive aisles, dock approaches, and yards that see loaded trailer traffic — and we will tell you when concrete is the better answer for the highest-load zones.",
      },
      {
        question:
          "Can you pave without shutting down an occupied Oklahoma City property?",
        answer:
          "Usually yes. We phase commercial mill-and-overlay and reconstruction in sections so parking, deliveries, and emergency access stay available for retail, medical, and warehouse sites.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Paving Bid in Oklahoma City",
    ctaBody:
      "If you have a commercial, municipal, or industrial paving project anywhere in the Oklahoma City metro, H&H Construction is ready to scope it. Call 405-476-5476 or submit a bid request online. We serve Oklahoma City and the surrounding metro, including Edmond, Norman, Yukon, Midwest City, and statewide.",
  },

  {
    citySlug: "edmond",
    cityName: "Edmond",
    h1: "Commercial Asphalt Paving in Edmond, OK",
    metaTitle:
      "Asphalt Paving Edmond OK | Commercial Paving Contractor | H&H Construction",
    metaDescription:
      "H&H Construction delivers commercial asphalt paving, parking lot construction, mill-and-overlay, and pavement maintenance in Edmond, OK. Serving developers, retail centers, and institutional facilities. Request a bid today.",
    heroLead:
      "Commercial parking lot paving, mill-and-overlay resurfacing, full-depth reconstruction, and pavement maintenance for Edmond retail centers, corporate campuses, healthcare facilities, and institutional sites — built for north-metro traffic volumes.",
    introHeading:
      "Commercial Asphalt Paving for One of Oklahoma's Fastest-Growing Cities",
    intro: [
      "Edmond has grown into the Oklahoma City metro's premier address for commercial development — a city of roughly 99,000 residents with one of the highest median household incomes in the state and a steady pipeline of retail, healthcare, and institutional construction. Growth plans like the East Edmond 15A proposal, which includes 120 acres of new commercial space alongside 4,500 homes, point to years of continued commercial asphalt demand across the city. H&H Construction provides the commercial asphalt paving — new hot-mix installation, commercial parking lot construction, mill-and-overlay resurfacing, full-depth reconstruction, and ongoing pavement maintenance — that keeps Edmond's developments performing at the standard the city is known for.",
      "From high-turnover retail centers along US-77 and I-35 to institutional facilities near the University of Central Oklahoma, we deliver commercial asphalt paving built for Edmond's traffic volumes, expansive clay soils, and long-term durability expectations — not residential driveway standards stretched across a commercial lot.",
    ],
    servicesHeading: "Our Commercial Asphalt Paving Services in Edmond",
    services: [
      {
        title: "New Commercial Asphalt Installation",
        body: "Complete commercial paving packages for new retail buildouts, corporate campuses, medical office pads, and mixed-use developments — including excavation, grading, aggregate base preparation, and hot-mix finish paving coordinated with your general contractor's schedule.",
      },
      {
        title: "Commercial Parking Lot Construction & Reconstruction",
        body: "Ground-up commercial parking lot construction and full-depth reconstruction for aging pavement, engineered for proper drainage slope, ADA-compliant accessibility, durable drive aisles, and the daily traffic Edmond retail and office properties actually see.",
      },
      {
        title: "Asphalt Overlays, Mill-and-Overlay & Resurfacing",
        body: "Cost-effective commercial resurfacing for parking lots and private roads where the base remains structurally sound but the wearing surface has oxidized or worn down — common across Edmond's established commercial corridors. We will tell you when mill-and-overlay is the wrong answer because the base has already failed.",
      },
      {
        title: "Full-Depth Reconstruction",
        body: "Structural rebuilds where alligator cracking, pumping, or failed base mean an overlay would only buy a short season of appearance. Full-depth commercial reconstruction costs more up front and considerably less over a decade of Edmond traffic.",
      },
      {
        title: "Patching, Pothole Repair & Pavement Maintenance",
        body: "Responsive full-depth patches for cracking, potholes, and localized pavement failure, plus crack sealing and sealcoat maintenance where the commercial section is still sound — addressed before distress becomes a liability, drainage problem, or tenant complaint.",
      },
      {
        title: "Striping, Layout & ADA Marking",
        body: "Clean, code-compliant commercial lot striping and stall layout for new construction and refreshed lots, including ADA accessible spaces, van-accessible access aisles, directional arrows, and fire-lane markings.",
      },
    ],
    climateHeading: "Built for Edmond's Soil and Weather Conditions",
    climate: [
      "Like the rest of central Oklahoma, Edmond sits on expansive clay soils that shift with seasonal moisture changes, and the city sees the same freeze-thaw cycles and summer heat that stress commercial asphalt across the metro. A parking lot or private roadway that is not properly graded, drained, and compacted before paving will show cracking and rutting well ahead of schedule — no matter how good the hot-mix looks on day one.",
      "We evaluate soil, drainage, and traffic loading on every Edmond commercial site before paving begins, which is what separates asphalt that lasts fifteen-plus years from asphalt that needs rework in three. Occupied retail and medical properties also get section-by-section phasing so commercial operations keep parking while failed areas come out.",
    ],
    audiencesHeading: "Who We Serve with Commercial Asphalt in Edmond",
    audiences: [
      {
        title: "Developers & General Contractors",
        body: "Commercial paving scopes integrated into your project schedule for ground-up retail, office, and mixed-use development — including the East Edmond growth corridor — with base prep and hot-mix timed to pad delivery and building turnover.",
      },
      {
        title: "Retail & Commercial Property Owners",
        body: "New commercial parking lot construction, mill-and-overlay, striping refreshes, and ongoing pavement maintenance plans for shopping centers, corporate offices, and standalone retail that cannot afford early aisle failure.",
      },
      {
        title: "Healthcare & Institutional Facilities",
        body: "Commercial asphalt scheduled around active operations for clinics, medical offices, and educational facilities near UCO — phased so patients, staff, and deliveries keep access throughout the work.",
      },
      {
        title: "Multi-Family & HOA Private Roads",
        body: "Private roadway paving, resurfacing, and repair for Edmond's multi-family and planned communities where commercial-grade asphalt sections and drainage still decide how long the pavement lasts.",
      },
      {
        title: "Municipal & Public Projects",
        body: "Roadway, parking, and public-facility asphalt paving delivered to City of Edmond and Oklahoma County specifications, including work that must stay open to the public during construction.",
      },
    ],
    localPartnerHeading:
      "A Local Contractor Serving Edmond's Commercial Market",
    localPartner: [
      "H&H Construction is headquartered in Norman and works throughout the Oklahoma City metro, including Edmond, on a daily basis. We understand the pace and standards of Edmond's commercial development — from permitting requirements to the expectation of high-quality finish work on visible retail and campus lots — and we scope every commercial asphalt project accordingly.",
      "We coordinate directly with general contractors, developers, property managers, and municipal staff to keep commercial paving on schedule and within budget, starting with a full site evaluation of soil, drainage, existing pavement structure, and traffic loads before any bid is finalized.",
    ],
    processHeading: "Our Commercial Asphalt Paving Process",
    process: [
      {
        title: "Site Evaluation",
        body: "We assess existing pavement condition, soil type, drainage flow, and expected commercial traffic — including whether drive aisles need a heavier section than stall areas — before providing a proposal.",
      },
      {
        title: "Detailed Proposal",
        body: "A written commercial asphalt scope covering mill-and-overlay versus full-depth reconstruction, base preparation, hot-mix specifications, phasing, timeline, and cost, tailored to your specific Edmond site.",
      },
      {
        title: "Base Preparation",
        body: "Proper excavation, grading, and compaction before paving begins — the step that determines whether Edmond clay lets a commercial lot reach fifteen years or starts reflecting cracks in three.",
      },
      {
        title: "Paving & Finishing",
        body: "Hot-mix asphalt installed to the designed thickness and compacted while the mat is still hot, whether the application is a retail parking lot, corporate campus drive, medical facility, or private roadway.",
      },
      {
        title: "Striping & Walkthrough",
        body: "Code-compliant commercial striping, ADA verification, fire-lane marking, and a final walkthrough before the project closes out.",
      },
    ],
    faqs: [
      {
        question:
          "How long does a commercial parking lot project take in Edmond?",
        answer:
          "Most commercial parking lot projects run one to two weeks from mobilization to finished striping, depending on lot size and whether the job requires full-depth reconstruction or mill-and-overlay resurfacing.",
      },
      {
        question:
          "Why does base preparation matter so much for Edmond pavement?",
        answer:
          "Edmond's clay soils shift with moisture, and a poorly compacted base is the number one reason commercial lots crack and rut early. Proper grading, drainage, and compaction are what get commercial asphalt to its full expected lifespan.",
      },
      {
        question: "Can you work around an active retail center or business?",
        answer:
          "Yes. We regularly schedule commercial paving in phases, during off-hours, or around active operations to minimize disruption for retail centers, medical offices, and other occupied commercial properties.",
      },
      {
        question:
          "When is mill-and-overlay the wrong answer for an Edmond parking lot?",
        answer:
          "When cracking is load-related or the base has failed. An overlay over a moving base reflects the same cracks through within a season or two. We evaluate that on site before recommending resurfacing versus full-depth commercial reconstruction.",
      },
      {
        question: "Do you handle both new commercial paving and repair work?",
        answer:
          "Yes. H&H Construction handles the full commercial asphalt range in Edmond — new parking lot construction, mill-and-overlay, full-depth reconstruction, patching, pavement maintenance, and ADA striping.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Paving Bid in Edmond",
    ctaBody:
      "Whether you are breaking ground on new commercial space or need to rehabilitate an aging parking lot, H&H Construction is ready to scope your Edmond commercial paving project. Call 405-476-5476 or submit a bid request online. We proudly serve Edmond and the surrounding Oklahoma City metro, including Oklahoma City, Norman, Yukon, and beyond.",
  },

  {
    citySlug: "moore",
    cityName: "Moore",
    h1: "Commercial Asphalt Paving in Moore, OK",
    metaTitle:
      "Asphalt Paving Moore OK | Commercial Parking Lots | H&H Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving, parking lot construction, and mill-and-overlay resurfacing in Moore, OK for retail, school, and I-35 corridor sites.",
    heroLead:
      "Commercial parking lot paving, overlays, and full-depth asphalt repair for Moore retail, school, and corridor commercial properties — short mobilization from Norman.",
    introHeading: "I-35 Corridor Commercial Asphalt in Moore",
    intro: [
      "Moore commercial paving is mostly corridor retail, school lots, and occupied property rehabilitation along I-35. New pads need lots built correctly the first time; existing centers need mill-and-overlay or full-depth repair without shutting the property down.",
      "H&H Construction delivers commercial asphalt paving for Moore from our Norman headquarters one city south — new parking lot construction, resurfacing, industrial-light yard work, striping, and pavement maintenance.",
    ],
    servicesHeading: "Commercial Asphalt Services in Moore",
    services: [
      {
        title: "Commercial Parking Lot Construction",
        body: "Full-depth asphalt paving for Moore retail and commercial pads along the interstate corridor.",
      },
      {
        title: "Mill-and-Overlay & Reconstruction",
        body: "Resurfacing when the base is sound; full-depth rebuild when school or retail lots have already failed structurally.",
      },
      {
        title: "School & Campus Paving",
        body: "Bus loops, staff lots, and campus drives scheduled inside academic break windows.",
      },
      {
        title: "Patching, Maintenance & Striping",
        body: "Pothole repair, crack sealing, sealcoat, and commercial striping that keep Moore lots usable and compliant.",
      },
    ],
    climateHeading: "South-Metro Soils and Occupied-Lot Reality",
    climate: [
      "Expansive clay and freeze-thaw cycling still govern Moore base prep. Skipping compaction or drainage on a commercial lot is how early alligatoring starts in the drive aisles.",
      "School-district work runs on the academic calendar. Evaluating overlay versus full-depth repair up front is what keeps a summer paving window real.",
    ],
    audiencesHeading: "Who We Pave for in Moore",
    audiences: [
      {
        title: "Retail Developers & GCs",
        body: "Commercial parking lots timed to I-35 corridor pad delivery and store openings.",
      },
      {
        title: "School Districts",
        body: "Campus asphalt that must finish before fall with access maintained for summer programs.",
      },
      {
        title: "Property Owners",
        body: "Phased overlays and repairs on occupied Moore shopping centers and offices.",
      },
      {
        title: "Municipal Projects",
        body: "Public-facility commercial paving coordinated around public access.",
      },
    ],
    localPartnerHeading: "Short Mobilization from Norman",
    localPartner: [
      "Moore is one of the shortest commercial paving mobilizations H&H runs. Hot-mix haul distance stays practical, and punch items do not wait on a cross-metro drive.",
      "When Moore sites also need concrete pads or a metal building, we keep those scopes on the same local crew stack.",
    ],
    processHeading: "Moore Commercial Paving Process",
    process: [
      {
        title: "Evaluate the Lot",
        body: "Surface wear versus base failure diagnosed before commercial overlay is priced.",
      },
      {
        title: "Propose Scope & Phasing",
        body: "Written asphalt scope with school or retail access constraints built in.",
      },
      {
        title: "Prep & Pave",
        body: "Milling, base repair, and hot-mix commercial asphalt compacted in temperature.",
      },
      {
        title: "Stripe & Turn Over",
        body: "ADA and fire-lane marking completed before the lot reopens.",
      },
    ],
    faqs: [
      {
        question: "Do you pave Moore school parking lots?",
        answer:
          "Yes. Campus commercial asphalt is commonly completed inside summer windows with phased access for staff and programs.",
      },
      {
        question: "Can Moore retail lots stay open during paving?",
        answer:
          "In most cases yes — we sequence mill-and-overlay or reconstruction section by section so tenants keep parking and deliveries.",
      },
      {
        question: "How far is H&H from Moore projects?",
        answer:
          "We are based in Norman, one city south on I-35, which keeps commercial paving mobilization short.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Bid in Moore",
    ctaBody:
      "Need commercial parking lot paving or asphalt repair in Moore? Call 405-476-5476 or submit a bid request online.",
  },

  {
    citySlug: "yukon",
    cityName: "Yukon",
    h1: "Commercial Asphalt Paving in Yukon, OK",
    metaTitle:
      "Asphalt Paving Yukon OK | Commercial Paving Contractor | H&H Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving, parking lot construction, mill-and-overlay, and pavement maintenance in Yukon, OK. Serving developers, retail centers, and new commercial growth. Request a bid today.",
    heroLead:
      "Commercial parking lot paving, mill-and-overlay resurfacing, full-depth reconstruction, and pavement maintenance for Yukon retail centers, growth-corridor pads, and commercial sites along I-40 and the Kilpatrick Turnpike.",
    introHeading:
      "Commercial Asphalt Paving for One of Oklahoma's Fastest-Growing Suburbs",
    intro: [
      "Yukon is one of the fastest-growing cities in the Oklahoma City metro, with population climbing 16.8% since 2020 to reach nearly 27,600 residents. Positioned along I-40 and the Kilpatrick Turnpike — and anchored by high-traffic retail along corridors like Garth Brooks Boulevard — Yukon's growth is bringing new commercial development to a city that's rapidly outgrowing its small-town reputation. That growth means new commercial parking lots, new commercial roadways, and a steady need for paving contractors who can keep pace. H&H Construction provides the commercial asphalt paving — from new hot-mix installation and mill-and-overlay resurfacing to full-depth reconstruction and ongoing pavement maintenance — that supports Yukon's expansion.",
      "Whether you're developing retail along the I-40 corridor or building out a new commercial site tied to Yukon's residential growth, we scope every project around the city's traffic patterns, clay soils, and long-term durability needs — not residential driveway standards stretched across a commercial lot.",
    ],
    servicesHeading: "Our Commercial Asphalt Paving Services in Yukon",
    services: [
      {
        title: "New Commercial Asphalt Installation",
        body: "Full commercial paving packages for new retail centers, office pads, and mixed-use developments — including excavation, grading, aggregate base preparation, and hot-mix finish paving coordinated with your general contractor's schedule.",
      },
      {
        title: "Commercial Parking Lot Construction & Reconstruction",
        body: "New commercial parking lot construction and full-depth reconstruction for aging or failed pavement, built for proper drainage, ADA accessibility, and the higher daily turnover Yukon retail corridors actually see.",
      },
      {
        title: "Asphalt Overlays, Mill-and-Overlay & Resurfacing",
        body: "Commercial resurfacing for parking lots and private roads where the base is intact but the wearing surface has oxidized or deteriorated — extending pavement life without a full rebuild. We will tell you when mill-and-overlay is the wrong answer because the base has already failed.",
      },
      {
        title: "Full-Depth Reconstruction",
        body: "Structural rebuilds where alligator cracking, pumping, or failed base mean an overlay would only buy a short season of appearance under Yukon's growth-driven traffic increases.",
      },
      {
        title: "Patching, Pothole Repair & Pavement Maintenance",
        body: "Responsive full-depth patches for cracking, potholes, and localized damage, plus crack sealing and sealcoat maintenance where the commercial section is still sound — before distress becomes a larger liability or drainage issue.",
      },
      {
        title: "Striping, Layout & ADA Marking",
        body: "ADA-compliant commercial striping, stall layout, van-accessible access aisles, directional markings, and fire-lane designation for new construction and resurfaced Yukon lots.",
      },
    ],
    climateHeading: "Paving Built for Yukon's Soil and Climate",
    climate: [
      "Yukon sits on the same clay-heavy soil found across central Oklahoma, which expands and contracts with seasonal moisture and puts real stress on commercial asphalt that isn't properly graded, drained, and compacted before paving. Combined with hot summers and winter freeze-thaw cycles, a poorly prepared base is the most common reason commercial lots crack and rut within a few years.",
      "We build every base in Yukon to account for local soil behavior, drainage needs, and expected traffic loading before hot-mix goes down — which protects your commercial investment for the long term as corridor volume keeps climbing.",
    ],
    audiencesHeading: "Who We Serve with Commercial Asphalt in Yukon",
    audiences: [
      {
        title: "Developers & General Contractors",
        body: "Site work and commercial paving packages coordinated with your project timeline for new retail and commercial development along Yukon's I-40 and Kilpatrick growth corridors.",
      },
      {
        title: "Retail & Commercial Property Owners",
        body: "New commercial parking lot construction, mill-and-overlay, striping refreshes, and ongoing pavement maintenance for shopping centers and standalone commercial buildings that cannot afford early aisle failure.",
      },
      {
        title: "HOAs & Residential Developments",
        body: "Private roadway paving, resurfacing, and repair for the new residential communities driving Yukon's population growth — built with commercial-grade asphalt sections and drainage that still decide how long the pavement lasts.",
      },
      {
        title: "School Districts",
        body: "Commercial parking lots, bus lanes, and campus paving scoped to minimize disruption to school schedules and finish inside academic calendar windows.",
      },
      {
        title: "Municipal & Public Projects",
        body: "Roadway, parking, and public-facility asphalt paving delivered to City of Yukon and Canadian County specifications.",
      },
    ],
    localPartnerHeading: "A Metro Contractor Ready for Yukon's Growth",
    localPartner: [
      "H&H Construction is based in Norman and works throughout the Oklahoma City metro, including Yukon, as the city's commercial footprint continues to expand. We understand that growing cities like Yukon need commercial paving contractors who can move quickly and deliver consistent quality as new development comes online — that's exactly the kind of work we're built for.",
      "We work directly with developers, general contractors, property owners, and municipal staff, starting every project with a full evaluation of soil, drainage, existing pavement structure, and traffic conditions before providing a detailed commercial asphalt bid.",
    ],
    processHeading: "Our Commercial Asphalt Paving Process",
    process: [
      {
        title: "Site Evaluation",
        body: "We assess soil type, drainage, existing pavement condition, and expected commercial traffic — including whether drive aisles need a heavier section than stall areas — before quoting a project.",
      },
      {
        title: "Detailed Proposal",
        body: "A written commercial asphalt scope covering mill-and-overlay versus full-depth reconstruction, base preparation, hot-mix specifications, timeline, and cost, specific to your Yukon site.",
      },
      {
        title: "Base Preparation",
        body: "Excavation, grading, and compaction done to spec — the step that determines how well commercial pavement holds up under Yukon's growth-driven traffic increases.",
      },
      {
        title: "Paving & Finishing",
        body: "Hot-mix asphalt installed to the designed thickness and compacted while the mat is still hot, matched to the application — retail parking lot, private roadway, or campus drive.",
      },
      {
        title: "Striping & Walkthrough",
        body: "Code-compliant commercial striping, ADA verification, fire-lane marking, and a final walkthrough before the project is complete.",
      },
    ],
    faqs: [
      {
        question: "How long does a commercial paving project take in Yukon?",
        answer:
          "Most standard commercial parking lots take one to two weeks from mobilization to finished striping. New-construction commercial paving is typically scheduled to align with the broader project timeline. Full-depth reconstruction can take longer than mill-and-overlay when the base has failed.",
      },
      {
        question:
          "Is Yukon's rapid growth affecting how pavement should be built?",
        answer:
          "Yes, in a practical sense — more traffic on newer roads and commercial lots means base preparation and material choice matter even more, since undersized or poorly prepared pavement will show wear faster under increasing use.",
      },
      {
        question: "Do you work with HOAs on private road paving?",
        answer:
          "Yes. We regularly handle private road paving, resurfacing, and repair for residential communities and HOAs across Yukon's growing neighborhoods, using commercial-grade asphalt sections and drainage details.",
      },
      {
        question:
          "When is mill-and-overlay the wrong answer for a Yukon parking lot?",
        answer:
          "When cracking is load-related or the base has failed. An overlay over a moving base reflects the same cracks through within a season or two. We evaluate that on site before recommending resurfacing versus full-depth commercial reconstruction.",
      },
      {
        question: "Can you pave a Yukon retail center without closing it?",
        answer:
          "Usually yes. We phase commercial mill-and-overlay and reconstruction section by section so storefronts, restaurants, and deliveries keep operating.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Paving Bid in Yukon",
    ctaBody:
      "If you have a commercial paving project in Yukon — new parking lot construction, mill-and-overlay, resurfacing, or a lot in need of repair — H&H Construction is ready to scope it and provide a competitive bid. Call 405-476-5476 or submit a bid request online. We serve Yukon and the surrounding Oklahoma City metro, including Oklahoma City, Edmond, Mustang, and beyond.",
  },

  {
    citySlug: "midwest-city",
    cityName: "Midwest City",
    h1: "Commercial Asphalt Paving in Midwest City, OK",
    metaTitle:
      "Asphalt Paving Midwest City OK | Commercial & Industrial Paving | H&H Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving, parking lots, and heavy-duty paving in Midwest City, OK for retail, hospitality, and Tinker-adjacent industrial sites.",
    heroLead:
      "Commercial parking lot paving, industrial asphalt, and mill-and-overlay work for Midwest City retail, hospitality, and defense-adjacent properties along I-40.",
    introHeading: "Commercial Asphalt for Midwest City Traffic",
    intro: [
      "Midwest City lots take Tinker-driven volume. Retail, hospitality, and service properties along I-40 and the SE 29th / Douglas gateway corridors see daytime traffic that punishes weak sections and poor drainage. Designing those commercial lots like quiet office parks is how early alligatoring starts in the aisles.",
      "H&H Construction builds and rehabilitates commercial and light-industrial asphalt paving in Midwest City — new lots, overlays, full-depth repair, yard paving, and striping for properties that see real daily use.",
    ],
    servicesHeading: "Commercial Asphalt Services in Midwest City",
    services: [
      {
        title: "Commercial Parking Lot Paving",
        body: "Full-depth asphalt for retail, hospitality, and service centers that need durable drive aisles and clean customer access.",
      },
      {
        title: "Industrial & Heavy-Duty Asphalt",
        body: "Thicker commercial sections for yards and approaches near defense-adjacent and industrial operations.",
      },
      {
        title: "Mill-and-Overlay & Reconstruction",
        body: "Resurfacing when the base is sound; full-depth commercial rebuild when traffic has already broken the pavement structure.",
      },
      {
        title: "Patching, Maintenance & Striping",
        body: "Pothole repair, crack sealing, sealcoat, and ADA commercial striping for Midwest City properties.",
      },
    ],
    climateHeading: "Gateway Corridor Conditions",
    climate: [
      "I-40 corridor heat, clay influence, and steady daytime traffic require commercial asphalt sections and drainage that match use — not minimum residential paving.",
      "Occupied hospitality and retail sites need phased mill-and-overlay so guests and customers keep parking while failed areas are replaced.",
    ],
    audiencesHeading: "Who Needs Paving in Midwest City",
    audiences: [
      {
        title: "Retail & Hospitality Owners",
        body: "Commercial parking lots that take daily customer and guest volume along the gateway corridors.",
      },
      {
        title: "Industrial & Service Facilities",
        body: "Heavy-duty asphalt for yards and approaches that see trucks and equipment.",
      },
      {
        title: "Property Managers",
        body: "Overlays, patches, and striping programs that protect occupied assets.",
      },
      {
        title: "General Contractors",
        body: "Commercial paving coordinated with site concrete on Midwest City pads.",
      },
    ],
    localPartnerHeading: "East-Metro Commercial Paving Partner",
    localPartner: [
      "H&H Construction serves Midwest City from Norman with metro mobilization suited to commercial asphalt temperature windows and fast punch response.",
      "Concrete pads and metal building scopes can stay under the same contract when Midwest City sites need more than paving alone.",
    ],
    processHeading: "Midwest City Commercial Paving Process",
    process: [
      {
        title: "Condition & Load Review",
        body: "We match commercial asphalt thickness to actual corridor traffic before recommending overlay or rebuild.",
      },
      {
        title: "Scoped Proposal",
        body: "Written paving, drainage, and phasing plan for occupied retail or hospitality sites.",
      },
      {
        title: "Prep & Hot-Mix Paving",
        body: "Base repair and compacted commercial asphalt placed while the mat is hot.",
      },
      {
        title: "Stripe & Close Out",
        body: "ADA and fire-lane marking completed before full reopening.",
      },
    ],
    faqs: [
      {
        question: "Do you handle heavy-duty asphalt near Tinker-adjacent sites?",
        answer:
          "Yes. Commercial and industrial asphalt sections are sized for real truck and equipment traffic, not passenger-car-only lots.",
      },
      {
        question: "Can hospitality lots stay open during paving?",
        answer:
          "Most Midwest City commercial overlays are phased so guest and staff parking remain available throughout the work.",
      },
      {
        question: "Do you include striping with parking lot paving?",
        answer:
          "Yes. New and resurfaced commercial lots typically include ADA-compliant striping and fire-lane marking.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Bid in Midwest City",
    ctaBody:
      "Have a commercial parking lot or industrial paving project in Midwest City? Call 405-476-5476 or request a bid online.",
  },

  {
    citySlug: "tulsa",
    cityName: "Tulsa",
    h1: "Commercial Asphalt Paving in Tulsa, OK",
    metaTitle:
      "Asphalt Paving Tulsa OK | Commercial Paving Contractor | H&H Construction",
    metaDescription:
      "H&H Construction delivers commercial asphalt paving, parking lot construction, mill-and-overlay, and pavement maintenance in Tulsa, OK. Serving industrial, commercial, and municipal projects. Request a bid today.",
    heroLead:
      "Commercial parking lot paving, heavy-duty industrial yard asphalt, mill-and-overlay resurfacing, full-depth reconstruction, and municipal paving for Tulsa warehouses, distribution centers, retail sites, and public facilities across the metro.",
    introHeading:
      "Commercial Asphalt Paving for Tulsa's Industrial and Commercial Growth",
    intro: [
      "Tulsa's industrial market is running historically tight — vacancy has hovered near 2.5%, close to an all-time low — while major investment continues to flow into the region, including a $3 billion data center campus underway north of the city. Construction and natural resources employment in Tulsa grew faster than any other sector in the metro over the past year, and the region logged over 800 development projects in a single recent year across residential, industrial, and commercial categories. That level of activity means a steady, high-volume demand for commercial asphalt paving, and H&H Construction provides the paving work that keeps Tulsa's industrial yards, distribution docks, and commercial parking lots operational.",
      "From distribution facilities and heavy-duty industrial yards to commercial parking lots, private access roads, and municipal roadways, we scope every Tulsa commercial asphalt project around the region's truck traffic loads, clay soils, and construction timelines — not passenger-car lot standards stretched across a warehouse apron.",
    ],
    servicesHeading: "Our Commercial Asphalt Paving Services in Tulsa",
    services: [
      {
        title: "New Commercial & Industrial Asphalt Installation",
        body: "Full commercial paving packages for new industrial buildings, distribution facilities, logistics campuses, and commercial developments — excavation, grading, aggregate base preparation, and hot-mix finish paving coordinated as a single scope with section thickness matched to truck and equipment traffic.",
      },
      {
        title: "Commercial Parking Lot Construction & Reconstruction",
        body: "New commercial parking lot construction and full-depth reconstruction for aging or failed pavement, engineered for Tulsa's commercial and industrial traffic loads, drainage requirements, and ADA compliance.",
      },
      {
        title: "Heavy-Duty Industrial Yard & Dock Approach Paving",
        body: "Thicker commercial asphalt sections for trailer yards, loading docks, dumpster approaches, and equipment traffic — or an honest recommendation to use concrete in the highest-load zones so the rest of the facility pavement can stay asphalt.",
      },
      {
        title: "Asphalt Overlays, Mill-and-Overlay & Resurfacing",
        body: "Commercial mill-and-overlay and resurfacing for lots and access roads where the base remains sound but the wearing surface has oxidized or deteriorated — common across Tulsa's established industrial corridors. We will tell you when an overlay is the wrong answer because the base has already failed.",
      },
      {
        title: "Patching, Pothole Repair & Pavement Maintenance",
        body: "Responsive full-depth patches for cracking, potholes, and drainage-related pavement failure, plus crack sealing and sealcoat maintenance where the commercial section is still structurally sound — before distress disrupts facility operations or creates liability.",
      },
      {
        title: "Striping, Layout & ADA Marking",
        body: "ADA-compliant commercial striping, stall layout, van-accessible access aisles, directional markings, fire lanes, and truck-route striping for new construction and resurfaced Tulsa commercial lots.",
      },
    ],
    climateHeading:
      "Paving Built for Tulsa's Soil and Industrial Demands",
    climate: [
      "Northeastern Oklahoma's clay soils and seasonal freeze-thaw cycles put the same stress on Tulsa commercial asphalt that they do across the rest of the state — but Tulsa's industrial base adds another layer of demand: constant heavy truck traffic, tight operational schedules, and facilities that cannot afford unplanned downtime for pavement failure.",
      "We build every base to handle both the region's soil conditions and the specific load requirements of industrial and distribution sites — dock approaches, trailer staging, and employee lots sized differently when needed — which is what keeps commercial asphalt performing under sustained heavy use instead of alligatoring in the first few seasons.",
    ],
    audiencesHeading: "Who We Serve with Commercial Asphalt in Tulsa",
    audiences: [
      {
        title: "Industrial & Distribution Facilities",
        body: "Heavy-duty commercial asphalt built for warehouses, distribution centers, logistics yards, and facilities handling constant truck and equipment traffic — including phased work so docks and staging areas stay operational.",
      },
      {
        title: "General Contractors & Developers",
        body: "Site work and commercial paving packages integrated with construction schedules for new industrial and commercial builds, including projects tied to the region's growing data center, warehouse, and logistics investment.",
      },
      {
        title: "Commercial Property Owners",
        body: "Parking lot construction, mill-and-overlay resurfacing, and preventive pavement maintenance for retail, office, and mixed-use properties across the Tulsa metro — sequenced so tenants and deliveries keep access.",
      },
      {
        title: "Municipalities & Public Entities",
        body: "Roadway, parking, and public-facility asphalt paving delivered to City of Tulsa and county specifications, including work that must stay open to the public during construction.",
      },
      {
        title: "School Districts",
        body: "Commercial parking lots, bus lanes, and campus paving scoped around academic calendars to minimize disruption.",
      },
    ],
    localPartnerHeading: "A Statewide Contractor Ready for Tulsa's Pace",
    localPartner: [
      "H&H Construction works throughout Oklahoma on commercial concrete, asphalt paving, and metal building projects, and we scope Tulsa work with the same standard we apply statewide — proper site evaluation, engineered base preparation, hot-mix placement compacted in temperature, and a finished product built to hold up under real commercial and industrial use.",
      "We coordinate directly with general contractors, developers, facility managers, and municipal staff, starting every bid with a full assessment of soil, drainage, existing pavement structure, and traffic conditions — including whether mill-and-overlay or full-depth reconstruction is the honest answer for your Tulsa site.",
    ],
    processHeading: "Our Commercial Asphalt Paving Process",
    process: [
      {
        title: "Site Evaluation",
        body: "We assess soil conditions, drainage, existing pavement, and expected load — especially heavy truck and equipment traffic for industrial and distribution sites — before recommending overlay or full-depth commercial reconstruction.",
      },
      {
        title: "Detailed Proposal",
        body: "A written commercial asphalt scope covering base preparation, hot-mix specifications, phasing around operations, timeline, and cost.",
      },
      {
        title: "Base Preparation",
        body: "Excavation, grading, and compaction engineered for the load the pavement will actually carry — critical for distribution yards and industrial facilities where passenger-car sections fail early.",
      },
      {
        title: "Paving & Finishing",
        body: "Hot-mix asphalt installed to a thickness and compaction standard matched to the application, from office parking lots to industrial yards and dock approaches.",
      },
      {
        title: "Striping & Walkthrough",
        body: "Code-compliant commercial striping, ADA verification, fire-lane and traffic marking, and a final walkthrough before closeout.",
      },
    ],
    faqs: [
      {
        question: "How long does industrial asphalt paving take in Tulsa?",
        answer:
          "Timelines vary significantly by scope — a standard commercial parking lot may take one to two weeks from mobilization to finished striping, while larger industrial yards or distribution facility paving can take longer depending on square footage, mill depths, and base conditions. We provide a specific timeline with every proposal.",
      },
      {
        question: "Can you schedule paving around active facility operations?",
        answer:
          "Yes. We routinely phase commercial and industrial paving or schedule around off-hours to avoid disrupting operations at active warehouses, distribution centers, and manufacturing facilities.",
      },
      {
        question: "Does Tulsa's tight industrial market affect paving demand?",
        answer:
          "Yes. With industrial vacancy running near historic lows and significant new investment moving into the region, facilities coming online or expanding need commercial asphalt completed on tight, reliable timelines — which is what we scope every Tulsa bid around.",
      },
      {
        question:
          "When is mill-and-overlay the wrong answer for a Tulsa industrial lot?",
        answer:
          "When cracking is load-related or the base has failed under truck traffic. An overlay over a moving base reflects the same cracks through within a season or two. We evaluate that on site before recommending resurfacing versus full-depth commercial reconstruction.",
      },
      {
        question:
          "Do you build heavy-duty asphalt for Tulsa warehouse and dock traffic?",
        answer:
          "Yes. We design thicker commercial asphalt sections for trailer yards, dock approaches, and equipment traffic — and we will tell you when concrete is the better answer for the highest-load zones.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Paving Bid in Tulsa",
    ctaBody:
      "If you have a commercial or industrial paving project in Tulsa — parking lot construction, mill-and-overlay, industrial yard work, or full-depth reconstruction — H&H Construction is ready to review your scope and provide a competitive bid. Call 405-476-5476 or submit a bid request online. We serve Tulsa and the surrounding region as part of our statewide commercial paving work.",
  },
];

export function asphaltCityHref(citySlug: string) {
  return `/services/asphalt-paving/${citySlug}`;
}

export function getAsphaltCityPage(citySlug: string) {
  return asphaltCityPages.find((page) => page.citySlug === citySlug);
}

export function getAsphaltCityParams() {
  return asphaltCityPages.map((page) => ({
    slug: "asphalt-paving" as const,
    city: page.citySlug,
  }));
}

export function resolveAsphaltCityPage(citySlug: string) {
  const page = getAsphaltCityPage(citySlug);

  if (!page) {
    return null;
  }

  const priorityCity = priorityCities.find((item) => item.slug === citySlug);
  const city = priorityCity ?? {
    slug: page.citySlug,
    name: page.cityName,
  };

  return { page, city, hasServiceAreaPage: Boolean(priorityCity) };
}

export function getAsphaltCityPeers(citySlug: string) {
  return asphaltCityPages.filter((page) => page.citySlug !== citySlug);
}
