import Link from "next/link";
import { navLinks, nap, siteConfig, services, priorityCities } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-6">
          <div className="md:col-span-3 lg:col-span-2">
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
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-muted transition-colors hover:text-charcoal"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-charcoal">
              Service Area
            </h3>
            <ul className="flex flex-col gap-3">
              {priorityCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-area/${city.slug}`}
                    className="text-sm text-text-muted transition-colors hover:text-charcoal"
                  >
                    {city.name}, OK
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-area"
                  className="text-sm text-text-muted transition-colors hover:text-charcoal"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-charcoal">
              Contact
            </h3>
            <address className="flex flex-col gap-3 text-sm not-italic text-text-muted">
              <div>
                <p className="font-medium text-charcoal">{nap.name}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${nap.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block transition-colors hover:text-charcoal"
                >
                  {nap.addressLine1}
                  <br />
                  {nap.addressLine2}
                </a>
              </div>
              <p>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {nap.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {nap.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            <a
              href={siteConfig.url}
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
