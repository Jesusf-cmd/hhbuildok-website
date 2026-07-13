import Image from "next/image";
import Link from "next/link";
import { serviceAreaCities, priorityCities } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      aria-labelledby="service-area-heading"
      className="bg-surface"
    >
      <Container className="py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="service-area-heading"
              eyebrow="Service Area"
              title="Serving Oklahoma"
              description="H&H Construction provides commercial concrete, asphalt paving, and metal building services throughout Oklahoma. Contact us to discuss your project location and scope."
            />
            <ul
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3"
              aria-label="Cities and regions served"
            >
              {serviceAreaCities.map((city) => {
                const priorityCity = priorityCities.find(
                  (item) => item.name === city,
                );
                return (
                  <li
                    key={city}
                    className="text-sm text-text-muted before:mr-2 before:text-accent before:content-['■']"
                  >
                    {priorityCity ? (
                      <Link
                        href={`/service-area/${priorityCity.slug}`}
                        className="transition-colors hover:text-charcoal"
                      >
                        {city}
                      </Link>
                    ) : (
                      city
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-sm text-text-muted">
              Don&apos;t see your location listed?{" "}
              <Link href="/service-area" className="font-medium text-charcoal underline underline-offset-2 hover:text-accent">
                View our full service area
              </Link>{" "}
              — we evaluate projects across the state.
            </p>
          </div>

          <div className="relative aspect-square w-full overflow-hidden border border-border">
            <Image
              src="/images/stock/oklahoma-service-area.jpg"
              alt="map or aerial photo showing Oklahoma service area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
