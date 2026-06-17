"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { useScrollState } from "@/hooks/useScrollState";
import {
  trackCtaClick,
  trackPhoneClick,
  trackQuoteClick,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * Desktop sticky CTA cluster — appears after the hero has scrolled past.
 * Compact glass capsule, bottom-right, never covers key content.
 */
export function StickyDesktopCTA() {
  const visible = useScrollState(560);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden transition-all duration-500 lg:block",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-hidden={!visible}
    >
      <div className="glass flex items-center gap-2 rounded-full border border-border p-2 shadow-[var(--shadow-premium)]">
        <Magnetic strength={6}>
          <a
            href={telHref()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5"
            aria-label={`Call ${site.phoneDisplay}`}
            onClick={() => {
              trackPhoneClick("sticky_desktop");
              trackCtaClick("Call", "sticky_desktop");
            }}
            data-cursor="lead"
            tabIndex={visible ? 0 : -1}
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
        </Magnetic>
        <Magnetic strength={6}>
          <a
            href={createWhatsAppLink({ page: "sticky_desktop" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-success transition-colors hover:bg-success/10"
            aria-label="Message us on WhatsApp"
            onClick={() => {
              trackWhatsAppClick("sticky_desktop");
              trackCtaClick("WhatsApp", "sticky_desktop");
            }}
            data-cursor="lead"
            tabIndex={visible ? 0 : -1}
          >
            <Icon name="whatsapp" className="h-5 w-5" />
          </a>
        </Magnetic>
        <Magnetic strength={6}>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:brightness-110"
            onClick={() => {
              trackQuoteClick("sticky_desktop");
              trackCtaClick(site.primaryCTA, "sticky_desktop");
            }}
            data-cursor="lead"
            tabIndex={visible ? 0 : -1}
          >
            <Icon name="file-text" className="h-4 w-4" />
            Get a Quote
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}
