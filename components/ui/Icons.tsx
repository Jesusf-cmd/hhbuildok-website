type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "il-arrow" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      className={className}
    >
      <path d="M3.5 10h12M11 5.5 15.5 10 11 14.5" />
    </svg>
  );
}

export function CheckIcon({ className = "il-check" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      className={className}
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}
