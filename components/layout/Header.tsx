"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

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

  const onHero = !isScrolled && !isMenuOpen;
  const linkColor = onHero
    ? "text-surface/90 hover:text-surface"
    : "text-charcoal/80 hover:text-charcoal";
  const menuButtonColor = onHero
    ? "border-surface/40 text-surface"
    : "border-charcoal/20 text-charcoal";

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

          <div className="hidden items-center gap-8 lg:flex">
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
            <Button href="#contact" variant="primary" className="px-5 py-2.5">
              Request a Bid
            </Button>
          </div>

          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center border lg:hidden ${menuButtonColor}`}
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
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="py-6">
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
                  href="#contact"
                  className="inline-flex w-full items-center justify-center bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition-colors hover:bg-accent-hover"
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
