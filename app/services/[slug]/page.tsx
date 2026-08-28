import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  priorityCities,
  services,
  siteConfig,
  serviceAreaCities,
} from "@/lib/site-data";
import { asphaltGalleryImages } from "@/lib/asphalt-gallery-data";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { TrustBlock } from "@/components/sections/TrustBlock";
import {
  concreteCityHref,
  concreteHubFaqs,
  concreteRiskIntro,
  concreteServiceAreaCities,
  concreteTrustItems,
} from "@/lib/concrete-service-page";
import {
  cityServiceHref,
  getCityServicesForService,
} from "@/lib/city-service-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
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
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

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

  const pageFaqs = slug === "concrete-construction" ? concreteHubFaqs : service.faqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const imageGallerySchema =
    slug === "asphalt-paving"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Commercial asphalt paving project photos",
          itemListElement: asphaltGalleryImages.map((image, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "ImageObject",
              contentUrl: `${siteConfig.url}${image.src}`,
              description: image.alt,
            },
          })),
        }
      : null;

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
      {imageGallerySchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageGallerySchema),
          }}
        />
      ) : null}

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
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Bid
                </Button>
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

      {slug === "concrete-construction" ? (
        <TrustBlock items={concreteTrustItems} />
      ) : null}

      {slug === "concrete-construction" ? (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <div className="max-w-3xl">
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                {concreteRiskIntro.heading}
              </h2>
              {concreteRiskIntro.paragraphs.map((paragraph) => (
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
      ) : (
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
      )}

      {slug === "asphalt-paving" ? (
        <ProjectGallery
          id="project-photos"
          heading="Recent Asphalt Projects"
          description="Real commercial and industrial paving work across Oklahoma — milling, new paving, overlays, patching, and parking lot rehabilitation."
          images={asphaltGalleryImages}
        />
      ) : null}

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            What This Service Includes
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.scopeItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-border bg-surface-muted p-5 text-sm text-charcoal/90"
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
            {slug === "concrete-construction"
              ? "Service Areas"
              : "Available in Featured Cities"}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            {slug === "concrete-construction"
              ? "Commercial concrete work across Oklahoma's highest-volume markets — with city-specific pages for local scope, access, and market conditions."
              : "City-specific pages cover local market conditions, access, and how this trade usually shows up in each place."}
          </p>
          <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            {slug === "concrete-construction"
              ? concreteServiceAreaCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={concreteCityHref(city.slug)}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                    >
                      {city.name}, OK
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </li>
                ))
              : getCityServicesForService(service.slug).map((entry) => {
                  const city = priorityCities.find(
                    (item) => item.slug === entry.citySlug,
                  );
                  if (!city) return null;
                  return (
                    <li key={entry.citySlug}>
                      <Link
                        href={cityServiceHref(entry.citySlug, service.slug)}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                      >
                        {service.shortTitle} in {city.name}
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  );
                })}
          </ul>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {pageFaqs.map((faq) => (
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
            Tell us about your project scope and location. Our team will
            review the details and follow up to discuss next steps.
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
