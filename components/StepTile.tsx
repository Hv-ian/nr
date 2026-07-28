export default function StepTile({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-6">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent-dark">
        {index}
      </span>
      <p className="min-w-0 flex-1 break-words font-semibold">{title}</p>
    </div>
  );
}
