import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";
import { withProductionRobots } from "@/lib/production-metadata";
import {
  metalBuildingsHubHref,
  metalBuildingsMeta,
  metalBuildingsIntro,
  metalBuildingsDivision13,
  metalBuildingsRedIron,
  metalBuildingsServices,
  metalBuildingsIndustries,
  metalBuildingsOklahomaWind,
  metalBuildingsProcess,
  metalBuildingsWhyHh,
  metalBuildingsRelatedLinks,
  metalBuildingsCityLinks,
  metalBuildingsFaqs,
} from "@/lib/commercial-metal-buildings-page";

const metalBuildingHeroImage = {
  src: "/images/metal/pre-engineered-metal-building-construction-oklahoma.jpg",
  alt: "Aerial view of a completed pre-engineered metal building with crew and trucks on site in Oklahoma",
} as const;

export const metadata: Metadata = withProductionRobots({
  title: metalBuildingsMeta.title,
  description: metalBuildingsMeta.description,
  alternates: {
    canonical: metalBuildingsHubHref,
  },
  openGraph: {
    title: metalBuildingsMeta.title,
    description: metalBuildingsMeta.description,
    url: metalBuildingsHubHref,
  },
});

export default function CommercialMetalBuildingsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Metal Building Construction",
    name: metalBuildingsMeta.title,
    description: metalBuildingsMeta.description,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
    url: `${siteConfig.url}${metalBuildingsHubHref}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: metalBuildingsFaqs.map((faq) => ({
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
          { label: "Commercial Metal Buildings", href: metalBuildingsHubHref },
        ]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services · Metal Buildings
              </p>
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                {metalBuildingsMeta.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                {metalBuildingsMeta.heroDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Bid
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image
                src={metalBuildingHeroImage.src}
                alt={metalBuildingHeroImage.alt}
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
              {metalBuildingsIntro.heading}
            </h2>
            {metalBuildingsIntro.paragraphs.map((paragraph) => (
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
              {metalBuildingsDivision13.heading}
            </h2>
            {metalBuildingsDivision13.paragraphs.map((paragraph) => (
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
              {metalBuildingsRedIron.heading}
            </h2>
            {metalBuildingsRedIron.paragraphs.map((paragraph) => (
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
            Commercial Metal Building Services
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {metalBuildingsServices.map((group) => (
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

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Building Types We Erect
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metalBuildingsIndustries.map((item) => (
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              {metalBuildingsOklahomaWind.heading}
            </h2>
            {metalBuildingsOklahomaWind.paragraphs.map((paragraph) => (
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
              {metalBuildingsProcess.heading}
            </h2>
            {metalBuildingsProcess.paragraphs.map((paragraph) => (
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
              {metalBuildingsWhyHh.heading}
            </h2>
            {metalBuildingsWhyHh.paragraphs.map((paragraph) => (
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
            Related Commercial Services
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Metal building jobs rarely stop at the shell. These specialty hubs
            cover the scopes that usually travel with PEMB erection on Oklahoma
            pad sites.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <Link
                href={metalBuildingsRelatedLinks.foundations}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
              >
                Commercial Foundations &amp; Anchor Bolts
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
            <li>
              <Link
                href={metalBuildingsRelatedLinks.parkingLots}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
              >
                Commercial Parking Lots &amp; Site Paving
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
            <li>
              <Link
                href={metalBuildingsRelatedLinks.metalServiceHub}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
              >
                Metal Buildings &amp; Roofing Service Overview
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Metal Building Work by City
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            City-specific pages cover local market conditions, access, and how
            metal building work shows up in each Oklahoma market.
          </p>
          <ul className="mt-10 flex flex-col gap-3">
            {metalBuildingsCityLinks.map((city) => (
              <li key={city.slug}>
                <Link
                  href={city.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  Metal Buildings in {city.name}
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
            Commercial Metal Building FAQs
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {metalBuildingsFaqs.map((faq) => (
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
            Discuss Your Metal Building Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your scope and location — new erection, shell package,
            or roofing replacement. Our team will review the details and follow
            up to discuss next steps.
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
