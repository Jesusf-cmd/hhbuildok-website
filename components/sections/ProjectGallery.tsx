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
    <section id={id} aria-labelledby={`${id ?? "gallery"}-heading`} className="bg-paper">
      <Container className="band">
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <h2
            id={`${id ?? "gallery"}-heading`}
            className="type-h2 text-graphite"
          >
            {heading}
          </h2>
          <p className="type-lead max-w-xl">
            {description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 60}
              className="group overflow-hidden"
            >
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-warm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="il-figcaption mt-3">
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
