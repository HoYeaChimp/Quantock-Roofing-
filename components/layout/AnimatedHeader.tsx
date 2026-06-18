"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { useScrollState } from "@/hooks/useScrollState";
import {
  trackCtaClick,
  trackMenuOpen,
  trackPhoneClick,
  trackQuoteClick,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { Icon } from "@/components/ui/Icon";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function AnimatedHeader() {
  const scrolled = useScrollState(32);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    setMenuOpen(true);
    trackMenuOpen();
  };

  return (
    <>
      {/* scroll progress along the top edge */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <ScrollProgress />
      </div>

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "mx-auto transition-all duration-300 ease-out",
            scrolled ? "max-w-none px-0" : "max-w-none px-0"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-4 border-b border-border bg-white px-5 py-3 text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 ease-out sm:px-8",
              scrolled
                ? "py-2.5"
                : "py-3.5"
            )}
          >
            {/* Brand */}
            <Link
              href="/"
              className={cn(
                "shrink-0 transition-all duration-500",
                scrolled ? "w-[126px] sm:w-[148px]" : "w-[144px] sm:w-[168px]"
              )}
              aria-label={`${site.businessName} — home`}
            >
              <BrandLogo
                href=""
                priority
                className="w-full"
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:block">
              <ul
                className={cn(
                  "flex items-center transition-all duration-500",
                  scrolled ? "gap-0.5" : "gap-1.5"
                )}
              >
                {mainNav.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm transition-colors duration-200",
                          active
                            ? cn(
                                "font-semibold",
                                "bg-primary/8 text-primary"
                              )
                            : cn(
                                "font-medium",
                                "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                              )
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={telHref()}
                className={cn(
                  "hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5",
                  scrolled ? "xl:inline-flex" : "lg:inline-flex"
                )}
                onClick={() => trackPhoneClick("header")}
                data-cursor="lead"
              >
                <Icon name="phone" className="h-4 w-4 text-primary" />
                {site.phoneDisplay}
              </a>
              <a
                href={createWhatsAppLink({ page: "header" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-success transition-colors hover:bg-success/10"
                onClick={() => trackWhatsAppClick("header")}
                data-cursor="lead"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
              <Link
                href="/quote"
                className={cn(
                  "inline-flex items-center justify-center rounded-md bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:bg-[#001674]",
                  scrolled
                    ? "px-4 py-2 text-sm"
                    : "px-5 py-2.5 text-sm"
                )}
                onClick={() => {
                  trackQuoteClick("header");
                  trackCtaClick(site.primaryCTA, "header");
                }}
                data-cursor="lead"
              >
                {scrolled ? "Get a Quote" : site.primaryCTA}
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <Link
                href="/quote"
                className="inline-flex items-center rounded-md bg-primary px-3.5 py-2 text-[0.8125rem] font-semibold text-primary-foreground"
                onClick={() => {
                  trackQuoteClick("header_mobile");
                  trackCtaClick("Quote", "header_mobile");
                }}
              >
                Quote
              </Link>
              <button
                type="button"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-foreground/5"
                )}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => (menuOpen ? setMenuOpen(false) : openMenu())}
              >
                <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
