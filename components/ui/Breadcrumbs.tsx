import Link from "next/link";
import { siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/Container";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-graphite pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Container>
        <ol className="flex flex-wrap items-center gap-x-3 py-1 text-xs text-on-dark-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="text-accent-light">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="inline-flex min-h-11 items-center text-paper">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
