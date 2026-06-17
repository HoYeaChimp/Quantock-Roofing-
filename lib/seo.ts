import type { Metadata } from "next";
import { site } from "@/data/site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Builds consistent metadata for every page:
 * title, description, canonical, Open Graph, Twitter card.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${site.siteUrl}${path}`;
  const ogImage = image || "/brand/quantock-roofing-logo.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.businessName,
      type: "website",
      locale: "en_GB",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
