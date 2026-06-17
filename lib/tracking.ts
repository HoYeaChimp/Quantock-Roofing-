/**
 * Tracking helpers — safe to call anywhere.
 * Every function no-ops when window/vendors are unavailable,
 * so missing IDs can never crash the site.
 */
import { tracking } from "@/data/tracking";

export type EventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void };
  }
}

export function safeDataLayerPush(data: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

export function safeGtag(...args: unknown[]): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag(...args);
}

export function safeFbq(...args: unknown[]): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function")
    return;
  window.fbq(...args);
}

function safeTtq(event: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.ttq?.track) return;
  try {
    window.ttq.track(event, params);
  } catch {
    /* never crash on vendor errors */
  }
}

/** Core event — pushed to dataLayer (GTM) and gtag (GA4) */
export function trackEvent(event: string, params: EventParams = {}): void {
  safeDataLayerPush({ event, ...params });
  safeGtag("event", event, params);
}

function fireGoogleAdsConversion(label: string): void {
  if (!tracking.googleAdsId || !label) return;
  safeGtag("event", "conversion", {
    send_to: `${tracking.googleAdsId}/${label}`,
  });
}

/** A lead happened (form, call, WhatsApp…). Fires GA4 + Meta + TikTok. */
export function trackLead(params: EventParams = {}): void {
  trackEvent("lead", params);
  safeFbq("track", "Lead", params);
  safeTtq("SubmitForm", params);
}

export function trackPhoneClick(location?: string): void {
  trackEvent("phone_click", { location });
  trackEvent("contact_click", { method: "phone", location });
  fireGoogleAdsConversion(tracking.conversionLabels.phone);
  trackLead({ lead_type: "phone", location });
}

export function trackWhatsAppClick(location?: string, context?: string): void {
  trackEvent("whatsapp_click", { location, context });
  trackEvent("contact_click", { method: "whatsapp", location });
  fireGoogleAdsConversion(tracking.conversionLabels.whatsapp);
  trackLead({ lead_type: "whatsapp", location });
}

export function trackEmailClick(location?: string): void {
  trackEvent("email_click", { location });
  trackEvent("contact_click", { method: "email", location });
}

export function trackQuoteClick(location?: string): void {
  trackEvent("quote_click", { location });
  fireGoogleAdsConversion(tracking.conversionLabels.quote);
}

export function trackBookingClick(location?: string): void {
  trackEvent("booking_click", { location });
  fireGoogleAdsConversion(tracking.conversionLabels.booking);
}

export function trackServiceClick(service: string): void {
  trackEvent("service_click", { service });
}

export function trackAreaClick(area: string): void {
  trackEvent("area_click", { area });
}

export function trackFormStart(form: string): void {
  trackEvent("form_start", { form });
}

export function trackFormSubmit(form: string): void {
  trackEvent("form_submit", { form });
  fireGoogleAdsConversion(tracking.conversionLabels.form);
}

export function trackFormError(form: string, error?: string): void {
  trackEvent("form_error", { form, error });
}

export function trackFaqOpen(question: string): void {
  trackEvent("faq_open", { question });
}

export function trackCtaClick(label: string, location?: string): void {
  trackEvent("cta_click", { label, location });
  if (location === "sticky_mobile") trackEvent("mobile_cta_click", { label });
  if (location === "sticky_desktop") trackEvent("desktop_cta_click", { label });
  if (location === "mobile_menu") trackEvent("menu_cta_click", { label });
}

export function trackMenuOpen(): void {
  trackEvent("menu_open");
}
