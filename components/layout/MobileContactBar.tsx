import { EmailLink } from "@/components/ui/EmailLink";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { buttonClassName } from "@/components/ui/Button";

/**
 * Persistent mobile Call / Email bar — the highest-converting contact pattern
 * on contractor sites. Hidden on desktop where the header phone is visible.
 */
export function MobileContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/[0.97] shadow-[0_-8px_24px_rgb(23_26_26/0.1)] backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <PhoneLink
          showIcon
          className={buttonClassName("primary", "w-full px-3")}
        >
          Call Now
        </PhoneLink>
        <EmailLink
          showIcon
          className={buttonClassName("outline-dark", "w-full bg-paper px-3")}
        >
          Email Us
        </EmailLink>
      </div>
    </div>
  );
}
