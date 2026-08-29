import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";
import { asphaltServiceHeroImage } from "@/lib/asphalt-gallery-data";
import {
  parkingLotHubHref,
  parkingLotMeta,
  parkingLotIntro,
  parkingLotDivision32,
  parkingLotServices,
  parkingLotIndustries,
  parkingLotWhyHh,
  parkingLotCityLinks,
  parkingLotFaqs,
  parkingLotAsphaltCityHref,
  parkingLotConcreteCityHref,
} from "@/lib/parking-lot-service-page";

export const metadata: Metadata = {
  title: parkingLotMeta.title,
  description: parkingLotMeta.description,
  alternates: {
    canonical: parkingLotHubHref,
  },
  openGraph: {
    title: parkingLotMeta.title,
    description: parkingLotMeta.description,
    url: parkingLotHubHref,
  },
};

export default function CommercialParkingLotsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Parking Lot Construction",
    name: parkingLotMeta.title,
    description: parkingLotMeta.description,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
    url: `${siteConfig.url}${parkingLotHubHref}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: parkingLotFaqs.map((faq) => ({
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
          { label: "Commercial Parking Lots", href: parkingLotHubHref },
        ]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services · Parking Lots
              </p>
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                {parkingLotMeta.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                {parkingLotMeta.heroDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Bid
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image
                src={asphaltServiceHeroImage.src}
                alt={asphaltServiceHeroImage.alt}
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
              {parkingLotIntro.heading}
            </h2>
            {parkingLotIntro.paragraphs.map((paragraph) => (
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
              {parkingLotDivision32.heading}
            </h2>
            {parkingLotDivision32.paragraphs.map((paragraph) => (
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
            Commercial Parking Lot Services
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {parkingLotServices.map((group) => (
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
            Industries We Serve
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {parkingLotIndustries.map((item) => (
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
              {parkingLotWhyHh.heading}
            </h2>
            {parkingLotWhyHh.paragraphs.map((paragraph) => (
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
            Parking Lot Work by City
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            City-specific pages cover local market conditions, access, and how
            parking lot and paving work shows up in each market.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                Asphalt Paving by City
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {parkingLotCityLinks.asphalt.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={parkingLotAsphaltCityHref(city.slug)}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                    >
                      Parking Lots &amp; Asphalt in {city.name}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                Concrete &amp; Site Work by City
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {parkingLotCityLinks.concrete.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={parkingLotConcreteCityHref(city.slug)}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                    >
                      Concrete &amp; Site Work in {city.name}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Commercial Parking Lot FAQs
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {parkingLotFaqs.map((faq) => (
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
            Discuss Your Parking Lot Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your scope and location — new construction,
            reconstruction, or rehabilitation. Our team will review the details
            and follow up to discuss next steps.
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
