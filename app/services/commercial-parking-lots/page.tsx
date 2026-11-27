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
import { PhoneLink } from "@/components/ui/PhoneLink";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProseSection } from "@/components/sections/ProseSection";
import { nap, siteConfig, serviceProviderSchema } from "@/lib/site-data";
import { asphaltServiceHeroImage } from "@/lib/asphalt-gallery-data";
import {
  parkingLotHubHref,
  parkingLotMeta,
  parkingLotIntro,
  parkingLotAudience,
  parkingLotBidPrep,
  parkingLotPathways,
  parkingLotDivision32,
  parkingLotServices,
  parkingLotIndustries,
  parkingLotWhyHh,
  parkingLotCityLinks,
  parkingLotFaqs,
  parkingLotAsphaltCityHref,
  parkingLotConcreteCityHref,
  parkingLotRelatedLinks,
  parkingLotProjectEvidence,
  parkingLotTuttleEvidence,
  asphaltOkcHref,
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
    serviceType: "Commercial Parking Lot Paving and Construction",
    name: parkingLotMeta.title,
    description: parkingLotMeta.description,
    provider: serviceProviderSchema,
    areaServed: [
      {
        "@type": "City",
        name: "Oklahoma City",
        containedInPlace: {
          "@type": "State",
          name: "Oklahoma",
        },
      },
      {
        "@type": "State",
        name: "Oklahoma",
      },
    ],
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

  const projectCards = [
    {
      key: "chandler",
      heading: parkingLotProjectEvidence.heading,
      location: parkingLotProjectEvidence.location,
      summary: parkingLotProjectEvidence.cardSummary,
      href: parkingLotProjectEvidence.href,
      linkLabel: "Read the Chandler case study",
      photo: parkingLotProjectEvidence.photos[0],
    },
    {
      key: "tuttle",
      heading: parkingLotTuttleEvidence.heading,
      location: `${parkingLotTuttleEvidence.location} · ${parkingLotTuttleEvidence.statusLabel}`,
      summary: parkingLotTuttleEvidence.cardSummary,
      href: parkingLotTuttleEvidence.href,
      linkLabel: "Read the Tuttle case study",
      photo: parkingLotTuttleEvidence.photos[0],
    },
  ] as const;

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

      <PageHero
        eyebrow="Services · Parking Lots"
        title={parkingLotMeta.h1}
        media={
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-2 lg:aspect-square">
            <Image
              src={asphaltServiceHeroImage.src}
              alt={asphaltServiceHeroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        }
      >
        <p className="type-lead mt-6 max-w-xl">
          {parkingLotMeta.heroDescription}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary" arrow>
            Request a Parking Lot Bid
          </Button>
          <PhoneLink className={buttonClassName("outline")}>
            Call {nap.phone}
          </PhoneLink>
        </div>
      </PageHero>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Recent Commercial Parking Lot Work
            </h2>
            <p className="type-lead max-w-xl">
              Authentic project proof from municipal asphalt rehabilitation and
              concrete parking lot paving in the Oklahoma City metro corridor.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {projectCards.map((card) => (
              <article
                key={card.key}
                className="border border-line-strong bg-paper"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                  <Image
                    src={card.photo.src}
                    alt={card.photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="type-eyebrow">{card.location}</p>
                  <h3 className="type-h3 mt-3 text-graphite">{card.heading}</h3>
                  <p className="type-body mt-3 text-text-muted">{card.summary}</p>
                  <Link href={card.href} className="il-link mt-6 inline-flex">
                    {card.linkLabel}
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ProseSection heading={parkingLotIntro.heading}>
        {parkingLotIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          For asphalt-only overlays, milling, or patching in the metro, see our{" "}
          <Link href={asphaltOkcHref} className="il-inline-link">
            Oklahoma City asphalt paving
          </Link>{" "}
          page.
        </p>
      </ProseSection>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              {parkingLotPathways.heading}
            </h2>
            <p className="type-lead max-w-xl">{parkingLotPathways.intro}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {parkingLotPathways.items.map((item, index) => (
              <article
                key={item.title}
                className="border border-line-strong p-7 sm:p-8"
              >
                <p aria-hidden="true" className="il-num text-base">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-h3 mt-6 text-graphite">{item.title}</h3>
                <p className="type-body mt-4 text-text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="type-h2-sm text-paper">
                {parkingLotAudience.heading}
              </h2>
              <div className="type-prose mt-6 space-y-6">
                {parkingLotAudience.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Need asphalt paving, overlay, or patching without a full lot
                  rebuild? See{" "}
                  <Link
                    href={asphaltOkcHref}
                    className="font-semibold text-accent-light underline decoration-white/30 underline-offset-4 hover:decoration-accent-light"
                  >
                    Oklahoma City asphalt paving
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div>
              <h2 className="type-h2-sm text-paper">
                {parkingLotBidPrep.heading}
              </h2>
              <p className="type-lead mt-6">{parkingLotBidPrep.intro}</p>
              <ul className="il-checklist il-checklist-ruled mt-8">
                {parkingLotBidPrep.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact" variant="primary" arrow>
                  Request a Parking Lot Bid
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProseSection heading={parkingLotDivision32.heading} tone="warm">
        {parkingLotDivision32.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ProseSection>

      <section className="bg-paper">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            Commercial Parking Lot Services
          </h2>
          <div className="mt-12 grid border-l border-t border-line-strong lg:grid-cols-2">
            {parkingLotServices.map((group, index) => (
              <div
                key={group.title}
                className="border-b border-r border-line-strong p-7 sm:p-9"
              >
                <p aria-hidden="true" className="il-num text-base">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-h3 mt-6 text-graphite">{group.title}</h3>
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
            Industries We Serve
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {parkingLotIndustries.map((item) => (
              <li key={item} className="il-tile">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProseSection heading={parkingLotWhyHh.heading}>
        {parkingLotWhyHh.paragraphs.map((paragraph) => (
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
                Need asphalt paving, overlay, or patching without a full lot
                rebuild? Start with{" "}
                <Link href={asphaltOkcHref} className="il-inline-link">
                  Oklahoma City asphalt paving
                </Link>
                . Concrete pads and curb that travel with a lot are covered with
                commercial concrete.
              </p>
            </div>
            <ul className="il-link-list self-end">
              {parkingLotRelatedLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    {item.label}
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">Parking Lot Work by City</h2>
            <p className="type-lead max-w-xl">
              City-specific pages cover local market conditions, access, and how
              parking lot and paving work shows up in each market.
            </p>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="type-label text-text-muted">
                Asphalt Paving by City
              </h3>
              <ul className="il-link-list mt-4">
                {parkingLotCityLinks.asphalt.map((city) => (
                  <li key={city.slug}>
                    <Link href={parkingLotAsphaltCityHref(city.slug)}>
                      Parking Lots &amp; Asphalt in {city.name}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="type-label text-text-muted">
                Concrete &amp; Site Work by City
              </h3>
              <ul className="il-link-list mt-4">
                {parkingLotCityLinks.concrete.map((city) => (
                  <li key={city.slug}>
                    <Link href={parkingLotConcreteCityHref(city.slug)}>
                      Concrete &amp; Site Work in {city.name}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection heading="Commercial Parking Lot FAQs" faqs={parkingLotFaqs} />

      <CtaBand
        title="Discuss Your Parking Lot Project"
        actions={
          <>
            <Button href="/contact" variant="secondary" arrow>
              Request a Parking Lot Bid
            </Button>
            <PhoneLink className={buttonClassName("outline")}>
              Call {nap.phone}
            </PhoneLink>
          </>
        }
      >
        <p>
          Send an address and whether the lot is new or already in use. You do
          not need complete civil drawings to inquire.
        </p>
      </CtaBand>
    </PageShell>
  );
}
