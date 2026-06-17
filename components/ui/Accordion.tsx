"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { trackFaqOpen } from "@/lib/tracking";

export interface AccordionEntry {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  className?: string;
  /** index opened by default, or null */
  defaultOpen?: number | null;
}

/**
 * Accessible FAQ accordion: semantic buttons, aria-expanded/controls,
 * smooth grid-rows animation, faq_open tracking.
 */
export function Accordion({
  items,
  className,
  defaultOpen = null,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  const toggle = (index: number) => {
    const next = open === index ? null : index;
    setOpen(next);
    if (next !== null) trackFaqOpen(items[index].question);
  };

  return (
    <div className={cn("divide-y divide-border rounded-3xl border border-border bg-card", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-button-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium transition-colors hover:bg-surface-elevated sm:px-7"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span className="text-[0.9875rem] sm:text-base">{item.question}</span>
              <Icon
                name="chevron-down"
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
            >
              <div>
                <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-muted-foreground sm:px-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
