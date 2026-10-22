import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { asphaltCityHref } from "@/lib/asphalt-city-index";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceBlocks() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-warm">
      <Container className="band">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title="Built for Commercial Scale"
            description="From foundations and flatwork to paving and pre-engineered structures, H&H Construction provides the site work and building packages your project demands."
            layout="split"
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal
                key={service.id}
                as="article"
                delay={index * 80}
                aria-labelledby={`service-${service.id}-title`}
                className="card-interactive grid grid-cols-1 overflow-hidden bg-graphite lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
              >
                <div
                  className={`relative min-h-[18rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[30rem] ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="card-interactive-image object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>

                <div
                  className={`tone-dark flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16 ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <SectionNumber value={`0${index + 1}`} className="text-2xl sm:text-2xl" />
                  <h3
                    id={`service-${service.id}-title`}
                    className="type-h2 text-paper"
                  >
                    {service.title}
                  </h3>
                  <p className="type-body mt-5 max-w-md">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Link href={service.href} className="il-link">
                      Learn More About {service.shortTitle}
                      <ArrowIcon />
                    </Link>
                  </div>
                  {service.slug === "asphalt-paving" ? (
                    <div className="mt-5">
                      <p className="type-body mb-2">
                        Planning a commercial paving project in the metro?
                      </p>
                      <Link
                        href={asphaltCityHref("oklahoma-city")}
                        className="il-link"
                        prefetch={false}
                      >
                        Commercial asphalt paving in Oklahoma City
                        <ArrowIcon />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
