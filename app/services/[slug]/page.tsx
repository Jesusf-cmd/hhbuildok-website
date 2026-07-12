import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services, siteConfig, serviceAreaCities } from "@/lib/site-data";

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
                {service.metaTitle}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                {service.heroDescription}
              </p>
              <div className="mt-8">
                <Button href="/#contact" variant="primary">
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

      <section className="bg-surface">
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

      <section className="bg-off-white-muted">
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
            Tell us about your project scope and location. Our team will
            review the details and follow up to discuss next steps.
          </p>
          <div className="mt-8">
            <Button href="/#contact" variant="secondary">
              Request a Bid
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
