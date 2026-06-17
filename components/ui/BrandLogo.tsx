import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  href?: string;
}

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  href = "/",
}: BrandLogoProps) {
  const logo = (
    <Image
      src="/brand/quantock-roofing-logo.png"
      alt={site.businessName}
      width={1400}
      height={841}
      priority={priority}
      className={cn("h-auto w-full object-contain", imageClassName)}
      sizes="(max-width: 640px) 160px, 220px"
    />
  );

  if (!href) {
    return <div className={cn("block", className)}>{logo}</div>;
  }

  return (
    <Link
      href={href}
      className={cn("block shrink-0", className)}
      aria-label={`${site.businessName} home`}
    >
      {logo}
    </Link>
  );
}
