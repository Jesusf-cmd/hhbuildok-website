import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-dark";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-surface hover:bg-accent-hover border border-accent",
  secondary:
    "bg-surface text-charcoal hover:bg-off-white-muted border border-border",
  outline:
    "bg-transparent text-surface border border-surface/70 hover:border-surface hover:bg-surface/10",
  "outline-dark":
    "bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal hover:bg-charcoal/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
