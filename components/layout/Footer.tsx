import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted">
              Commercial concrete construction, asphalt paving, and metal
              buildings & roofing across Oklahoma.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-charcoal">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-charcoal">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            <a
              href={`https://${siteConfig.domain}`}
              className="transition-colors hover:text-charcoal"
            >
              {siteConfig.domain}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
