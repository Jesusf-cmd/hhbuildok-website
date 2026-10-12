import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { industries, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "H&H Construction delivers concrete, asphalt paving, and metal building scopes for general contractors, developers, municipalities, school districts, property owners, and industrial facilities across Oklahoma.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />

      <PageHero
        eyebrow="Who We Work With"
        title="Industries We Serve Across Oklahoma"
      >
        <p className="type-lead mt-6 max-w-2xl">
          The same three trades solve very different problems depending on who is buying them. These are the groups we work with most, and what the work usually involves for each.
        </p>
      </PageHero>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-6 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.slug}
                id={industry.slug}
                className="flex flex-col border border-line border-t-4 border-t-accent bg-white p-7 sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="il-num mb-4 text-[2.5rem]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="type-h2-sm text-graphite">
                  {industry.title}
                </h2>
                <p className="type-body mt-4">
                  {industry.howWeHelp}
                </p>
                <h3 className="type-label mt-8 border-t border-line pt-6 text-muted">
                  Typical Scope
                </h3>
                <ul className="il-checklist mt-4">
                  {industry.needs.map((need) => (
                    <li key={need}>
                      <CheckIcon />
                      {need}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-dark">
        <Container className="band">
          <h2 className="type-h2 max-w-4xl text-paper">
            The Services Behind Every Scope
          </h2>
          <div className="mt-12 grid gap-y-10 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col border-t border-white/20 pt-8 sm:border-l sm:border-t-0 sm:px-8 sm:pt-0 sm:first:border-l-0 sm:first:pl-0"
              >
                <h3 className="type-h3 text-paper transition-colors group-hover:text-accent-light">
                  {service.title}
                </h3>
                <p className="type-body mt-3 flex-1">
                  {service.description}
                </p>
                <span className="il-link mt-6 self-start">
                  Learn More
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Tell Us What You Are Building"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Request a Bid
          </Button>
        }
      >
        <p>
          Send us your scope and location and our team will follow up to
          discuss how we would approach it.
        </p>
      </CtaBand>
    </PageShell>
  );
}
