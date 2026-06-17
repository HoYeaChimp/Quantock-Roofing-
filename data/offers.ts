/**
 * OFFERS / LEAD MAGNETS
 * The "reasons to act now" used around CTAs. Keep them honest.
 */

export interface Offer {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: string;
}

export const offers: Offer[] = [
  {
    id: "free-quote",
    title: "Free, no-obligation quote",
    description:
      "A clear written quote with no hidden extras — decide in your own time.",
    cta: "Get a Free Quote",
    href: "/quote",
    icon: "file-text",
  },
  {
    id: "free-consultation",
    title: "Free consultation",
    description:
      "Honest advice about what you actually need — even if that's not us.",
    cta: "Book a Callback",
    href: "/booking",
    icon: "calendar",
  },
  {
    id: "fast-callback",
    title: "Fast callback",
    description:
      "Tell us when suits you and we will confirm the closest practical callback slot.",
    cta: "Book a Callback",
    href: "/booking",
    icon: "phone",
  },
  {
    id: "whatsapp-first",
    title: "Prefer to message?",
    description:
      "Send a quick WhatsApp — photos welcome. We'll reply with a clear next step.",
    cta: "WhatsApp Us",
    href: "whatsapp",
    icon: "whatsapp",
  },
];
