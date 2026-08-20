import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { caseStudies, getCaseStudy } from "@/lib/projects-data";
import { services, siteConfig } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: {
      canonical: `/projects/${study.slug}`,
    },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `/projects/${study.slug}`,
      type: "article",
      images: study.images[0]
        ? [{ url: study.images[0].src, alt: study.images[0].alt }]
        : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const service = services.find((item) => item.slug === study.serviceSlug);
  const completed = new Date(study.completedAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const facts = [
    { label: "Client type", value: study.clientType },
    { label: "Location", value: `${study.city}, OK` },
    { label: "Scope", value: service?.title ?? "" },
    { label: "Completed", value: completed },
  ].filter((fact) => fact.value);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.h1,
    name: study.title,
    description: study.metaDescription,
    datePublished: study.completedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/projects/${study.slug}`,
    image: study.images.map((image) => `${siteConfig.url}${image.src}`),
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${study.title} project photos`,
    itemListElement: study.images.map((image, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        contentUrl: `${siteConfig.url}${image.src}`,
        description: image.alt,
        name: image.caption ?? image.alt,
      },
    })),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: study.title, href: `/projects/${study.slug}` },
        ]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Case Study
          </p>
          <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            {study.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {study.summary}
          </p>

          <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-heading text-lg font-bold uppercase text-charcoal">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {study.metrics.length > 0 ? (
        <section className="bg-charcoal">
          <Container className="py-12 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-surface/70">{metric.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal">
                The Challenge
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal">
                Our Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {study.approach}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal">
                The Outcome
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {study.outcome}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {study.images.length > 0 ? (
        <section className="bg-off-white-muted">
          <Container className="py-16 lg:py-20">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              Project Photos
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {study.images.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden border border-border bg-surface"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-muted">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {study.testimonial ? (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <blockquote className="max-w-3xl border-l-4 border-accent pl-6">
              <p className="font-heading text-xl leading-relaxed text-charcoal sm:text-2xl">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm uppercase tracking-wider text-text-muted">
                {study.testimonial.attribution}
              </footer>
            </blockquote>
          </Container>
        </section>
      ) : null}

      {service ? (
        <section className="bg-off-white-muted">
          <Container className="py-12">
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
            >
              More on our {service.shortTitle} services
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Container>
        </section>
      ) : null}

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Planning Something Similar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your scope and location, and our team will follow up to
            discuss next steps.
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
