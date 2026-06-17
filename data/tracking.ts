/**
 * Tracking configuration.
 * IDs come from environment variables — never hardcode IDs here.
 * Copy .env.local.example to .env.local and fill the values.
 */
export const tracking = {
  /** Master switch — nothing loads unless this is "true" */
  enabled: process.env.NEXT_PUBLIC_ENABLE_TRACKING === "true",

  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",

  conversionLabels: {
    form: process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL || "",
    phone: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL || "",
    whatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL || "",
    booking: process.env.NEXT_PUBLIC_GOOGLE_ADS_BOOKING_CONVERSION_LABEL || "",
    quote: process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSION_LABEL || "",
  },

  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "",
};

export type TrackingConfig = typeof tracking;
