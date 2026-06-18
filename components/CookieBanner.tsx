"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/tracking";

const STORAGE_KEY = "cookie-consent";

/**
 * Lightweight cookie banner — PLACEHOLDER, not legal advice.
 * Cookie banner stores a lightweight consent choice.
 * before enabling advertising tracking in production. The choice is stored
 * in localStorage; wire it to TrackingScripts via Google Consent Mode v2.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // storage unavailable (private mode) — keep the banner hidden
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    trackEvent("cookie_consent", { choice: value });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-24 left-3 right-3 z-50 rounded-lg border border-border bg-white p-5 shadow-[var(--shadow-premium)] sm:left-auto sm:right-6 sm:max-w-sm md:bottom-6"
    >
      <p className="text-sm font-semibold">Cookies</p>
      <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
        We use essential cookies to make this site work. With your consent we
        also use analytics and advertising cookies.{" "}
        <Link href="/cookies" className="font-medium text-primary underline">
          Cookie policy
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-[40px] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          onClick={() => choose("accepted")}
        >
          Accept
        </button>
        <button
          type="button"
          className="min-h-[40px] rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold"
          onClick={() => choose("rejected")}
        >
          Reject
        </button>
        <Link
          href="/cookies"
          className="inline-flex min-h-[40px] items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Manage
        </Link>
      </div>
    </div>
  );
}
