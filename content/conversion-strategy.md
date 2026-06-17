# Conversion Strategy

This document defines the lead-generation strategy the website implements.
It is built on assumptions (marked TODO) that must be replaced with real
business detail before launch.

## Assumptions

- Business: **TODO Business Name** — a premium local service business
  (service type TODO) serving **TODO City** and surrounding towns.
- Customers: local homeowners and small businesses choosing a trusted,
  premium provider. They fear being overcharged, pressured, or let down.
- The business wins on clarity, honesty, responsiveness, and quality —
  not on being the cheapest.
- Leads arrive as: phone calls, WhatsApp messages, quote requests,
  callback bookings, contact-form enquiries, and emails.

## Primary conversion goals

1. Quote form submission (`/quote`, plus short lead forms on service/area pages)
2. WhatsApp conversation started
3. Phone call placed

## Secondary conversion goals

4. Callback booked (`/booking`)
5. Contact form enquiry (`/contact`)
6. Email sent

## Target customer assumptions

- Mobile-first (50–75% of local-service traffic is mobile)
- Compares 2–4 providers; decides on trust signals and responsiveness
- Hates: forms that feel like work, pressure tactics, unclear pricing
- Loves: instant clarity on "do they cover my area / can they do my job /
  what happens next"

## Trust-building requirements

- Reassurance line near every CTA and form:
  *"No obligation. No pressure. Just honest advice and a clear next step."*
- Trust strip under the hero (reviews / advice / response / local / insured /
  experience) — unverified claims carry visible TODO badges until replaced
- Reviews and case studies sections exist but are clearly placeholder until
  real proof is added — **never fake proof**
- Objection-handling sections answer "will I be pressured / what will it
  cost / I've been let down before / do I even need this"

## Objection handling

Implemented in `ObjectionHandling` (used on home-adjacent flows and every
service page) and `ComparisonSection` (expectation-setting). FAQ accordions
appear before final CTAs on every major page.

## Lead capture paths

Every page exposes at least four paths: header CTA + WhatsApp + phone,
sticky mobile bar (Call / WhatsApp / Quote), sticky desktop cluster,
in-page CTAs, footer contact actions. No dead-end pages (even the 404
routes to quote/services).

## Mobile conversion strategy

- Sticky bottom bar: Call / WhatsApp / Free Quote — always in thumb reach
- Tap targets ≥ 44px; forms use large inputs and minimal required fields
- Hero CTAs visible without scrolling; phone path prioritised

## WhatsApp conversion strategy

WhatsApp is treated as a first-class conversion path:
- CTAs in header, hero, mobile menu, both sticky bars, every page section
  that asks for a decision, every form success state, and the thank-you page
- Pre-filled context-aware messages (service, area, quote, booking, coverage
  check) lower the effort of starting a conversation
- "Prefer not to call?" and "skip the form" framing captures form-averse users

## Form friction reduction

- Short lead form (3 fields) on service/area pages
- 5-step progressive quote form with progress bar — each step is trivially
  easy; review step builds commitment before send
- Phone *or* email accepted (one contact field); consent asked once
- Errors are specific and polite; submit disabled while sending; success
  state offers faster fallbacks (WhatsApp / phone)

## Above-the-fold strategy (home)

Value proposition headline → outcome subline → primary CTA (quote) +
secondary (WhatsApp) + tertiary (call) → reassurance line → trust row.
HeroVisual shows leads arriving (social proof by demonstration, not claims).

## CTA hierarchy

1. **Get a Free Quote** (primary, blue, magnetic)
2. **WhatsApp Us** (secondary, green)
3. **Call Now** (tertiary, outline)
4. **Book a Callback** (supporting)
5. **Send Enquiry** (supporting)

## Local SEO strategy

See `/content/seo-strategy.md`. Area pages are genuinely useful (services
available, common needs, nearby areas, FAQs, quote form) — not doorway
pages — and never claim offices that don't exist.

## Tracking strategy

All lead paths fire events (see `/lib/tracking.ts`): phone_click,
whatsapp_click, quote_click, booking_click, form_start/submit/error,
faq_open, cta_click + location, lead. Google Ads conversion labels fire per
lead type. GTM/GA4/Meta/TikTok load only when enabled via env.

## Performance strategy

Server components by default; CSS/SVG visuals instead of images; no
animation libraries; transform/opacity-only animation; content-visibility
on below-fold sections; system font stack (zero font payload).

## Accessibility strategy

Semantic HTML, one h1/page, skip link, focus states, aria-expanded
accordions/menu, labelled forms with aria-describedby errors, reduced-motion
support everywhere, cursor/motion effects disabled for touch and
reduced-motion users.

## Missing business details to replace (before launch)

- [ ] Business name, legal name, domain, siteUrl (`/data/site.ts`)
- [ ] Phone, WhatsApp number, email
- [ ] Real services (`/data/services.ts`) and areas (`/data/serviceAreas.ts`)
- [ ] Trust points: reviews count, insurance, experience, accreditations
- [ ] Real testimonials and case studies (then remove placeholder badges)
- [ ] Legal pages (privacy/terms/cookies) — actual legal copy
- [ ] Tracking IDs in `.env.local`; consent integration
- [ ] Form backend in `/app/api/lead/route.ts`
- [ ] Images per `/content/image-prompts.md`
