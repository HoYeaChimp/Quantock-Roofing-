import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

/**
 * Main content wrapper:
 * - id for the skip link
 * - top padding clears the fixed header
 * - bottom padding clears the sticky mobile CTA bar
 */
export function PageShell({ children, className }: PageShellProps) {
  return (
    <main
      id="main-content"
      className={cn("pb-24 md:pb-0", className)}
    >
      {children}
    </main>
  );
}
