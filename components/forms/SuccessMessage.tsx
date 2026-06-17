"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";
import { Icon } from "@/components/ui/Icon";

interface SuccessMessageProps {
  title?: string;
  message?: string;
}

/** Post-submit success state with WhatsApp/phone fallbacks */
export function SuccessMessage({
  title = "Thanks — we've got your message",
  message = "We'll come back with a clear quote, inspection option or practical next step.",
}: SuccessMessageProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-3xl border border-success/30 bg-success/5 p-8 text-center"
    >
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
        <Icon name="check" className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl font-bold tracking-tight">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={createWhatsAppLink({ page: "form_success" })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-semibold text-white"
          onClick={() => trackWhatsAppClick("form_success")}
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Need it faster? WhatsApp us
        </a>
        <a
          href={telHref()}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold"
          onClick={() => trackPhoneClick("form_success")}
        >
          <Icon name="phone" className="h-4 w-4 text-primary" />
          Or call {site.phoneDisplay}
        </a>
      </div>
      <p className="mt-5 text-sm">
        <Link href="/thank-you" className="font-semibold text-primary underline">
          What happens next →
        </Link>
      </p>
    </div>
  );
}
