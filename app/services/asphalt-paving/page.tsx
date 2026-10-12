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
import { nap, services, siteConfig, serviceAreaCities, serviceProviderSchema } from "@/lib/site-data";
import { commercialAsphaltProjectPhotos } from "@/lib/asphalt-gallery-data";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import {
  asphaltCityIndex,
  asphaltCityHref,
} from "@/lib/asphalt-city-index";
import { withProductionRobots } from "@/lib/production-metadata";
import {
  asphaltAudience,
  asphaltBidPrep,
  asphaltFaqs,
  asphaltMethodDecision,
  asphaltProcess,
  asphaltProjectProof,
  asphaltRelatedLinks,
  asphaltServiceSections,
  asphaltStatewidePage,
} from "@/lib/asphalt-paving-page";

const service = services.find((item) => item.slug === "asphalt-paving")!;

export const metadata: Metadata = withProductionRobots({
  title: service.metaTitle,
  description: asphaltStatewidePage.metaDescription,
  alternates: {
    canonical: service.href,
  },
  openGraph: {
    title: service.metaTitle,
    description: asphaltStatewidePage.metaDescription,
    url: service.href,
  },
});

export default function AsphaltServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.metaTitle,
    description: asphaltStatewidePage.metaDescription,
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
    mainEntity: asphaltFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Commercial asphalt paving project photos",
    itemListElement: commercialAsphaltProjectPhotos.map((image, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        contentUrl: `${siteConfig.url}${image.src}`,
        description: image.alt,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageGallerySchema),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title, href: service.href },
        ]}
      />

      <PageHero
        eyebrow="Services"
        title={asphaltStatewidePage.h1}
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
        {asphaltStatewidePage.opening.map((paragraph) => (
          <p key={paragraph} className="type-lead mt-6 max-w-xl">
            {paragraph}
          </p>
        ))}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
          <PhoneLink className={buttonClassName("outline")}>
            Call {nap.phone}
          </PhoneLink>
        </div>
      </PageHero>

      <section className="bg-warm">
        <Container className="band">
          <h2 className="type-h2 max-w-3xl text-graphite">
            Commercial Asphalt Services
          </h2>
          <div className="mt-12 grid border-l border-t border-line-strong lg:grid-cols-2">
            {asphaltServiceSections.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-r border-line-strong p-7 sm:p-9"
              >
                <p aria-hidden="true" className="il-num text-base">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-h3 mt-6 text-graphite">
                  {item.title}
                </h3>
                <p className="type-body mt-4">
                  {item.body}
                </p>
                {item.link ? (
                  <Link href={item.link.href} className="il-link mt-5">
                    {item.link.label}
                    <ArrowIcon />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              {asphaltMethodDecision.heading}
            </h2>
            <p className="type-lead max-w-xl">
              {asphaltMethodDecision.intro}
            </p>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {asphaltMethodDecision.factors.map((item) => (
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

      <ProjectGallery
        id="project-photos"
        heading="Asphalt Project Photos"
        description="Field photos of H&H commercial and industrial asphalt work, including paving, milling, resurfacing, and patching."
        images={commercialAsphaltProjectPhotos}
      />

      <section className="bg-warm">
        <Container className="band">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <figure>
              <div className="il-frame relative aspect-video overflow-hidden bg-graphite">
                <Image
                  src={asphaltProjectProof.image.src}
                  alt={asphaltProjectProof.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <figcaption className="il-figcaption mt-3">
                {asphaltProjectProof.image.caption}
              </figcaption>
            </figure>
            <div>
              <p className="type-eyebrow">
                {asphaltProjectProof.label}
              </p>
              <h2 className="type-h2-sm mt-4 text-graphite">
                {asphaltProjectProof.heading}
              </h2>
              <h3 className="type-label mt-8 text-graphite">
                Scope performed
              </h3>
              <ul className="il-checklist mt-4">
                {asphaltProjectProof.scopes.map((scope) => (
                  <li key={scope}>
                    <CheckIcon />
                    {scope}
                  </li>
                ))}
              </ul>
              <p className="type-prose mt-6">
                {asphaltProjectProof.relevance}
              </p>
              <div className="mt-6">
                <Link href={asphaltProjectProof.href} className="il-link">
                  {asphaltProjectProof.linkLabel}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite lg:sticky lg:top-28 lg:self-start">
              How a Project Runs
            </h2>
            <ol className="border-t border-line-strong">
              {asphaltProcess.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line-strong py-7 sm:grid-cols-[4rem_minmax(0,1fr)]"
                >
                  <span
                    aria-hidden="true"
                    className="il-num pt-1 text-lg"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="type-h3-sm text-graphite">
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

      <section className="tone-dark">
        <Container className="band">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="type-h2-sm text-paper">
                {asphaltAudience.heading}
              </h2>
              <ul className="il-checklist il-checklist-ruled mt-8">
                {asphaltAudience.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="type-h2-sm text-paper">
                {asphaltBidPrep.heading}
              </h2>
              <p className="type-lead mt-6">
                {asphaltBidPrep.intro}
              </p>
              <ul className="il-checklist il-checklist-ruled mt-8">
                {asphaltBidPrep.items.map((item) => (
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

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-graphite">
              Available in Featured Cities
            </h2>
            <p className="type-lead max-w-xl">
              City-specific pages cover local market conditions, access, and how
              this trade usually shows up in each place.
            </p>
          </div>
          <ul className="il-link-list mt-12 sm:grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {asphaltCityIndex.map((page) => (
              <li key={page.citySlug}>
                <Link href={asphaltCityHref(page.citySlug)}>
                  Asphalt paving in {page.cityName}
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band pt-0">
          <h2 className="type-h2-sm text-graphite">
            Related Commercial Services
          </h2>
          <ul className="il-link-list mt-8 max-w-3xl">
            {asphaltRelatedLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
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
              {asphaltFaqs.map((faq) => (
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
        title="Discuss Your Commercial Asphalt Project"
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
          Send an address and what you need paved or repaired. Complete
          drawings are not required.
        </p>
      </CtaBand>
    </PageShell>
  );
}
