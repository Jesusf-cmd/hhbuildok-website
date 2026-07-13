import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceBlocks() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-surface">
      <Container className="py-20 lg:py-28">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title="Built for Commercial Scale"
            description="From foundations and flatwork to paving and pre-engineered structures, H&H Construction provides the site work and building packages your project demands."
          />
        </Reveal>
      </Container>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const isReversed = index % 2 === 1;
          const contentBg = index % 2 === 0 ? "bg-surface-muted" : "bg-surface";

          return (
            <Reveal
              key={service.id}
              as="article"
              delay={index * 80}
              aria-labelledby={`service-${service.id}-title`}
              className="card-interactive grid min-h-[28rem] grid-cols-1 border-t border-border lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[20rem] overflow-hidden lg:min-h-[32rem] ${
                  isReversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="card-interactive-image object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div
                className={`flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-20 ${contentBg} ${
                  isReversed ? "lg:order-1" : ""
                }`}
              >
                <SectionNumber value={`0${index + 1}`} />
                <h3
                  id={`service-${service.id}-title`}
                  className="font-display text-3xl font-bold uppercase tracking-tight text-charcoal sm:text-4xl"
                >
                  {service.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline focus-visible:text-accent focus-visible:underline"
                >
                  Learn More About {service.shortTitle}
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
