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
import { FaqSection } from "@/components/sections/FaqSection";
import { ProseSection } from "@/components/sections/ProseSection";
import { siteConfig, serviceProviderSchema } from "@/lib/site-data";
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
    provider: serviceProviderSchema,
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

      <PageHero
        eyebrow="Services · Foundations"
        title={foundationsMeta.h1}
        media={
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-2 lg:aspect-square">
            <Image
              src={foundationHeroImage.src}
              alt={foundationHeroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        }
      >
        <p className="type-lead mt-6 max-w-xl">
          {foundationsMeta.heroDescription}
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
        </div>
      </PageHero>

      <ProseSection heading={foundationsIntro.heading}>
        {foundationsIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <ProseSection heading={foundationsDivision03.heading} tone="warm">
        {foundationsDivision03.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <section className="bg-paper">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            Commercial Foundation Services
          </h2>
          <div className="mt-12 grid border-l border-t border-line-strong lg:grid-cols-2">
            {foundationsServices.map((group, index) => (
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

      <section className="bg-warm">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            Building Types We Foundation
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {foundationsIndustries.map((item) => (
              <li key={item} className="il-tile">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProseSection heading={foundationsOklahomaSoils.heading}>
        {foundationsOklahomaSoils.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <ProseSection heading={foundationsProcess.heading} tone="dark">
        {foundationsProcess.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <ProseSection heading={foundationsWhyHh.heading}>
        {foundationsWhyHh.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Foundation &amp; Concrete Work by City
            </h2>
            <p className="type-lead max-w-xl">
              City-specific pages cover local market conditions, soil considerations,
              and how commercial concrete work shows up in each Oklahoma market.
            </p>
          </div>
          <ul className="il-link-list mt-12 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {foundationsCityLinks.map((city) => (
              <li key={city.slug}>
                <Link href={foundationsConcreteCityHref(city.slug)}>
                  Commercial Concrete in {city.name}
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection heading="Commercial Foundation FAQs" faqs={foundationsFaqs} />

      <CtaBand
        title="Discuss Your Foundation Project"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about your scope and location — new construction, expansion,
          or anchor bolt layout for a metal building. Our team will review the
          details and follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
