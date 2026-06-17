import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  href?: string;
  framed?: boolean;
}

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  href = "/",
  framed = true,
}: BrandLogoProps) {
  const logo = (
    <Image
      src="/brand/quantock-roofing-logo.png"
      alt={site.businessName}
      width={1400}
      height={855}
      priority={priority}
      className={cn("h-auto w-full object-contain", imageClassName)}
      sizes="(max-width: 640px) 160px, 220px"
    />
  );

  const logoFrame = cn(
    "inline-flex items-center justify-center",
    framed &&
      "rounded-xl border border-white/35 bg-white/45 p-2 shadow-[var(--shadow-soft)] backdrop-blur-xl",
    className
  );

  if (!href) {
    return <div className={logoFrame}>{logo}</div>;
  }

  return (
    <Link
      href={href}
      className={cn("shrink-0", logoFrame)}
      aria-label={`${site.businessName} home`}
    >
      {logo}
    </Link>
  );
}
