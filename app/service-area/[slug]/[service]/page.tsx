import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { priorityCities, services, siteConfig, serviceProviderSchema } from "@/lib/site-data";
import {
  cityServiceHref,
  getCityServiceParams,
  getCityServicesForCity,
  getCityServicesForService,
  resolveCityService,
} from "@/lib/city-service-data";

type CityServicePageProps = {
  params: Promise<{ slug: string; service: string }>;
};

export function generateStaticParams() {
  return getCityServiceParams();
}

export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const resolved = resolveCityService(slug, serviceSlug);

  if (!resolved) {
    return {};
  }

  const { entry } = resolved;
  const path = cityServiceHref(slug, serviceSlug);

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: path,
    },
  };
}

export default async function CityServicePage({
  params,
}: CityServicePageProps) {
  const { slug, service: serviceSlug } = await params;
  const resolved = resolveCityService(slug, serviceSlug);

  if (!resolved) {
    notFound();
  }

  const { entry, city, service } = resolved;
  const path = cityServiceHref(city.slug, service.slug);
  const siblingServices = getCityServicesForCity(city.slug).filter(
    (item) => item.serviceSlug !== service.slug,
  );
  const peerCities = getCityServicesForService(service.slug).filter(
    (item) => item.citySlug !== city.slug,
  );
  const relevantNotes = city.marketNotes.slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: entry.metaTitle,
    description: entry.metaDescription,
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
    mainEntity: entry.faqs.map((faq) => ({
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
          { label: "Service Area", href: "/service-area" },
          { label: city.name, href: `/service-area/${city.slug}` },
          { label: service.shortTitle, href: path },
        ]}
      />

      <PageHero
        eyebrow={<>{city.name}, OK · {service.shortTitle}</>}
        title={entry.h1}
      >
        <p className="type-lead mt-6 max-w-2xl">
          {entry.heroDescription}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary" arrow>
            Request a Bid
          </Button>
          <Button href={service.href} variant="outline">
            Full {service.shortTitle} Overview
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper">
        <Container className="band">
          <div className="max-w-4xl border-l-4 border-accent pl-6 sm:pl-10">
            {entry.localAngle.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-lg leading-relaxed text-graphite first:mt-0 sm:text-xl sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            Where This Work Shows Up in {city.name}
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {entry.applications.map((item) => (
              <li key={item} className="il-tile">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-graphite">
            What Shapes {service.shortTitle} Work Here
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-3">
            {relevantNotes.map((note) => (
              <div key={note.title} className="il-ruled">
                <h3 className="type-h3 text-graphite">
                  {note.title}
                </h3>
                <p className="type-body mt-3">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
          <p className="type-body mt-12 max-w-3xl border-t border-line pt-8">
            Typical {service.shortTitle.toLowerCase()} scope:{" "}
            {service.scopeItems.slice(0, 4).join("; ")}.{" "}
            <Link
              href={service.href}
              className="il-inline-link"
            >
              See the full {service.title.toLowerCase()} page
            </Link>{" "}
            for process steps and the factors that drive outcomes.
          </p>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
            <h2 className="type-h2 text-paper">
              Same Crew Stack: Concrete, Asphalt & Metal Buildings
            </h2>
            <p className="type-lead max-w-xl">
              {entry.bundlePitch}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {services.map((item) => {
              const href =
                item.slug === service.slug
                  ? path
                  : cityServiceHref(city.slug, item.slug);
              const isCurrent = item.slug === service.slug;

              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`group flex flex-col border p-6 transition-colors sm:p-8 ${
                    isCurrent
                      ? "border-accent-light bg-graphite-2"
                      : "border-white/20 hover:border-white/60"
                  }`}
                >
                  <h3 className="type-h3 text-paper">
                    {item.title}
                  </h3>
                  <p className="type-body mt-3 flex-1">
                    {isCurrent
                      ? `You are viewing ${item.shortTitle.toLowerCase()} in ${city.name}.`
                      : `${item.shortTitle} in ${city.name} — same contractor, same schedule.`}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-3 text-sm font-bold ${
                      isCurrent ? "text-accent-light" : "text-paper"
                    }`}
                  >
                    {isCurrent ? "Current page" : `View ${item.shortTitle}`}
                    {!isCurrent ? <ArrowIcon /> : null}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="type-h2-sm text-graphite">
                Other Services in {city.name}
              </h2>
              <ul className="il-link-list mt-8">
                {siblingServices.map((item) => {
                  const sibling = services.find(
                    (serviceItem) => serviceItem.slug === item.serviceSlug,
                  );
                  if (!sibling) return null;
                  return (
                    <li key={item.serviceSlug}>
                      <Link href={cityServiceHref(city.slug, item.serviceSlug)}>
                        {sibling.title} in {city.name}
                        <ArrowIcon />
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link href={`/service-area/${city.slug}`}>
                    All {city.name} services
                    <ArrowIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="type-h2-sm text-graphite">
                {service.shortTitle} in Nearby Cities
              </h2>
              <ul className="il-link-list mt-8">
                {peerCities.map((item) => {
                  const peerCity = priorityCities.find(
                    (cityItem) => cityItem.slug === item.citySlug,
                  );
                  if (!peerCity) return null;
                  return (
                    <li key={item.citySlug}>
                      <Link href={cityServiceHref(item.citySlug, service.slug)}>
                        {service.shortTitle} in {peerCity.name}
                        <ArrowIcon />
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link href={service.href}>
                    Statewide {service.shortTitle.toLowerCase()} overview
                    <ArrowIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection heading="Frequently Asked Questions" faqs={entry.faqs} />

      <CtaBand
        title={<>Discuss Your {city.name} {service.shortTitle} Project</>}
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about the scope and site constraints in {city.name}. Our
          team will follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
