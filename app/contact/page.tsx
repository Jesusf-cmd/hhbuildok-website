import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { nap, serviceAreaCities } from "@/lib/site-data";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

export const metadata: Metadata = {
  title: "Contact H&H Construction",
  description:
    "Request a bid for commercial concrete, asphalt paving, or metal building work in Oklahoma. Call 405-476-5476 or send your project scope to H&H Construction in Norman, OK.",
  alternates: {
    canonical: "/contact",
  },
};

const bidChecklist = [
  "Project location, or the general area if the site is not final",
  "Scope and approximate quantities — square footage, tonnage, or building size",
  "Plans, specs, or a bid package if you have them",
  "Target schedule, including any hard completion date",
  "Delivery method and whether prevailing wage applies",
];

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Request a Bid"
            description="Tell us about your commercial concrete, asphalt, or metal building project. Our team reviews the scope and follows up to discuss next steps."
          />
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Reach Us Directly
              </h2>

              <address className="mt-8 text-base not-italic leading-relaxed text-charcoal/90">
                <p className="font-heading text-lg font-bold uppercase text-charcoal">
                  {nap.name}
                </p>
                <p className="mt-3 text-text-muted">
                  {nap.addressLine1}
                  <br />
                  {nap.addressLine2}
                </p>
                <p className="mt-4">
                  <PhoneLink
                    showIcon
                    className="inline-flex items-center gap-2 font-semibold text-charcoal transition-colors hover:text-accent"
                  />
                </p>
                <p className="mt-2">
                  <EmailLink
                    showIcon
                    className="inline-flex items-center gap-2 text-charcoal transition-colors hover:text-accent"
                  />
                </p>
              </address>

              <p className="mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${nap.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  Get Directions
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </p>

              <h2 className="mt-12 font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                What to Include
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
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

              <h2 className="mt-12 font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
                Where We Work
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
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
