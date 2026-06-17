# Premium Lead-Generation Website (Apple-Inspired)

A complete, conversion-focused, multi-page website for a premium local
service business. Built with Next.js App Router, TypeScript, and Tailwind
CSS. Everything editable lives in `/data` — replace the TODO placeholders
and launch.

## Tech stack

- Next.js (App Router, Server Components, static generation)
- TypeScript (strict)
- Tailwind CSS v4 (CSS-variable design tokens)
- No animation/UI/icon libraries — custom lightweight components, inline SVG
- System font stack (SF Pro on Apple devices) — zero font payload
  (optional next/font swap documented in `app/layout.tsx`)

## Commands

```bash
npm install     # install dependencies
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Folder structure

```
app/           routes (home, services, areas, quote, booking, contact, …)
  api/lead/    placeholder lead endpoint (all forms POST here)
components/
  layout/      animated header, footer, mobile menu, sticky CTAs
  sections/    hero, trust, services, areas, results, FAQs, final CTA…
  forms/       quote (5-step), booking, contact, short lead form
  ui/          buttons, cards, accordion, reveal, cursor, magnetic…
  visuals/     premium backgrounds, hero visual, placeholders (no images)
data/          ← EDIT EVERYTHING HERE (business, services, areas, FAQs…)
lib/           seo, schema (JSON-LD), tracking, whatsapp helpers
hooks/         scroll/motion/pointer hooks
content/       conversion strategy, SEO strategy, image prompts
public/        icon.svg, og-default.svg, /images (replace placeholders)
```

## Design notes (Apple-inspired)

- Near-white background (`#f5f5f7`), charcoal text (`#1d1d1f`), one premium
  blue, soft grey dividers — all defined as CSS variables in `app/globals.css`
- Layered "materials": glass panels (`.glass`), satin gradient meshes,
  drifting orbs, faint grid + grain — all CSS/SVG, transform/opacity-only
- Fluid type scale via `clamp()` (`.text-display`, `.text-headline`, …)
- Generous vertical rhythm (`.section-pad`), large rounded cards, soft depth

### Animated header

`components/layout/AnimatedHeader.tsx`: translucent and spacious at the top;
contracts into a floating glass capsule on scroll (brand scales down, blur and
border strengthen, CTA compacts). Scroll progress bar runs along the top edge
(`ScrollProgress`, rAF + direct transforms — no re-renders). Fully keyboard
accessible; reduced motion snaps states.

### Motion system

- `Reveal` — IntersectionObserver scroll reveals (content visible without JS)
- `Magnetic` — subtle CTA pull, desktop fine-pointer only, ≤10px, transform-only
- `CustomCursor` — desktop-only dot+ring cursor; disabled on touch, reduced
  motion, and over form fields; never blocks clicks
- Everything respects `prefers-reduced-motion`

## CRO summary

Full strategy: `content/conversion-strategy.md`. In short: value proposition
and three lead paths above the fold, reassurance near every ask, sticky
mobile bar + desktop CTA cluster, 5-step progressive quote form, WhatsApp as
a first-class path, objection handling + FAQs before every final CTA, no
dead ends.

## Where to edit what

| What | Where |
|---|---|
| Company details (name, phone, WhatsApp, email, hours, CTAs) | `data/site.ts` |
| Services (6 placeholders) | `data/services.ts` |
| Service areas (8 placeholders) | `data/serviceAreas.ts` |
| Testimonials (placeholders) | `data/testimonials.ts` |
| FAQs | `data/faqs.ts` |
| Case studies (placeholders) | `data/caseStudies.ts` |
| Offers | `data/offers.ts` |
| Tracking config | `data/tracking.ts` + `.env.local` |
| Forms backend | `app/api/lead/route.ts` |
| Navigation | `data/navigation.ts` |
| Colours/typography | `app/globals.css` |
| Images | `/public/images` + `content/image-prompts.md` |

## Connecting the forms

All four forms POST JSON to `app/api/lead/route.ts` (honeypot + server-side
validation included). Pick one backend and wire it where the TODO comment is:

1. **Email** — Resend/Postmark/SendGrid: `await resend.emails.send({...})`
2. **CRM** — POST the payload to your CRM's lead endpoint
3. **Zapier** — `fetch(process.env.ZAPIER_HOOK_URL, {method:"POST", body})`
4. **GoHighLevel** — POST to your GHL inbound webhook
5. **Formspree** — or post directly from the client to your Formspree ID
6. **Netlify Forms** — requires static `<form>` markup (see Netlify docs)
7. **Custom API** — forward anywhere you like

Also TODO in the route: rate limiting and consent storage.

## Images

- Replace placeholders in `/public/images` using `content/image-prompts.md`
- Formats: AVIF or WebP
- Sizes: hero desktop 1600px wide; hero mobile 900px; cards 800px;
  OG image exactly 1200×630
