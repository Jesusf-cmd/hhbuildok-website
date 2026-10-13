import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RetainingWallBudgetCalculator } from "@/components/retaining-walls/RetainingWallBudgetCalculator";
import {
  RetainingWallBidForm,
  RetainingWallEstimateProvider,
} from "@/components/retaining-walls/RetainingWallEstimateContext";
import { PhoneLink } from "@/components/ui/PhoneLink";
import {
  RETAINING_WALL_RATE_HIGH,
  RETAINING_WALL_RATE_LOW,
} from "@/lib/retaining-wall-estimate";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Retaining Wall Construction in Yukon & Edmond",
  description: "Discuss your retaining-wall construction project with H&H Construction. Serving Yukon and Edmond, Oklahoma. Project minimum $10,000.",
  alternates: { canonical: "/retaining-walls" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Retaining Wall Construction | H&H Construction",
    description: "Yukon & Edmond, Oklahoma. Retaining-wall construction projects of $10,000 or more.",
    url: `${siteConfig.url}/retaining-walls`,
    images: [{ url: "/images/retaining-walls/tall-curved-block-wall.jpg", alt: "Tall curved block retaining wall from a previous project" }],
  },
};

const cta = "inline-flex min-h-12 items-center justify-center bg-accent px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-accent-hover";
const projectPhotos = [
  { file: "tall-curved-block-wall.jpg", width: 960, height: 720, alt: "Tall tan block retaining wall with a curved end beside a wooded slope", caption: "Tall curved block wall" },
  { file: "block-wall-site-construction.jpg", width: 960, height: 698, alt: "Long gray block retaining wall during site construction with grading equipment above", caption: "Block wall during site construction" },
  { file: "block-wall-residential.jpg", width: 720, height: 960, alt: "Gray block retaining wall with steps below a residential deck", caption: "Residential block wall and steps" },
  { file: "curved-block-wall-gravel-area.jpg", width: 960, height: 720, alt: "Curved gray block retaining wall surrounding a gravel area beside trees", caption: "Curved block wall beside a gravel area" },
  { file: "poured-concrete-wall-front.jpg", width: 1280, height: 960, alt: "Poured concrete retaining wall and exposed footing during construction", caption: "Poured concrete wall during construction" },
  { file: "poured-concrete-wall-side.jpg", width: 1280, height: 960, alt: "Side view of a poured concrete retaining wall at a construction site", caption: "Poured concrete wall — side view" },
];
const steps = [
  ["01", "Share your site and scope", "Send your location, approximate wall dimensions, photos, and any available plans. Tell us whether this is new construction or replacement."],
  ["02", "Review the project requirements", "We discuss access, grade changes, drainage, and the intended use. Required engineering and permits are identified for the proposed scope."],
  ["03", "Agree on a written scope", "Your proposal defines the construction work, inclusions, exclusions, and pricing before you decide to move forward."],
];

