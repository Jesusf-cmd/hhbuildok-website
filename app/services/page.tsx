import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            as="h1"
            eyebrow="What We Do"
            title="Commercial Construction Services"
            description="Three trades, one crew stack: commercial concrete, asphalt paving, and metal buildings & roofing for contractors, developers, and public agencies across Oklahoma."
          />
          <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-charcoal/80">
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
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col border border-border bg-surface"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    Typical Scope
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {service.scopeItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/90"
                      >
                        <span aria-hidden="true" className="mt-0.5 text-accent">
                          &#9632;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    View {service.shortTitle} Details
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted border-y border-border">
        <Container className="py-12 lg:py-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Specialty
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Commercial Parking Lots
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">
                Asphalt or concrete paving, site concrete, curb and gutter,
                approaches, and ADA flatwork — one contractor for the full lot
                package across Oklahoma.
              </p>
            </div>
            <Link
              href="/services/commercial-parking-lots"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
            >
              View Parking Lot Services
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Built for How Commercial Projects Actually Run
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/80">
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
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Where We Work
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/80">
                Headquartered in Norman with active work across the Oklahoma City
                metro and statewide. Start with a featured city page, or tell us
                where the site is — we evaluate projects across Oklahoma.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {priorityCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-area/${city.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                    >
                      {city.name}, OK
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/service-area"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    Full Service Area
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    Industries We Serve
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your commercial concrete, asphalt, or metal building
            scope and our team will follow up to discuss next steps.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Request a Bid
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
