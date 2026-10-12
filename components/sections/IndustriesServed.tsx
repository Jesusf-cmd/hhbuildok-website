import { industries } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function IndustriesServed() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-warm"
    >
      <Container className="band">
        <Reveal>
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries Served"
            title="Who We Work With"
            description="H&H Construction supports the teams responsible for building and maintaining Oklahoma's commercial and public infrastructure."
            layout="split"
          />
        </Reveal>

        <div className="mt-12 grid border-l border-t border-line-strong sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal
              key={industry.title}
              as="article"
              delay={index * 80}
              className="relative border-b border-r border-line-strong bg-warm p-7 transition-colors duration-300 hover:bg-paper sm:p-9"
            >
              <p aria-hidden="true" className="il-num text-base">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="type-h3 mt-8 text-graphite">
                {industry.title}
              </h3>
              <p className="type-body mt-4">
                {industry.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
