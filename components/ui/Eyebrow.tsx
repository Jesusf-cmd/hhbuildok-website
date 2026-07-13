import { type ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  theme?: "light" | "dark";
  className?: string;
};

export function Eyebrow({
  children,
  theme = "light",
  className = "",
}: EyebrowProps) {
  const colorClass = theme === "dark" ? "text-accent" : "text-accent";

  return (
    <p
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${colorClass} ${className}`}
    >
      {children}
    </p>
  );
}
