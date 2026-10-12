import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
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

      <PageHero
        eyebrow="Service Area"
        title="Serving Commercial Construction Across Oklahoma"
      >
        <p className="type-lead mt-6 max-w-2xl">
          Headquartered in Norman, H&H Construction delivers commercial concrete, asphalt paving, and metal buildings throughout Oklahoma — from the Oklahoma City metro to projects statewide.
        </p>
        <div className="type-prose mt-10 max-w-3xl space-y-6 border-t border-white/15 pt-10">
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
      </PageHero>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Featured Service Areas
            </h2>
            <p className="type-lead max-w-xl">
              These city pages cover local market conditions, access corridors,
              and the kinds of commercial work we see most often in each place.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {priorityCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="card-interactive group flex flex-col border border-line bg-white"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-graphite">
                  <Image
                    src="/images/stock/oklahoma-service-area.jpg"
                    alt=""
                    fill
                    aria-hidden="true"
                    className="card-interactive-image object-cover opacity-35 grayscale"
                  />
                  <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                    <h3 className="type-h2-sm text-paper">
                      {city.name}, OK
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="type-body flex-1">
                    {city.intro}
                  </p>
                  <span className="il-link mt-6 self-start group-hover:text-accent">
                    View {city.name} Details
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Also Serving Across Oklahoma
            </h2>
            <p className="type-lead max-w-xl">
              Cities without a dedicated page still sit inside our working
              radius. Dedicated pages get built where we have enough local detail
              to make them useful — not as thin placeholders.
            </p>
          </div>
          <ul
            className="il-dot-list mt-12 grid grid-cols-2 border-t border-line-strong sm:grid-cols-3 lg:grid-cols-4"
            aria-label="Additional cities and regions served"
          >
            {otherCities.map((city) => (
              <li
                key={city}
                className="border-b border-line-strong py-4 text-[0.9375rem] font-medium text-graphite"
              >
                {city}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-paper">
              The Same Three Services in Every Market
            </h2>
            <p className="type-lead max-w-xl">
              Geography changes access and permitting. The trades do not. Wherever
              the site is, the work is commercial concrete, asphalt paving, and
              metal buildings & roofing.
            </p>
          </div>
          <div className="mt-12 grid gap-y-10 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col border-t border-white/20 pt-8 sm:border-l sm:border-t-0 sm:px-8 sm:pt-0 sm:first:border-l-0 sm:first:pl-0"
              >
                <h3 className="type-h3 text-paper transition-colors group-hover:text-accent-light">
                  {service.title}
                </h3>
                <p className="type-body mt-3 flex-1">
                  {service.description}
                </p>
                <span className="il-link mt-6 self-start">
                  View {service.shortTitle}
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Have a Project in Oklahoma?"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Contact us with your project location and scope, and our team
          will follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
