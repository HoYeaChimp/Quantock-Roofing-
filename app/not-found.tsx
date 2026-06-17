import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PremiumBackground } from "@/components/visuals/PremiumBackground";

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pb-24 pt-44">
        <PremiumBackground variant="hero" intensity="low" />
        <Container className="relative text-center">
          <p className="text-eyebrow mb-4">404</p>
          <h1 className="text-display">That page isn&apos;t here</h1>
          <p className="text-lead mx-auto mt-5 max-w-md">
            No dead ends, though — here&apos;s where to go next.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/" trackLabel="404_home" trackLocation="not_found">
              Back to home
            </Button>
            <Button href="/services" variant="outline" trackLabel="404_services" trackLocation="not_found">
              Browse services
            </Button>
            <Button href="/quote" variant="outline" intent="quote" trackLocation="not_found">
              Get a free quote
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Or <Link href="/contact" className="font-semibold text-primary underline">contact us</Link> and
            we&apos;ll point you in the right direction.
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
