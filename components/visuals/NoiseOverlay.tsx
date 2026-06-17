import { cn } from "@/lib/cn";

interface NoiseOverlayProps {
  className?: string;
}

/** Very subtle film-grain texture (static SVG, rendered once) */
export function NoiseOverlay({ className }: NoiseOverlayProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ opacity: "var(--noise-opacity)" }}
      preserveAspectRatio="none"
    >
      <filter id="premium-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#premium-noise)" />
    </svg>
  );
}
