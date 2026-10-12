import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  id?: string;
  /** Index pages use this as their page heading; sections keep the h2 default. */
  as?: "h1" | "h2";
  /** Split places the description beside the title on large screens. */
  layout?: "stack" | "split";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  id,
  as: Heading = "h2",
  layout = "stack",
}: SectionHeadingProps) {
  const titleColor = theme === "dark" ? "text-paper" : "text-graphite";
  const descriptionColor =
    theme === "dark" ? "text-on-dark-muted" : "text-text-muted";
  const titleSize = Heading === "h1" ? "type-h1" : "type-h2";

  if (layout === "split") {
    return (
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
        <div>
          {eyebrow ? <Eyebrow theme={theme}>{eyebrow}</Eyebrow> : null}
          <Heading id={id} className={`${titleSize} ${titleColor}`}>
            {title}
          </Heading>
        </div>
        {description && (
          <p
            className={`max-w-xl text-base leading-relaxed sm:text-[1.0625rem] sm:leading-[1.8] ${descriptionColor}`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const descriptionClass = align === "center" ? "mx-auto" : "";
  const eyebrowClass = align === "center" ? "justify-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <Eyebrow theme={theme} className={eyebrowClass}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading id={id} className={`${titleSize} ${titleColor}`}>
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-[1.0625rem] sm:leading-[1.8] ${descriptionColor} ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
