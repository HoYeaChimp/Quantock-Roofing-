import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** heading level — pages must keep exactly one h1 */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="text-eyebrow mb-3">{eyebrow}</p> : null}
      <Tag className="text-headline text-balance">{title}</Tag>
      {description ? (
        <p className="text-lead mt-4 text-pretty">{description}</p>
      ) : null}
    </Reveal>
  );
}
