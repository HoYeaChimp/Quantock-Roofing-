/**
 * JSON-LD schema helpers.
 * RULES (do not break these):
 * - Schema must match VISIBLE page content.
 * - No fake reviews, aggregateRating, awards, or offices.
 * - Address/coordinates are omitted until real and public.
 */
import { site } from "@/data/site";
import { serviceAreas } from "@/data/serviceAreas";
import type { Service } from "@/data/services";
import type { Faq } from "@/data/faqs";

type Schema = Record<string, unknown>;

const ORG_ID = `${site.siteUrl}/#organization`;
const BUSINESS_ID = `${site.siteUrl}/#localbusiness`;

export function organizationSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.businessName, // business name from /data/site.ts
    url: site.siteUrl,
    email: site.email,
    telephone: site.phone,
    logo: `${site.siteUrl}/brand/quantock-roofing-logo.png`,
    ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
  };
}

export function localBusinessSchema(): Schema {
  const schema: Schema = {
    "@context": "https://schema.org",
    // HomeAndConstructionBusiness would also be suitable where supported;
    // "HomeAndConstructionBusiness" — see https://schema.org/LocalBusiness
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: site.businessName,
    description: site.description,
    url: site.siteUrl,
    telephone: site.phone,
    email: site.email,
    image: `${site.siteUrl}/brand/quantock-roofing-logo.png`,
    areaServed: serviceAreas.map((a) => ({
      "@type": "Place",
      name: `${a.name}, ${a.region}`,
    })),
  };

  // Address only when real AND public (set isPublic in /data/site.ts)
  if (site.address.isPublic) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    };
  }

  // Coordinates only when known
  if (site.coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: site.coordinates.lat,
      longitude: site.coordinates.lng,
    };
  }

  if (site.priceRange) schema.priceRange = site.priceRange;
  if (site.sameAs.length > 0) schema.sameAs = site.sameAs;

  return schema;
}

export function websiteSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    name: site.businessName,
    url: site.siteUrl,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.siteUrl}${item.path}`,
    })),
  };
}

export function serviceSchema(service: Service): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url: `${site.siteUrl}/services/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: serviceAreas.map((a) => ({
      "@type": "Place",
      name: `${a.name}, ${a.region}`,
    })),
  };
}

/** Only call with FAQs that are visibly rendered on the same page. */
export function faqSchema(faqs: Faq[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
