import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/data/faqs";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { AppleInspiredHero } from "@/components/sections/AppleInspiredHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { LeadPathSection } from "@/components/sections/LeadPathSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AreasPreview } from "@/components/sections/AreasPreview";
import { ResultsPreview } from "@/components/sections/ResultsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: `${site.businessName} | Roofers in Somerset, Bristol, Bath & Devon`,
  description:
    "New roofs, roof repairs, flat roofs, roofline and emergency roofing enquiries across Somerset, Bristol, Bath and Devon. Free written quotes.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <AppleInspiredHero />
      <TrustStrip />
      <LeadPathSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <AreasPreview />
      <ResultsPreview />
      <Testimonials limit={3} />
      <FaqSection
        items={homeFaqs}
        description="The questions most homeowners ask before getting in touch."
      />
      <FinalCTA />
      <ContactCTA />
      <JsonLd data={faqSchema(homeFaqs)} />
    </PageShell>
  );
}
