"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";
import { usePointerType } from "@/hooks/usePointerType";

interface ExpandableCardProps {
  title: string;
  summary: string;
  /** detail content revealed on expand */
  children: ReactNode;
  icon?: IconName;
  className?: string;
  /** fires once when expanded (analytics) */
  onExpand?: () => void;
}

/**
 * Premium expanding card:
 * - desktop: expands on hover/focus
 * - mobile: tap to expand (aria-expanded)
 * - smooth grid-rows animation, no chaotic layout shift
 */
export function ExpandableCard({
  title,
  summary,
  children,
  icon,
  className,
  onExpand,
}: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);
  const finePointer = usePointerType();
  const panelId = useId();

  const expand = (value: boolean) => {
    if (value && !expanded) onExpand?.();
    setExpanded(value);
  };

  return (
    <div
      className={cn(
        "card-premium group relative p-7 sm:p-8",
        expanded && "shadow-[var(--shadow-premium)]",
        className
      )}
      onMouseEnter={finePointer ? () => expand(true) : undefined}
      onMouseLeave={finePointer ? () => expand(false) : undefined}
      onFocus={() => expand(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) expand(false);
      }}
    >
      {icon ? (
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon name={icon} className="h-6 w-6" />
        </span>
      ) : null}

      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {summary}
      </p>

      {/* mobile / keyboard toggle */}
      <button
        type="button"
        className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-primary"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => expand(!expanded)}
      >
        {expanded ? "Show less" : "More details"}
        <Icon
          name="chevron-down"
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            expanded && "rotate-180"
          )}
        />
      </button>

      <div id={panelId} className="accordion-panel" data-open={expanded}>
        <div>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
