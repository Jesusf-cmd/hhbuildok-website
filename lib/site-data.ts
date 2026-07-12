export const siteConfig = {
  name: "H&H Construction",
  domain: "hhbuildok.com",
  phone: "(405) 000-0000",
  email: "bid@hhbuildok.com",
  address: "Oklahoma",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    id: "concrete",
    title: "Concrete Construction",
    description:
      "Structural and flatwork concrete for commercial foundations, slabs, sidewalks, curbs, retaining walls, and site infrastructure built to spec and schedule.",
    image: "/images/placeholders/service-concrete-construction.svg",
    imageAlt: "Placeholder: commercial concrete construction project photo",
    href: "#contact",
  },
  {
    id: "asphalt",
    title: "Asphalt Paving",
    description:
      "New paving, overlays, patching, and parking lot construction for commercial developments, industrial yards, and municipal roadways across Oklahoma.",
    image: "/images/placeholders/service-asphalt-paving.svg",
    imageAlt: "Placeholder: commercial asphalt paving project photo",
    href: "#contact",
  },
  {
    id: "metal",
    title: "Metal Buildings & Roofing",
    description:
      "Pre-engineered metal building erection and metal roofing systems for warehouses, industrial facilities, and commercial structures.",
    image: "/images/placeholders/service-metal-buildings-roofing.svg",
    imageAlt: "Placeholder: metal building and roofing project photo",
    href: "#contact",
  },
] as const;

export const featuredProjects = [
  {
    id: "commercial-foundation",
    title: "Commercial Foundation & Flatwork",
    category: "Concrete",
    image: "/images/placeholders/project-commercial-foundation.svg",
    imageAlt: "Placeholder: commercial foundation and flatwork project photo",
  },
  {
    id: "industrial-paving",
    title: "Industrial Yard Paving",
    category: "Asphalt",
    image: "/images/placeholders/project-industrial-paving.svg",
    imageAlt: "Placeholder: industrial yard paving project photo",
  },
  {
    id: "municipal-building",
    title: "Municipal Metal Building",
    category: "Metal Buildings",
    image: "/images/placeholders/project-municipal-building.svg",
    imageAlt: "Placeholder: municipal metal building project photo",
  },
  {
    id: "school-parking",
    title: "School District Parking Lot",
    category: "Asphalt",
    image: "/images/placeholders/project-school-parking.svg",
    imageAlt: "Placeholder: school district parking lot project photo",
  },
] as const;

export const industries = [
  {
    title: "General Contractors",
    description:
      "Reliable site work and structural packages that integrate with your project schedule and subcontractor coordination.",
  },
  {
    title: "Developers",
    description:
      "Ground-up site development support from paving and concrete to metal building shells for commercial properties.",
  },
  {
    title: "Municipalities",
    description:
      "Public infrastructure improvements including roadways, sidewalks, and facility construction delivered with clear communication.",
  },
  {
    title: "School Districts",
    description:
      "Parking lots, sidewalks, and building improvements designed to minimize disruption to campus operations.",
  },
  {
    title: "Commercial Property Owners",
    description:
      "Parking lot rehabilitation, concrete repairs, and building envelope work to protect and improve your asset.",
  },
  {
    title: "Industrial Facilities",
    description:
      "Heavy-duty paving, concrete flatwork, and metal building solutions built for demanding operational environments.",
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
