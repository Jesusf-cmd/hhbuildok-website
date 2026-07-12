import { industries } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesServed() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-off-white-muted"
    >
      <Container className="py-20 lg:py-28">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries Served"
          title="Who We Work With"
          description="H&H Construction supports the teams responsible for building and maintaining Oklahoma's commercial and public infrastructure."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="border border-border bg-surface p-8 transition-shadow duration-300 hover:shadow-md sm:p-10"
            >
              <h3 className="font-heading text-lg font-bold uppercase text-charcoal sm:text-xl">
                {industry.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
