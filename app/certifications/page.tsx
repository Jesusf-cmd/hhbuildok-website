import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
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
    <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="border border-line border-t-4 border-t-accent bg-white p-6 sm:p-8">
          <dt className="type-label text-muted">
            {item.label}
          </dt>
          <dd className="mt-3 font-display text-2xl font-medium uppercase leading-tight text-graphite">
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

      <PageHero eyebrow="Prequalification" title="Safety, Licensing & Bonding">
        <p className="type-lead mt-6 max-w-2xl">
          The documentation general contractors, municipalities, and school districts request before awarding work.
        </p>
      </PageHero>

      {safety.length > 0 ? (
        <section className="bg-paper">
          <Container className="band">
            <h2 className="type-h2 text-graphite">
              Safety Record
            </h2>
            <DefinitionGrid items={safety} />
          </Container>
        </section>
      ) : null}

      {bonding.length > 0 ? (
        <section className="bg-warm">
          <Container className="band">
            <h2 className="type-h2 text-graphite">
              Bonding Capacity
            </h2>
            <DefinitionGrid items={bonding} />
          </Container>
        </section>
      ) : null}

      {insurance.length > 0 ? (
        <section className="bg-paper">
          <Container className="band">
            <h2 className="type-h2 text-graphite">
              Insurance
            </h2>
            <DefinitionGrid items={insurance} />
          </Container>
        </section>
      ) : null}

      {lists.map((group) => (
        <section key={group.title} className="bg-warm">
          <Container className="band">
            <h2 className="type-h2 text-graphite">
              {group.title}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="border border-line bg-white p-6 sm:p-8"
                >
                  <p className="type-h3 text-graphite">
                    {item.label}
                  </p>
                  {item.value ? (
                    <p className="mt-2 text-sm text-graphite">{item.value}</p>
                  ) : null}
                  {item.note ? (
                    <p className="mt-2 text-sm text-muted">{item.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      {!hasPublishableCredentials ? (
        <section className="bg-paper">
          <Container className="band">
            <div className="max-w-3xl border border-line border-t-4 border-t-accent bg-white p-7 sm:p-10">
              <h2 className="type-h2-sm text-graphite">
                Documentation Available on Request
              </h2>
              <p className="type-prose mt-5">
                {nap.name} carries the licensing and insurance required for
                commercial and public work in Oklahoma. Certificates of
                insurance, licensing details, and safety documentation are
                provided directly during prequalification — contact us and we
                will send what your process requires.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" arrow>
                  Request Documentation
                </Button>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title="Running a Prequalification?"
        actions={
          <Button href="/contact" variant="secondary" arrow>
            Contact Us
          </Button>
        }
      >
        <p>
          Send us your forms and requirements and our team will return the
          documentation your process calls for.
        </p>
      </CtaBand>
    </PageShell>
  );
}
