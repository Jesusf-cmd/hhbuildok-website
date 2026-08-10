import { EmailLink } from "@/components/ui/EmailLink";
import { PhoneLink } from "@/components/ui/PhoneLink";

/**
 * Persistent mobile Call / Email bar — the highest-converting contact pattern
 * on contractor sites. Hidden on desktop where the header phone is visible.
 */
export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 shadow-[0_-4px_20px_rgba(15,17,19,0.08)] backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <PhoneLink
          showIcon
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-3 text-sm font-semibold uppercase tracking-wider text-surface transition-colors hover:bg-accent-hover"
        >
          Call Now
        </PhoneLink>
        <EmailLink
          showIcon
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-border bg-surface px-3 text-sm font-semibold uppercase tracking-wider text-charcoal transition-colors hover:border-accent hover:text-accent"
        >
          Email Us
        </EmailLink>
      </div>
    </div>
  );
}
