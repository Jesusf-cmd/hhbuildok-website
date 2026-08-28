import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/site-data";
import { resolveCityService } from "@/lib/city-service-data";
import {
  concreteCityHref,
  concreteServiceAreaCities,
} from "@/lib/concrete-service-page";

type ConcreteCityPageProps = {
  params: Promise<{ city: string }>;
};

const concreteService = services.find(
  (service) => service.slug === "concrete-construction",
);

export function generateStaticParams() {
  return concreteServiceAreaCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: ConcreteCityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = concreteServiceAreaCities.find((item) => item.slug === citySlug);

  if (!city || !concreteService) {
    return {};
  }

  const resolved = resolveCityService(citySlug, "concrete-construction");
  const path = concreteCityHref(citySlug);

  if (resolved) {
    return {
      title: resolved.entry.metaTitle,
      description: resolved.entry.metaDescription,
      alternates: { canonical: path },
      openGraph: {
        title: resolved.entry.metaTitle,
        description: resolved.entry.metaDescription,
        url: path,
      },
    };
  }

  return {
    title: `Commercial Concrete in ${city.name}, OK`,
    description: `H&H Construction provides commercial concrete construction in ${city.name}, Oklahoma. Request a bid for foundations, slabs, site concrete, and flatwork.`,
    alternates: { canonical: path },
  };
}

export default async function ConcreteCityPage({ params }: ConcreteCityPageProps) {
  const { city: citySlug } = await params;
  const city = concreteServiceAreaCities.find((item) => item.slug === citySlug);

  if (!city || !concreteService) {
    notFound();
  }

  const resolved = resolveCityService(citySlug, "concrete-construction");
  const path = concreteCityHref(citySlug);
  const title =
    resolved?.entry.h1 ?? `Commercial Concrete Construction in ${city.name}, OK`;
  const description =
    resolved?.entry.heroDescription ??
    `Commercial concrete for ${city.name} projects — foundations, slabs, site flatwork, and parking infrastructure. City-specific content is being expanded; contact H&H to discuss your scope now.`;

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          {
            label: concreteService.shortTitle,
            href: concreteService.href,
          },
          { label: `${city.name}, OK`, href: path },
        ]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {city.name}, OK · Concrete
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Request a Bid
            </Button>
            <Button href={concreteService.href} variant="secondary">
              Full Concrete Overview
            </Button>
          </div>
        </Container>
      </section>

      {resolved ? (
        <>
          <section className="bg-surface">
            <Container className="py-16 lg:py-20">
              <div className="max-w-3xl">
                {resolved.entry.localAngle.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 text-base leading-relaxed text-charcoal/80 first:mt-0 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Container>
          </section>

          <section className="bg-off-white-muted">
            <Container className="py-16 lg:py-20">
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Typical Applications in {city.name}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {resolved.entry.applications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border border-border bg-surface-muted p-5 text-sm text-charcoal/90"
                  >
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      &#9632;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        </>
      ) : (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-charcoal/80 sm:text-lg">
                H&H Construction provides commercial concrete work across
                Oklahoma, including {city.name}. We are building out a dedicated
                local page for this market — in the meantime, call{" "}
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="font-semibold text-charcoal transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-charcoal transition-colors hover:text-accent"
                >
                  request a bid online
                </Link>{" "}
                with your project location and scope.
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Discuss Your {city.name} Concrete Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your scope and location. Our team will review the
            details and follow up to discuss next steps.
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
