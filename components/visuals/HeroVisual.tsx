import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-md select-none", className)}
      aria-hidden="true"
    >
      <div className="relative rounded-lg border border-border bg-white p-3 shadow-[var(--shadow-premium)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
          <Image
            src="/images/projects/new-tiled-roof-grey-01.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
            <p className="text-sm font-semibold text-white">Completed tiled roof work</p>
            <p className="text-xs text-white/80">Somerset, Bristol & Devon coverage</p>
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-3 divide-x divide-border rounded-md border border-border bg-surface text-center">
          {[
            ["20yr", "New roofs"],
            ["10yr", "Flat roofs"],
            ["Free", "Written quotes"],
          ].map(([value, label]) => (
            <div key={label} className="px-3 py-3">
              <dt className="text-lg font-black text-primary">{value}</dt>
              <dd className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute -right-3 -top-5 flex items-center gap-2 rounded-md border border-border bg-white px-4 py-3 text-slate-800 shadow-[var(--shadow-soft)] sm:-right-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name="map-pin" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">Area checked</p>
          <p className="text-[0.6875rem] text-slate-500">
            Somerset - covered
          </p>
        </div>
        <Icon name="check" className="h-4 w-4 text-success" />
      </div>

      <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-md border border-border bg-white px-4 py-3 text-slate-800 shadow-[var(--shadow-soft)] sm:-left-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success">
          <Icon name="clock" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">Clear next step</p>
          <p className="text-[0.6875rem] text-slate-500">
            Repair or quote advice
          </p>
        </div>
      </div>
    </div>
  );
}
