import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { serviceAreaCities, priorityCities } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Area | Commercial Construction Across Oklahoma",
  description:
    "H&H Construction serves commercial concrete, asphalt paving, and metal building projects throughout Oklahoma, including Oklahoma City, Edmond, Norman, Tulsa, and more.",
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
            eyebrow="Service Area"
            title="Serving Commercial Construction Across Oklahoma"
            description="H&H Construction provides commercial concrete, asphalt paving, and metal building services throughout Oklahoma. Don't see your city listed? Reach out — we evaluate projects across the state."
          />
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Featured Service Areas
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {priorityCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-area/${city.slug}`}
                className="group relative flex aspect-[16/9] flex-col justify-end overflow-hidden border border-border bg-charcoal p-6 sm:p-8"
              >
                <Image
                  src="/images/placeholders/oklahoma-service-area.svg"
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative">
                  <h3 className="font-heading text-2xl font-bold uppercase text-surface sm:text-3xl">
                    {city.name}, OK
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-surface/90 transition-colors group-hover:text-accent">
                    View Service Details
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
            Also Serving
          </h2>
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
            <Button href="/#contact" variant="secondary">
              Request a Bid
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
