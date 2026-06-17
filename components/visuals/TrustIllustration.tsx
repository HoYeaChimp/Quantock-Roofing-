import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Abstract trust visual — shield in layered rings */
export function TrustIllustration({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative mx-auto flex h-56 w-56 items-center justify-center", className)}
    >
      <div className="glass absolute inset-0 rounded-full opacity-40" />
      <div className="glass absolute inset-6 rounded-full opacity-60" />
      <div className="glass absolute inset-12 rounded-full opacity-80" />
      <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-[var(--shadow-premium)]">
        <Icon name="shield" className="h-10 w-10" />
      </span>
    </div>
  );
}
