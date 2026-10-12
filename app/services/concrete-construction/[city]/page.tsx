import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { services, siteConfig, serviceProviderSchema } from "@/lib/site-data";
import {
  concreteCityHref,
  concreteServiceAreaCities,
} from "@/lib/concrete-service-page";
import {
  getConcreteCityPage,
  concreteCityPageParams,
} from "@/lib/concrete-city-pages";
import { withProductionRobots } from "@/lib/production-metadata";

type ConcreteCityPageProps = {
  params: Promise<{ city: string }>;
};

const concreteService = services.find(
  (service) => service.slug === "concrete-construction",
);

export function generateStaticParams() {
  return concreteCityPageParams();
}

export async function generateMetadata({
  params,
}: ConcreteCityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const entry = getConcreteCityPage(citySlug);

  if (!entry || !concreteService) {
    return {};
  }

  const path = concreteCityHref(citySlug);

  return withProductionRobots({
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: path,
    },
  });
}

export default async function ConcreteCityPage({ params }: ConcreteCityPageProps) {
  const { city: citySlug } = await params;
  const city = concreteServiceAreaCities.find((item) => item.slug === citySlug);
  const entry = getConcreteCityPage(citySlug);

  if (!city || !entry || !concreteService) {
    notFound();
  }

  const path = concreteCityHref(citySlug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entry.cityFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: concreteService.title,
    name: entry.metaTitle,
    description: entry.metaDescription,
    provider: serviceProviderSchema,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    url: `${siteConfig.url}${path}`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      <PageHero
        eyebrow={<>{city.name}, OK · Concrete</>}
        title={entry.h1}
      >
        <p className="type-lead mt-6 max-w-2xl">
          {entry.heroDescription}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
          <Button href={concreteService.href} variant="outline">
            Full Concrete Overview
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="band">
          <div className="max-w-4xl border-l-4 border-accent pl-6 sm:pl-10">
            {entry.localAngle.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-lg leading-relaxed text-graphite first:mt-0 sm:text-xl sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            Typical Applications in {city.name}
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {entry.applications.map((item) => (
              <li key={item} className="il-tile">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite">
              How We Approach Concrete Work in {city.name}
            </h2>
            <p className="type-prose">
              {entry.approach}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite lg:sticky lg:top-28 lg:self-start">
              Commercial Concrete FAQs for {city.name}
            </h2>
            <div className="il-faq">
              {entry.cityFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3>
                    {faq.question}
                  </h3>
                  <p>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title={<>Discuss Your {city.name} Concrete Project</>}
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about your scope and location. Our team will review the
          details and follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
