import { Container } from "@/components/ui/Container";

type TrustItem = {
  title: string;
  body: string;
  icon: "document" | "shield" | "check";
};

type TrustBlockProps = {
  items: readonly TrustItem[];
};

function TrustIcon({ icon }: { icon: TrustItem["icon"] }) {
  const className = "h-6 w-6 text-accent";

  if (icon === "document") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className={className}
        aria-hidden="true"
      >
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className={className}
        aria-hidden="true"
      >
        <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function TrustBlock({ items }: TrustBlockProps) {
  return (
    <section className="border-b border-line bg-warm">
      <Container>
        <ul className="grid sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="border-b border-line-strong py-8 last:border-b-0 sm:border-b-0 sm:border-l sm:px-8 sm:py-10 sm:first:border-l-0 sm:first:pl-0 lg:px-10"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-line-strong bg-paper">
                <TrustIcon icon={item.icon} />
              </div>
              <h2 className="type-h3 mt-5 text-graphite">
                {item.title}
              </h2>
              <p className="type-body mt-2">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
