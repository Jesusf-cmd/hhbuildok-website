import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button, buttonClassName } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { siteConfig, services, serviceProviderSchema } from "@/lib/site-data";
import {
  asphaltCityHref,
  asphaltCityIndex,
  getAsphaltCityParams,
} from "@/lib/asphalt-city-index";
import { resolveAsphaltCityPage } from "@/lib/asphalt-city-pages";
import { cityServiceHref } from "@/lib/city-service-data";

type AsphaltCityRouteProps = {
  params: Promise<{ city: string }>;
};

const ASPHALT_SLUG = "asphalt-paving";

export function generateStaticParams() {
  return getAsphaltCityParams();
}

export async function generateMetadata({
  params,
}: AsphaltCityRouteProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const resolved = resolveAsphaltCityPage(citySlug);

  if (!resolved) {
    return {};
  }

  const { page } = resolved;
  const path = asphaltCityHref(citySlug);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: path,
    },
  };
}

export default async function AsphaltCityPage({
  params,
}: AsphaltCityRouteProps) {
  const { city: citySlug } = await params;
  const resolved = resolveAsphaltCityPage(citySlug);

  if (!resolved) {
    notFound();
  }

  const { page, city, hasServiceAreaPage } = resolved;
  const path = asphaltCityHref(city.slug);
  const asphaltService = services.find((service) => service.slug === ASPHALT_SLUG);
  const peers = asphaltCityIndex.filter(
    (entry) => entry.citySlug !== city.slug,
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Asphalt Paving",
    name: page.metaTitle,
    description: page.metaDescription,
    provider: serviceProviderSchema,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    url: `${siteConfig.url}${path}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
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
          { label: "Asphalt Paving", href: "/services/asphalt-paving" },
          { label: city.name, href: path },
        ]}
      />

      <PageHero
        eyebrow={<>{city.name}, OK · Commercial Asphalt Paving</>}
        title={page.h1}
      >
        <p className="type-lead mt-6 max-w-3xl">
          {page.heroLead}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
          <PhoneLink className={buttonClassName("outline")}>
            Call {siteConfig.phone}
          </PhoneLink>
          {/* Pages with buying paths link the statewide page from those paths instead. */}
          {asphaltService && !page.buyingPaths ? (
            <Button href={asphaltService.href} variant="outline">
              Statewide Asphalt Overview
            </Button>
          ) : null}
        </div>
        {page.heroNote ? (
          <p className="type-body mt-8 max-w-3xl border-l-2 border-accent-light pl-4">
            {page.heroNote}
          </p>
        ) : null}
      </PageHero>

      {page.intro?.length ? (
        <section className="bg-paper">
          <Container className="band">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <h2 className="type-h2 text-graphite">
                {page.introHeading}
              </h2>
              <div className="type-prose">
                {page.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-6 first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {page.services?.length ? (
        <section className="bg-warm">
          <Container className="band">
            <h2 className="type-h2 max-w-4xl text-graphite">
              {page.servicesHeading}
            </h2>
            <div className="mt-12 grid border-l border-t border-line-strong lg:grid-cols-2">
              {page.services.map((service, index) => (
                <div
                  key={service.title}
                  className="border-b border-r border-line-strong p-7 sm:p-9"
                >
                  <p aria-hidden="true" className="il-num text-base">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="type-h3 mt-6 text-graphite">
                    {service.title}
                  </h3>
                  <p className="type-body mt-4">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {page.buyingPaths ? (
        <section className="bg-paper">
          <Container className="band">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
              <h2 className="type-h2 text-graphite">
                {page.buyingPaths.heading}
              </h2>
              <p className="type-lead">
                {page.buyingPaths.intro}
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {page.buyingPaths.paths.map((path) => (
                <article
                  key={path.title}
                  className="il-card flex flex-col border-t-4 border-t-accent"
                >
                  <h3 className="type-h3 text-graphite">
                    {path.title}
                  </h3>
                  <p className="type-body mt-4">
                    {path.conditions}
                  </p>
                  <h4 className="type-label mt-8 text-graphite">
                    What helps us scope it
                  </h4>
                  <ul className="il-checklist mt-4">
                    {path.scopeInputs.map((item) => (
                      <li key={item}>
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="il-link-list mt-8">
                    {path.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href}>
                          {link.label}
                          <ArrowIcon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link
                      href="/contact"
                      className={buttonClassName("primary", "w-full")}
                    >
                      {path.ctaLabel}
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="il-ruled mt-14 max-w-3xl">
              <h3 className="type-h3 text-graphite">
                {page.buyingPaths.methodHeading}
              </h3>
              <p className="type-prose mt-4">
                {page.buyingPaths.method}
              </p>
            </div>
          </Container>
        </section>
      ) : null}

      {page.projectProof ? (
        <section className="bg-warm">
          <Container className="band">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
              <figure>
                <div className="il-frame relative aspect-video overflow-hidden bg-graphite">
                  <Image
                    src={page.projectProof.image.src}
                    alt={page.projectProof.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <figcaption className="il-figcaption mt-3">
                  {page.projectProof.image.caption}
                </figcaption>
              </figure>
              <div>
                <h2 className="type-h2-sm text-graphite">
                  {page.projectProof.heading}
                </h2>
                <p className="type-eyebrow mt-4">
                  {page.projectProof.location}
                </p>
                <h3 className="type-label mt-8 text-graphite">
                  Scope performed
                </h3>
                <ul className="il-checklist mt-4">
                  {page.projectProof.scopes.map((scope) => (
                    <li key={scope}>
                      <CheckIcon />
                      {scope}
                    </li>
                  ))}
                </ul>
                <p className="type-prose mt-6">
                  {page.projectProof.relevance}
                </p>
                <Link
                  href={page.projectProof.href}
                  className="il-link mt-6"
                >
                  {page.projectProof.linkLabel}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite">
              {page.climateHeading}
            </h2>
            <div className="type-prose">
              {page.climate.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
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
            {page.audiencesHeading}
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {page.audiences.map((audience) => (
              <div key={audience.title} className="il-ruled">
                <h3 className="type-h3 text-graphite">
                  {audience.title}
                </h3>
                <p className="type-body mt-3">
                  {audience.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite">
              {page.localPartnerHeading}
            </h2>
            <div className="type-prose">
              {page.localPartner.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-6 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-paper">
            {page.processHeading}
          </h2>
          <ol className="mt-12 grid gap-y-10 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
            {page.process.map((step, index) => (
              <li
                key={step.title}
                className="border-l border-white/20 pl-6 pr-4"
              >
                <span className="il-num block text-4xl">
                  {index + 1}
                </span>
                <div>
                  <h3 className="type-h3-sm mt-6 text-paper">
                    {step.title}
                  </h3>
                  <p className="type-body mt-3">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="type-h2-sm text-graphite">
                {hasServiceAreaPage
                  ? `Other Services in ${city.name}`
                  : "Related Commercial Services"}
              </h2>
              <ul className="il-link-list mt-8">
                {services
                  .filter((service) => service.slug !== ASPHALT_SLUG)
                  .map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={
                          hasServiceAreaPage
                            ? cityServiceHref(city.slug, service.slug)
                            : service.href
                        }
                      >
                        {hasServiceAreaPage
                          ? `${service.title} in ${city.name}`
                          : service.title}
                        <ArrowIcon />
                      </Link>
                    </li>
                  ))}
                {hasServiceAreaPage ? (
                  <li>
                    <Link href={`/service-area/${city.slug}`}>
                      All {city.name} services
                      <ArrowIcon />
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
            <div>
              <h2 className="type-h2-sm text-graphite">
                Commercial Asphalt in Nearby Cities
              </h2>
              <ul className="il-link-list mt-8">
                {peers.map((peer) => (
                  <li key={peer.citySlug}>
                    <Link href={asphaltCityHref(peer.citySlug)}>
                      Asphalt Paving in {peer.cityName}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services/asphalt-paving">
                    Statewide asphalt paving overview
                    <ArrowIcon />
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-parking-lots">
                    Commercial parking lots — full lot packages
                    <ArrowIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <h2 className="type-h2 text-graphite lg:sticky lg:top-28 lg:self-start">
              Frequently Asked Questions
            </h2>
            <div className="il-faq">
              {page.faqs.map((faq) => (
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

      {page.inquiryGuidance ? (
        <section className="tone-dark">
          <Container className="band">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="type-h2-sm text-paper">
                  {page.inquiryGuidance.heading}
                </h2>
                <p className="type-lead mt-6">
                  {page.inquiryGuidance.intro}
                </p>
              </div>
              <div>
                <ul className="il-checklist il-checklist-ruled">
                  {page.inquiryGuidance.items.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="type-body mt-6">
                  {page.inquiryGuidance.note}
                </p>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title={page.ctaHeading}
        actions={
          <>
            <Button href="/contact" variant="secondary" arrow>
              Request a Bid
            </Button>
            <PhoneLink className={buttonClassName("outline")}>
              Call {siteConfig.phone}
            </PhoneLink>
          </>
        }
      >
        <p>
          {page.ctaBody}
        </p>
      </CtaBand>
    </PageShell>
  );
}
