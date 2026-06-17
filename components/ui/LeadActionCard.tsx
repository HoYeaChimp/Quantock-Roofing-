"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  trackBookingClick,
  trackCtaClick,
  trackPhoneClick,
  trackQuoteClick,
  trackWhatsAppClick,
} from "@/lib/tracking";

interface LeadActionCardProps {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  cta: string;
  intent: "phone" | "whatsapp" | "quote" | "booking";
  location: string;
  className?: string;
}

/** Card for one lead path (Call / WhatsApp / Quote / Booking) */
export function LeadActionCard({
  icon,
  title,
  description,
  href,
  cta,
  intent,
  location,
  className,
}: LeadActionCardProps) {
  const handleClick = () => {
    switch (intent) {
      case "phone":
        trackPhoneClick(location);
        break;
      case "whatsapp":
        trackWhatsAppClick(location);
        break;
      case "quote":
        trackQuoteClick(location);
        break;
      case "booking":
        trackBookingClick(location);
        break;
    }
    trackCtaClick(cta, location);
  };

  const inner = (
    <>
      <span
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl",
          intent === "whatsapp"
            ? "bg-success/10 text-success"
            : "bg-primary/10 text-primary"
        )}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {cta}
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </>
  );

  const cardClass = cn(
    "card-premium group flex flex-col p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
    className
  );

  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={cardClass}
        onClick={handleClick}
        data-cursor="lead"
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClass} onClick={handleClick} data-cursor="lead">
      {inner}
    </Link>
  );
}
