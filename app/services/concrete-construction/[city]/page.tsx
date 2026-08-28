import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/site-data";
import {
  concreteCityHref,
  concreteServiceAreaCities,
} from "@/lib/concrete-service-page";
import {
  getConcreteCityPage,
  concreteCityPageParams,
} from "@/lib/concrete-city-pages";

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

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: path,
    },
  };
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
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
    },
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {city.name}, OK · Concrete
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {entry.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {entry.heroDescription}
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

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            {entry.localAngle.map((paragraph) => (
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
            {entry.applications.map((item) => (
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

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              How We Approach Concrete Work in {city.name}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              {entry.approach}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Commercial Concrete FAQs for {city.name}
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {entry.cityFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-border pb-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
