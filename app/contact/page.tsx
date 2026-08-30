import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { nap, serviceAreaCities } from "@/lib/site-data";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

export const metadata: Metadata = {
  title: "Contact H&H Construction",
  description:
    "Contact H&H Construction in Norman, OK. Call 405-476-5476, email logan@hhbuildok.com, or request a bid for commercial concrete, asphalt paving, or metal building work.",
  alternates: {
    canonical: "/contact",
  },
};

const bidChecklist = [
  "Project location and general scope",
  "Approximate size or quantities if you know them",
  "Plans, specs, or photos if you have them",
  "Target schedule or any hard deadline",
];

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Contact H&amp;H Construction
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Based in Norman and working commercial concrete, asphalt paving, and
            metal building projects across Oklahoma. Call, email, or send your
            project details below.
          </p>

          <address className="mt-10 max-w-xl border border-border bg-surface p-6 not-italic sm:p-8">
            <p className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
              {nap.name}
            </p>

            <p className="mt-5">
              <a
                href={nap.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base leading-relaxed text-charcoal transition-colors hover:text-accent"
              >
                {nap.addressLine1}
                <br />
                {nap.addressLine2}
              </a>
            </p>

            <p className="mt-5">
              <PhoneLink
                showIcon
                className="inline-flex items-center gap-2 text-lg font-semibold text-charcoal transition-colors hover:text-accent"
              />
            </p>

            <p className="mt-3">
              <EmailLink
                showIcon
                className="inline-flex items-center gap-2 text-base text-charcoal transition-colors hover:text-accent"
              />
            </p>

            <p className="mt-5 text-sm leading-relaxed text-text-muted">
              <span className="font-semibold uppercase tracking-wider text-charcoal">
                Hours
              </span>
              <br />
              {nap.hoursLabel}
            </p>

            <p className="mt-6">
              <a
                href={nap.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
              >
                Get Directions
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </address>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Request a Bid
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Tell us about your commercial concrete, asphalt, or metal
                building project. Our team reviews the scope and follows up to
                discuss next steps.
              </p>

              <h3 className="mt-10 font-heading text-lg font-bold uppercase text-charcoal">
                What to Include
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                The more of this you can share up front, the faster we can come
                back with something useful.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {bidChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/90"
                  >
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      &#9632;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-heading text-lg font-bold uppercase text-charcoal">
                Where We Work
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Based in Norman and working throughout Oklahoma, including{" "}
                {serviceAreaCities.slice(0, 6).join(", ")}, and beyond. If your
                city is not listed, ask — we evaluate projects across the state.
              </p>
            </div>

            <div className="border border-border bg-surface-muted p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                Send Your Project Details
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
