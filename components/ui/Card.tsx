import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

/** Large rounded premium card with soft depth */
export function Card({ children, className, padded = true }: CardProps) {
  return (
    <div className={cn("card-premium", padded && "p-7 sm:p-8", className)}>
      {children}
    </div>
  );
}
