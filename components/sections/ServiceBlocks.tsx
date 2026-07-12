import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceBlocks() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-surface">
      <Container className="py-20 lg:py-28">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="Built for Commercial Scale"
          description="From foundations and flatwork to paving and pre-engineered structures, H&H Construction provides the site work and building packages your project demands."
        />
      </Container>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const isReversed = index % 2 === 1;
          const contentBg = index % 2 === 0 ? "bg-surface-muted" : "bg-surface";

          return (
            <article
              key={service.id}
              aria-labelledby={`service-${service.id}-title`}
              className="grid min-h-[28rem] grid-cols-1 border-t border-border lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[20rem] lg:min-h-[32rem] ${
                  isReversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div
                className={`flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-20 ${contentBg} ${
                  isReversed ? "lg:order-1" : ""
                }`}
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  0{index + 1}
                </p>
                <h3
                  id={`service-${service.id}-title`}
                  className="font-heading text-3xl font-bold uppercase text-charcoal sm:text-4xl"
                >
                  {service.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  Learn More About {service.shortTitle}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
