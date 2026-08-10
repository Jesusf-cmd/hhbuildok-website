import type { ReactNode } from "react";
import { phoneHref, siteConfig } from "@/lib/site-data";

type PhoneLinkProps = {
  className?: string;
  children?: ReactNode;
  /** Show a phone icon before the label. */
  showIcon?: boolean;
};

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 4.8c.4-.4.9-.6 1.4-.5l3 .6c.5.1.9.5 1 1l.7 3c.1.5-.1 1-.5 1.3l-1.4 1.1a12.4 12.4 0 0 0 5.5 5.5l1.1-1.4c.3-.4.8-.6 1.3-.5l3 .7c.5.1.9.5 1 1l.6 3c.1.5-.1 1-.5 1.4l-1.5 1.5c-.4.4-1 .6-1.6.5C10.8 21.5 2.5 13.2 1.1 4.4c-.1-.6.1-1.2.5-1.6L3.1 1.3c.4-.4.9-.6 1.4-.5l2.1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneLink({
  className = "",
  children,
  showIcon = false,
}: PhoneLinkProps) {
  return (
    <a
      href={phoneHref}
      className={className}
      aria-label={`Call H&H Construction at ${siteConfig.phone}`}
    >
      {showIcon ? <PhoneIcon className="h-4 w-4 shrink-0" /> : null}
      {children ?? siteConfig.phone}
    </a>
  );
}
