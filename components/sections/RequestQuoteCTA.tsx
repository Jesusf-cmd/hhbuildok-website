import { siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function RequestQuoteCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-accent"
    >
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 48px, #000 48px, #000 49px), repeating-linear-gradient(0deg, transparent, transparent 48px, #000 48px, #000 49px)",
        }}
      />

      <Container className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl lg:text-5xl"
          >
            Ready to Request a Quote?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-surface/90 sm:text-lg">
            Tell us about your commercial concrete, asphalt, or metal building
            project. Our team will review your scope and follow up to discuss
            next steps.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Request a Bid
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center border border-surface/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors hover:border-surface hover:bg-surface/10"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
