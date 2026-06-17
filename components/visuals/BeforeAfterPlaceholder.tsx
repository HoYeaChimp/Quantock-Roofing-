import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "@/components/visuals/ImagePlaceholder";
import { Badge } from "@/components/ui/Badge";

interface BeforeAfterPlaceholderProps {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/**
 * Before/after placeholder — NEVER fake results.
 * Replace both tiles with genuine project photos only.
 */
export function BeforeAfterPlaceholder({
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterPlaceholderProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      <div className="relative">
        <Badge className="absolute left-3 top-3 z-10">Before</Badge>
        <ImagePlaceholder label={beforeLabel} aspect="aspect-[4/3]" />
      </div>
      <div className="relative">
        <Badge tone="success" className="absolute left-3 top-3 z-10">
          After
        </Badge>
        <ImagePlaceholder label={afterLabel} aspect="aspect-[4/3]" />
      </div>
    </div>
  );
}
