"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { mobileNav } from "@/data/navigation";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import {
  trackCtaClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { Icon } from "@/components/ui/Icon";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Premium frosted mobile menu panel.
 * Escape closes; focus is trapped while open; body scroll locked.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    // focus the first focusable element in the panel
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])"
    );
    focusables?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // simple focus trap
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-[70] lg:hidden",
        !open && "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* frosted panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "absolute inset-x-3 top-3 max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-lg border border-border bg-white p-6 shadow-[var(--shadow-premium)] transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-foreground"
            onClick={onClose}
          >
            {site.businessName}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-foreground/5"
            aria-label="Close menu"
            onClick={onClose}
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="space-y-1">
            {mobileNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-4 py-3.5 text-base font-medium transition-colors hover:bg-foreground/5"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 space-y-2.5 border-t border-border pt-6">
          <Link
            href="/quote"
            className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground"
            onClick={() => {
              trackCtaClick(site.primaryCTA, "mobile_menu");
              onClose();
            }}
          >
            <Icon name="file-text" className="h-4.5 w-4.5" />
            {site.primaryCTA}
          </Link>
          <a
            href={createWhatsAppLink({ page: "mobile_menu" })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md bg-success px-6 py-3 font-semibold text-white"
            onClick={() => {
              trackWhatsAppClick("mobile_menu");
              trackCtaClick(site.secondaryCTA, "mobile_menu");
              onClose();
            }}
          >
            <Icon name="whatsapp" className="h-4.5 w-4.5" />
            {site.secondaryCTA}
          </a>
          <a
            href={telHref()}
            className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-semibold"
            onClick={() => {
              trackPhoneClick("mobile_menu");
              trackCtaClick(site.tertiaryCTA, "mobile_menu");
              onClose();
            }}
          >
            <Icon name="phone" className="h-4.5 w-4.5 text-primary" />
            Call {site.phoneDisplay}
          </a>
          <Link
            href="/booking"
            className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-6 py-3 font-semibold"
            onClick={() => {
              trackCtaClick(site.bookingCTA, "mobile_menu");
              onClose();
            }}
          >
            <Icon name="calendar" className="h-4.5 w-4.5 text-primary" />
            {site.bookingCTA}
          </Link>
          <p className="pt-2 text-center text-xs text-muted-foreground">
            {site.defaultReassurance}
          </p>
        </div>
      </div>
    </div>
  );
}
