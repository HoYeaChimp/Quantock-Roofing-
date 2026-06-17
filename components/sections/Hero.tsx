import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { PremiumBackground } from "@/components/visuals/PremiumBackground";

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** CTA row / extra content under the copy */
  children?: ReactNode;
  /** breadcrumbs rendered above the title */
  breadcrumbs?: ReactNode;
  variant?: "light" | "dark";
  align?: "center" | "left";
  compact?: boolean;
  className?: string;
}

/**
 * Standard inner-page hero with premium animated background.
 * Renders the page's single h1.
 */
export function Hero({
  title,
  subtitle,
  eyebrow,
  children,
  breadcrumbs,
  variant = "light",
  align = "center",
  compact = false,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        compact ? "pb-12 pt-32 md:pb-16 md:pt-40" : "pb-16 pt-32 md:pb-24 md:pt-44",
        variant === "dark" && "theme-dark",
        className
      )}
    >
      <PremiumBackground
        variant={variant === "dark" ? "dark" : "hero"}
        intensity="medium"
      />
      <Container className="relative">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {breadcrumbs}
          {eyebrow ? <p className="text-eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="text-display text-balance">{title}</h1>
          {subtitle ? (
            <p className="text-lead mt-6 text-pretty">{subtitle}</p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
