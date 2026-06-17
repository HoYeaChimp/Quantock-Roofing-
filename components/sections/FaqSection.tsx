import Link from "next/link";
import type { Faq } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

interface FaqSectionProps {
  items: Faq[];
  title?: string;
  description?: string;
  eyebrow?: string;
  /** show "more questions" link to /faq */
  showAllLink?: boolean;
  plain?: boolean;
}

/**
 * Visible FAQ accordion. If you add faqSchema() for these items,
 * the schema matches exactly what's rendered here.
 */
export function FaqSection({
  items,
  title = "Questions, answered honestly",
  description,
  eyebrow = "FAQ",
  showAllLink = true,
  plain = false,
}: FaqSectionProps) {
  return (
    <section className={plain ? "py-10" : "section-pad cv-auto"} aria-label="Frequently asked questions">
      <Container size="narrow">
        {!plain && (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        )}
        <Reveal>
          <Accordion items={items} />
        </Reveal>
        {showAllLink && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            More questions?{" "}
            <Link href="/faq" className="font-semibold text-primary hover:underline">
              See the full FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              ask us directly
            </Link>
            .
          </p>
        )}
      </Container>
    </section>
  );
}
