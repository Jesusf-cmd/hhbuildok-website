import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatCounter } from "@/components/ui/StatCounter";
import { Reveal } from "@/components/motion/Reveal";

// TODO: confirm actual stats with H&H team
const stats = [
  { type: "counter" as const, value: 15, suffix: "+", label: "Years in Business" },
  { type: "counter" as const, value: 150, suffix: "+", label: "Projects Completed" },
  { type: "text" as const, primary: "Statewide", label: "Oklahoma" },
  { type: "counter" as const, value: 100, suffix: "%", label: "Licensed & Insured" },
];

export function StatsBand() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="border-y border-white/10 bg-ink text-surface"
    >
      <Container className="py-16 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow theme="dark">By the Numbers</Eyebrow>
          <h2
            id="stats-heading"
            className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-surface sm:text-3xl"
          >
            Built on Experience
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.type === "text" ? stat.primary : stat.label}
              delay={index * 80}
              className="text-center"
            >
              {stat.type === "counter" ? (
                <>
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-surface/75">
                    {stat.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
                    {stat.primary}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-surface/75">
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
