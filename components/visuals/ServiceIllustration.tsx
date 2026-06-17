import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

interface ServiceIllustrationProps {
  icon: IconName;
  className?: string;
}

/** Lightweight per-service illustration tile — gradient + rings + icon */
export function ServiceIllustration({ icon, className }: ServiceIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, var(--surface-elevated) 0%, var(--muted) 100%)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full text-primary"
        viewBox="0 0 400 250"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="200" cy="125" r="70" stroke="currentColor" strokeOpacity="0.12" />
        <circle cx="200" cy="125" r="105" stroke="currentColor" strokeOpacity="0.08" />
        <circle cx="200" cy="125" r="140" stroke="currentColor" strokeOpacity="0.05" />
      </svg>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-surface text-primary shadow-[var(--shadow-soft)]">
        <Icon name={icon} className="h-8 w-8" />
      </span>
    </div>
  );
}
