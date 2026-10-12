import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { services, priorityCities } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Commercial Construction Services",
  description:
    "H&H Construction self-performs commercial concrete, asphalt paving, and metal buildings & roofing for contractors, developers, and municipalities across Oklahoma.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <PageHero eyebrow="What We Do" title="Commercial Construction Services">
        <p className="type-lead mt-6 max-w-2xl">
          Three trades, one crew stack: commercial concrete, asphalt paving, and metal buildings & roofing for contractors, developers, and public agencies across Oklahoma.
        </p>
        <div className="type-prose mt-10 max-w-3xl space-y-6 border-t border-white/15 pt-10">
          <p>
            Most commercial sites need more than one of these scopes before
            they can open. Foundations and slabs come first, paving and
            sidewalks follow, and many industrial or municipal projects finish
            with a pre-engineered metal building. When those packages go to
            separate subcontractors, the schedule fills with handoffs —
            different mobilizations, different punch lists, and nobody
            accountable for the seam between them.
          </p>
          <p>
            H&H Construction self-performs all three. That means one point of
            contact from bid through closeout, crews that already know how the
            adjacent trade will land on the same site, and fewer gaps for a
            general contractor or owner to manage. Work is coordinated from
            our Norman headquarters and runs statewide.
          </p>
        </div>
      </PageHero>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="card-interactive flex flex-col border border-line bg-white"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="card-interactive-image object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p aria-hidden="true" className="il-num text-base">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="type-h2-sm mt-4 text-graphite">
                    {service.title}
                  </h2>
                  <p className="type-body mt-4">
                    {service.description}
                  </p>
                  <h3 className="type-label mt-8 text-text-muted">
                    Typical Scope
                  </h3>
                  <ul className="il-checklist mt-4">
                    {service.scopeItems.map((item) => (
                      <li key={item}>
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link href={service.href} className="il-link">
                      View {service.shortTitle} Details
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <p className="type-eyebrow">
            Specialty
          </p>
          <div className="mt-8 grid gap-y-10 lg:grid-cols-3">
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0">
              <div className="max-w-xl">
                <h2 className="type-h2-sm text-paper">
                  Commercial Parking Lots
                </h2>
                <p className="type-body mt-4">
                  Asphalt or concrete paving, site concrete, curb and gutter,
                  approaches, and striping — one contractor for the full lot
                  package. Need overlay or repair without a full lot rebuild?
                  See our commercial asphalt paving services.
                </p>
              </div>
              <Link
                href="/services/commercial-parking-lots"
                className="il-link self-start"
              >
                View Parking Lot Services
                <ArrowIcon />
              </Link>
            </div>
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0">
              <div className="max-w-xl">
                <h2 className="type-h2-sm text-paper">
                  Commercial Foundations
                </h2>
                <p className="type-body mt-4">
                  Footings, slab-on-grade, anchor bolt layouts, and site
                  concrete at the building line — coordinated with metal building
                  and GC schedules across Oklahoma.
                </p>
              </div>
              <Link
                href="/services/commercial-foundations"
                className="il-link self-start"
              >
                View Foundation Services
                <ArrowIcon />
              </Link>
            </div>
            <div className="flex flex-col gap-6 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0">
              <div className="max-w-xl">
                <h2 className="type-h2-sm text-paper">
                  Commercial Metal Buildings
                </h2>
                <p className="type-body mt-4">
                  Pre-engineered metal building erection, red iron framing, and
                  metal roofing — coordinated with foundation and paving scopes
                  across Oklahoma.
                </p>
              </div>
              <Link
                href="/services/commercial-metal-buildings"
                className="il-link self-start"
              >
                View Metal Building Services
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="type-h2-sm text-graphite">
                Built for How Commercial Projects Actually Run
              </h2>
              <div className="type-prose mt-6 space-y-5">
                <p>
                  Schedules on these jobs are driven by other trades, weather
                  windows, and the day the owner needs the lot open. We bid and
                  sequence work against that reality — phasing paving around
                  occupied tenants, holding concrete for a pour window that
                  actually works, and coordinating metal building erection with
                  the foundation that has to be waiting when the steel arrives.
                </p>
                <p>
                  If you are buying only one of the three scopes, that is fine.
                  Each service page covers the decisions that drive quality and
                  cost for that trade. If you are buying more than one, putting
                  them under one contract usually saves more time than it costs.
                </p>
              </div>
            </div>
            <div>
              <h2 className="type-h2-sm text-graphite">
                Where We Work
              </h2>
              <p className="type-prose mt-6">
                Headquartered in Norman with active work across the Oklahoma City
                metro and statewide. Start with a featured city page, or tell us
                where the site is — we evaluate projects across Oklahoma.
              </p>
              <ul className="il-link-list mt-8">
                {priorityCities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/service-area/${city.slug}`}>
                      {city.name}, OK
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/service-area">
                    Full Service Area
                    <ArrowIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/industries">
                    Industries We Serve
                    <ArrowIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to Discuss Your Project?"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about your commercial concrete, asphalt, or metal building
          scope and our team will follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
