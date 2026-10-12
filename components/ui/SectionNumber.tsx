type SectionNumberProps = {
  value: string;
  className?: string;
};

export function SectionNumber({ value, className = "" }: SectionNumberProps) {
  return (
    <p
      aria-hidden="true"
      className={`il-num mb-5 text-[2.75rem] sm:text-[3.5rem] ${className}`}
    >
      {value}
    </p>
  );
}
