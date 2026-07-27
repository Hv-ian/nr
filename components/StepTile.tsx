export default function StepTile({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent-dark">
        {index}
      </span>
      <p className="mt-1.5 font-semibold">{title}</p>
    </div>
  );
}
