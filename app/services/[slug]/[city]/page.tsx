import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { siteConfig, services, priorityCities } from "@/lib/site-data";
import {
  asphaltCityHref,
  getAsphaltCityParams,
  getAsphaltCityPeers,
  resolveAsphaltCityPage,
} from "@/lib/asphalt-city-pages";
import { cityServiceHref } from "@/lib/city-service-data";

type AsphaltCityRouteProps = {
  params: Promise<{ slug: string; city: string }>;
};

const ASPHALT_SLUG = "asphalt-paving";

export function generateStaticParams() {
  return getAsphaltCityParams();
}

export async function generateMetadata({
  params,
}: AsphaltCityRouteProps): Promise<Metadata> {
  const { slug, city: citySlug } = await params;

  if (slug !== ASPHALT_SLUG) {
    return {};
  }

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
  const { slug, city: citySlug } = await params;

  if (slug !== ASPHALT_SLUG) {
    notFound();
  }

  const resolved = resolveAsphaltCityPage(citySlug);

  if (!resolved) {
    notFound();
  }

  const { page, city } = resolved;
  const path = asphaltCityHref(city.slug);
  const asphaltService = services.find((service) => service.slug === ASPHALT_SLUG);
  const peers = getAsphaltCityPeers(city.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Asphalt Paving",
    name: page.metaTitle,
    description: page.metaDescription,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.address.street} ${siteConfig.address.suite}`,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
    },
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {city.name}, OK · Commercial Asphalt Paving
          </p>
          <h1 className="max-w-4xl font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-muted sm:text-lg">
            {page.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Request a Bid
            </Button>
            <PhoneLink className="inline-flex items-center justify-center border border-charcoal/25 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors duration-200 hover:border-charcoal hover:bg-charcoal/5">
              Call {siteConfig.phone}
            </PhoneLink>
            {asphaltService ? (
              <Button href={asphaltService.href} variant="secondary">
                Statewide Asphalt Overview
              </Button>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="max-w-3xl font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {page.introHeading}
          </h2>
          <div className="mt-8 max-w-3xl">
            {page.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
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
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {page.servicesHeading}
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {page.services.map((service) => (
              <div
                key={service.title}
                className="border border-border bg-surface p-6 sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="max-w-3xl font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {page.climateHeading}
          </h2>
          <div className="mt-8 max-w-3xl">
            {page.climate.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
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
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {page.audiencesHeading}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {page.audiences.map((audience) => (
              <div key={audience.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
                  {audience.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="max-w-3xl font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {page.localPartnerHeading}
          </h2>
          <div className="mt-8 max-w-3xl">
            {page.localPartner.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
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
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            {page.processHeading}
          </h2>
          <ol className="mt-10 flex flex-col gap-6">
            {page.process.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-5 border border-border bg-surface p-6 sm:p-8"
              >
                <span className="font-heading text-2xl font-bold text-accent">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Other Services in {city.name}
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {services
                  .filter((service) => service.slug !== ASPHALT_SLUG)
                  .map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={cityServiceHref(city.slug, service.slug)}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                      >
                        {service.title} in {city.name}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link
                    href={`/service-area/${city.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    All {city.name} services
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Commercial Asphalt in Nearby Cities
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {peers.map((peer) => {
                  const peerCity = priorityCities.find(
                    (item) => item.slug === peer.citySlug,
                  );
                  if (!peerCity) return null;
                  return (
                    <li key={peer.citySlug}>
                      <Link
                        href={asphaltCityHref(peer.citySlug)}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                      >
                        Asphalt Paving in {peerCity.name}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/services/asphalt-paving"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    Statewide asphalt paving overview
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {page.faqs.map((faq) => (
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
            {page.ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-surface/90 sm:text-lg">
            {page.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Request a Bid
            </Button>
            <PhoneLink className="inline-flex items-center justify-center border border-surface/40 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors duration-200 hover:border-surface hover:bg-surface/10">
              Call {siteConfig.phone}
            </PhoneLink>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
