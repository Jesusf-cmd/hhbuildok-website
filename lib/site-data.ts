import { asphaltServiceHeroImage } from "@/lib/asphalt-gallery-data";

export const siteConfig = {
  name: "H&H Construction",
  domain: "hhbuildok.com",
  url: "https://hhbuildok.com",
  phone: "405-476-5476",
  phoneTel: "4054765476",
  // E.164 for structured data and tel: links; mobile dialers match this best.
  phoneE164: "+14054765476",
  email: "logan@hhbuildok.com",
  address: {
    street: "770 W Rock Creek",
    suite: "#115",
    city: "Norman",
    state: "OK",
    zip: "73069",
  },
} as const;

/** Prefer E.164 so iOS/Android dialers open cleanly from every tel: link. */
export const phoneHref = `tel:${siteConfig.phoneE164}` as const;

/** Prefills a bid-oriented subject so email clients open ready to send. */
export const emailHref =
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Bid request — H&H Construction",
  )}` as const;

// Bump when page content meaningfully changes. Stamping sitemap entries with a
// fresh Date on every build makes every URL claim it just changed, which search
// engines learn to distrust.
export const contentLastUpdated = "2026-08-30";

/** Public office hours — used on Contact page and LocalBusiness schema. */
export const businessHours = {
  label: "Monday–Saturday, 8:00 AM – 5:00 PM",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as const,
  opens: "08:00",
  closes: "17:00",
} as const;

export const nap = {
  name: siteConfig.name,
  phone: siteConfig.phone,
  email: siteConfig.email,
  addressLine1: `${siteConfig.address.street} ${siteConfig.address.suite}`,
  addressLine2: `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  fullAddress: `${siteConfig.address.street} ${siteConfig.address.suite}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  mapsQuery: encodeURIComponent(
    `${siteConfig.address.street} ${siteConfig.address.suite}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  ),
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.street} ${siteConfig.address.suite}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
  )}`,
  hoursLabel: businessHours.label,
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    id: "concrete",
    slug: "concrete-construction",
    title: "Concrete Construction",
    shortTitle: "Concrete",
    description:
      "Structural and flatwork concrete for commercial foundations, slabs, sidewalks, curbs, retaining walls, and site infrastructure built to spec and schedule.",
    metaTitle: "Commercial Concrete Construction in Oklahoma",
    h1: "Structural & Flatwork Concrete for Commercial Projects",
    metaDescription:
      "H&H Construction delivers structural and flatwork concrete for commercial foundations, slabs, sidewalks, curbs, and retaining walls across Oklahoma. Request a bid.",
    heroDescription:
      "H&H Construction provides structural and flatwork concrete for commercial, industrial, and municipal projects throughout Oklahoma — built to spec, coordinated to your schedule.",
    image: "/images/concrete/commercial-concrete-foundation-rebar-installation-oklahoma.jpg",
    imageAlt:
      "H&H Construction crew tying rebar for a commercial concrete foundation in Oklahoma",
    href: "/services/concrete-construction",
    scopeItems: [
      "Structural foundations and footings",
      "Slab-on-grade and structural slabs",
      "Sidewalks, curbs, and gutters",
      "Retaining walls",
      "Parking lot and site concrete infrastructure",
      "Concrete repair and replacement",
    ],
    detail: {
      overview: [
        "Commercial concrete is judged on things that become invisible the moment the pour is finished: how well the subgrade was prepared, whether the reinforcement ended up where the drawings put it, and whether the slab was jointed and cured to survive Oklahoma's temperature swings. Two slabs that look identical on day one can be a decade apart in service life because of decisions made before any concrete arrived on site.",
        "H&H Construction places structural and flatwork concrete for commercial buildings, industrial facilities, and public infrastructure across Oklahoma — foundations and footings, slab-on-grade, sidewalks, curbs and gutters, retaining walls, and the site concrete that ties a development together.",
      ],
      considerations: [
        {
          title: "Subgrade and base preparation",
          body: "Most flatwork failures trace back to what is underneath. Soft spots, uncompacted fill, and poor drainage let a slab deflect and crack regardless of the concrete's strength. Proof-rolling, moisture conditioning, and a compacted granular base cost a fraction of what removing and replacing a failed slab costs later.",
        },
        {
          title: "Mix design and durability",
          body: "Compressive strength is only part of a spec. Air entrainment drives freeze-thaw durability, which matters in a state that can swing thirty degrees in a day. Water-cement ratio governs long-term permeability and surface wear, and aggregate size interacts with slab thickness and reinforcement spacing. The mix should match the exposure the surface will actually see.",
        },
        {
          title: "Reinforcement placement",
          body: "Rebar and welded wire only work where they are positioned correctly. Steel that ends up sitting on the subgrade instead of at mid-depth contributes almost nothing to crack control. Chairs, supports, and lap lengths get verified before placement, because there is no correcting it afterward.",
        },
        {
          title: "Jointing and crack control",
          body: "Concrete cracks. The design question is where. Control joints, construction joints, and isolation joints direct cracking into planned locations and let slabs move against foundations and columns without spalling. Joint spacing follows slab thickness, and the timing of the saw cut matters as much as the layout.",
        },
        {
          title: "Curing and weather",
          body: "Strength comes from hydration, not from drying out. Hot, dry, windy days pull moisture from the surface and cause plastic shrinkage cracking and dusting, while cold weather slows the set and risks freezing before the concrete gains strength. Placement timing, curing compounds, and protection all change with the forecast.",
        },
        {
          title: "ADA compliance on pedestrian surfaces",
          body: "Sidewalks, ramps, and accessible routes are governed by tolerances rather than preferences: running slope, cross slope, landing dimensions, and detectable warnings all have limits. On public and institutional work these are inspected, and a ramp that misses cross slope by a fraction has to come out and be replaced.",
        },
      ],
      process: [
        {
          title: "Review and coordination",
          body: "We start from your plans, specs, and schedule to confirm quantities, joint layout, finish requirements, and where our scope hands off to other trades.",
        },
        {
          title: "Site preparation",
          body: "Excavation, grading, and base compaction to the elevations the drawings call for, with drainage established before forming begins.",
        },
        {
          title: "Forming and reinforcement",
          body: "Forms set to line and grade, reinforcement placed and supported per the drawings, and embeds or sleeves coordinated with the mechanical and electrical scopes.",
        },
        {
          title: "Placement and finishing",
          body: "Concrete placed, consolidated, and finished to the specified texture — broom, float, or hard trowel — with joints cut on schedule.",
        },
        {
          title: "Curing and turnover",
          body: "Curing protection applied and maintained, forms stripped once strength allows, and the area cleaned up so the next trade can work.",
        },
      ],
    },
    rubrics: [
      {
        title: "Structural foundation versus slab-on-grade",
        body: "Foundations and footings carry building loads into the soil and are detailed by the structural engineer — sizes, reinforcement, and elevations are not interchangeable with flatwork. Slab-on-grade is a wearing and working surface that still needs the right base, jointing, and thickness for its use. Buying both as one package is fine; treating them as the same pour is not.",
      },
      {
        title: "When flatwork fails from the base, not the mix",
        body: "Cracks that map soft spots, settlement at joints, and slabs that rock under load usually mean the subgrade or base moved. A richer mix will not fix that. Proof-roll, moisture-condition, and compact — or remove and replace failed base — before spending money on a thicker pour that will deflect the same way.",
      },
      {
        title: "When the high-load zones should be concrete, not asphalt",
        body: "Dumpster pads, dock approaches, and drive aisles that see loaded trucks often outlast the rest of a lot when they are concrete. Designing the whole site as light asphalt and hoping the truck zones survive is how owners pay for the same area twice. Split the section by actual traffic, not by what is cheapest on day one.",
      },
    ],
    faqs: [
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
    ],
  },
  {
    id: "asphalt",
    slug: "asphalt-paving",
    title: "Asphalt Paving",
    shortTitle: "Asphalt",
    description:
      "New paving, overlays, patching, and parking lot construction for commercial developments, industrial yards, and municipal roadways across Oklahoma.",
    metaTitle: "Commercial Asphalt Paving in Oklahoma",
    h1: "Asphalt Paving, Overlays & Parking Lot Construction",
    metaDescription:
      "H&H Construction provides commercial asphalt paving, overlays, patching, and parking lot construction for developments, industrial yards, and municipalities across Oklahoma.",
    heroDescription:
      "H&H Construction delivers new paving, overlays, patching, and parking lot construction for commercial developments, industrial yards, and municipal roadways across Oklahoma.",
    image: asphaltServiceHeroImage.src,
    imageAlt: asphaltServiceHeroImage.alt,
    href: "/services/asphalt-paving",
    scopeItems: [
      "New commercial and industrial paving",
      "Asphalt overlays and resurfacing",
      "Patching and pothole repair",
      "Parking lot construction and rehabilitation",
      "Municipal roadway paving",
      "Industrial yard and heavy-duty paving",
    ],
    detail: {
      overview: [
        "Asphalt pavement is a structure, not a surface. What holds up under loaded trucks is the subgrade, base, and asphalt section working together, which is why two lots that look the same can be years apart in service life. Water is the other half of the story: pavement that does not drain fails from the bottom up no matter how good the mat looks on the day it was placed.",
        "H&H Construction builds and rehabilitates commercial and industrial asphalt across Oklahoma — new paving, overlays and resurfacing, patching, parking lot construction, and municipal roadways for contractors, developers, municipalities, school districts, and property owners.",
      ],
      considerations: [
        {
          title: "Subgrade and base",
          body: "The asphalt section is designed around what sits under it. Weak or saturated subgrade needs stabilization or additional base before paving, because no achievable mat thickness compensates for a base that moves. Skipping this step is the most common reason new pavement alligators within a few seasons.",
        },
        {
          title: "Traffic loading",
          body: "A passenger-car lot and a truck route are different structures. One loaded semi does more damage than thousands of cars, so drive aisles, dock approaches, and dumpster pads need thicker sections or concrete, while stall areas can be lighter. Designing the entire lot to the heaviest load wastes money; designing it to the lightest guarantees failure.",
        },
        {
          title: "Drainage and grading",
          body: "Standing water is what kills asphalt. Positive slope to inlets, adequate cross slope, and correct tie-ins at curbs and gutters keep water off the surface and out of the section. Birdbaths and flat spots hold water, which softens the base and accelerates raveling and potholes.",
        },
        {
          title: "Compaction",
          body: "Density achieved while the mat is still hot determines durability. Asphalt compacted below target density holds interconnected voids that admit water and oxidize early. This is time-and-temperature sensitive work, which is why rolling patterns and planning the paving window matter more than they appear to from outside the trade.",
        },
        {
          title: "Overlay versus full-depth repair",
          body: "An overlay is the right answer when the base is sound and the distress is confined to the surface. When cracking is load-related or the base has failed, an overlay reflects the same cracks through within a season or two. Milling, full-depth patching, or reclamation costs more up front and considerably less over a decade.",
        },
        {
          title: "Striping, accessibility, and sealing",
          body: "Layout determines both usable stall count and accessible-space compliance, including van-accessible widths and access aisles. Crack sealing and seal coat extend life when they are applied on a maintenance interval, but neither one repairs a structural problem underneath.",
        },
      ],
      process: [
        {
          title: "Evaluation and scope",
          body: "We look at existing conditions, drainage, and how the pavement is actually used to recommend repair, overlay, or reconstruction — and to tell you which distress is cosmetic and which is structural.",
        },
        {
          title: "Removal and preparation",
          body: "Milling or full-depth removal where required, subgrade repair, then base placement and compaction to the designed section.",
        },
        {
          title: "Paving",
          body: "Base and surface courses placed and compacted at temperature, with joints and tie-ins built to shed water rather than trap it.",
        },
        {
          title: "Striping and finishing",
          body: "Layout, striping, accessible spaces, signage, and any bollards or wheel stops the plan calls for.",
        },
        {
          title: "Phasing around operations",
          body: "On occupied properties we sequence the work in sections so parking, deliveries, and emergency access stay available throughout.",
        },
      ],
    },
    rubrics: [
      {
        title: "Overlay versus full-depth repair",
        body: "Choose an overlay when the base is sound and distress is mostly surface oxidation, minor cracking, or loss of texture. Choose full-depth repair or reconstruction when alligator cracking is load-related, the pavement pumps water, or cores and proof-rolls show the base has failed. An overlay over a moving base reflects the same cracks through within a season or two.",
      },
      {
        title: "When truck aisles need concrete instead of asphalt",
        body: "If the heaviest traffic is concentrated — dock approaches, dumpster pads, turning radii for loaded semis — concrete in those zones and asphalt in stall areas is often the durable answer. Building the entire lot to truck standards wastes money; building none of it to truck standards guarantees early failure in the aisles.",
      },
      {
        title: "Patch now versus rebuild the section",
        body: "Isolated potholes over sound base are patch candidates. Widespread alligatoring, raveling across travel lanes, or drainage that ponds in the same birdbaths after every rain means the section or the grade is wrong. Patching those conditions is maintenance theater — it looks fixed until the next season.",
      },
    ],
    faqs: [
      {
        question: "What asphalt services does H&H Construction offer?",
        answer:
          "We provide new paving, overlays, resurfacing, patching, and full parking lot construction for commercial developments, industrial yards, and municipal roadways.",
      },
      {
        question: "Can you handle heavy-duty industrial paving?",
        answer:
          "Yes. We build paving designed for demanding operational environments, including industrial yards and facilities that see heavy truck and equipment traffic.",
      },
      {
        question: "Do you pave parking lots for schools and municipalities?",
        answer:
          "Yes, we regularly work with school districts and municipalities on parking lot construction and rehabilitation, scheduling work to minimize disruption to operations.",
      },
    ],
  },
  {
    id: "metal",
    slug: "metal-buildings-roofing",
    title: "Metal Buildings & Roofing",
    shortTitle: "Metal Buildings",
    description:
      "Pre-engineered metal building erection and metal roofing systems for warehouses, industrial facilities, and commercial structures.",
    metaTitle: "Metal Buildings & Roofing in Oklahoma",
    h1: "Pre-Engineered Metal Buildings & Metal Roofing Systems",
    metaDescription:
      "H&H Construction erects pre-engineered metal buildings and installs metal roofing systems for warehouses, industrial facilities, and commercial structures across Oklahoma.",
    heroDescription:
      "H&H Construction erects pre-engineered metal buildings and installs metal roofing systems for warehouses, industrial facilities, and commercial structures across Oklahoma.",
    image: "/images/metal/pre-engineered-metal-building-construction-oklahoma.jpg",
    imageAlt:
      "Aerial view of a completed pre-engineered metal building with crew and trucks on site in Oklahoma",
    href: "/services/metal-buildings-roofing",
    scopeItems: [
      "Pre-engineered metal building erection",
      "Warehouse and industrial facility structures",
      "Commercial metal roofing systems",
      "Metal building shells for developers",
      "Roofing repair and replacement",
    ],
    detail: {
      overview: [
        "A pre-engineered metal building goes up quickly, but only when the work preceding it is right. The foundation and anchor bolt layout have to match the manufacturer's drawings within tight tolerance, and the steel has to arrive in the sequence the erection plan needs. Errors discovered at erection are expensive, because the crane and the crew are already standing there.",
        "H&H Construction erects pre-engineered metal buildings and installs commercial metal roofing across Oklahoma — warehouses, industrial facilities, municipal buildings, developer shells, and roof replacements on existing structures.",
      ],
      considerations: [
        {
          title: "Foundation and anchor bolt coordination",
          body: "Anchor bolt placement is the highest-risk interface in a metal building. The pattern, projection, and elevation come from the manufacturer's drawings, and tolerances are measured in fractions of an inch. This requires the concrete and steel scopes to be coordinated before the pour, which is considerably easier when one contractor holds both.",
        },
        {
          title: "Design loads for Oklahoma",
          body: "Wind governs much of this state, and the building's design loads should reflect the actual site — exposure category, risk category for the occupancy, and any collateral load for equipment hung from the frame. Adding rooftop units or sprinkler mains later is far cheaper if the frame accounted for them at order time.",
        },
        {
          title: "Roof system selection",
          body: "Standing seam and through-fastened panels solve different problems. Standing seam allows thermal movement and puts no fasteners through the water plane, which suits low slopes and long panel runs. Through-fastened costs less and performs well on walls and steeper roofs. This choice drives long-term leak risk more than any other decision on the building.",
        },
        {
          title: "Insulation and condensation",
          body: "Metal buildings sweat when warm interior air meets cold panel surfaces. The insulation approach, vapor retarders, and ventilation need to be settled with the building's use in mind — a heated warehouse, an unconditioned equipment barn, and a facility with wash-down all require different answers.",
        },
        {
          title: "Erection sequence and site access",
          body: "Frames are erected in an order dictated by bracing and stability, and the crane needs room to work. Site access, laydown area for steel, and delivery timing determine how quickly a building closes in — and a shell that dries in sooner lets the interior trades start sooner.",
        },
        {
          title: "Openings and trim details",
          body: "Leaks happen at penetrations, not in the middle of panels. Doors, windows, louvers, curbs, and roof penetrations need the manufacturer's trim and flashing details followed closely, and any field modification to a panel or purlin should be reviewed rather than improvised.",
        },
      ],
      process: [
        {
          title: "Drawing review",
          body: "We review the manufacturer's drawings against the site and foundation plans to catch anchor bolt, elevation, and clearance conflicts before concrete or steel is committed.",
        },
        {
          title: "Foundation and anchor bolts",
          body: "Footings, piers, and slab placed with anchor bolts set and verified against the template before the pour.",
        },
        {
          title: "Steel erection",
          body: "Primary frames, secondary members, and bracing erected in sequence, then plumbed and aligned before any sheeting goes on.",
        },
        {
          title: "Sheeting and roofing",
          body: "Wall panels and the roof system installed with the specified trim, closures, and flashings at every opening and penetration.",
        },
        {
          title: "Closeout",
          body: "Doors, hardware, and accessories installed, penetrations sealed, and the building turned over ready for interior work.",
        },
      ],
    },
    rubrics: [
      {
        title: "Foundation and anchor-bolt coordination",
        body: "Release the building for fabrication only after foundation and manufacturer drawings have been checked against each other for bolt pattern, projection, and elevation. Pouring concrete from a generic foundation plan while the steel is detailed separately is how crane days get spent measuring errors that should have been caught on paper.",
      },
      {
        title: "Standing seam versus through-fastened roofing",
        body: "Standing seam suits low slopes and long panel runs because it allows thermal movement and keeps fasteners out of the water plane. Through-fastened costs less and works well on walls and steeper roofs. Pick based on slope, building length, and leak risk — not only on material price — because this choice drives long-term performance more than almost any other building decision.",
      },
      {
        title: "Design loads and collateral equipment before you order",
        body: "Oklahoma wind loads, exposure category, and risk category for the occupancy belong in the order. So does collateral load for rooftop units, sprinkler mains, or future equipment. Adding weight the frame never accounted for is far more expensive after the building is standing than sizing it correctly the first time.",
      },
    ],
    faqs: [
      {
        question: "Do you erect pre-engineered metal buildings from any manufacturer?",
        answer:
          "We erect pre-engineered metal buildings for warehouses, industrial facilities, and commercial structures, working from the engineered plans provided for your project.",
      },
      {
        question: "Do you install metal roofing on existing buildings?",
        answer:
          "Yes, we install and replace metal roofing systems on commercial and industrial structures in addition to new building construction.",
      },
      {
        question: "What kinds of facilities do you build metal buildings for?",
        answer:
          "We build metal building shells and structures for warehouses, industrial facilities, municipal buildings, and other commercial applications across Oklahoma.",
      },
    ],
  },
] as const;

export const featuredProjects = [
  {
    id: "commercial-foundation",
    title: "Commercial Foundation & Flatwork",
    category: "Concrete",
    image: "/images/stock/project-commercial-foundation.jpg",
    imageAlt: "workers inspecting commercial concrete foundation and rebar flatwork",
  },
  {
    id: "municipal-building",
    title: "Municipal Metal Building",
    category: "Metal Buildings",
    image: "/images/stock/project-municipal-building.jpg",
    imageAlt: "aerial view of a metal warehouse and industrial storage facility",
  },
] as const;

export const industries = [
  {
    slug: "general-contractors",
    title: "General Contractors",
    description:
      "Reliable site work and structural packages that integrate with your project schedule and subcontractor coordination.",
    needs: [
      "Site concrete and flatwork packages that hold the schedule",
      "Paving sequenced around other trades",
      "Metal building erection from engineered plans",
      "One subcontractor across all three scopes",
    ],
    howWeHelp:
      "Self-performing concrete, asphalt, and metal building work means one subcontractor to schedule and one point of contact when sequencing changes. We work from your plans and specs, coordinate around the other trades on site, and flag conditions that affect the schedule before they become delays.",
  },
  {
    slug: "developers",
    title: "Developers",
    description:
      "Ground-up site development support from paving and concrete to metal building shells for commercial properties.",
    needs: [
      "Building pads and structural foundations",
      "Parking lots, drives, and approaches",
      "Metal building shells ready for tenant fit-out",
      "Sidewalks, curbs, and ADA-compliant access routes",
    ],
    howWeHelp:
      "From building pad through final paving and striping, we deliver the site work that turns raw ground into a usable commercial property. Bundling concrete, paving, and the building shell into one scope cuts the number of contracts to administer and the number of handoffs where schedules tend to slip.",
  },
  {
    slug: "municipalities",
    title: "Municipalities",
    description:
      "Public infrastructure improvements including roadways, sidewalks, and facility construction delivered with clear communication.",
    needs: [
      "Roadway paving, overlays, and patching",
      "Sidewalk, curb, and gutter replacement",
      "ADA ramp upgrades and pedestrian access",
      "Maintenance buildings and public facility structures",
    ],
    howWeHelp:
      "Public work happens in public. Lane closures, detours, and access to homes and businesses all have to be managed while the work proceeds. We phase the work around traffic and access rather than treating them as an afterthought, and coordinate closures with your staff ahead of time.",
  },
  {
    slug: "school-districts",
    title: "School Districts",
    description:
      "Parking lots, sidewalks, and building improvements designed to minimize disruption to campus operations.",
    needs: [
      "Parking lot and bus loop construction or rehabilitation",
      "Sidewalks, walkways, and ADA access upgrades",
      "Work scheduled inside the summer window",
      "Athletic and maintenance facility structures",
    ],
    howWeHelp:
      "Campus work lives or dies on the calendar. Most district projects have to finish between the last day of one school year and the first day of the next, which means mobilizing quickly and sequencing so bus loops and staff parking stay usable throughout. We plan the work around the academic calendar rather than the other way around.",
  },
  {
    slug: "commercial-property-owners",
    title: "Commercial Property Owners",
    description:
      "Parking lot rehabilitation, concrete repairs, and building envelope work to protect and improve your asset.",
    needs: [
      "Parking lot overlays, patching, and restriping",
      "Concrete repair for walkways, curbs, and dock aprons",
      "Metal roofing repair and replacement",
      "Phased work that keeps tenants operating",
    ],
    howWeHelp:
      "Deferred pavement and concrete repair only gets more expensive, but tenants still have to park and receive deliveries while the work happens. We phase repairs section by section so the property keeps functioning, and we will tell you where an overlay will hold versus where the base has failed and full replacement is the cheaper answer over time.",
  },
  {
    slug: "industrial-facilities",
    title: "Industrial Facilities",
    description:
      "Heavy-duty paving, concrete flatwork, and metal building solutions built for demanding operational environments.",
    needs: [
      "Heavy-duty paving for truck and equipment traffic",
      "Thickened slabs and dock aprons",
      "Yard expansion and laydown areas",
      "Pre-engineered buildings for storage and operations",
    ],
    howWeHelp:
      "Industrial surfaces fail differently than retail ones. Loaded trailers, tracked equipment, and constant turning stress break pavement that would last decades in an office parking lot. We build sections for the loads the site actually sees, and schedule around shifts and shipping windows so operations keep moving.",
  },
] as const;

export const serviceAreaCities = [
  "Oklahoma City",
  "Edmond",
  "Norman",
  "Moore",
  "Yukon",
  "Mustang",
  "Midwest City",
  "Del City",
  "Tulsa",
  "Broken Arrow",
  "Stillwater",
  "Enid",
  "Lawton",
  "Shawnee",
  "Ardmore",
] as const;

/** Homepage and footer city list links — featured metros to city pages, others to service area. */
export function serviceAreaCityHref(cityName: (typeof serviceAreaCities)[number]) {
  const featured = priorityCities.find((city) => city.name === cityName);
  if (featured) {
    return `/service-area/${featured.slug}`;
  }

  if (cityName === "Tulsa") {
    return "/services/concrete-construction/tulsa";
  }

  return "/service-area";
}

export const priorityCities = [
  {
    slug: "oklahoma-city",
    name: "Oklahoma City",
    metaTitle: "Commercial Concrete, Asphalt & Metal Buildings in Oklahoma City, OK",
    h1: "Oklahoma City Commercial Concrete, Paving & Metal Buildings",
    metaDescription:
      "H&H Construction provides commercial concrete construction, asphalt paving, and metal buildings for contractors, developers, and municipalities in Oklahoma City, OK.",
    heroDescription:
      "H&H Construction supports commercial and public construction projects throughout the Oklahoma City metro — concrete, asphalt paving, and metal buildings for contractors, developers, and municipalities.",
    intro:
      "As Oklahoma's capital and largest commercial market, Oklahoma City sees continuous commercial development, industrial growth, and public infrastructure work. H&H Construction, based nearby in Norman, provides the concrete, paving, and metal building services that keep those projects moving.",
    localContext: [
      "Oklahoma City is the state capital and the largest commercial construction market in Oklahoma, the point where I-35, I-40, and I-44 converge. Industrial and warehouse development along the I-40 and I-240 corridors, ongoing retail and medical construction, and a sustained public capital program keep a steady volume of concrete, paving, and metal building work moving across the metro.",
      "MAPS 4, the penny sales tax program Oklahoma City voters approved in December 2019, is projected to raise roughly $1.1 billion across 16 projects and runs through 2028. Two line items bear directly on this trade: $96.5 million for sidewalks, bike lanes, trails, and streetlights, and $97 million for transit, which includes bus stop improvements. Parks, youth centers, and the fairgrounds coliseum add further site work and paving scope on top of that.",
    ],
    marketNotes: [
      {
        title: "Heavy truck corridors",
        body: "Industrial sites near I-40, I-240, and the airport carry loaded trailer traffic that destroys pavement designed for passenger cars. Drive aisles, dock approaches, and dumpster pads on these properties need thicker sections or concrete, while stall areas can be built lighter.",
      },
      {
        title: "Public capital work is inspected",
        body: "MAPS 4 sidewalk, trail, and transit money flows into work that gets checked for ADA compliance. Running slope, cross slope, landing dimensions, and detectable warnings are measured rather than estimated, and a ramp outside tolerance comes out and gets replaced.",
      },
      {
        title: "Multiple jurisdictions",
        body: "Projects in the metro often cross into Edmond, Moore, Midwest City, or Del City as they move outward, and permitting and inspection expectations are not identical across those municipalities.",
      },
      {
        title: "Secure and restricted sites",
        body: "Facilities near Tinker Air Force Base and Will Rogers World Airport can carry access, badging, and scheduling requirements that a standard commercial site does not. Those constraints belong in the schedule from the start, not discovered at mobilization.",
      },
    ],
    nearbyAreas: ["Edmond", "Moore", "Midwest City", "Del City", "Norman", "Yukon", "Mustang"],
  },
  {
    slug: "edmond",
    name: "Edmond",
    metaTitle: "Commercial Concrete, Asphalt & Metal Buildings in Edmond, OK",
    h1: "Edmond Commercial Concrete, Paving & Metal Buildings",
    metaDescription:
      "H&H Construction provides commercial concrete construction, asphalt paving, and metal buildings for contractors, developers, and municipalities in Edmond, OK.",
    heroDescription:
      "H&H Construction supports commercial and public construction projects in Edmond, OK — concrete, asphalt paving, and metal buildings for contractors, developers, and municipalities.",
    intro:
      "Edmond's continued commercial, retail, and municipal development creates steady demand for dependable site work and building packages. H&H Construction works with general contractors, developers, and the City of Edmond on the concrete, paving, and metal building scopes those projects require.",
    localContext: [
      "Edmond sits at the north edge of the Oklahoma City metro in Oklahoma County, with a commercial base driven by sustained residential growth, the University of Central Oklahoma, and one of the larger school districts in the state. Growth of that kind produces a steady stream of retail centers, medical offices, church and school expansion, and the parking and site work each of those requires.",
      "Access is mostly from I-35 on the east side and the Broadway Extension corridor on the west, both carrying heavy commuter volume. Lane closures and construction entrances on those routes need planning, and work at an occupied retail or medical property has to keep the site usable while it proceeds.",
    ],
    marketNotes: [
      {
        title: "Growth-driven site development",
        body: "New retail, office, and medical construction means ground-up work: building pads, parking lots, drives and approaches, sidewalks, and accessible routes delivered against a developer's schedule.",
      },
      {
        title: "Academic calendars govern institutional work",
        body: "Projects for Edmond Public Schools or the University of Central Oklahoma generally have to be completed inside a summer window, with campus access maintained the entire time. The calendar sets the schedule, not the contractor.",
      },
      {
        title: "Occupied-property phasing",
        body: "Much of the paving and concrete work here is rehabilitation at properties that cannot close. Phasing section by section keeps tenants, patients, and congregations parked while the work moves across the site.",
      },
      {
        title: "Commuter corridor constraints",
        body: "Sites along I-35 and the Broadway Extension carry heavy peak-hour traffic. Deliveries and closures get planned around those windows to keep the work moving and the public safe.",
      },
    ],
    nearbyAreas: ["Oklahoma City", "Norman", "Midwest City", "Yukon"],
  },
  {
    slug: "norman",
    name: "Norman",
    metaTitle: "Commercial Concrete, Asphalt & Metal Buildings in Norman, OK",
    h1: "Norman Commercial Concrete, Paving & Metal Buildings",
    metaDescription:
      "H&H Construction is based in Norman, OK, providing commercial concrete, asphalt paving, and metal buildings for contractors, developers, and Cleveland County public agencies.",
    heroDescription:
      "H&H Construction is headquartered in Norman, so our crews and equipment start the day in the city where your project is — commercial concrete, asphalt paving, and metal buildings across Cleveland County.",
    intro:
      "Norman is Oklahoma's third most populous city and the county seat of Cleveland County, with roughly 132,000 residents and a commercial base anchored by the University of Oklahoma and the National Weather Center. It is also where H&H Construction is based, which means Norman projects carry the shortest mobilization of anywhere we work.",
    localContext: [
      "Being headquartered here changes the practical economics of a Norman project. Mobilization is short, someone can be on site the same morning a question comes up, and punch items do not require scheduling a trip in from another metro. On phased work at an occupied property, that responsiveness usually matters more than the difference between two bids.",
      "Commercial work in Norman splits between the university corridor, the retail and medical development along the I-35 frontage, and steady public infrastructure through the City of Norman and Cleveland County. Norman Public Schools operates campuses across the city, and campus work has to fit the academic calendar rather than the other way around.",
    ],
    marketNotes: [
      {
        title: "Shortest mobilization we have",
        body: "Our office and equipment are here in Norman. Crews are not driving in from another county, which shortens response time on punch work, weather delays, and change directives.",
      },
      {
        title: "I-35 and Highway 9 access",
        body: "Most commercial sites in Norman are reached from the I-35 frontage or State Highway 9. Haul routes and delivery timing are straightforward, which helps keep concrete inside its placement window and asphalt above minimum temperature.",
      },
      {
        title: "Cleveland County public work",
        body: "The City of Norman and Cleveland County let sidewalk, curb, ADA ramp, and facility work that requires documented compliance and coordination around public access. These projects are inspected against the standard, not against intent.",
      },
      {
        title: "University-adjacent scheduling",
        body: "Work near the University of Oklahoma runs on a different rhythm. Event schedules, football weekends, and student move-in all constrain when a lot can be closed, and phasing around those dates avoids the surprise that shuts a site down for three days.",
      },
      {
        title: "Central Oklahoma soils and freeze-thaw",
        body: "Expansive clay soils and hard freeze-thaw cycling drive base preparation and jointing decisions on both concrete and asphalt in this part of the state. A section detailed for a milder climate will not hold up through a Norman winter.",
      },
    ],
    nearbyAreas: ["Moore", "Oklahoma City", "Noble", "Del City", "Midwest City"],
  },
  {
    slug: "moore",
    name: "Moore",
    metaTitle: "Commercial Concrete, Asphalt & Metal Buildings in Moore, OK",
    h1: "Moore Commercial Concrete, Paving & Metal Buildings",
    metaDescription:
      "H&H Construction provides commercial concrete, asphalt paving, and metal buildings for Moore, OK — between Norman and Oklahoma City on the I-35 corridor.",
    heroDescription:
      "Commercial concrete, asphalt paving, and metal buildings for Moore projects on the I-35 corridor between Norman and Oklahoma City — short mobilization from our Norman headquarters.",
    intro:
      "Moore sits on I-35 between Norman and Oklahoma City, with commercial growth along the interstate frontage, a large public school district, and steady retail and medical development. From H&H's Norman office, Moore is one of the shortest mobilizations in the metro.",
    localContext: [
      "Most Moore commercial sites are reached from the I-35 corridor or the cross streets that feed it. That proximity to both Norman and south Oklahoma City keeps haul routes short for concrete and asphalt, which matters when a pour window or mat temperature is on the clock. It also means crews can answer punch items and weather delays without waiting on a long drive across the metro.",
      "Moore Public Schools and the city's retail and medical growth produce the same calendar-driven work seen elsewhere in the south metro: summer windows for campus paving and flatwork, and occupied-property phasing for shopping centers that cannot close. Municipal sidewalk, curb, and facility work adds inspected public scope on top of private development.",
    ],
    marketNotes: [
      {
        title: "I-35 corridor access",
        body: "Commercial pads and lots along the interstate need delivery and closure plans that respect peak traffic. Short haul distance from Norman helps keep concrete and asphalt inside their placement windows.",
      },
      {
        title: "School-district calendars",
        body: "Campus parking lots, bus loops, and sidewalk work generally have to finish inside a summer break, with access maintained for staff and summer programs the entire time.",
      },
      {
        title: "Occupied retail phasing",
        body: "Much of Moore's paving and concrete rehabilitation happens at properties that stay open. Section-by-section sequencing keeps tenants parked and deliveries moving.",
      },
      {
        title: "South-metro soils and freeze-thaw",
        body: "Expansive clay and hard freeze-thaw cycling still govern base prep and jointing. A section borrowed from a milder climate will not hold through a Moore winter.",
      },
    ],
    nearbyAreas: ["Norman", "Oklahoma City", "Newcastle", "Midwest City", "Del City"],
  },
  {
    slug: "yukon",
    name: "Yukon",
    metaTitle: "Commercial Concrete, Asphalt & Metal Buildings in Yukon, OK",
    h1: "Yukon Commercial Concrete, Paving & Metal Buildings",
    metaDescription:
      "H&H Construction provides commercial concrete, asphalt paving, and metal buildings for Yukon, OK — including I-40 and Garth Brooks corridor commercial development.",
    heroDescription:
      "Commercial concrete, asphalt paving, and metal buildings for Yukon's I-40 growth corridor — retail, medical, and mixed-use site work across Canadian County's fast-growing west metro.",
    intro:
      "Yukon sits on I-40 west of Oklahoma City near the Kilpatrick Turnpike, with one of the stronger retail trade areas in the west metro around Garth Brooks Boulevard. Sustained commercial growth there keeps a steady pipeline of pads, parking lots, and building shells.",
    localContext: [
      "The I-40 and Garth Brooks Boulevard trade area carries heavy daily traffic and anchors much of Yukon's national retail and restaurant development. Czech Hall Road and other corridor sites continue to add retail and multifamily-adjacent commercial pads. That kind of growth means ground-up civil packages — building pads, drives, sidewalks, and lots — delivered against developer schedules.",
      "Canadian County has been among the fastest-growing parts of the state, and Yukon's commercial work reflects that: medical offices, hotels and restaurants tied to new mixed-use plans, and school-district projects that still have to finish inside academic calendars. From Norman, Yukon is a west-metro mobilization across the Oklahoma City side — close enough for coordinated concrete, paving, and metal building packages.",
    ],
    marketNotes: [
      {
        title: "I-40 and Garth Brooks trade area",
        body: "High-traffic retail and restaurant sites need lots, approaches, and accessible routes built to handle volume from day one, with drainage that keeps water off the pavement under constant use.",
      },
      {
        title: "Growth pads and mixed-use civil work",
        body: "New commercial and mixed-use development means coordinated pads, parking, sidewalks, and often a metal building or shell — scopes that benefit from one contractor across trades.",
      },
      {
        title: "West-metro haul and timing",
        body: "Deliveries cross the metro from our Norman base. Pour windows and asphalt temperature still govern the day, so mobilization and plant timing get planned rather than improvised.",
      },
      {
        title: "School and institutional windows",
        body: "Yukon school and church work typically has to land inside break calendars or around occupied-campus access, the same constraint that drives institutional sequencing elsewhere in the metro.",
      },
    ],
    nearbyAreas: ["Oklahoma City", "Mustang", "Bethany", "Piedmont", "El Reno"],
  },
  {
    slug: "midwest-city",
    name: "Midwest City",
    metaTitle: "Commercial Concrete, Asphalt & Metal Buildings in Midwest City, OK",
    h1: "Midwest City Commercial Concrete, Paving & Metal Buildings",
    metaDescription:
      "H&H Construction provides commercial concrete, asphalt paving, and metal buildings for Midwest City, OK — including work near Tinker Air Force Base and the I-40 corridor.",
    heroDescription:
      "Commercial concrete, asphalt paving, and metal buildings for Midwest City retail, industrial, and defense-adjacent sites along I-40 and the corridors that serve Tinker Air Force Base.",
    intro:
      "Midwest City's commercial market is shaped by Tinker Air Force Base — Oklahoma's largest single-site employer — plus I-40 retail, Rose State College, and the aerospace and industrial cluster that grew up next to the base. That mix produces both everyday commercial site work and projects with access constraints a standard retail lot does not have.",
    localContext: [
      "Tinker drives daytime traffic through Midwest City's retail and service corridors, including SE 29th Street and Douglas Boulevard approaches that serve as gateways to Town Center Plaza and the base. Retail, hospitality, and medical sites along I-40 see volume that keeps parking lots and concrete flatwork in a constant cycle of construction and rehabilitation.",
      "Defense-adjacent and industrial sites near the base — including the Tinker Business & Industrial Park cluster — can carry badging, delivery, or scheduling requirements that belong in the plan before mobilization. Rose State College adds institutional work that runs on academic calendars. From Norman, Midwest City is an east-metro run with clear interstate access via I-35 and I-40.",
    ],
    marketNotes: [
      {
        title: "Tinker-driven commercial volume",
        body: "Retail, hospitality, and service properties near the base see heavy daily traffic. Lots and accessible routes have to be built and maintained for that use, not for occasional passenger-car loads.",
      },
      {
        title: "Secure and restricted-site constraints",
        body: "Projects near Tinker can require access planning, delivery windows, or badging that a standard commercial site does not. Those constraints need to be in the schedule before the first truck arrives.",
      },
      {
        title: "I-40 retail and gateway corridors",
        body: "Corridor retail and mixed commercial sites need drainage, striping, and phasing that keep stores open while paving or flatwork moves across the property.",
      },
      {
        title: "Aerospace and industrial yards",
        body: "Industrial and defense-support facilities need heavier pavement sections, dock approaches, and sometimes metal building shells sized for equipment and truck traffic rather than retail parking.",
      },
    ],
    nearbyAreas: ["Oklahoma City", "Del City", "Moore", "Nicoma Park", "Choctaw"],
  },
] as const;
