import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { serviceAreaCities, priorityCities, services, nap } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Area | Commercial Construction Across Oklahoma",
  description:
    "H&H Construction is based in Norman and serves commercial concrete, asphalt paving, and metal building projects across Oklahoma — including Oklahoma City, Edmond, Tulsa, and statewide.",
  alternates: {
    canonical: "/service-area",
  },
};

export default function ServiceAreaPage() {
  const priorityCityNames = new Set<string>(
    priorityCities.map((city) => city.name),
  );
  const otherCities = serviceAreaCities.filter(
    (city) => !priorityCityNames.has(city),
  );

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Service Area", href: "/service-area" }]} />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Service Area"
            title="Serving Commercial Construction Across Oklahoma"
            description="Headquartered in Norman, H&H Construction delivers commercial concrete, asphalt paving, and metal buildings throughout Oklahoma — from the Oklahoma City metro to projects statewide."
          />
          <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-charcoal/80">
            <p>
              Our office is at {nap.addressLine1} in Norman, which puts crews
              and equipment inside the Oklahoma City metro on a short
              mobilization. That matters on phased work, weather delays, and
              punch items that should not wait for a crew driving in from
              another region. Norman, Oklahoma City, and Edmond are the markets
              we cover in the most detail on this site because that is where the
              densest commercial volume sits.
            </p>
            <p>
              Outside the metro, we evaluate work across the state — Tulsa and
              Broken Arrow to the northeast, Stillwater and Enid north, Lawton
              and Ardmore south, and the corridor cities in between. If your
              city is listed below or not, send the location and scope. Distance
              alone rarely decides whether a project is a fit; access, schedule,
              and scope do.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Featured Service Areas
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80">
            These city pages cover local market conditions, access corridors,
            and the kinds of commercial work we see most often in each place.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {priorityCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="group flex flex-col border border-border bg-surface transition-colors hover:border-accent"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-charcoal">
                  <Image
                    src="/images/stock/oklahoma-service-area.jpg"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="font-heading text-2xl font-bold uppercase text-surface sm:text-3xl">
                      {city.name}, OK
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="flex-1 text-sm leading-relaxed text-text-muted">
                    {city.intro}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors group-hover:text-accent">
                    View {city.name} Details
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Also Serving Across Oklahoma
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80">
            Cities without a dedicated page still sit inside our working
            radius. Dedicated pages get built where we have enough local detail
            to make them useful — not as thin placeholders.
          </p>
          <ul
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4"
            aria-label="Additional cities and regions served"
          >
            {otherCities.map((city) => (
              <li
                key={city}
                className="text-sm text-text-muted before:mr-2 before:text-accent before:content-['■']"
              >
                {city}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            The Same Three Services in Every Market
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80">
            Geography changes access and permitting. The trades do not. Wherever
            the site is, the work is commercial concrete, asphalt paving, and
            metal buildings & roofing.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group border border-border bg-surface p-6 transition-colors hover:border-accent sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors group-hover:text-accent">
                  View {service.shortTitle}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Have a Project in Oklahoma?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Contact us with your project location and scope, and our team
            will follow up to discuss next steps.
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
