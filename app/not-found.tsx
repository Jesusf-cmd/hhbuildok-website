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
      <section className="tone-dark">
        <Container className="flex min-h-[60vh] flex-col justify-center py-20 lg:py-28">
          <p className="font-display text-[clamp(4.5rem,14vw,10rem)] font-medium leading-none text-accent-light">
            404
          </p>
          <h1 className="type-h1 mt-6 text-paper">
            Page Not Found
          </h1>
          <p className="type-lead mt-6 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Try one of the links below.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="primary" arrow>
              Back to Home
            </Button>
            <Button href="/services" variant="outline">
              View Services
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
