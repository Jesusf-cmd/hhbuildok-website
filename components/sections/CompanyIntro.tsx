import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-off-white-muted"
    >
      <Container className="py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
            <Image
              src="/images/placeholders/company-intro-team-site.svg"
              alt="H&H Construction team and commercial job site photo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionHeading
              id="about-heading"
              eyebrow="About H&H Construction"
              title="A Partner for Demanding Commercial Work"
              description="H&H Construction focuses on the heavy-civil and commercial building work that keeps Oklahoma's developments, facilities, and public infrastructure moving forward."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/80">
              <p>
                We work alongside general contractors, developers, municipalities,
                school districts, and property owners who need dependable execution
                on concrete, asphalt, and metal building scopes.
              </p>
              <p>
                Our approach is straightforward: understand the project requirements,
                coordinate with your team, and deliver work that meets specification
                on site. Whether you are breaking ground on a new development or
                upgrading an existing facility, we bring the equipment, crews, and
                field leadership to get it done.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
