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
    h1: "Commercial Asphalt Paving in Oklahoma City, OK",
    metaTitle:
      "Asphalt Paving Oklahoma City OK | Commercial Parking Lots | H&H Construction",
    metaDescription:
      "H&H Construction builds commercial asphalt paving, parking lots, mill-and-overlay, and heavy-duty industrial paving in Oklahoma City, OK. Overlays, full-depth repair, and phased work for occupied sites.",
    heroLead:
      "Commercial parking lot paving, industrial yard asphalt, mill-and-overlay resurfacing, and full-depth reconstruction for Oklahoma City developments, warehouses, and municipal sites across the metro.",
    introHeading: "Commercial Asphalt Built for Oklahoma City Traffic",
    intro: [
      "Oklahoma City commercial asphalt fails for predictable reasons: water that never leaves the lot, sections designed for cars that then take loaded semis, and overlays placed over bases that were already moving. Industrial sites near I-40, I-240, and the airport see the worst of it — drive aisles and dock approaches alligator while stall areas still look serviceable.",
      "H&H Construction builds and rehabilitates commercial asphalt paving across the OKC metro — new parking lot construction, mill-and-overlay, full-depth reconstruction, industrial yard paving, and pavement maintenance sequenced so retail, medical, and warehouse properties keep operating.",
    ],
    servicesHeading: "Commercial Asphalt Services in Oklahoma City",
    services: [
      {
        title: "New Commercial & Industrial Paving",
        body: "Full-depth hot-mix asphalt for commercial developments, warehouse yards, and truck-served facilities, with section thickness matched to actual traffic — not a one-mix-fits-all parking lot.",
      },
      {
        title: "Commercial Parking Lot Construction",
        body: "Ground-up parking lot paving with drainage, ADA layout, and drive-aisle design that holds up under daily OKC retail and medical traffic.",
      },
      {
        title: "Mill-and-Overlay & Resurfacing",
        body: "Cost-effective commercial resurfacing when the base is still sound — and a clear no when load-related cracking means full-depth repair is the honest answer.",
      },
      {
        title: "Heavy-Duty Industrial Yard Paving",
        body: "Thicker asphalt sections for dock approaches, trailer yards, and equipment traffic, with concrete recommended only where asphalt will not carry the load.",
      },
      {
        title: "Patching & Pavement Maintenance",
        body: "Full-depth patches, pothole repair, crack sealing, and sealcoat programs that extend commercial pavement life before distress becomes a rebuild.",
      },
      {
        title: "Striping & ADA Layout",
        body: "Commercial lot striping, accessible stalls, fire lanes, and directional marking for new and rehabilitated Oklahoma City properties.",
      },
    ],
    climateHeading: "What Oklahoma City Demands from Commercial Pavement",
    climate: [
      "Metro OKC pavement sees hard summer heat, spring saturation, and freeze-thaw cycling on clay-influenced subgrades. Standing water and weak base prep destroy commercial lots from the bottom up — the mat on top cannot save a section that was never drained or compacted correctly.",
      "MAPS-related and transit-adjacent work often sits next to commercial paving: approaches, connecting lots, and municipal roadways that have to match grades while staying open. Drainage and phasing matter as much as the asphalt itself.",
    ],
    audiencesHeading: "Who Hires Commercial Asphalt Work in Oklahoma City",
    audiences: [
      {
        title: "Developers & General Contractors",
        body: "Commercial paving packages coordinated with site concrete and building schedules on industrial and retail pads across the metro.",
      },
      {
        title: "Industrial & Warehouse Operators",
        body: "Heavy-duty asphalt and yard rehabilitation for facilities that see loaded trailer traffic every day.",
      },
      {
        title: "Retail & Medical Property Managers",
        body: "Phased parking lot overlays and reconstruction that keep patients, shoppers, and deliveries on site.",
      },
      {
        title: "Municipal & Public Agencies",
        body: "Public-facility and roadway asphalt work that must meet inspected grades and access requirements.",
      },
    ],
    localPartnerHeading: "Metro Commercial Paving from a Norman Base",
    localPartner: [
      "H&H Construction is headquartered in Norman with short metro mobilization into Oklahoma City. That keeps hot-mix haul times practical and punch response fast when commercial paving windows shift.",
      "We self-perform commercial asphalt alongside concrete and metal buildings, so dock pads, truck aisles, and building shells can share one schedule instead of three punch lists.",
    ],
    processHeading: "How We Deliver Oklahoma City Commercial Paving",
    process: [
      {
        title: "Evaluation & Traffic Assessment",
        body: "We separate cosmetic surface wear from structural failure and size the section for cars versus loaded trucks before recommending overlay or reconstruction.",
      },
      {
        title: "Scope & Phasing Plan",
        body: "Written commercial paving scope with mill depths, base work, mix, striping, and a section-by-section plan for occupied properties.",
      },
      {
        title: "Prep, Pave & Compact",
        body: "Removal, base repair, and hot-mix placement compacted to density while the mat is still in temperature.",
      },
      {
        title: "Stripe & Close Out",
        body: "ADA-compliant layout, fire lanes, and a walkthrough before the commercial lot returns to full use.",
      },
    ],
    faqs: [
      {
        question: "Do you pave industrial yards for heavy trucks in Oklahoma City?",
        answer:
          "Yes. We build heavier commercial asphalt sections for drive aisles, dock approaches, and yards that see loaded trailer traffic — and we will tell you when concrete is the better answer for the highest-load zones.",
      },
      {
        question: "When is an overlay the wrong answer for an OKC parking lot?",
        answer:
          "When cracking is load-related or the base has failed. Mill-and-overlay over a moving base reflects the same cracks through within a season or two.",
      },
      {
        question: "Can you pave without shutting down an occupied Oklahoma City property?",
        answer:
          "Usually yes. We phase commercial paving in sections so parking, deliveries, and emergency access stay available.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Bid in Oklahoma City",
    ctaBody:
      "Tell us about your Oklahoma City parking lot, industrial yard, or commercial paving scope. Call 405-476-5476 or request a bid online — H&H Construction serves the full OKC metro from our Norman headquarters.",
  },

  {
    citySlug: "edmond",
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
    h1: "Commercial Asphalt Paving in Yukon, OK",
    metaTitle:
      "Asphalt Paving Yukon OK | Commercial Parking Lot Paving | H&H Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving and parking lot construction in Yukon, OK — overlays, heavy-traffic retail lots, and pavement maintenance along I-40 and Garth Brooks Boulevard.",
    heroLead:
      "Commercial parking lot paving, mill-and-overlay, and high-traffic retail asphalt work for Yukon's I-40 and Garth Brooks Boulevard growth corridor.",
    introHeading: "High-Traffic Commercial Asphalt for Yukon Retail",
    intro: [
      "Yukon parking lots take real traffic. The I-40 and Garth Brooks trade area sees heavy daily volume through national retail and restaurants, which means drainage, section thickness, and striping layout are not cosmetic details — they decide whether the commercial lot lasts or alligators in the drive aisles.",
      "H&H Construction builds and rehabilitates commercial asphalt paving across Yukon: new lots, overlays, full-depth repair, and pavement maintenance for west-metro retail, medical, and growth sites.",
    ],
    servicesHeading: "Commercial Asphalt Services in Yukon",
    services: [
      {
        title: "Retail Parking Lot Construction",
        body: "Full-depth commercial asphalt designed for high daily turnover along Yukon's primary retail corridors.",
      },
      {
        title: "Mill-and-Overlay & Full-Depth Repair",
        body: "Resurfacing for worn commercial lots with sound base; reconstruction where heavy traffic has already broken the section.",
      },
      {
        title: "Medical & Mixed-Use Lot Paving",
        body: "Commercial paving for clinics and mixed-use pads that need clean access and durable drive lanes.",
      },
      {
        title: "Maintenance, Patching & Striping",
        body: "Pothole repair, crack sealing, sealcoat, and commercial striping refreshes that keep busy Yukon lots presentable and safe.",
      },
    ],
    climateHeading: "Why Yukon Lots Need More Than a Thin Overlay",
    climate: [
      "West-metro heat, clay influence, and constant retail traffic punish weak commercial sections. Birdbaths and soft base prep show up first in the aisles that every customer and delivery truck uses.",
      "Occupied Yukon centers need phased commercial paving so restaurants and national retailers stay open while failed areas come out and new hot-mix goes down.",
    ],
    audiencesHeading: "Who We Serve in Yukon",
    audiences: [
      {
        title: "Retail Developers",
        body: "New commercial parking lots timed to I-40 corridor openings and pad delivery.",
      },
      {
        title: "Property Managers",
        body: "Overlays and maintenance on high-traffic Yukon shopping centers.",
      },
      {
        title: "Medical & Hospitality Owners",
        body: "Phased asphalt work that protects patient and guest access.",
      },
      {
        title: "General Contractors",
        body: "Commercial paving coordinated with site concrete on Canadian County growth sites.",
      },
    ],
    localPartnerHeading: "West-Metro Commercial Paving from H&H",
    localPartner: [
      "From Norman, Yukon is a west-metro commercial paving run we coordinate regularly across the Oklahoma City side — close enough for hot-mix quality and same-week punch response.",
      "When Yukon packages include concrete pads or a metal building shell, H&H can keep those trades on one schedule.",
    ],
    processHeading: "Yukon Commercial Paving Process",
    process: [
      {
        title: "Traffic & Drainage Review",
        body: "We size commercial sections for real Yukon retail volume and fix ponding before paving over it.",
      },
      {
        title: "Scope & Phasing",
        body: "Written mill, base, and paving plan that keeps storefronts open.",
      },
      {
        title: "Hot-Mix Placement",
        body: "Commercial asphalt compacted to density with joints built to shed water.",
      },
      {
        title: "Stripe & Open",
        body: "ADA stalls, fire lanes, and directional marking before full reopening.",
      },
    ],
    faqs: [
      {
        question: "Do you pave high-traffic retail lots in Yukon?",
        answer:
          "Yes. Commercial parking lot paving along I-40 and Garth Brooks Boulevard is designed for daily retail volume, not residential driveway standards.",
      },
      {
        question: "Can you overlay a Yukon shopping center in phases?",
        answer:
          "Yes. Mill-and-overlay and reconstruction are commonly sequenced so tenants keep parking and deliveries.",
      },
      {
        question: "Do you include striping with commercial paving?",
        answer:
          "Yes. New and resurfaced Yukon lots typically include ADA-compliant commercial striping and fire-lane marking.",
      },
    ],
    ctaHeading: "Request a Commercial Asphalt Bid in Yukon",
    ctaBody:
      "Planning commercial parking lot paving in Yukon? Call 405-476-5476 or request a bid online from H&H Construction.",
  },

  {
    citySlug: "midwest-city",
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
  const city = priorityCities.find((item) => item.slug === citySlug);

  if (!page || !city) {
    return null;
  }

  return { page, city };
}

export function getAsphaltCityPeers(citySlug: string) {
  return asphaltCityPages.filter((page) => page.citySlug !== citySlug);
}
