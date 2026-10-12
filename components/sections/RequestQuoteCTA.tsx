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
      className="tone-dark relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 95px, #fff 95px, #fff 96px), repeating-linear-gradient(0deg, transparent, transparent 95px, #fff 95px, #fff 96px)",
        }}
      />

      <Container className="band relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="contact-heading"
              className="type-cta text-paper"
            >
              Ready to Request a Quote?
            </h2>
            <p className="type-lead mt-6 max-w-lg">
              Tell us about your commercial concrete, asphalt, or metal building
              project. Our team will review your scope and follow up to discuss
              next steps.
            </p>

            <address className="mt-10 max-w-md border-t border-white/15 pt-8 text-sm not-italic leading-relaxed text-on-dark-muted">
              <p className="type-label text-paper">
                {nap.name}
              </p>
              <p className="mt-3">
                {nap.addressLine1}
                <br />
                {nap.addressLine2}
              </p>
              <p className="mt-3">
                <PhoneLink className="inline-flex min-h-11 items-center font-semibold text-paper transition-colors hover:text-accent-light" />
              </p>
              <p>
                <EmailLink className="inline-flex min-h-11 items-center break-all font-semibold text-paper transition-colors hover:text-accent-light" />
              </p>
            </address>
          </div>

          <div className="tone-light">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
