import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
  icon?: IconName;
}

export function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-video",
  icon = "home",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-gradient-to-br from-muted/60 to-surface p-6 text-center",
        aspect,
        className
      )}
      role="img"
      aria-label={`Image slot: ${label}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-muted-foreground shadow-[var(--shadow-soft)]">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      <p className="text-xs text-muted-foreground/80">
        Real project image to be added.
      </p>
    </div>
  );
}
