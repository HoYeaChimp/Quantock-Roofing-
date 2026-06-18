import { site } from "@/data/site";

/** tel: href from any human-formatted phone number */
export function telHref(phone: string = site.phone): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

/** mailto: href */
export function mailHref(email: string = site.email): string {
  return `mailto:${email}`;
}

/** True when a value still contains a unset value */
export function isTodo(value: string | undefined | null): boolean {
  return !value || /todo/i.test(value);
}

/** Absolute URL for canonical/OG purposes */
export function absoluteUrl(path: string = "/"): string {
  return `${site.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface LeadResponse {
  ok: boolean;
  error?: string;
}

/** POST a lead payload to the placeholder API route */
export async function submitLead(
  payload: Record<string, unknown>
): Promise<LeadResponse> {
  try {
    const browserContext =
      typeof window === "undefined"
        ? {}
        : {
            source_url: window.location.href,
            page: window.location.pathname,
            referrer: document.referrer,
            utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
            utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
            utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
            utm_term: new URLSearchParams(window.location.search).get("utm_term") || "",
            utm_content: new URLSearchParams(window.location.search).get("utm_content") || "",
            gclid: new URLSearchParams(window.location.search).get("gclid") || "",
            gbraid: new URLSearchParams(window.location.search).get("gbraid") || "",
            wbraid: new URLSearchParams(window.location.search).get("wbraid") || "",
            fbclid: new URLSearchParams(window.location.search).get("fbclid") || "",
          };
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...browserContext, ...payload }),
    });
    const data = (await res.json()) as LeadResponse;
    if (!res.ok) {
      return {
        ok: false,
        error:
          data.error ||
          "Something went wrong. Please try again, or call or WhatsApp us instead.",
      };
    }
    return data;
  } catch {
    return {
      ok: false,
      error:
        "We couldn't send your message. Please check your connection and try again — or call or WhatsApp us instead.",
    };
  }
}
