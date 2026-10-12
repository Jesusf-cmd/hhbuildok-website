import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/Icons";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-dark"
  | "dark";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  arrow?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "il-button-primary",
  secondary: "il-button-light",
  outline: "il-button-outline-light",
  "outline-dark": "il-button-outline-dark",
  dark: "il-button-dark",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className = "",
) {
  return `il-button ${variantStyles[variant]} ${className}`.trim();
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  arrow = false,
}: ButtonProps) {
  const classes = buttonClassName(variant, className);
  const content = (
    <>
      {children}
      {arrow ? <ArrowIcon /> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`group ${classes}`}>
      {content}
    </Link>
  );
}
