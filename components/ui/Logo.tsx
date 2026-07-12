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
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/hh-construction-logo.png"
        alt="H&H Construction logo"
        width={160}
        height={112}
        priority={priority}
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
