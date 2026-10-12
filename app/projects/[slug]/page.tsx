import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { CaseStudyPhotoGallery } from "@/components/sections/CaseStudyPhotoGallery";
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

  const narrative = [
    { heading: "The Challenge", body: study.challenge },
    { heading: "Our Approach", body: study.approach },
    { heading: "The Outcome", body: study.outcome },
  ];

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

      <PageHero eyebrow="Case Study" title={study.h1}>
        <p className="type-lead mt-6 max-w-2xl">
          {study.summary}
        </p>

        <dl className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-white/15 py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6 lg:border-b-0 lg:border-l lg:px-6 lg:odd:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark-muted">
                {fact.label}
              </dt>
              <dd className="mt-2 font-display text-xl font-medium uppercase leading-tight text-paper">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <CaseStudyPhotoGallery images={study.images} />

      {study.metrics.length > 0 ? (
        <section className="tone-red">
          <Container className="band-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t border-white/30 py-6 sm:odd:pr-6 sm:even:border-l sm:even:pl-6 lg:border-l lg:border-t-0 lg:px-8 lg:py-2 lg:odd:pl-8 lg:first:border-l-0 lg:first:pl-0"
                >
                  <p className="font-display text-3xl font-medium uppercase leading-none text-paper sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm text-paper/90">{metric.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper">
        <Container className="band">
          <div className="mx-auto max-w-4xl">
            {narrative.map((item, index) => (
              <div
                key={item.heading}
                className="grid gap-4 border-b border-line py-10 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8 lg:py-14"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center border border-line-strong font-display text-lg text-graphite"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="type-h2 text-graphite">
                    {item.heading}
                  </h2>
                  <p className="type-prose mt-5">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {study.testimonial ? (
        <section className="bg-warm">
          <Container className="band">
            <blockquote className="max-w-4xl border-l-4 border-accent pl-6 sm:pl-10">
              <p className="font-display text-2xl leading-snug text-graphite sm:text-3xl">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                {study.testimonial.attribution}
              </footer>
            </blockquote>
          </Container>
        </section>
      ) : null}

      {service ? (
        <section className="bg-warm">
          <Container className="py-10">
            <Link
              href={service.href}
              className="il-link"
            >
              More on our {service.shortTitle} services
              <ArrowIcon />
            </Link>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title="Planning Something Similar?"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about your scope and location, and our team will follow up to
          discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
