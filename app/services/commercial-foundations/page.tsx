import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";
import {
  foundationsHubHref,
  foundationsMeta,
  foundationsIntro,
  foundationsDivision03,
  foundationsServices,
  foundationsIndustries,
  foundationsOklahomaSoils,
  foundationsProcess,
  foundationsWhyHh,
  foundationsCityLinks,
  foundationsFaqs,
  foundationsConcreteCityHref,
} from "@/lib/commercial-foundations-page";

const foundationHeroImage = {
  src: "/images/concrete/commercial-concrete-foundation-rebar-installation-oklahoma.jpg",
  alt: "H&H Construction crew tying rebar for a commercial concrete foundation in Oklahoma",
} as const;

export const metadata: Metadata = {
  title: foundationsMeta.title,
  description: foundationsMeta.description,
  alternates: {
    canonical: foundationsHubHref,
  },
  openGraph: {
    title: foundationsMeta.title,
    description: foundationsMeta.description,
    url: foundationsHubHref,
  },
};

export default function CommercialFoundationsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Foundation Construction",
    name: foundationsMeta.title,
    description: foundationsMeta.description,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
    url: `${siteConfig.url}${foundationsHubHref}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foundationsFaqs.map((faq) => ({
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
          { label: "Commercial Foundations", href: foundationsHubHref },
        ]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services · Foundations
              </p>
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                {foundationsMeta.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                {foundationsMeta.heroDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Bid
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image
                src={foundationHeroImage.src}
                alt={foundationHeroImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              {foundationsIntro.heading}
            </h2>
            {foundationsIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-relaxed text-charcoal/80 first:mt-6 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              {foundationsDivision03.heading}
            </h2>
            {foundationsDivision03.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Commercial Foundation Services
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {foundationsServices.map((group) => (
              <div key={group.title} className="border border-border bg-surface-muted p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Building Types We Foundation
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {foundationsIndustries.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-border bg-surface p-5 text-sm text-charcoal/90"
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
              {foundationsOklahomaSoils.heading}
            </h2>
            {foundationsOklahomaSoils.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              {foundationsProcess.heading}
            </h2>
            {foundationsProcess.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              {foundationsWhyHh.heading}
            </h2>
            {foundationsWhyHh.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg"
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
            Foundation &amp; Concrete Work by City
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            City-specific pages cover local market conditions, soil considerations,
            and how commercial concrete work shows up in each Oklahoma market.
          </p>
          <ul className="mt-10 flex flex-col gap-3">
            {foundationsCityLinks.map((city) => (
              <li key={city.slug}>
                <Link
                  href={foundationsConcreteCityHref(city.slug)}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  Commercial Concrete in {city.name}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Commercial Foundation FAQs
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {foundationsFaqs.map((faq) => (
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
            Discuss Your Foundation Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your scope and location — new construction, expansion,
            or anchor bolt layout for a metal building. Our team will review the
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
