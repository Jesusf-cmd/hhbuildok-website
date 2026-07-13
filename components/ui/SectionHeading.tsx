import { Eyebrow } from "@/components/ui/Eyebrow";

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
      {eyebrow ? <Eyebrow theme={theme}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`font-display text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${descriptionColor} ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
