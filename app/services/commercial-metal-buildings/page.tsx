import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button, buttonClassName } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProseSection } from "@/components/sections/ProseSection";
import { nap, siteConfig, serviceProviderSchema } from "@/lib/site-data";
import { withProductionRobots } from "@/lib/production-metadata";
import { PhoneLink } from "@/components/ui/PhoneLink";
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
  metalBuildingsAudience,
  metalBuildingsBidPrep,
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
    provider: serviceProviderSchema,
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

      <PageHero
        eyebrow="Services · Metal Buildings"
        title={metalBuildingsMeta.h1}
        media={
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-2 lg:aspect-square">
            <Image
              src={metalBuildingHeroImage.src}
              alt={metalBuildingHeroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        }
      >
        <p className="type-lead mt-6 max-w-xl">
          {metalBuildingsMeta.heroDescription}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
          <PhoneLink className={buttonClassName("outline")}>
            Call {nap.phone}
          </PhoneLink>
        </div>
      </PageHero>

      <ProseSection heading={metalBuildingsIntro.heading}>
        {metalBuildingsIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <section className="tone-dark">
        <Container className="band">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="type-h2-sm text-paper">
                {metalBuildingsAudience.heading}
              </h2>
              <div className="type-prose mt-6 space-y-6">
                {metalBuildingsAudience.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="type-h2-sm text-paper">
                {metalBuildingsBidPrep.heading}
              </h2>
              <p className="type-lead mt-6">
                {metalBuildingsBidPrep.intro}
              </p>
              <ul className="il-checklist il-checklist-ruled mt-8">
                {metalBuildingsBidPrep.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact" variant="primary" arrow>
                  Request a Bid
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProseSection heading={metalBuildingsDivision13.heading}>
        {metalBuildingsDivision13.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <ProseSection heading={metalBuildingsRedIron.heading} tone="warm">
        {metalBuildingsRedIron.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <section className="bg-paper">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            Commercial Metal Building Services
          </h2>
          <div className="mt-12 grid border-l border-t border-line-strong lg:grid-cols-2">
            {metalBuildingsServices.map((group, index) => (
              <div
                key={group.title}
                className="border-b border-r border-line-strong p-7 sm:p-9"
              >
                <p aria-hidden="true" className="il-num text-base">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-h3 mt-6 text-graphite">
                  {group.title}
                </h3>
                <ul className="il-checklist mt-5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band pt-0">
          <h2 className="type-h2-sm text-graphite">
            Building Types We Erect
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metalBuildingsIndustries.map((item) => (
              <li key={item} className="il-tile bg-warm">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProseSection heading={metalBuildingsOklahomaWind.heading} tone="warm">
        {metalBuildingsOklahomaWind.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <ProseSection heading={metalBuildingsProcess.heading} tone="dark">
        {metalBuildingsProcess.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <ProseSection heading={metalBuildingsWhyHh.heading} tone="warm">
        {metalBuildingsWhyHh.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="type-h2-sm text-graphite">
                Related Commercial Services
              </h2>
              <p className="type-body mt-4 max-w-2xl">
                This page is the commercial metal-building and erection detail.
                The metal buildings &amp; roofing page remains the broader service
                overview, including roof replacement on existing structures.
                Foundation, paving, and service-area pages cover the scopes that
                usually travel with a commercial shell.
              </p>
            </div>
            <ul className="il-link-list self-end">
              <li>
                <Link href={metalBuildingsRelatedLinks.foundations}>
                  Commercial Foundations &amp; Anchor Bolts
                  <ArrowIcon />
                </Link>
              </li>
              <li>
                <Link href={metalBuildingsRelatedLinks.parkingLots}>
                  Commercial Parking Lots &amp; Site Paving
                  <ArrowIcon />
                </Link>
              </li>
              <li>
                <Link href={metalBuildingsRelatedLinks.metalServiceHub}>
                  Metal Buildings &amp; Roofing Service Overview
                  <ArrowIcon />
                </Link>
              </li>
              <li>
                <Link href={metalBuildingsRelatedLinks.serviceArea}>
                  Oklahoma Service Area
                  <ArrowIcon />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Metal Building Work by City
            </h2>
            <p className="type-lead max-w-xl">
              City-specific pages cover local market conditions, access, and how
              metal building work shows up in each Oklahoma market.
            </p>
          </div>
          <ul className="il-link-list mt-12 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {metalBuildingsCityLinks.map((city) => (
              <li key={city.slug}>
                <Link href={city.href}>
                  Metal Buildings in {city.name}
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection heading="Commercial Metal Building FAQs" faqs={metalBuildingsFaqs} />

      <CtaBand
        title="Discuss Your Metal Building Project"
        actions={
          <>
            <Button href="/contact" variant="secondary" arrow>
              Request a Bid
            </Button>
            <PhoneLink className={buttonClassName("outline")}>
              Call {nap.phone}
            </PhoneLink>
          </>
        }
      >
        <p>
          Send manufacturer drawings and foundation plans if you have them,
          or start with the location, building size, and schedule. Request a
          bid online or call.
        </p>
      </CtaBand>
    </PageShell>
  );
}
