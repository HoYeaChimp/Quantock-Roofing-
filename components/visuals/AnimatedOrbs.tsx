import { cn } from "@/lib/cn";

interface AnimatedOrbsProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
}

/**
 * Faint drifting orbs (transform-only animation, GPU friendly).
 * Blur is applied once via static filter, never animated.
 */
export function AnimatedOrbs({ className, intensity = "medium" }: AnimatedOrbsProps) {
  const scale =
    intensity === "low" ? "opacity-50" : intensity === "high" ? "opacity-100" : "opacity-75";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", scale, className)}
    >
      <div
        className="animate-orb-1 absolute -top-[15%] -left-[10%] h-[55%] w-[55%] rounded-full blur-3xl"
        style={{ background: "var(--orb-1)" }}
      />
      <div
        className="animate-orb-2 absolute top-[30%] -right-[15%] h-[50%] w-[50%] rounded-full blur-3xl"
        style={{ background: "var(--orb-2)" }}
      />
      <div
        className="animate-orb-3 absolute -bottom-[20%] left-[25%] h-[45%] w-[45%] rounded-full blur-3xl"
        style={{ background: "var(--orb-3)" }}
      />
    </div>
  );
}
