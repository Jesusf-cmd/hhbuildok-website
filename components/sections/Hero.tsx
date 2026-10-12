import { Button, buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { HeroImage } from "@/components/sections/HeroImage";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="il-frame tone-dark relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden"
    >
      <HeroImage
        src="/images/hero-rebar-construction.jpg"
        alt="Rebar reinforcement cage being tied at an H&H Construction commercial job site"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(16_18_18/0.55)_0%,rgb(16_18_18/0.88)_70%)] lg:bg-[linear-gradient(90deg,rgb(16_18_18/0.95)_0%,rgb(16_18_18/0.82)_42%,rgb(16_18_18/0.25)_100%)]" />

      <Container className="relative z-10 pb-16 pt-24 sm:pb-20 lg:pb-24 lg:pt-32">
        <div className="max-w-5xl">
          <Eyebrow theme="dark" className="animate-fade-in">
            Commercial &amp; Industrial Construction
          </Eyebrow>
          <h1
            id="hero-heading"
            className="animate-fade-up type-hero max-w-[19ch] text-paper"
          >
            Commercial Concrete, Asphalt Paving &amp; Metal Buildings in
            Oklahoma
          </h1>
          <p className="animate-fade-up mt-6 font-display text-2xl font-medium uppercase leading-tight text-accent-light sm:text-3xl lg:text-4xl">
            Building Oklahoma&apos;s Commercial Infrastructure
          </p>
          <p className="animate-fade-up animate-delay-100 mt-6 max-w-2xl text-base leading-relaxed text-[#e3e6e4] sm:text-lg">
            H&amp;H Construction delivers commercial concrete, asphalt paving,
            metal buildings, and roofing for general contractors, developers,
            municipalities, and property owners across Oklahoma.
          </p>
          <div className="animate-fade-up animate-delay-200 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact" variant="primary" arrow>
              Request a Bid
            </Button>
            <PhoneLink className={buttonClassName("outline")}>
              Call {siteConfig.phone}
            </PhoneLink>
            <Button href="/projects" variant="outline">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
