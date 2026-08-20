import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/site-data";
import { getPrimaryFeaturedCaseStudy } from "@/lib/projects-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedProjects() {
  const spotlight = getPrimaryFeaturedCaseStudy();
  const heroImage = spotlight?.images[0];

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
          <Button
            href={spotlight ? `/projects/${spotlight.slug}#project-photos` : "/projects"}
            variant="outline-dark"
            className="shrink-0 self-start lg:self-auto"
          >
            {spotlight ? "Read the Case Study" : "View Projects"}
          </Button>
        </Reveal>

        {spotlight && heroImage ? (
          <Reveal delay={40} className="mt-14">
            <Link
              href={`/projects/${spotlight.slug}#project-photos`}
              className="card-interactive group relative block overflow-hidden border-2 border-accent bg-surface-muted"
            >
              <div className="relative aspect-[21/9] w-full min-h-[16rem] sm:min-h-[20rem]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  className="card-interactive-image object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 transition-opacity duration-400 group-hover:from-charcoal/95 group-focus-visible:from-charcoal/95" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                    Featured Case Study &middot; {spotlight.city}, OK
                  </p>
                  <h3 className="mt-3 max-w-3xl font-display text-2xl font-bold uppercase tracking-tight text-surface sm:text-3xl lg:text-4xl">
                    {spotlight.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-surface/85 sm:text-base">
                    {spotlight.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-surface underline-offset-4 group-hover:underline group-focus-visible:underline">
                    View project photos and scope details
                    <span aria-hidden="true" className="text-accent">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
