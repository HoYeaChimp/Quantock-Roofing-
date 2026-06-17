"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  trackBookingClick,
  trackCtaClick,
  trackEmailClick,
  trackPhoneClick,
  trackQuoteClick,
  trackWhatsAppClick,
} from "@/lib/tracking";

type Variant =
  | "primary"
  | "secondary"
  | "whatsapp"
  | "outline"
  | "ghost"
  | "glass"
  | "light";
type Size = "sm" | "md" | "lg";
export type ButtonIntent =
  | "phone"
  | "whatsapp"
  | "email"
  | "quote"
  | "booking"
  | "generic";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
  /** analytics: which lead path this CTA represents */
  intent?: ButtonIntent;
  /** analytics: where the CTA lives, e.g. "hero", "header", "sticky_mobile" */
  trackLocation?: string;
  /** analytics: readable CTA label */
  trackLabel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "bg-foreground text-background hover:opacity-90 active:scale-[0.98]",
  whatsapp:
    "bg-success text-white hover:brightness-110 active:scale-[0.98]",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "text-primary hover:bg-primary/8",
  glass: "glass text-foreground hover:bg-surface/80",
  light:
    "bg-surface text-foreground shadow-[var(--shadow-soft)] hover:bg-surface-elevated",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-[0.9375rem] min-h-[46px]",
  lg: "px-7 py-3.5 text-base min-h-[52px]",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled,
  ariaLabel,
  fullWidth,
  intent = "generic",
  trackLocation,
  trackLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 select-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    disabled && "pointer-events-none opacity-50",
    className
  );

  const handleClick = () => {
    const label = trackLabel || intent;
    switch (intent) {
      case "phone":
        trackPhoneClick(trackLocation);
        break;
      case "whatsapp":
        trackWhatsAppClick(trackLocation);
        break;
      case "email":
        trackEmailClick(trackLocation);
        break;
      case "quote":
        trackQuoteClick(trackLocation);
        break;
      case "booking":
        trackBookingClick(trackLocation);
        break;
    }
    trackCtaClick(label, trackLocation);
    onClick?.();
  };

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");
    const dataCursor =
      intent !== "generic" ? { "data-cursor": "lead" } : {};

    if (isExternal) {
      const newTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...dataCursor}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
        {...dataCursor}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
