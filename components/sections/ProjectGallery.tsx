import Image from "next/image";
import type { GalleryImage } from "@/lib/asphalt-gallery-data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type ProjectGalleryProps = {
  id?: string;
  heading: string;
  description: string;
  images: GalleryImage[];
};

export function ProjectGallery({
  id,
  heading,
  description,
  images,
}: ProjectGalleryProps) {
  return (
    <section id={id} aria-labelledby={`${id ?? "gallery"}-heading`} className="bg-surface">
      <Container className="py-16 lg:py-20">
        <Reveal>
          <h2
            id={`${id ?? "gallery"}-heading`}
            className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl"
          >
            {heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            {description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 60}
              className="group overflow-hidden border border-border bg-surface-muted"
            >
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
