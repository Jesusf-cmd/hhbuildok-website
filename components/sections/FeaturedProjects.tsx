import Image from "next/image";
import { featuredProjects } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-surface"
    >
      <Container className="py-20 lg:py-28">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured Projects"
            title="Commercial Work Across Oklahoma"
            description="A selection of project types we deliver for contractors, developers, and public entities across Oklahoma."
          />
          <Button href="#contact" variant="outline-dark" className="shrink-0 self-start lg:self-auto">
            Start Your Project
          </Button>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              as="article"
              delay={index * 80}
              className="card-interactive group relative aspect-[4/3] overflow-hidden border border-border bg-surface-muted"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="card-interactive-image object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent transition-opacity duration-400 group-hover:from-charcoal/85 group-focus-within:from-charcoal/85" />
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-transparent p-6 transition-colors duration-400 group-hover:border-accent group-focus-within:border-accent sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-surface sm:text-2xl">
                  {project.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
