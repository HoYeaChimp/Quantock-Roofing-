import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-md select-none", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-8 rounded-[3rem] blur-3xl"
        style={{ background: "var(--orb-1)" }}
      />

      <div className="glass animate-float-slow relative rounded-lg p-5 shadow-[var(--shadow-premium)]">
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg border border-white/15">
          <Image
            src="/images/projects/new-tiled-roof-grey-01.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-sm font-semibold text-white">Real roofing project image</p>
            <p className="text-xs text-white/75">New tiled roof finish</p>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold">Roofing enquiries</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Open
          </span>
        </div>

        <ul className="space-y-3">
          <li className="flex items-center gap-3 rounded-lg bg-surface/80 p-3.5 shadow-[var(--shadow-soft)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
              <Icon name="whatsapp" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">WhatsApp photos</p>
              <p className="truncate text-xs text-muted-foreground">
                "Can I send roof photos for advice?"
              </p>
            </div>
            <span className="ml-auto text-[0.6875rem] font-medium text-muted-foreground">
              now
            </span>
          </li>

          <li className="flex items-center gap-3 rounded-lg bg-surface/80 p-3.5 shadow-[var(--shadow-soft)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name="file-text" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Quote request</p>
              <p className="truncate text-xs text-muted-foreground">
                Roof repair - Bridgwater
              </p>
            </div>
            <span className="ml-auto text-[0.6875rem] font-medium text-muted-foreground">
              2m
            </span>
          </li>

          <li className="flex items-center gap-3 rounded-lg bg-surface/80 p-3.5 shadow-[var(--shadow-soft)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon name="calendar" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Inspection booked</p>
              <p className="truncate text-xs text-muted-foreground">
                Tomorrow, 9:30am
              </p>
            </div>
            <span className="ml-auto text-[0.6875rem] font-medium text-muted-foreground">
              8m
            </span>
          </li>

          <li className="flex items-center gap-3 rounded-lg bg-surface/80 p-3.5 shadow-[var(--shadow-soft)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon name="mail" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Enquiry received</p>
              <p className="truncate text-xs text-muted-foreground">
                New roof - Somerset
              </p>
            </div>
            <span className="ml-auto text-[0.6875rem] font-medium text-muted-foreground">
              14m
            </span>
          </li>
        </ul>
      </div>

      <div className="glass animate-float absolute -right-3 -top-5 flex items-center gap-2 rounded-lg px-4 py-3 shadow-[var(--shadow-premium)] sm:-right-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name="map-pin" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">Area checked</p>
          <p className="text-[0.6875rem] text-muted-foreground">
            Somerset - covered
          </p>
        </div>
        <Icon name="check" className="h-4 w-4 text-success" />
      </div>

      <div className="glass animate-float-slow absolute -bottom-5 -left-3 flex items-center gap-2 rounded-lg px-4 py-3 shadow-[var(--shadow-premium)] sm:-left-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success">
          <Icon name="clock" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold">Clear next step</p>
          <p className="text-[0.6875rem] text-muted-foreground">
            Repair or quote advice
          </p>
        </div>
      </div>
    </div>
  );
}
