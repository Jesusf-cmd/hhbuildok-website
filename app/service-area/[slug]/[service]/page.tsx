import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { priorityCities, services, siteConfig } from "@/lib/site-data";
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
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      url: siteConfig.url,
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {city.name}, OK · {service.shortTitle}
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {entry.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {entry.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Request a Bid
            </Button>
            <Button href={service.href} variant="secondary">
              Full {service.shortTitle} Overview
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="max-w-3xl">
            {entry.localAngle.map((paragraph) => (
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
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Where This Work Shows Up in {city.name}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {entry.applications.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-border bg-surface p-5 text-sm leading-relaxed text-charcoal/90"
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
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            What Shapes {service.shortTitle} Work Here
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {relevantNotes.map((note) => (
              <div key={note.title} className="border-l-2 border-accent pl-6">
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-text-muted">
            Typical {service.shortTitle.toLowerCase()} scope:{" "}
            {service.scopeItems.slice(0, 4).join("; ")}.{" "}
            <Link
              href={service.href}
              className="font-semibold text-charcoal underline-offset-4 hover:text-accent hover:underline"
            >
              See the full {service.title.toLowerCase()} page
            </Link>{" "}
            for process steps and the factors that drive outcomes.
          </p>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Same Crew Stack: Concrete, Asphalt & Metal Buildings
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-charcoal/80">
            {entry.bundlePitch}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
                  className={`border p-6 transition-colors sm:p-8 ${
                    isCurrent
                      ? "border-accent bg-surface"
                      : "border-border bg-surface hover:border-accent"
                  }`}
                >
                  <h3 className="font-heading text-lg font-bold uppercase text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {isCurrent
                      ? `You are viewing ${item.shortTitle.toLowerCase()} in ${city.name}.`
                      : `${item.shortTitle} in ${city.name} — same contractor, same schedule.`}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal">
                    {isCurrent ? "Current page" : `View ${item.shortTitle}`}
                    {!isCurrent ? <span aria-hidden="true">&rarr;</span> : null}
                  </span>
                </Link>
              );
            })}
          </div>
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
                {siblingServices.map((item) => {
                  const sibling = services.find(
                    (serviceItem) => serviceItem.slug === item.serviceSlug,
                  );
                  if (!sibling) return null;
                  return (
                    <li key={item.serviceSlug}>
                      <Link
                        href={cityServiceHref(city.slug, item.serviceSlug)}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                      >
                        {sibling.title} in {city.name}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  );
                })}
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
                {service.shortTitle} in Nearby Cities
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {peerCities.map((item) => {
                  const peerCity = priorityCities.find(
                    (cityItem) => cityItem.slug === item.citySlug,
                  );
                  if (!peerCity) return null;
                  return (
                    <li key={item.citySlug}>
                      <Link
                        href={cityServiceHref(item.citySlug, service.slug)}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                      >
                        {service.shortTitle} in {peerCity.name}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    Statewide {service.shortTitle.toLowerCase()} overview
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
            {entry.faqs.map((faq) => (
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
            Discuss Your {city.name} {service.shortTitle} Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about the scope and site constraints in {city.name}. Our
            team will follow up to discuss next steps.
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
