import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { priorityCities, services, siteConfig, nap, serviceProviderSchema } from "@/lib/site-data";
import { cityServiceHref } from "@/lib/city-service-data";

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
    provider: serviceProviderSchema,
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

      <PageHero eyebrow="Service Area" title={city.h1}>
        <p className="type-lead mt-6 max-w-2xl">
          {city.heroDescription}
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <p className="text-lg leading-relaxed text-graphite sm:text-xl sm:leading-relaxed lg:border-l-4 lg:border-accent lg:pl-8">
              {city.intro}
            </p>
            <div className="type-prose">
              {city.localContext.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            What Shapes {city.name} Projects
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {city.marketNotes.map((note) => (
              <div key={note.title} className="il-ruled">
                <h3 className="type-h3 text-graphite">
                  {note.title}
                </h3>
                <p className="type-body mt-3">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-paper">
            Services Available in {city.name}
          </h2>
          <div className="mt-12 grid gap-y-10 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={cityServiceHref(city.slug, service.slug)}
                className="group flex flex-col border-t border-white/20 pt-8 sm:border-l sm:border-t-0 sm:px-8 sm:pt-0 sm:first:border-l-0 sm:first:pl-0"
              >
                <h3 className="type-h3 text-paper transition-colors group-hover:text-accent-light">
                  {service.title}
                </h3>
                <p className="type-body mt-3 flex-1">
                  {service.description}
                </p>
                <span className="il-link mt-6 self-start">
                  {service.shortTitle} in {city.name}
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band-sm">
          <h2 className="type-h2-sm text-graphite">
            Nearby Areas We Serve
          </h2>
          <ul
            className="il-dot-list mt-6 flex flex-wrap gap-x-8 gap-y-3"
            aria-label={`Areas near ${city.name} served`}
          >
            {city.nearbyAreas.map((area) => (
              <li
                key={area}
                className="text-[0.9375rem] font-medium text-graphite"
              >
                {area}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={<>Start a Project in {city.name}</>}
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Contact {nap.name} to discuss your commercial concrete, asphalt,
          or metal building project in {city.name} and the surrounding
          area.
        </p>
      </CtaBand>
    </PageShell>
  );
}
