import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { HeroImage } from "@/components/sections/HeroImage";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-end"
    >
      <HeroImage
        src="/images/hero-rebar-construction.jpg"
        alt="Rebar reinforcement cage being tied at an H&H Construction commercial job site"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-off-white/95 via-off-white/70 to-off-white/25" />

      <Container className="relative z-10 pb-20 pt-32">
        <div className="max-w-4xl">
          <Eyebrow className="animate-fade-in mb-4 tracking-[0.3em]">
            Commercial &amp; Industrial Construction
          </Eyebrow>
          <h1
            id="hero-heading"
            className="animate-fade-up font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Commercial Concrete, Asphalt Paving &amp; Metal Buildings in
            Oklahoma
          </h1>
          <p className="animate-fade-up mt-4 font-display text-lg font-bold uppercase tracking-tight text-charcoal/75 sm:text-xl md:text-2xl">
            Building Oklahoma&apos;s Commercial Infrastructure
          </p>
          <p className="animate-fade-up animate-delay-100 mt-6 max-w-2xl text-base leading-relaxed text-charcoal/80 sm:text-lg md:text-xl">
            H&amp;H Construction delivers commercial concrete, asphalt paving,
            metal buildings, and roofing for general contractors, developers,
            municipalities, and property owners across Oklahoma.
          </p>
          <div className="animate-fade-up animate-delay-200 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/contact" variant="primary">
              Request a Bid
            </Button>
            <PhoneLink className="inline-flex items-center justify-center border border-charcoal/25 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors duration-200 hover:border-charcoal hover:bg-charcoal/5">
              Call {siteConfig.phone}
            </PhoneLink>
            <Button href="/projects" variant="outline-dark">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
