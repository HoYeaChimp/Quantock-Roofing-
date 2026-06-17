"use client";

import { useRef, type ReactNode } from "react";
import { usePointerType } from "@/hooks/usePointerType";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** max travel in px (kept subtle: 6–10) */
  strength?: number;
}

/**
 * Subtle magnetic pull for key CTAs.
 * Desktop fine-pointer only; disabled with reduced motion.
 * Transform-only — never causes layout shift or blocks clicks.
 */
export function Magnetic({ children, className, strength = 8 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const fine = usePointerType();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const x = Math.max(-1, Math.min(1, relX)) * strength;
    const y = Math.max(-1, Math.min(1, relY)) * strength;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-block transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      onMouseMove={enabled ? onMove : undefined}
      onMouseLeave={enabled ? onLeave : undefined}
    >
      {children}
    </div>
  );
}
