import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  /** Lead copy, actions, and any other hero content rendered below the h1. */
  children?: ReactNode;
  /** Image or card shown beside the copy on large screens. */
  media?: ReactNode;
  /** Frame the media with drawing-style corner marks. */
  framed?: boolean;
  labelledBy?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleId,
  children,
  media,
  framed = true,
  labelledBy,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className="tone-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgb(255_255_255/0.5)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.5)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <Container className="relative pb-16 pt-8 sm:pt-10 lg:pb-24 lg:pt-12">
        <div
          className={
            media
              ? "grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16"
              : "max-w-4xl"
          }
        >
          <div className="min-w-0">
            {eyebrow ? <Eyebrow theme="dark">{eyebrow}</Eyebrow> : null}
            <h1 id={titleId} className="type-h1 text-paper">
              {title}
            </h1>
            {children}
          </div>
          {media ? (
            <div className={`min-w-0 ${framed ? "il-frame" : ""}`}>{media}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
