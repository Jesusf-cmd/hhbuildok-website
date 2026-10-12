import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
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

const contactLinkClassName =
  "inline-flex min-h-11 items-center gap-3 text-paper transition-colors hover:text-accent-light";

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <PageHero
        eyebrow="Contact"
        title="Contact H&H Construction"
        framed={false}
        media={
          <address className="border border-white/15 border-t-4 border-t-accent bg-graphite-2 p-7 not-italic sm:p-10">
            <p className="type-h2-sm text-paper">
              {nap.name}
            </p>

            <p className="mt-6">
              <a
                href={nap.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base leading-relaxed text-[#e3e6e4] transition-colors hover:text-accent-light"
              >
                {nap.addressLine1}
                <br />
                {nap.addressLine2}
              </a>
            </p>

            <div className="mt-6 border-t border-white/15 pt-4">
              <p>
                <PhoneLink
                  showIcon
                  className={`${contactLinkClassName} font-display text-2xl font-medium tracking-[0.01em]`}
                />
              </p>

              <p className="mt-1">
                <EmailLink
                  showIcon
                  className={`${contactLinkClassName} break-all text-base`}
                />
              </p>
            </div>

            <p className="mt-6 border-t border-white/15 pt-6 text-sm leading-relaxed text-on-dark-muted">
              <span className="type-label text-paper">
                Hours
              </span>
              <br />
              {nap.hoursLabel}
            </p>

            <p className="mt-4">
              <a
                href={nap.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="il-link"
              >
                Get Directions
                <ArrowIcon />
              </a>
            </p>
          </address>
        }
      >
        <p className="type-lead mt-6 max-w-2xl">
          Based in Norman and working commercial concrete, asphalt paving, and
          metal building projects across Oklahoma. Call, email, or send your
          project details below.
        </p>
      </PageHero>

      <section className="bg-warm">
        <Container className="band">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
            <div className="tone-dark p-7 sm:p-10">
              <h2 className="type-h2-sm text-paper">
                Request a Bid
              </h2>
              <p className="type-body mt-4">
                Tell us about your commercial concrete, asphalt, or metal
                building project. Our team reviews the scope and follows up to
                discuss next steps.
              </p>

              <h3 className="type-h3 mt-10 border-t border-white/15 pt-8 text-paper">
                What to Include
              </h3>
              <p className="type-body mt-3">
                The more of this you can share up front, the faster we can come
                back with something useful.
              </p>
              <ul className="il-checklist il-checklist-ruled mt-6">
                {bidChecklist.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="type-h3 mt-10 text-paper">
                Where We Work
              </h3>
              <p className="type-body mt-3">
                Based in Norman and working throughout Oklahoma, including{" "}
                {serviceAreaCities.slice(0, 6).join(", ")}, and beyond. If your
                city is not listed, ask — we evaluate projects across the state.
              </p>
            </div>

            <div>
              <h2 className="type-h2-sm mb-6 text-graphite">
                Send Your Project Details
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
