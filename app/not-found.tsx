import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageShell>
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-heading text-3xl font-bold uppercase text-charcoal sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Try one of the links below.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/services" variant="outline-dark">
            View Services
          </Button>
        </div>
      </Container>
    </PageShell>
  );
}
