type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const descriptionClass = align === "center" ? "mx-auto" : "";
  const titleColor = theme === "dark" ? "text-surface" : "text-charcoal";
  const descriptionColor =
    theme === "dark" ? "text-surface/80" : "text-text-muted";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${descriptionColor} ${descriptionClass} max-w-2xl`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
