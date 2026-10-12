import Link from "next/link";
import { navLinks, nap, siteConfig, services, priorityCities } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

const columnHeading =
  "mb-5 font-sans text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-on-dark-muted";
const footerLink =
  "inline-flex min-h-11 items-center text-sm text-[#e3e6e4] transition-colors hover:text-accent-light";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-20 text-paper lg:pb-0">
      <Container className="pb-10 pt-16 lg:pt-24">
        <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16 lg:pb-20">
          <div>
            <Logo plate />
          </div>
          <p className="max-w-4xl font-display text-[1.75rem] font-medium uppercase leading-[1.02] tracking-[-0.01em] text-paper sm:text-4xl lg:text-[3.25rem]">
            Commercial concrete construction, asphalt paving, and metal
            buildings & roofing across Oklahoma.
          </p>
        </div>

        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h3 className={columnHeading}>
              Navigation
            </h3>
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnHeading}>
              Services
            </h3>
            <ul className="flex flex-col">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className={footerLink}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnHeading}>
              Service Area
            </h3>
            <ul className="flex flex-col">
              {priorityCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-area/${city.slug}`}
                    className={footerLink}
                  >
                    {city.name}, OK
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-area" className={footerLink}>
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={columnHeading}>
              Contact
            </h3>
            <address className="flex flex-col gap-4 text-sm not-italic leading-relaxed text-[#e3e6e4]">
              <div>
                <p className="font-semibold text-paper">{nap.name}</p>
                <a
                  href={nap.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block transition-colors hover:text-accent-light"
                >
                  {nap.addressLine1}
                  <br />
                  {nap.addressLine2}
                </a>
              </div>
              <p>
                <PhoneLink className="inline-flex min-h-11 items-center transition-colors hover:text-accent-light" />
              </p>
              <p>
                <EmailLink className="inline-flex min-h-11 items-center break-all transition-colors hover:text-accent-light" />
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-8 text-xs uppercase tracking-[0.08em] text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            <a
              href={siteConfig.url}
              className="transition-colors hover:text-paper"
            >
              {siteConfig.domain}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
