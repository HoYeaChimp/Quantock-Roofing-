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
  return "Hi Quantock Roofing, I would like advice/a quote for roofing work. My postcode is: ";
}

export function serviceWhatsAppMessage(serviceName: string): string {
  if (/new roof/i.test(serviceName)) {
    return "Hi Quantock Roofing, I would like a quote for a new roof. My postcode is: ";
  }
  if (/repair|emergency/i.test(serviceName)) {
    return "Hi Quantock Roofing, I have a roof repair/leak issue. My postcode is: I can send photos.";
  }
  if (/flat/i.test(serviceName)) {
    return "Hi Quantock Roofing, I would like advice/a quote for a flat roof. My postcode is: ";
  }
  return `Hi Quantock Roofing, I would like advice/a quote for ${serviceName}. My postcode is: `;
}

export function areaWhatsAppMessage(areaName: string): string {
  return `Hi Quantock Roofing, I'm in ${areaName} and would like roofing advice/a quote. My postcode is: `;
}

export function quoteWhatsAppMessage(): string {
  return "Hi Quantock Roofing, I would like a roofing quote. My postcode is: I can send photos.";
}

export function bookingWhatsAppMessage(): string {
  return "Hi Quantock Roofing, I would like to book a roofing inspection/callback. My postcode is: ";
}
