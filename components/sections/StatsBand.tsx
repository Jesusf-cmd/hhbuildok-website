import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatCounter } from "@/components/ui/StatCounter";
import { Reveal } from "@/components/motion/Reveal";

// TODO: confirm actual stats with H&H team
const stats = [
  { type: "counter" as const, value: 15, suffix: "+", label: "Years of Experience" },
  { type: "counter" as const, value: 150, suffix: "+", label: "Projects Completed" },
  { type: "text" as const, primary: "Statewide", label: "Oklahoma" },
  { type: "counter" as const, value: 100, suffix: "%", label: "Licensed & Insured" },
];

export function StatsBand() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="tone-dark"
    >
      <Container className="band">
        <Reveal className="max-w-3xl">
          <Eyebrow theme="dark">By the Numbers</Eyebrow>
          <h2
            id="stats-heading"
            className="type-h2 text-paper"
          >
            Built on Experience
          </h2>
        </Reveal>

        <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.type === "text" ? stat.primary : stat.label}
              delay={index * 80}
              className="border-b border-white/15 py-8 sm:px-6 sm:odd:pl-0 lg:border-b-0 lg:border-l lg:px-8 lg:py-10 lg:odd:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              {stat.type === "counter" ? (
                <>
                  <StatCounter value={stat.value} suffix={stat.suffix} className="block" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-on-dark-muted">
                    {stat.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display text-5xl font-medium uppercase leading-none text-paper sm:text-6xl">
                    {stat.primary}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-on-dark-muted">
                    {stat.label}
                  </p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
