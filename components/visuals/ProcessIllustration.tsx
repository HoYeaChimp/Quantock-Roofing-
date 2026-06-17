import { cn } from "@/lib/cn";

/** Abstract process flow — dots connected by a soft line */
export function ProcessIllustration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 120"
      fill="none"
      className={cn("h-auto w-full text-primary", className)}
    >
      <path
        d="M40 80 C 140 20, 240 110, 320 60 S 520 40, 560 70"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      {[40, 180, 320, 450, 560].map((x, i) => {
        const ys = [80, 52, 60, 48, 70];
        return (
          <g key={x}>
            <circle cx={x} cy={ys[i]} r="14" fill="var(--surface)" stroke="currentColor" strokeOpacity="0.3" />
            <circle cx={x} cy={ys[i]} r="5" fill="currentColor" fillOpacity={0.25 + i * 0.18} />
          </g>
        );
      })}
    </svg>
  );
}
