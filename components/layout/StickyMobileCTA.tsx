"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import {
  trackCtaClick,
  trackPhoneClick,
  trackQuoteClick,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { Icon } from "@/components/ui/Icon";

/**
 * Sticky mobile lead bar — Call / WhatsApp / Quote always within thumb reach.
 * Pages add bottom padding (PageShell) so content is never blocked.
 */
export function StickyMobileCTA() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white shadow-[var(--shadow-soft)] md:hidden"
    >
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={telHref()}
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-md font-semibold text-foreground transition-colors active:bg-foreground/5"
          onClick={() => {
            trackPhoneClick("sticky_mobile");
            trackCtaClick("Call", "sticky_mobile");
          }}
        >
          <Icon name="phone" className="h-5 w-5 text-primary" />
          <span className="text-[0.6875rem]">Call</span>
        </a>
        <a
          href={createWhatsAppLink({ page: "sticky_mobile" })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-md font-semibold text-foreground transition-colors active:bg-foreground/5"
          onClick={() => {
            trackWhatsAppClick("sticky_mobile");
            trackCtaClick("WhatsApp", "sticky_mobile");
          }}
        >
          <Icon name="whatsapp" className="h-5 w-5 text-success" />
          <span className="text-[0.6875rem]">WhatsApp</span>
        </a>
        <Link
          href="/quote"
          className="flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-md bg-primary font-semibold text-primary-foreground"
          onClick={() => {
            trackQuoteClick("sticky_mobile");
            trackCtaClick("Get a Quote", "sticky_mobile");
          }}
        >
          <Icon name="file-text" className="h-5 w-5" />
          <span className="text-[0.6875rem]">Free Quote</span>
        </Link>
      </div>
    </nav>
  );
}
