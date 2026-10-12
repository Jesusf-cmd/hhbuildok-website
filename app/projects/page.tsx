import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button, buttonClassName } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
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

      <PageHero eyebrow="Our Work" title="Commercial Projects Across Oklahoma">
        <p className="type-lead mt-6 max-w-2xl">
          Concrete, paving, and metal building scopes delivered for general contractors, developers, municipalities, and school districts.
        </p>
      </PageHero>

      {hasCaseStudies ? (
        <>
          {spotlight ? (
            <section className="bg-paper">
              <Container className="pb-8 pt-16 lg:pb-12 lg:pt-24">
                <Link
                  href={`/projects/${spotlight.slug}`}
                  className="card-interactive group grid overflow-hidden bg-graphite lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]"
                >
                  {spotlight.images[0] ? (
                    <div className="il-frame relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:min-h-[32rem]">
                      <Image
                        src={spotlight.images[0].src}
                        alt={spotlight.images[0].alt}
                        fill
                        priority
                        className="card-interactive-image object-cover"
                        sizes="(max-width: 1024px) 100vw, 62vw"
                      />
                    </div>
                  ) : null}
                  <div className="tone-dark flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <p className="type-eyebrow">
                      Featured Case Study &middot; Asphalt &middot;{" "}
                      {spotlight.city}, OK
                    </p>
                    <h2 className="type-h2-sm mt-4 text-paper">
                      {spotlight.title}
                    </h2>
                    <p className="type-body mt-5">
                      {spotlight.summary}
                    </p>
                    <span className={buttonClassName("primary", "mt-8 self-start")}>
                      Read the full case study
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Container>
            </section>
          ) : null}

          {otherStudies.length > 0 ? (
            <section className="bg-paper">
              <Container className="band">
                <div className="grid gap-6 md:grid-cols-2">
                  {otherStudies.map((study) => (
                    <article
                      key={study.slug}
                      className="card-interactive flex flex-col border border-line bg-white"
                    >
                      {study.images[0] ? (
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-graphite">
                          <Image
                            src={study.images[0].src}
                            alt={study.images[0].alt}
                            fill
                            className="card-interactive-image object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-7 sm:p-9">
                        <p className="type-eyebrow">
                          {serviceLabel(study.serviceSlug)} &middot; {study.city}, OK
                        </p>
                        <h2 className="type-h3 mt-3 text-graphite sm:text-[1.75rem]">
                          {study.title}
                        </h2>
                        <p className="type-body mt-4 flex-1">
                          {study.summary}
                        </p>
                        <Link
                          href={`/projects/${study.slug}`}
                          className="il-link mt-6 self-start"
                        >
                          Read the Case Study
                          <ArrowIcon />
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
        <section className="bg-paper">
          <Container className="band">
            <div className="il-card max-w-2xl border-t-4 border-t-accent">
              <h2 className="type-h2-sm text-graphite">
                Project Write-Ups in Progress
              </h2>
              <p className="type-prose mt-4">
                Detailed case studies are being prepared. If you are evaluating
                H&amp;H Construction for a bid now, contact us and we will send
                project references relevant to your scope and delivery method.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" arrow>
                  Request References
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Have a Similar Scope?"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Tell us about your project and our team will review the details and
          follow up to discuss next steps.
        </p>
      </CtaBand>
    </PageShell>
  );
}
