import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Commercial Construction Services",
  description:
    "H&H Construction provides commercial concrete construction, asphalt paving, and metal buildings & roofing for contractors, developers, and municipalities across Oklahoma.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            eyebrow="What We Do"
            title="Commercial Construction Services"
            description="H&H Construction provides the concrete, paving, and metal building work that commercial, industrial, and municipal projects across Oklahoma depend on."
          />
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col border border-border bg-surface"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h2 className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                  >
                    View {service.shortTitle} Services
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your commercial concrete, asphalt, or metal building
            scope and our team will follow up to discuss next steps.
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
