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
  const colorClass = theme === "dark" ? "text-on-dark-muted" : "text-accent";
  const ruleClass = theme === "dark" ? "bg-accent-light" : "bg-accent";

  return (
    <p
      className={`type-eyebrow mb-4 flex items-center gap-3 ${colorClass} ${className}`}
    >
      <span aria-hidden="true" className={`h-px w-8 shrink-0 ${ruleClass}`} />
      {children}
    </p>
  );
}
