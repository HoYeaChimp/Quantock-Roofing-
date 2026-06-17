import { cn } from "@/lib/cn";

interface GridPatternProps {
  className?: string;
}

/** Faint engineering grid — a single SVG pattern */
export function GridPattern({ className }: GridPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ opacity: "var(--grid-opacity)" }}
    >
      <defs>
        <pattern id="premium-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M48 0H0v48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#premium-grid)" />
    </svg>
  );
}
