# SEO Strategy

## Target page types

| Page type | Target intent | Example query |
|---|---|---|
| Home | Brand + "service in city" | "TODO service TODO City" |
| Service pages | "service + city", "service near me" | "service one quotes TODO City" |
| Area pages | "service + town" | "TODO service Nearby Town One" |
| Quote page | High-intent transactional | "free quote TODO service" |
| FAQ | Long-tail questions | "how much does service one cost" |
| Results/Reviews | Proof-seeking research | "TODO Business Name reviews" |

## Service page strategy

- One page per service, each with unique seoTitle/seoDescription
  (edit in `/data/services.ts`)
- Structure answers buyer questions: problem → outcome → what's included →
  process → objections → FAQs → quote form
- Service schema + FAQ schema (matching visible FAQs only)
- Internal links to related services and priority areas

## Area page strategy

- One page per genuinely served area — **only list places you really serve**
- Wording is always "serving customers across [Area]" — never a fake office
- Each page must become genuinely useful: real local proof, real common
  needs, accurate response times (currently TODO placeholders)
- LocalBusiness schema with areaServed built from `/data/serviceAreas.ts`
- **Do not** mass-generate hundreds of thin location pages; quality over count

## Internal linking strategy

- Header → core pages; footer → services, priority areas, legal, get-started
- Service pages ↔ related services + areas; area pages ↔ nearby areas + services
- Breadcrumbs (with schema) on all inner pages
- Descriptive anchor text ("Service One in Main City", not "click here")

## Metadata strategy

- `buildMetadata()` guarantees unique title, description, canonical, OG and
  Twitter tags on every page
- Titles: `{Primary keyword} | {Brand}` under ~60 chars
- Descriptions: outcome + area + offer (free quote) under ~155 chars
- `/thank-you` is noindex

## Schema strategy

- Organization, WebSite, LocalBusiness sitewide (layout)
- Service + FAQPage on service pages; FAQPage on /faq and home
- BreadcrumbList wherever breadcrumbs render
- **Never**: fake reviews/aggregateRating, fake awards, hidden FAQ schema,
  fake addresses or geo coordinates (address/geo omitted until real & public)

## Content quality rules

- Every page answers a real buyer question; no filler
- Replace all TODO copy with specific, true detail (numbers, examples, names)
- One h1 per page; headings follow document outline
- Alt text describes meaning; decorative visuals are aria-hidden

## Local SEO rules

- Set up Google Business Profile and link it in `/data/site.ts` (sameAs)
- NAP (name, address, phone) consistent everywhere once public
- Collect genuine reviews and link the profile from /reviews
- Local citations/directories after launch

## Things to replace before launch

1. siteUrl/domain (also drives sitemap, robots, canonicals)
2. All seoTitle/seoDescription TODOs in services + areas data
3. Real area list (delete any place you don't serve)
4. OG image (`/public/og-default.svg` → real 1200×630 image)
5. LocalBusiness type in `/lib/schema.ts` (pick the specific schema.org type)

## Warnings

- **No keyword stuffing** — write for people; one primary phrase per page
- **No fake location pages** — pages for places you don't serve will hurt
  trust and rankings, and can constitute misleading advertising
