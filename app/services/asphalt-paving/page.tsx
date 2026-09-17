import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { nap, services, siteConfig, serviceAreaCities } from "@/lib/site-data";
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
  asphaltOfferedScopes,
  asphaltRelatedLinks,
} from "@/lib/asphalt-paving-page";
import { parkingLotProjectEvidence } from "@/lib/parking-lot-service-page";

const service = services.find((item) => item.slug === "asphalt-paving")!;

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

export default function AsphaltServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.metaTitle,
    description: service.metaDescription,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    url: `${siteConfig.url}${service.href}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services
              </p>
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                {service.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Request a Bid
                </Button>
                <PhoneLink className="inline-flex items-center justify-center border border-charcoal/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5">
                  Call {nap.phone}
                </PhoneLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
              <Image
                src={service.image}
                alt={service.imageAlt}
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
            {service.detail.overview.map((paragraph) => (
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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                {asphaltAudience.heading}
              </h2>
              {asphaltAudience.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                {asphaltBidPrep.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg">
                {asphaltBidPrep.intro}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {asphaltBidPrep.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/90 sm:text-base"
                  >
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      &#9632;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Bid
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProjectGallery
        id="project-photos"
        heading="Recent Asphalt Projects"
        description="Real commercial and industrial paving work across Oklahoma — milling, new paving, overlays, patching, and parking lot rehabilitation."
        images={commercialAsphaltProjectPhotos}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Asphalt Work We Perform
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            These are the paving scopes we bid. Subgrade, drainage, compaction,
            and overlay-versus-rebuild calls below explain how we choose a
            method.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {asphaltOfferedScopes.map((item) => (
              <div key={item.title} className="border border-border bg-surface p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            What Determines the Outcome
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Most of what decides whether this work lasts is settled before the
            first truck arrives on site.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {service.detail.considerations.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            How a Project Runs
          </h2>
          <ol className="mt-10 flex flex-col gap-8">
            {service.detail.process.map((step, index) => (
              <li key={step.title} className="flex gap-6">
                <span
                  aria-hidden="true"
                  className="font-heading text-2xl font-bold text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            How to Decide
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Bookmarkable calls for the choices that usually decide cost and
            service life before a bid is even written.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {service.rubrics.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Available in Featured Cities
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            City-specific pages cover local market conditions, access, and how
            this trade usually shows up in each place.
          </p>
          <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            {asphaltCityIndex.map((page) => (
              <li key={page.citySlug}>
                <Link
                  href={asphaltCityHref(page.citySlug)}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  {service.shortTitle} in {page.cityName}
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
            {parkingLotProjectEvidence.heading}
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {parkingLotProjectEvidence.location}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
            {parkingLotProjectEvidence.summary}
          </p>
          <div className="mt-8">
            <Link
              href={parkingLotProjectEvidence.href}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
            >
              Read the Chandler case study
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Related Commercial Services
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Need paving coordinated with curbs, concrete approaches, and
            striping? Explore our commercial parking-lot services. Oklahoma City
            commercial sites can start with the Oklahoma City asphalt page.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {asphaltRelatedLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  {item.label}
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
            Frequently Asked Questions
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {service.faqs.map((faq) => (
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
            Discuss Your {service.shortTitle} Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Send an address and what you need paved or repaired. You do not
            need complete plans to inquire.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Request a Bid
            </Button>
            <PhoneLink className="inline-flex items-center justify-center border border-surface/70 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors hover:border-surface hover:bg-surface/10">
              Call {nap.phone}
            </PhoneLink>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
