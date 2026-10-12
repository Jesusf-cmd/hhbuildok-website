import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type CtaBandProps = {
  title: ReactNode;
  titleId?: string;
  children?: ReactNode;
  actions: ReactNode;
};

export function CtaBand({ title, titleId, children, actions }: CtaBandProps) {
  return (
    <section aria-labelledby={titleId} className="tone-red">
      <Container className="band">
        <h2 id={titleId} className="type-cta max-w-5xl text-paper">
          {title}
        </h2>
        {children ? (
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-paper/90 sm:text-[1.0625rem]">
            {children}
          </div>
        ) : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {actions}
        </div>
      </Container>
    </section>
  );
}
