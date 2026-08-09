import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Who We Work With"
            title="Industries We Serve Across Oklahoma"
            description="The same three trades solve very different problems depending on who is buying them. These are the groups we work with most, and what the work usually involves for each."
          />
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                id={industry.slug}
                className="flex flex-col border border-border bg-surface p-8 sm:p-10"
              >
                <h2 className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                  {industry.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  {industry.howWeHelp}
                </p>
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Typical Scope
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {industry.needs.map((need) => (
                    <li
                      key={need}
                      className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/90"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-accent">
                        &#9632;
                      </span>
                      {need}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
            The Services Behind Every Scope
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group border border-border bg-surface p-6 transition-shadow hover:shadow-md sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold uppercase text-charcoal sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors group-hover:text-accent">
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Tell Us What You Are Building
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Send us your scope and location and our team will follow up to
            discuss how we would approach it.
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
