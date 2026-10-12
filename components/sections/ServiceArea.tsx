import Image from "next/image";
import Link from "next/link";
import { serviceAreaCities, serviceAreaCityHref } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      aria-labelledby="service-area-heading"
      className="bg-paper"
    >
      <Container className="band">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="service-area-heading"
              eyebrow="Service Area"
              title="Serving Oklahoma"
              description="H&H Construction provides commercial concrete, asphalt paving, and metal building services throughout Oklahoma. Contact us to discuss your project location and scope."
            />
            <ul
              className="il-link-list mt-10 grid sm:grid-cols-2 sm:gap-x-8 sm:border-t-0 sm:[&>li:nth-child(-n+2)]:border-t sm:[&>li]:border-line-strong"
              aria-label="Cities and regions served"
            >
              {serviceAreaCities.map((city) => (
                <li key={city}>
                  <Link href={serviceAreaCityHref(city)}>
                    {city}
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="type-body mt-8">
              Don&apos;t see your location listed?{" "}
              <Link href="/service-area" className="il-inline-link">
                View our full service area
              </Link>{" "}
              — we evaluate projects across the state.
            </p>
          </Reveal>

          <Reveal delay={120} className="il-frame relative aspect-square w-full overflow-hidden bg-graphite">
            <Image
              src="/images/stock/oklahoma-service-area.jpg"
              alt="map or aerial photo showing Oklahoma service area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
