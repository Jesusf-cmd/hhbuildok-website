import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-end"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rebar-construction.jpg"
          alt="Rebar reinforcement cage being tied at an H&H Construction commercial job site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-off-white/95 via-off-white/70 to-off-white/25" />
      </div>

      <Container className="relative z-10 pb-20 pt-32">
        <div className="max-w-4xl">
          <p className="animate-fade-in mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Commercial &amp; Industrial Construction
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up font-heading text-4xl font-bold uppercase leading-[1.05] text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building Oklahoma&apos;s Commercial Infrastructure
          </h1>
          <p className="animate-fade-up animate-delay-100 mt-6 max-w-2xl text-base leading-relaxed text-charcoal/80 sm:text-lg md:text-xl">
            H&amp;H Construction delivers commercial concrete, asphalt paving,
            metal buildings, and roofing for general contractors, developers,
            municipalities, and property owners across Oklahoma.
          </p>
          <div className="animate-fade-up animate-delay-200 mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" variant="primary">
              Request a Bid
            </Button>
            <Button href="#projects" variant="outline-dark">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
