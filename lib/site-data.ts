export const siteConfig = {
  name: "H&H Construction",
  domain: "hhbuildok.com",
  url: "https://hhbuildok.com",
  phone: "405-476-5476",
  phoneTel: "4054765476",
  // E.164 for structured data; search engines match this against directory listings.
  phoneE164: "+14054765476",
  email: "info@hhbuildok.com",
  address: {
    street: "770 W Rock Creek",
    suite: "#115",
    city: "Norman",
    state: "OK",
    zip: "73069",
  },
} as const;

// Bump when page content meaningfully changes. Stamping sitemap entries with a
// fresh Date on every build makes every URL claim it just changed, which search
// engines learn to distrust.
export const contentLastUpdated = "2026-08-09";

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
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
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
    image: "/images/stock/service-concrete-construction.jpg",
    imageAlt: "commercial concrete construction project photo",
    href: "/services/concrete-construction",
    scopeItems: [
      "Structural foundations and footings",
      "Slab-on-grade and structural slabs",
      "Sidewalks, curbs, and gutters",
      "Retaining walls",
      "Parking lot and site concrete infrastructure",
      "Concrete repair and replacement",
    ],
    faqs: [
      {
        question: "What types of concrete projects does H&H Construction handle?",
        answer:
          "We handle structural and flatwork concrete for commercial buildings, industrial facilities, and public infrastructure — including foundations, slabs, sidewalks, curbs and gutters, retaining walls, and site concrete for parking lots and developments.",
      },
      {
        question: "Do you work on public and municipal concrete projects?",
        answer:
          "Yes. We work with municipalities and school districts on public infrastructure such as sidewalks, curbs, and facility concrete, coordinating around active operations and public schedules.",
      },
      {
        question: "What areas of Oklahoma do you serve for concrete work?",
        answer:
          "We serve commercial concrete projects across Oklahoma, including the Oklahoma City and Edmond metro areas, Norman, Tulsa, and surrounding communities. Contact us with your project location and scope.",
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
    image: "/images/stock/service-asphalt-paving.jpg",
    imageAlt: "commercial asphalt paving project photo",
    href: "/services/asphalt-paving",
    scopeItems: [
      "New commercial and industrial paving",
      "Asphalt overlays and resurfacing",
      "Patching and pothole repair",
      "Parking lot construction and rehabilitation",
      "Municipal roadway paving",
      "Industrial yard and heavy-duty paving",
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
    image: "/images/stock/service-metal-buildings-roofing.jpg",
    imageAlt: "metal building and roofing project photo",
    href: "/services/metal-buildings-roofing",
    scopeItems: [
      "Pre-engineered metal building erection",
      "Warehouse and industrial facility structures",
      "Commercial metal roofing systems",
      "Metal building shells for developers",
      "Roofing repair and replacement",
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
    id: "industrial-paving",
    title: "Industrial Yard Paving",
    category: "Asphalt",
    image: "/images/stock/project-industrial-paving.jpg",
    imageAlt: "crew paving asphalt at an industrial yard with semi-trailers",
  },
  {
    id: "municipal-building",
    title: "Municipal Metal Building",
    category: "Metal Buildings",
    image: "/images/stock/project-municipal-building.jpg",
    imageAlt: "aerial view of a metal warehouse and industrial storage facility",
  },
  {
    id: "school-parking",
    title: "School District Parking Lot",
    category: "Asphalt",
    image: "/images/stock/project-school-parking.jpg",
    imageAlt: "aerial view of a school district bus parking lot",
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
    nearbyAreas: ["Oklahoma City", "Norman", "Midwest City", "Yukon"],
  },
] as const;
