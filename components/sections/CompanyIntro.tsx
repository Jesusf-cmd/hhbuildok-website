import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function CompanyIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-paper"
    >
      <Container className="band">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <Reveal className="il-frame relative aspect-[4/3] w-full overflow-hidden bg-warm">
            <Image
              src="/images/asphalt/driveway-culvert-replacement-asphalt-patch-oklahoma.jpg"
              alt="H&H Construction crew replacing a culvert and patching asphalt on a driveway in Oklahoma"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              id="about-heading"
              eyebrow="About H&H Construction"
              title="A Partner for Demanding Commercial Work"
              description="H&H Construction focuses on the heavy-civil and commercial building work that keeps Oklahoma's developments, facilities, and public infrastructure moving forward."
            />
            <div className="type-prose mt-8 space-y-5 border-t border-line pt-8">
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
