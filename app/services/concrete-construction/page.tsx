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
import { services, siteConfig, serviceAreaCities, serviceProviderSchema } from "@/lib/site-data";
import { TrustBlock } from "@/components/sections/TrustBlock";
import { withProductionRobots } from "@/lib/production-metadata";
import {
  concreteCityHref,
  concreteHubFaqs,
  concreteRiskIntro,
  concreteServiceAreaCities,
  concreteTrustItems,
} from "@/lib/concrete-service-page";

const service = services.find((item) => item.slug === "concrete-construction")!;

export const metadata: Metadata = withProductionRobots({
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: service.href,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: service.href,
  },
});

export default function ConcreteConstructionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.metaTitle,
    description: service.metaDescription,
    provider: serviceProviderSchema,
    areaServed: serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    url: `${siteConfig.url}${service.href}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: concreteHubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
          { label: service.title, href: service.href },
        ]}
      />

      <PageHero
        eyebrow="Services"
        title={service.h1}
        media={
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-2 lg:aspect-square">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        }
      >
        <p className="type-lead mt-6 max-w-xl">
          {service.heroDescription}
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
        </div>
      </PageHero>

      <TrustBlock items={concreteTrustItems} />

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite">
              {concreteRiskIntro.heading}
            </h2>
            <div className="type-prose">
              {concreteRiskIntro.paragraphs.map((paragraph) => (
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
            What This Service Includes
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {service.scopeItems.map((item) => (
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
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              What Determines the Outcome
            </h2>
            <p className="type-lead max-w-xl">
              Most of what decides whether this work lasts is settled before the
              first truck arrives on site.
            </p>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {service.detail.considerations.map((item) => (
              <div key={item.title} className="il-ruled">
                <h3 className="type-h3 text-graphite">
                  {item.title}
                </h3>
                <p className="type-body mt-3">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <h2 className="type-h2 text-paper lg:sticky lg:top-28 lg:self-start">
              How a Project Runs
            </h2>
            <ol className="border-t border-white/20">
              {service.detail.process.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-white/20 py-7 sm:grid-cols-[4rem_minmax(0,1fr)]"
                >
                  <span
                    aria-hidden="true"
                    className="il-num pt-1 text-lg"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="type-h3-sm text-paper">
                      {step.title}
                    </h3>
                    <p className="type-body mt-2 max-w-2xl">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              How to Decide
            </h2>
            <p className="type-lead max-w-xl">
              Bookmarkable calls for the choices that usually decide cost and
              service life before a bid is even written.
            </p>
          </div>
          <div className="mt-12 grid border-l border-t border-line-strong lg:grid-cols-3">
            {service.rubrics.map((item) => (
              <div
                key={item.title}
                className="border-b border-r border-line-strong p-7 sm:p-9"
              >
                <h3 className="type-h3 text-graphite">
                  {item.title}
                </h3>
                <p className="type-body mt-4">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Service Areas
            </h2>
            <p className="type-lead max-w-xl">
              Commercial concrete work across Oklahoma&apos;s highest-volume markets
              — with city-specific pages for local scope, access, and market
              conditions.
            </p>
          </div>
          <ul className="il-link-list mt-12 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {concreteServiceAreaCities.map((city) => (
              <li key={city.slug}>
                <Link href={concreteCityHref(city.slug)}>
                  {city.name}, OK
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite lg:sticky lg:top-28 lg:self-start">
              Frequently Asked Questions
            </h2>
            <div className="il-faq">
              {concreteHubFaqs.map((faq) => (
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
        title={<>Discuss Your {service.shortTitle} Project</>}
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about your project scope and location. Our team will review
          the details and follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
