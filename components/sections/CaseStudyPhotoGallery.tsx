import Image from "next/image";
import type { CaseStudyImage } from "@/lib/projects-data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type CaseStudyPhotoGalleryProps = {
  id?: string;
  heading?: string;
  images: CaseStudyImage[];
  /** Show the first image as a full-width hero above the grid. */
  showHero?: boolean;
};

export function CaseStudyPhotoGallery({
  id = "project-photos",
  heading = "Project Photos",
  images,
  showHero = true,
}: CaseStudyPhotoGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const heroImage = showHero ? images[0] : undefined;
  const gridImages = showHero ? images.slice(1) : images;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="bg-surface"
    >
      {heroImage ? (
        <Reveal className="relative aspect-[21/9] w-full min-h-[14rem] overflow-hidden border-b border-border sm:min-h-[18rem] lg:min-h-[24rem]">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {heroImage.caption ? (
            <p className="absolute inset-x-0 bottom-0 bg-charcoal/75 px-5 py-3 text-sm text-surface sm:px-8">
              {heroImage.caption}
            </p>
          ) : null}
        </Reveal>
      ) : null}

      {gridImages.length > 0 ? (
        <Container className="py-12 lg:py-16">
          <Reveal>
            <h2
              id={`${id}-heading`}
              className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl"
            >
              {heading}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {gridImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 60}
                className="overflow-hidden border border-border bg-surface-muted"
              >
                <figure>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-muted">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      ) : null}
    </section>
  );
}