export default function RetainingWallLandingPage() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" aria-label="H&H Construction home"><Image src="/images/hh-construction-logo.png" alt="H&H Construction" width={160} height={64} className="h-12 w-auto object-contain" /></Link>
          <PhoneLink showIcon className="inline-flex min-h-12 items-center gap-2 text-sm font-bold sm:text-base" />
        </div>
      </header>
      <main id="main-content">
        <RetainingWallEstimateProvider>
        <section className="tone-dark relative isolate overflow-hidden bg-graphite text-paper">
          <Image src="/images/retaining-walls/tall-curved-block-wall.jpg" alt="Tall curved block retaining wall from a previous project" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/65" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">Yukon & Edmond · Oklahoma</p>
              <h1 className="mt-6 max-w-3xl text-5xl leading-[1.04] sm:text-7xl">Retaining walls.<br /><span className="text-accent-light">A clear scope.<br />A solid next step.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">Retaining-wall construction for grade changes, property improvements, and site development. Talk with H&H Construction about your site and what the wall needs to do.</p>
              <div className="mt-8 flex flex-wrap gap-3"><a href="#request-bid" className={cta}>Request a retaining-wall bid ↗</a><PhoneLink className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-4 text-sm font-bold hover:bg-white/10">Call {siteConfig.phone}</PhoneLink><a href="#budget-calculator" className="inline-flex min-h-12 items-center justify-center px-2 py-4 text-sm font-bold underline underline-offset-4 hover:text-accent-light">Estimate a planning budget</a></div>
            </div>
            <aside className="border border-white/25 bg-graphite/80 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-paper/70">Project fit</p>
              <p className="mt-3 font-heading text-4xl uppercase">$10,000+ projects</p>
              <p className="mt-4 text-sm leading-relaxed text-paper/80">Retaining-wall construction in Yukon and Edmond. This is a project minimum, not a fixed wall price.</p>
              <div className="mt-6 border-t border-white/20 pt-5 text-sm text-paper/80">Have photos or plans? Include them with your bid request.</div>
            </aside>
          </div>
        </section>
        <section className="border-b border-line bg-warm">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 text-sm font-semibold sm:grid-cols-3 sm:px-8"><p>01 / Retaining-wall construction</p><p>02 / Yukon & Edmond project focus</p><p>03 / Site-specific scope and pricing</p></div>
        </section>
        <section id="budget-calculator" aria-labelledby="budget-calculator-title" className="mx-auto grid max-w-7xl scroll-mt-6 gap-12 px-5 pt-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Plan your budget</p>
            <h2 id="budget-calculator-title" className="mt-4 text-4xl sm:text-5xl">Estimate a<br />planning budget.</h2>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-graphite">{`Retaining-wall planning budgets: $${RETAINING_WALL_RATE_LOW}–$${RETAINING_WALL_RATE_HIGH} per square foot of wall face.`}</p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">Enter your wall length and average height above the footing to see a preliminary range. No contact information is needed to calculate.</p>
            <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-text-muted">
              <li>Wall-face area = length × average height above the footing.</li>
              <li>If the wall steps up or down, use the average exposed height along its length.</li>
              <li>Count one face of the wall only. Do not count both sides or include the footing.</li>
            </ul>
          </div>
          <RetainingWallBudgetCalculator />
        </section>
        <section aria-labelledby="project-gallery-title" className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Previous projects</p><h2 id="project-gallery-title" className="mt-4 text-4xl sm:text-5xl">See the work.</h2><p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">Block and poured-concrete retaining walls from previous projects, including finished walls and work during construction.</p></div>
            <a href="#request-bid" className={cta}>Discuss your wall project ↗</a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectPhotos.map((photo) => <figure key={photo.file} className="border border-line bg-warm">
              <a href={`/images/retaining-walls/${photo.file}`} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${photo.caption}`} className="block">
                <Image src={`/images/retaining-walls/${photo.file}`} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
              </a>
              <figcaption className="px-5 py-4 text-sm font-semibold">{photo.caption}<span className="mt-1 block text-xs font-normal text-text-muted">Select photo to view full size ↗</span></figcaption>
            </figure>)}
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Start with the site</p><h2 className="mt-4 text-4xl sm:text-5xl">What does your wall<br />need to hold back?</h2><p className="mt-6 text-base leading-relaxed text-text-muted">Wall height, retained soil, nearby structures, drainage, and equipment access all affect the construction scope. Share those details early so we can evaluate whether the project is a fit.</p><p className="mt-4 text-base leading-relaxed text-text-muted">Where engineered plans are required, the structural design and construction requirements must be established before work begins. Wall dimensions, reinforcement, footings, and drainage follow the approved project requirements.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{[
            ["Grade changes", "New retaining walls to support a proposed grading or property-improvement scope."],
            ["Replacement", "Existing wall removal and replacement considered after review of the site and project requirements."],
            ["Site development", "Retaining-wall scopes associated with building sites, parking areas, and property access."],
            ["Drainage & access", "Drainage work, excavation, and backfill inclusions defined in your project proposal."],
          ].map(([title, body]) => <article key={title} className="border border-line bg-warm p-6"><h3 className="text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-text-muted">{body}</p></article>)}</div>
        </section>
        <section className="tone-dark bg-graphite px-5 py-16 text-paper sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-light">From inquiry to proposal</p><h2 className="mt-4 text-4xl sm:text-5xl">Know the next step.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{steps.map(([number, title, body]) => <article key={number} className="border-t border-white/25 pt-6"><p className="text-3xl text-accent-light">{number}</p><h3 className="mt-4 text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-paper/75">{body}</p></article>)}</div></div></section>
        <section id="request-bid" className="mx-auto grid max-w-7xl scroll-mt-6 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Tell us about your project</p><h2 className="mt-4 text-4xl sm:text-5xl">Let’s review your<br />retaining-wall scope.</h2><p className="mt-6 text-base leading-relaxed text-text-muted">For projects of $10,000 or more in Yukon and Edmond. Final pricing depends on wall dimensions, site conditions, access, required plans, and the agreed construction scope.</p><ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm text-text-muted"><li>Include approximate wall length and height.</li><li>Attach site photos, drawings, or available plans.</li><li>Tell us your timeline and whether this is new construction or replacement.</li></ul><p className="mt-8 text-sm">Prefer to discuss it by phone?</p><PhoneLink className="mt-2 inline-flex min-h-12 items-center text-2xl font-bold text-accent underline underline-offset-4" /><p className="mt-8 text-sm leading-relaxed text-text-muted">Explore H&H’s <Link href="/services/concrete-construction" className="underline underline-offset-4">concrete construction services</Link> or <Link href="/projects/chandler-county-courthouse-parking-lot" className="underline underline-offset-4">published parking-lot case study</Link> for more about our construction work.</p></div>
          <RetainingWallBidForm />
        </section>
        <section className="border-t border-line bg-warm px-5 py-14 sm:px-8"><div className="mx-auto max-w-4xl"><h2 className="text-3xl">Before you request a bid</h2>{[
          ["Is $10,000 the price of a retaining wall?", "No. It is the minimum project value for this campaign. Your proposal depends on dimensions, construction requirements, drainage, access, and site conditions."],
          ["Can I submit a request without drawings?", "Yes. Send your approximate dimensions and site photos. We can discuss what additional information or professional design is needed to evaluate the scope."],
          ["Does submitting a request commit me to a project?", "No. A bid request starts a discussion. Work proceeds only after the scope, pricing, and agreement are established."],
        ].map(([question, answer]) => <details key={question} className="mt-5 border-b border-line pb-5"><summary className="min-h-11 cursor-pointer py-3 font-semibold">{question}</summary><p className="mt-2 text-sm leading-relaxed text-text-muted">{answer}</p></details>)}</div></section>
        </RetainingWallEstimateProvider>
      </main>
      <footer className="border-t border-line px-5 py-8 pb-24 sm:px-8 sm:pb-8"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-sm text-text-muted"><p>H&H Construction · Retaining-wall inquiries · Yukon & Edmond</p><a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">{siteConfig.email}</a><Link href="/contact" className="underline underline-offset-4">Contact & business information</Link></div></footer>
      <div className="tone-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/20 bg-graphite p-2 text-white shadow-xl sm:hidden"><PhoneLink className="flex min-h-12 items-center justify-center text-sm font-bold">Call H&H</PhoneLink><a href="#request-bid" className="flex min-h-12 items-center justify-center bg-accent text-sm font-bold">Request a bid</a></div>
    </>
  );
}
