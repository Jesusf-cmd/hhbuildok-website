import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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

const textLinkClass =
  "inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent";

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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services
              </p>
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                {asphaltStatewidePage.h1}
              </h1>
              {asphaltStatewidePage.opening.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
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
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Commercial Asphalt Services
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {asphaltServiceSections.map((item) => (
              <div key={item.title} className="border border-border bg-surface p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
                {item.link ? (
                  <Link href={item.link.href} className={`mt-2 ${textLinkClass}`}>
                    {item.link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {asphaltMethodDecision.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            {asphaltMethodDecision.intro}
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {asphaltMethodDecision.factors.map((item) => (
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

      <ProjectGallery
        id="project-photos"
        heading="Asphalt Project Photos"
        description="Field photos of H&H commercial and industrial asphalt work, including paving, milling, resurfacing, and patching."
        images={commercialAsphaltProjectPhotos}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <figure className="overflow-hidden border border-border bg-surface">
              <div className="relative aspect-video">
                <Image
                  src={asphaltProjectProof.image.src}
                  alt={asphaltProjectProof.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-muted">
                {asphaltProjectProof.image.caption}
              </figcaption>
            </figure>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {asphaltProjectProof.label}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                {asphaltProjectProof.heading}
              </h2>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
                Scope performed
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {asphaltProjectProof.scopes.map((scope) => (
                  <li
                    key={scope}
                    className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/90 sm:text-base"
                  >
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      &#9632;
                    </span>
                    {scope}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-charcoal/80">
                {asphaltProjectProof.relevance}
              </p>
              <div className="mt-6">
                <Link href={asphaltProjectProof.href} className={textLinkClass}>
                  {asphaltProjectProof.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            How a Project Runs
          </h2>
          <ol className="mt-10 flex flex-col gap-8">
            {asphaltProcess.map((step, index) => (
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                {asphaltAudience.heading}
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {asphaltAudience.items.map((item) => (
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

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Available in Featured Cities
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            City-specific pages cover local market conditions, access, and how
            this trade usually shows up in each place.
          </p>
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {asphaltCityIndex.map((page) => (
              <li key={page.citySlug}>
                <Link href={asphaltCityHref(page.citySlug)} className={textLinkClass}>
                  Asphalt paving in {page.cityName}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Related Commercial Services
          </h2>
          <ul className="mt-8 flex flex-col gap-2">
            {asphaltRelatedLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={textLinkClass}>
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
            {asphaltFaqs.map((faq) => (
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
            Discuss Your Commercial Asphalt Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Send an address and what you need paved or repaired. Complete
            drawings are not required.
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
