import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { credentials, hasPublishableCredentials } from "@/lib/credentials-data";
import { nap } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Safety, Licensing & Bonding",
  description:
    "H&H Construction's safety record, licensing, insurance, and bonding capacity for general contractors, municipalities, and school districts running prequalification.",
  alternates: {
    canonical: "/certifications",
  },
  // Stays out of the index until real credentials are published.
  ...(hasPublishableCredentials ? {} : { robots: { index: false, follow: true } }),
};

type Row = { label: string; value: string };

function rows(entries: [string, string | undefined][]): Row[] {
  return entries.flatMap(([label, value]) => (value ? [{ label, value }] : []));
}

function DefinitionGrid({ items }: { items: Row[] }) {
  return (
    <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="border border-border bg-surface p-6">
          <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            {item.label}
          </dt>
          <dd className="mt-2 font-heading text-xl font-bold uppercase text-charcoal">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function CertificationsPage() {
  const safety = rows([
    ["Experience Modification Rate", credentials.emr],
    ["Total Recordable Incident Rate", credentials.trir],
  ]);

  const bonding = rows([
    ["Single project capacity", credentials.bonding?.single],
    ["Aggregate capacity", credentials.bonding?.aggregate],
    ["Surety", credentials.bonding?.surety],
  ]);

  const insurance = rows([
    ["General liability", credentials.insurance?.generalLiability],
    ["Auto liability", credentials.insurance?.autoLiability],
    ["Umbrella", credentials.insurance?.umbrella],
    ["Workers' compensation", credentials.insurance?.workersComp],
  ]);

  const lists: { title: string; items: typeof credentials.licenses }[] = [
    { title: "Licenses", items: credentials.licenses },
    { title: "Certifications & Training", items: credentials.certifications },
    { title: "Association Memberships", items: credentials.associations },
  ].filter((group) => group.items.length > 0);

  return (
    <PageShell>
      <Breadcrumbs
        items={[{ label: "Safety & Credentials", href: "/certifications" }]}
      />

      <section className="bg-off-white-muted">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Prequalification"
            title="Safety, Licensing & Bonding"
            description="The documentation general contractors, municipalities, and school districts request before awarding work."
          />
        </Container>
      </section>

      {safety.length > 0 ? (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              Safety Record
            </h2>
            <DefinitionGrid items={safety} />
          </Container>
        </section>
      ) : null}

      {bonding.length > 0 ? (
        <section className="bg-off-white-muted">
          <Container className="py-16 lg:py-20">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              Bonding Capacity
            </h2>
            <DefinitionGrid items={bonding} />
          </Container>
        </section>
      ) : null}

      {insurance.length > 0 ? (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              Insurance
            </h2>
            <DefinitionGrid items={insurance} />
          </Container>
        </section>
      ) : null}

      {lists.map((group) => (
        <section key={group.title} className="bg-off-white-muted">
          <Container className="py-16 lg:py-20">
            <h2 className="font-heading text-2xl font-bold uppercase text-charcoal sm:text-3xl">
              {group.title}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="border border-border bg-surface p-6"
                >
                  <p className="font-heading text-lg font-bold uppercase text-charcoal">
                    {item.label}
                  </p>
                  {item.value ? (
                    <p className="mt-2 text-sm text-charcoal/80">{item.value}</p>
                  ) : null}
                  {item.note ? (
                    <p className="mt-2 text-sm text-text-muted">{item.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      {!hasPublishableCredentials ? (
        <section className="bg-surface">
          <Container className="py-16 lg:py-20">
            <div className="max-w-2xl border border-border bg-surface-muted p-8">
              <h2 className="font-heading text-xl font-bold uppercase text-charcoal sm:text-2xl">
                Documentation Available on Request
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {nap.name} carries the licensing and insurance required for
                commercial and public work in Oklahoma. Certificates of
                insurance, licensing details, and safety documentation are
                provided directly during prequalification — contact us and we
                will send what your process requires.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Request Documentation
                </Button>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-accent">
        <Container className="py-16 text-center lg:py-20">
          <h2 className="font-heading text-3xl font-bold uppercase text-surface sm:text-4xl">
            Running a Prequalification?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-surface/90 sm:text-lg">
            Send us your forms and requirements and our team will return the
            documentation your process calls for.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
