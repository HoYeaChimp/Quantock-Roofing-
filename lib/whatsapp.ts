/**
 * WhatsApp helpers.
 * Uses https://wa.me/<number>?text=<message>.
 * If the number is still a unset value, links fall back to /contact
 * so nothing on the site ever breaks.
 */
import { site } from "@/data/site";

/** Strip +, spaces, brackets, punctuation — wa.me wants digits only */
export function formatWhatsAppNumber(number: string): string {
  return number.replace(/\D/g, "");
}

function isUsableNumber(number: string): boolean {
  if (/todo/i.test(number)) return false;
  return formatWhatsAppNumber(number).length >= 7;
}

interface WhatsAppLinkArgs {
  phone?: string;
  message?: string;
  page?: string;
  service?: string;
  area?: string;
}

export function createWhatsAppLink({
  phone = site.whatsapp,
  message,
  page,
  service,
  area,
}: WhatsAppLinkArgs = {}): string {
  // If the WhatsApp number is unusable, buttons safely point at the contact page.
  if (!isUsableNumber(phone)) return "/contact";

  let text = message;
  if (!text) {
    if (service) text = serviceWhatsAppMessage(service);
    else if (area) text = areaWhatsAppMessage(area);
    else text = defaultWhatsAppMessage();
  }
  if (page) text += ` (via ${page})`;

  return `https://wa.me/${formatWhatsAppNumber(phone)}?text=${encodeURIComponent(text)}`;
}

export function defaultWhatsAppMessage(): string {
  return "Hi, I'm interested in your services. Could you help me with a quote?";
}

export function serviceWhatsAppMessage(serviceName: string): string {
  return `Hi, I'm interested in ${serviceName}. Could you tell me the next step?`;
}

export function areaWhatsAppMessage(areaName: string): string {
  return `Hi, I'm in ${areaName} and I'm interested in your services. Could you help?`;
}

export function quoteWhatsAppMessage(): string {
  return "Hi, I'd like a quote. Here are a few details:";
}

export function bookingWhatsAppMessage(): string {
  return "Hi, I'd like to book a callback. Could you help me arrange a time?";
}
