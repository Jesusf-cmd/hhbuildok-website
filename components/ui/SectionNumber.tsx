type SectionNumberProps = {
  value: string;
  className?: string;
};

export function SectionNumber({ value, className = "" }: SectionNumberProps) {
  return (
    <p
      aria-hidden="true"
      className={`mb-4 font-display text-6xl font-light leading-none tracking-tight text-charcoal/15 sm:text-7xl ${className}`}
    >
      {value}
    </p>
  );
}
