import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type ProseSectionProps = {
  heading: ReactNode;
  children: ReactNode;
  tone?: "paper" | "warm" | "dark";
  id?: string;
};

const toneClass = {
  paper: "bg-paper",
  warm: "bg-warm",
  dark: "tone-dark",
} as const;

/** Heading beside long-form copy on large screens; stacked on small screens. */
export function ProseSection({
  heading,
  children,
  tone = "paper",
  id,
}: ProseSectionProps) {
  return (
    <section id={id} className={toneClass[tone]}>
      <Container className="band">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <h2
            className={`type-h2 lg:sticky lg:top-28 lg:self-start ${
              tone === "dark" ? "text-paper" : "text-graphite"
            }`}
          >
            {heading}
          </h2>
          <div className="type-prose space-y-6">{children}</div>
        </div>
      </Container>
    </section>
  );
}
