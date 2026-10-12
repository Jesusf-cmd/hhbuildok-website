import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type FaqSectionProps = {
  heading: ReactNode;
  faqs: readonly { question: string; answer: string }[];
  tone?: "paper" | "warm";
};

/** Every answer stays visible; questions keep their h3 level. */
export function FaqSection({ heading, faqs, tone = "paper" }: FaqSectionProps) {
  return (
    <section className={tone === "warm" ? "bg-warm" : "bg-paper"}>
      <Container className="band">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <h2 className="type-h2 text-graphite lg:sticky lg:top-28 lg:self-start">
            {heading}
          </h2>
          <div className="il-faq">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
