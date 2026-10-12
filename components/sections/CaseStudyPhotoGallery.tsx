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
      className="bg-paper"
    >
      {heroImage ? (
        <Reveal className="il-frame relative aspect-[21/9] w-full min-h-[16rem] overflow-hidden bg-graphite sm:min-h-[20rem] lg:min-h-[28rem]">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {heroImage.caption ? (
            <p className="absolute bottom-0 left-0 max-w-full bg-graphite/90 px-5 py-3 text-sm leading-relaxed text-paper sm:max-w-2xl sm:px-8">
              {heroImage.caption}
            </p>
          ) : null}
        </Reveal>
      ) : null}

      {gridImages.length > 0 ? (
        <Container className="band">
          <Reveal>
            <h2
              id={`${id}-heading`}
              className="type-h2 text-graphite"
            >
              {heading}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12">
            {gridImages.map((image, index) => (
              <Reveal
                key={image.src}
                delay={index * 60}
              >
                <figure>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {image.caption ? (
                    <figcaption className="il-figcaption mt-3">
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
