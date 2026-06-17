# Image Prompt Library

Prompts for generating (or briefing a photographer for) the brand images this
site needs. The site currently uses code-generated placeholders — replace them
with images created from these prompts.

> ⚠️ **For every image:** never generate fake customers, fake reviews, fake
> team members presented as real people, fake offices, fake awards, or
> misleading before/after results. AI images may be used for *abstract/brand*
> visuals; anything presented as proof (team, projects, results) must be a
> real photograph.

Recommended formats: **AVIF or WebP**. Keep hero images under ~200KB.

---

## 1. Home hero image

- **Page/section:** Home → hero (optional replacement/backdrop for HeroVisual)
- **Purpose:** Set a premium, calm tone; suggest the service category
- **Aspect ratio:** 4:3 (desktop right column) — 1600×1200
- **Style:** Apple-inspired product photography; near-white background
  (#f5f5f7); soft studio light; generous negative space; shallow depth of field
- **Prompt:** "Minimalist premium still-life representing TODO service
  (tools/materials of the trade arranged precisely), near-white seamless
  background, soft diffused studio lighting, gentle shadows, calm composition
  with generous negative space, high-end commercial photography, 8k"
- **Negative prompt:** people, faces, text, logos, watermark, clutter,
  harsh shadows, oversaturated colours
- **Alt text:** "TODO: describe the actual subject, e.g. 'Neatly arranged
  professional tools on a white surface'"
- **Filename:** `home-hero.webp`
- **Placement:** `/public/images/home-hero.webp`
- **Replace:** optional backdrop behind `HeroVisual` in
  `components/sections/AppleInspiredHero.tsx`

## 2. Service hero images (one per service)

- **Page/section:** `/services/[slug]` hero
- **Purpose:** Instantly communicate the specific service
- **Aspect ratio:** 16:10 — 1600×1000
- **Style:** Same premium minimal system as the home hero; one clear subject
- **Prompt:** "Premium minimal photograph representing [SERVICE NAME]
  ([key object/tool/material] as hero subject), near-white background, soft
  directional light, precise composition, high-end commercial photography"
- **Negative prompt:** people, faces, text, watermark, busy background
- **Alt text:** "TODO: '[Object] used for [service name]'"
- **Filenames:** `service-one.webp` … `service-emergency.webp`
- **Placement:** `/public/images/` (paths already referenced in `/data/services.ts`)
- **Replace:** `ServiceIllustration` tiles in `components/sections/ServiceDetail.tsx`

## 3. About / team image

- **Page/section:** `/about` → "Our story"
- **Purpose:** Real human trust — **must be a real photo of the real team**
- **Aspect ratio:** 4:3 — 1200×900
- **Style:** Natural light, honest, warm; clean uncluttered background;
  premium but approachable
- **Prompt (photographer brief, not AI):** "Founder/team photographed at work
  or against a simple light background, relaxed genuine expressions, soft
  natural light, no stiff corporate posing"
- **Negative:** do NOT use AI-generated people here
- **Alt text:** "TODO: '[Name], founder of [Business], at work in [place]'"
- **Filename:** `about-team.webp`
- **Placement:** `/public/images/about-team.webp` → replace `ImagePlaceholder`
  in `app/about/page.tsx`

## 4. Process image

- **Page/section:** `/process` hero or mid-page
- **Purpose:** Visualise the calm, organised way of working
- **Aspect ratio:** 16:9 — 1600×900
- **Prompt:** "Overhead flat-lay of a clear project plan: clipboard with neat
  checklist, pencil, fabric swatch/material sample relevant to TODO service,
  near-white surface, soft shadows, minimal premium composition"
- **Negative prompt:** handwriting that reads as real text, logos, people
- **Alt text:** "TODO: 'A tidy project checklist and materials laid out'"
- **Filename:** `process.webp` → `/public/images/process.webp`

## 5. Case study / before-after images

- **Page/section:** `/results` and home Results preview
- **Purpose:** Proof — **must be genuine photos of genuine projects**
- **Aspect ratio:** 4:3 pairs — 800×600 each
- **Brief:** Same angle, same lighting time if possible, honest framing; no
  retouching that exaggerates the difference
- **Negative:** never AI-generate or stage these; never use someone else's work
- **Alt text:** "Before: TODO description" / "After: TODO description"
- **Filenames:** `case-1-before.webp`, `case-1-after.webp`, …
- **Placement:** `/public/images/` → replace `BeforeAfterPlaceholder` usages

## 6. Review / trust section image

- **Page/section:** `/reviews` hero (optional)
- **Purpose:** Soft backdrop for social proof
- **Aspect ratio:** 16:9 — 1600×900
- **Prompt:** "Abstract premium gradient backdrop, soft blue and warm neutral
  tones, gentle light leak, smooth bokeh, calm and trustworthy mood, no objects"
- **Negative prompt:** people, stars, rating graphics (no implied ratings), text
- **Alt text:** decorative — use empty alt `""`
- **Filename:** `reviews-backdrop.webp`

## 7. Contact page image

- **Page/section:** `/contact` → details column (map placeholder slot)
- **Purpose:** Hint at locality without a heavy embedded map
- **Aspect ratio:** 16:9 — 1200×675
- **Prompt:** "Minimal stylised illustrated map of a town and surrounding
  area, soft blue route lines on near-white background, subtle pins, flat
  premium illustration style" (or a real static map screenshot with proper
  licence, e.g. Mapbox Static with attribution)
- **Negative prompt:** real place names unless accurate, business pins implying
  offices that don't exist
- **Alt text:** "Stylised map of the TODO City service area"
- **Filename:** `contact-map.webp` → replaces `ImagePlaceholder` in
  `app/contact/page.tsx`

## 8. Area page image

- **Page/section:** `/areas/[slug]`
- **Purpose:** Local flavour per area (optional)
- **Aspect ratio:** 16:9 — 1200×675
- **Prompt:** "Tasteful photograph of [AREA NAME] streetscape/landmark in soft
  morning light, calm, premium editorial style" — use real licensed/own photos
  of the actual place; do not pass off other towns
- **Alt text:** "TODO: '[Landmark/street], [Area name]'"
- **Filenames:** `area-main-city.webp`, …

## 9. Open Graph image

- **Page/section:** sitewide social sharing
- **Purpose:** Strong link preview in WhatsApp/social — this matters for a
  WhatsApp-heavy business
- **Aspect ratio:** 1.91:1 — exactly **1200×630**
- **Brief:** Brand name + tagline + "Free quotes · TODO City" on near-white
  premium gradient; large readable text (min ~48px)
- **Filename:** `og-default.png` (or keep .svg name and update references in
  `lib/seo.ts` + `lib/schema.ts`)
- **Placement:** `/public/` — replaces the placeholder `og-default.svg`

## 10. Social sharing / profile image

- **Purpose:** Square avatar for WhatsApp Business, GBP, socials
- **Aspect ratio:** 1:1 — 1024×1024
- **Brief:** Brand mark on brand-colour background, high contrast, legible at
  48px
- **Filename:** `social-avatar.png` (used off-site; keep a copy in
  `/public/images/` for reference)
