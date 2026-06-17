import { cn } from "@/lib/cn";

/**
 * Abstract coverage map — concentric radius rings with area markers.
 * Deliberately not a real map: no fake office locations implied.
 */
export function AreaMapAbstract({ className }: { className?: string }) {
  const markers = [
    { x: 200, y: 130, r: 7, label: true },
    { x: 120, y: 80, r: 5 },
    { x: 290, y: 90, r: 5 },
    { x: 95, y: 180, r: 5 },
    { x: 300, y: 185, r: 5 },
    { x: 200, y: 230, r: 5 },
    { x: 145, y: 245, r: 4 },
    { x: 265, y: 250, r: 4 },
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      fill="none"
      className={cn("h-auto w-full text-primary", className)}
    >
      <circle cx="200" cy="160" r="60" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="4 6" />
      <circle cx="200" cy="160" r="100" stroke="currentColor" strokeOpacity="0.18" strokeDasharray="4 6" />
      <circle cx="200" cy="160" r="140" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 6" />
      {markers.map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r={m.r + 6} fill="currentColor" fillOpacity="0.08" />
          <circle cx={m.x} cy={m.y} r={m.r} fill="currentColor" fillOpacity={m.label ? 0.9 : 0.45} />
        </g>
      ))}
    </svg>
  );
}
