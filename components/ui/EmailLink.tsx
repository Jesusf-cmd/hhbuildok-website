import type { ReactNode } from "react";
import { emailHref, siteConfig } from "@/lib/site-data";

type EmailLinkProps = {
  className?: string;
  children?: ReactNode;
  /** Show an envelope icon before the label. */
  showIcon?: boolean;
};

function EmailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailLink({
  className = "",
  children,
  showIcon = false,
}: EmailLinkProps) {
  return (
    <a
      href={emailHref}
      className={className}
      aria-label={`Email H&H Construction at ${siteConfig.email}`}
    >
      {showIcon ? <EmailIcon className="h-4 w-4 shrink-0" /> : null}
      {children ?? siteConfig.email}
    </a>
  );
}
