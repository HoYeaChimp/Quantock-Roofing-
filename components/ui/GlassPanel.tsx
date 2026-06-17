import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

/** Frosted translucent surface — Apple-style layered material */
export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div className={cn("glass rounded-3xl shadow-[var(--shadow-soft)]", className)}>
      {children}
    </div>
  );
}
