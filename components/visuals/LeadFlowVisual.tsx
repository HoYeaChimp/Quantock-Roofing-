import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/** Visualises the enquiry → advice → quote → booked flow */
export function LeadFlowVisual({ className }: { className?: string }) {
  const steps: { icon: IconName; label: string }[] = [
    { icon: "chat", label: "Enquiry" },
    { icon: "users", label: "Honest advice" },
    { icon: "file-text", label: "Clear quote" },
    { icon: "check", label: "Booked" },
  ];

  return (
    <div
      className={cn("flex flex-wrap items-center justify-center gap-3 sm:gap-4", className)}
      aria-hidden="true"
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-3 sm:gap-4">
          <div className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name={step.icon} className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <Icon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
}
