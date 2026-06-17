import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface AppleDepthCardsProps {
  className?: string;
  children: ReactNode;
}

/**
 * Layered glass stack — gives any content an Apple-style sense of depth.
 * Two offset translucent layers sit behind the real card.
 */
export function AppleDepthCards({ className, children }: AppleDepthCardsProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="glass absolute inset-0 -rotate-2 scale-[0.97] rounded-[2rem] opacity-50"
      />
      <div
        aria-hidden="true"
        className="glass absolute inset-0 rotate-1 scale-[0.985] rounded-[2rem] opacity-70"
      />
      <div className="glass relative rounded-[2rem] p-7 shadow-[var(--shadow-premium)] sm:p-9">
        {children}
      </div>
    </div>
  );
}
