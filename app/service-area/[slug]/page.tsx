import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { priorityCities, services, siteConfig, nap } from "@/lib/site-data";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

function getCity(slug: string) {
  return priorityCities.find((city) => city.slug === slug);
}

export function generateStaticParams() {
  return priorityCities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return {};
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `/service-area/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `/service-area/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Commercial Construction Services in ${city.name}, OK`,
    description: city.metaDescription,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    url: `${siteConfig.url}/service-area/${city.slug}`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Service Area", href: "/service-area" },
          { label: city.name, href: `/service-area/${city.slug}` },
        ]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Service Area
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {city.metaTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {city.heroDescription}
          </p>
          <div className="mt-8">
            <Button href="/#contact" variant="primary">
              Request a Bid
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl text-base leading-relaxed text-charcoal/80">
            <p>{city.intro}</p>
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Services Available in {city.name}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group border border-border bg-surface p-6 transition-shadow hover:shadow-md sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors group-hover:text-accent">
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Nearby Areas We Serve
          </h2>
          <ul
            className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
            aria-label={`Areas near ${city.name} served`}
          >
            {city.nearbyAreas.map((area) => (
              <li
                key={area}
                className="text-sm text-text-muted before:mr-2 before:text-accent before:content-['■']"
              >
                {area}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Start a Project in {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Contact {nap.name} to discuss your commercial concrete, asphalt,
            or metal building project in {city.name} and the surrounding
            area.
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
