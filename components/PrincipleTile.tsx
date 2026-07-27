import type { PrincipleItem } from "@/lib/translations";

export default function PrincipleTile({ principle }: { principle: PrincipleItem }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 3 4 6.5v5c0 4.5 3.2 8.2 8 9.5 4.8-1.3 8-5 8-9.5v-5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="mt-4 font-semibold">{principle.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {principle.description}
      </p>
    </div>
  );
}
