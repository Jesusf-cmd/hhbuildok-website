import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { caseStudies, getPrimaryFeaturedCaseStudy, hasCaseStudies } from "@/lib/projects-data";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Commercial Construction Projects",
  description:
    "Case studies from H&H Construction's commercial concrete, asphalt paving, and metal building projects for contractors, developers, and public agencies across Oklahoma.",
  alternates: {
    canonical: "/projects",
  },
  // A projects page with no projects is a thin page. It stays out of the index
  // until real case studies exist.
  ...(hasCaseStudies ? {} : { robots: { index: false, follow: true } }),
};

function serviceLabel(slug: string) {
  return services.find((service) => service.slug === slug)?.shortTitle ?? "";
}

export default function ProjectsPage() {
  const spotlight = getPrimaryFeaturedCaseStudy();
  const otherStudies = caseStudies.filter(
    (study) => study.slug !== spotlight?.slug,
  );

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Our Work"
            title="Commercial Projects Across Oklahoma"
            description="Concrete, paving, and metal building scopes delivered for general contractors, developers, municipalities, and school districts."
          />
        </Container>
      </section>

      {hasCaseStudies ? (
        <>
          {spotlight ? (
            <section className="bg-surface">
              <Container className="pb-8 pt-16 lg:pb-12 lg:pt-20">
                <Link
                  href={`/projects/${spotlight.slug}`}
                  className="group grid overflow-hidden border-2 border-accent lg:grid-cols-2"
                >
                  {spotlight.images[0] ? (
                    <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:min-h-[22rem]">
                      <Image
                        src={spotlight.images[0].src}
                        alt={spotlight.images[0].alt}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-center bg-charcoal p-8 sm:p-10 lg:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Featured Case Study &middot; Asphalt &middot;{" "}
                      {spotlight.city}, OK
                    </p>
                    <h2 className="mt-4 font-heading text-2xl font-bold uppercase text-surface sm:text-3xl">
                      {spotlight.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-surface/85">
                      {spotlight.summary}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-surface group-hover:text-accent">
                      Read the full case study
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </Container>
            </section>
          ) : null}

          {otherStudies.length > 0 ? (
            <section className="bg-surface">
              <Container className="py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2">
                  {otherStudies.map((study) => (
                    <article
                      key={study.slug}
                      className="flex flex-col border border-border bg-surface"
                    >
                      {study.images[0] ? (
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={study.images[0].src}
                            alt={study.images[0].alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                          {serviceLabel(study.serviceSlug)} &middot; {study.city}, OK
                        </p>
                        <h2 className="mt-3 font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                          {study.title}
                        </h2>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                          {study.summary}
                        </p>
                        <Link
                          href={`/projects/${study.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                        >
                          Read the Case Study
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </Container>
            </section>
          ) : null}
        </>
      ) : (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <div className="max-w-2xl border border-border bg-surface-muted p-8">
              <h2 className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                Project Write-Ups in Progress
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Detailed case studies are being prepared. If you are evaluating
                H&amp;H Construction for a bid now, contact us and we will send
                project references relevant to your scope and delivery method.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Request References
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Have a Similar Scope?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your project and our team will review the details and
            follow up to discuss next steps.
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
