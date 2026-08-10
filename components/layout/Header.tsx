"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const linkColor = "text-charcoal/80 hover:text-charcoal";
  const menuButtonColor = "border-charcoal/20 text-charcoal";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "border-b border-border bg-surface/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          <Logo priority />

          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors ${linkColor}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <PhoneLink
              showIcon
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:text-accent"
            >
              {siteConfig.phone}
            </PhoneLink>
            <Button href="/contact" variant="primary" className="px-5 py-2.5">
              Request a Bid
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <PhoneLink
              showIcon
              className="inline-flex h-11 min-w-11 items-center justify-center gap-1.5 border border-accent bg-accent px-3 text-surface transition-colors hover:bg-accent-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wider">
                Call
              </span>
            </PhoneLink>
            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center border ${menuButtonColor}`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                ) : (
                  <path
                    d="M3 6H17M3 10H17M3 14H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="py-6">
            <div className="mb-6 grid grid-cols-2 gap-3">
              <PhoneLink
                showIcon
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-4 text-sm font-semibold uppercase tracking-wider text-surface"
              >
                Call Now
              </PhoneLink>
              <EmailLink
                showIcon
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-4 text-sm font-semibold uppercase tracking-wider text-charcoal"
              >
                Email Us
              </EmailLink>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-base font-medium uppercase tracking-wider text-charcoal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center bg-charcoal px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors hover:bg-charcoal-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request a Bid
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
