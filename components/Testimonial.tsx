import type { TestimonialItem as TestimonialType } from "@/lib/translations";

export default function Testimonial({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-border bg-background p-6">
      <svg
        viewBox="0 0 32 24"
        fill="none"
        className="h-7 w-8 text-accent/25"
        aria-hidden
      >
        <path
          d="M13.6 0 8 12H13.6V24H0V12.8L5.6 0H13.6ZM32 0L26.4 12H32V24H18.4V12.8L24 0H32Z"
          fill="currentColor"
        />
      </svg>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
        {testimonial.quote}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent-dark">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
