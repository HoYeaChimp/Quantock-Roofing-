import { cn } from "@/lib/cn";

interface GradientMeshProps {
  className?: string;
  variant?: "light" | "dark" | "hero" | "cta";
}

/** Soft satin gradient wash — pure CSS, zero JS */
export function GradientMesh({ className, variant = "light" }: GradientMeshProps) {
  const backgrounds: Record<string, string> = {
    light:
      "radial-gradient(60% 50% at 20% 10%, var(--orb-1) 0%, transparent 70%), radial-gradient(50% 45% at 85% 20%, var(--orb-2) 0%, transparent 70%), radial-gradient(45% 40% at 60% 90%, var(--orb-3) 0%, transparent 70%)",
    hero:
      "radial-gradient(70% 60% at 30% 0%, var(--orb-1) 0%, transparent 70%), radial-gradient(55% 50% at 90% 30%, var(--orb-2) 0%, transparent 70%), radial-gradient(50% 45% at 50% 100%, var(--orb-3) 0%, transparent 70%)",
    dark:
      "radial-gradient(60% 55% at 25% 15%, var(--orb-1) 0%, transparent 70%), radial-gradient(55% 50% at 80% 75%, var(--orb-2) 0%, transparent 70%)",
    cta:
      "radial-gradient(70% 65% at 50% 0%, var(--orb-1) 0%, transparent 70%), radial-gradient(50% 50% at 15% 90%, var(--orb-2) 0%, transparent 70%), radial-gradient(40% 40% at 90% 80%, var(--orb-3) 0%, transparent 70%)",
  };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ background: backgrounds[variant], opacity: "var(--mesh-opacity)" }}
    />
  );
}
