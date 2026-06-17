import { cn } from "@/lib/cn";
import { GradientMesh } from "@/components/visuals/GradientMesh";
import { AnimatedOrbs } from "@/components/visuals/AnimatedOrbs";
import { GridPattern } from "@/components/visuals/GridPattern";
import { NoiseOverlay } from "@/components/visuals/NoiseOverlay";

interface PremiumBackgroundProps {
  variant?: "light" | "dark" | "hero" | "cta";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

/**
 * Layered Apple-inspired background:
 * satin gradient mesh + drifting orbs + faint grid + grain + spotlight.
 * pointer-events: none; text contrast preserved; reduced motion respected
 * via the global animation kill-switch in globals.css.
 */
export function PremiumBackground({
  variant = "light",
  intensity = "medium",
  className,
}: PremiumBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <GradientMesh variant={variant} />
      {intensity !== "low" && <AnimatedOrbs intensity={intensity} />}
      <GridPattern />
      {/* subtle radial spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 8%, rgba(255,255,255,0.6) 0%, transparent 70%)",
          opacity:
            variant === "dark" || variant === "cta"
              ? 0
              : "var(--spotlight-opacity)",
        }}
      />
      <NoiseOverlay />
    </div>
  );
}
