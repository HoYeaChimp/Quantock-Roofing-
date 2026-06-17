"use client";

import { site } from "@/data/site";
import { telHref, mailHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import {
  trackEmailClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/tracking";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface ContactActionsProps {
  /** analytics location, e.g. "footer", "contact_page" */
  location: string;
  className?: string;
  layout?: "row" | "column";
}

/** Tracked Call / WhatsApp / Email action links */
export function ContactActions({
  location,
  className,
  layout = "column",
}: ContactActionsProps) {
  const itemClass =
    "inline-flex min-h-[44px] items-center gap-3 text-[0.9375rem] font-medium text-foreground transition-colors hover:text-primary";

  return (
    <div
      className={cn(
        "flex gap-x-8 gap-y-2",
        layout === "column" ? "flex-col" : "flex-row flex-wrap",
        className
      )}
    >
      <a
        href={telHref()}
        className={itemClass}
        onClick={() => trackPhoneClick(location)}
        data-cursor="lead"
      >
        <Icon name="phone" className="h-4.5 w-4.5 text-primary" />
        {site.phoneDisplay}
      </a>
      <a
        href={createWhatsAppLink({ page: location })}
        className={itemClass}
        onClick={() => trackWhatsAppClick(location)}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="lead"
      >
        <Icon name="whatsapp" className="h-4.5 w-4.5 text-success" />
        WhatsApp us
      </a>
      <a
        href={mailHref()}
        className={itemClass}
        onClick={() => trackEmailClick(location)}
        data-cursor="lead"
      >
        <Icon name="mail" className="h-4.5 w-4.5 text-primary" />
        {site.email}
      </a>
    </div>
  );
}
