import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/site-data";
import { getPrimaryFeaturedCaseStudy } from "@/lib/projects-data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, buttonClassName } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedProjects() {
  const spotlight = getPrimaryFeaturedCaseStudy();
  const heroImage = spotlight?.images[0];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-paper"
    >
      <Container className="band">
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
            arrow
          >
            {spotlight ? "Read the Case Study" : "View Projects"}
          </Button>
        </Reveal>

        {spotlight && heroImage ? (
          <Reveal delay={40} className="mt-14">
            <Link
              href={`/projects/${spotlight.slug}#project-photos`}
              className="card-interactive group grid overflow-hidden bg-graphite lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]"
            >
              <div className="il-frame relative aspect-[16/10] w-full min-h-[16rem] overflow-hidden lg:aspect-auto lg:min-h-[32rem]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  className="card-interactive-image object-cover"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                />
              </div>
              <div className="tone-dark flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
                <p className="type-eyebrow">
                  Featured Case Study &middot; {spotlight.city}, OK
                </p>
                <h3 className="type-h2-sm mt-4 text-paper">
                  {spotlight.title}
                </h3>
                <p className="type-body mt-5">
                  {spotlight.summary}
                </p>
                <span className={buttonClassName("primary", "mt-8 self-start")}>
                  View project photos and scope details
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              as="article"
              delay={index * 80}
              className="card-interactive group relative aspect-[4/3] overflow-hidden bg-graphite"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="card-interactive-image object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="type-eyebrow text-accent-light">
                  {project.category}
                </p>
                <h3 className="type-h3 mt-2 text-paper sm:text-[1.75rem]">
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
