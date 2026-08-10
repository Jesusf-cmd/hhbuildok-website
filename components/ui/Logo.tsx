import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/hh-construction-logo.png"
        alt="H&H Construction logo"
        width={487}
        height={633}
        priority={priority}
        className="logo-mark h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
