"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

/** Fires the thank-you conversion page view once on mount */
export function ThankYouTracker() {
  useEffect(() => {
    trackEvent("thank_you_view", { page: "/thank-you" });
  }, []);

  return null;
}
