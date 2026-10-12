import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** Seats the mark on a paper plate so its graphite strokes read on dark surfaces. */
  plate?: boolean;
};

export function Logo({
  className = "",
  priority = false,
  plate = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex min-w-11 shrink-0 items-center justify-center ${plate ? "bg-paper p-2.5" : ""} ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/hh-construction-logo.png"
        alt="H&H Construction logo"
        width={487}
        height={633}
        priority={priority}
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