- Alt text: describe the actual subject ("Tiler levelling porcelain tiles in
  a kitchen"), empty `alt=""` for decorative images
- Never use copyrighted/stock images you don't have rights to; never use AI
  images that fake customers, team members, offices, awards, or results

## Tracking setup

1. Copy `.env.local.example` → `.env.local`
2. Add IDs: `NEXT_PUBLIC_GTM_ID` (GTM-XXXX), `NEXT_PUBLIC_GA4_ID`
   (G-XXXX), `NEXT_PUBLIC_GOOGLE_ADS_ID` (AW-XXXX) + conversion labels,
   `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`
3. Set `NEXT_PUBLIC_ENABLE_TRACKING=true`
4. Rebuild. Scripts only load when enabled **and** the ID exists.

Events fired (see `lib/tracking.ts`): `page_view` (via GA4/GTM),
`form_start/submit/error`, `phone_click`, `whatsapp_click`, `email_click`,
`quote_click`, `booking_click`, `service_click`, `area_click`, `faq_open`,
`cta_click` (+`mobile_cta_click`/`desktop_cta_click`/`menu_cta_click`),
`menu_open`, `lead`, `thank_you_view`.

### Testing tracking

- Run with tracking enabled, open DevTools console:
  `window.dataLayer` should grow as you click CTAs
- GTM Preview mode / GA4 DebugView show events live
- Meta Pixel Helper + TikTok Pixel Helper browser extensions
- Click a phone link, WhatsApp button, submit each form — confirm each event

### Testing WhatsApp & phone links

- Set real numbers in `data/site.ts` (international format, e.g. +447700900000)
- WhatsApp links use `https://wa.me/<digits>?text=<message>` — test on a
  phone and on WhatsApp Web; check the pre-filled message reads correctly
- `tel:` links: tap on a phone; on desktop they should prompt the default app
- Until a real number is set, WhatsApp buttons safely fall back to `/contact`

### Testing forms

- Fill each form (quote, booking, contact, short lead form) → expect success
  state with WhatsApp/phone fallbacks
- Leave required fields empty → expect specific inline errors
- Check the dev server console for the `[lead received]` log
- Test the honeypot: POST with `company_website` filled → silently accepted

### Testing structured data

- Build + run, then validate pages at https://search.google.com/test/rich-results
  and https://validator.schema.org (home, one service, one area, /faq)
- Confirm NO review/aggregateRating schema appears anywhere

## Launch checklists

### SEO
- [ ] Set `NEXT_PUBLIC_SITE_URL` + domain in `data/site.ts`
- [ ] Replace every seoTitle/seoDescription TODO (services, areas, pages)
- [ ] Replace OG image with real 1200×630
- [ ] Verify sitemap at `/sitemap.xml`, robots at `/robots.txt`
- [ ] Pick the specific LocalBusiness type in `lib/schema.ts`
- [ ] Submit sitemap in Google Search Console

### Local SEO
- [ ] Real area list (remove anywhere you don't serve)
- [ ] Google Business Profile created + linked in `data/site.ts`
- [ ] NAP consistent across site, GBP, directories
- [ ] Genuine reviews collected and linked on /reviews
- [ ] Real local proof added to each area page

### Tracking
- [ ] GTM/GA4/Ads/Meta IDs in `.env.local`, tracking enabled
- [ ] Google Ads conversion actions created; labels added to env
- [ ] Consent banner wired to Consent Mode v2 / CMP (currently TODO)
- [ ] Test every event per "Testing tracking" above

### Accessibility
- [ ] Keyboard-only pass: skip link, menu, accordions, forms, no traps
- [ ] Check contrast after any colour changes
- [ ] Screen-reader pass on home + quote form
- [ ] Reduced-motion check (OS setting → animations snap off)

### Performance
- [ ] Lighthouse on mobile: aim 90+ perf, 95+ a11y/BP/SEO
- [ ] Compress any added images to AVIF/WebP at the listed sizes
- [ ] Keep third-party scripts behind the tracking switch

### Legal
- [ ] Replace privacy/terms/cookies placeholder text with real legal copy
  (the cookie banner is a placeholder, not legal advice)

## Deployment

Any Node host works. Vercel is simplest: import the repo, set the env vars
from `.env.local.example`, deploy. Set `NEXT_PUBLIC_SITE_URL` to the real
domain before the production build (canonicals/sitemap depend on it).

## Assumptions made

- Generic premium local service business (all specifics marked TODO)
- UK-style defaults (en_GB locale, GB country code) — change in
  `lib/seo.ts` / `data/site.ts`
- System font stack instead of a downloaded webfont (best CWV; easy to swap)
- Tailwind v4 CSS-first configuration (no tailwind.config file needed)
- Placeholder reviews/case studies clearly badged until real proof exists
