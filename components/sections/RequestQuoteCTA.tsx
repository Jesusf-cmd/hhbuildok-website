import { nap } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

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

          <address className="mx-auto mt-8 max-w-md text-sm not-italic leading-relaxed text-surface/90">
            <p className="font-semibold uppercase tracking-wider text-surface">
              {nap.name}
            </p>
            <p className="mt-2">
              {nap.addressLine1}
              <br />
              {nap.addressLine2}
            </p>
            <p className="mt-2">
              <PhoneLink className="underline-offset-2 transition-colors hover:text-surface hover:underline" />
            </p>
            <p>
              <EmailLink className="underline-offset-2 transition-colors hover:text-surface hover:underline" />
            </p>
          </address>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
