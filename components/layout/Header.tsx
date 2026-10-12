"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";
import { Button, buttonClassName } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { EmailLink } from "@/components/ui/EmailLink";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper/[0.97] transition-shadow duration-300 ${
        isScrolled || isMenuOpen
          ? "border-line shadow-[0_8px_24px_rgb(23_26_26/0.08)]"
          : "border-line/70"
      }`}
    >
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo priority />

          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="il-nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <PhoneLink
              showIcon
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-graphite transition-colors hover:text-accent"
            >
              {siteConfig.phone}
            </PhoneLink>
            <Button href="/contact" variant="primary">
              Request a Bid
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <PhoneLink
              showIcon
              className="inline-flex h-11 min-w-11 items-center justify-center gap-2 border border-accent bg-accent px-3.5 text-paper transition-colors hover:bg-accent-hover"
            >
              <span className="text-xs font-bold uppercase tracking-[0.08em]">
                Call
              </span>
            </PhoneLink>
            <button
              ref={menuButtonRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-line-strong text-graphite transition-colors hover:border-graphite"
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
          className="tone-dark fixed inset-x-0 bottom-0 top-20 overflow-y-auto overscroll-contain lg:hidden"
        >
          <Container className="py-8">
            <div className="mb-8 grid grid-cols-2 gap-3">
              <PhoneLink
                showIcon
                className={buttonClassName("primary", "w-full")}
              >
                Call Now
              </PhoneLink>
              <EmailLink
                showIcon
                className={buttonClassName("outline", "w-full")}
              >
                Email Us
              </EmailLink>
            </div>
            <ul className="flex flex-col border-t border-white/15">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-white/15">
                  <Link
                    href={link.href}
                    className="group flex min-h-16 items-center justify-between gap-4 py-3 font-display text-[1.75rem] font-medium uppercase leading-none text-paper transition-colors hover:text-accent-light"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <ArrowIcon className="il-arrow h-5 w-5 text-accent-light" />
                  </Link>
                </li>
              ))}
              <li className="pt-8">
                <Link
                  href="/contact"
                  className={buttonClassName("primary", "w-full")}
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
