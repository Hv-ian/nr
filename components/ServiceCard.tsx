import Link from "next/link";
import type { ServiceItem } from "@/lib/translations";

export default function ServiceCard({
  service,
  ctaLabel,
}: {
  service: ServiceItem;
  ctaLabel: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{service.title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {service.features.length > 0 && (
          <ul className="mt-5 flex flex-col gap-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 h-4 w-4 flex-none text-accent"
                >
                  <path
                    d="M4 10.5 8 14.5 16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href={`/contact?service=${service.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
