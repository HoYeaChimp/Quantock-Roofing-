"use client";

import { useEffect, useRef } from "react";
import { usePointerType } from "@/hooks/usePointerType";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Premium custom cursor — desktop only.
 * - fine pointer + hover devices only, disabled with reduced motion
 * - pointer-events: none, never blocks clicks
 * - rAF + direct transforms, no React state per mousemove
 * - hides itself (restoring native caret) over form fields
 * - expands over links/buttons; special state over lead CTAs
 */
export function CustomCursor() {
  const finePointer = usePointerType();
  const reduced = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabled = finePointer && !reduced;

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-active");
      return;
    }
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor-active");

    let x = -100;
    let y = -100;
    let ringX = -100;
    let ringY = -100;
    let state = "";
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      visible = true;
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") {
        state = "";
        return;
      }
      if (
        target.closest("input, textarea, select, [contenteditable='true']")
      ) {
        state = "hidden";
      } else if (target.closest("[data-cursor='lead']")) {
        state = "lead";
      } else if (target.closest("a, button, [role='button'], label")) {
        state = "link";
      } else if (target.closest("p, h1, h2, h3, h4, li, blockquote")) {
        state = "text";
      } else {
        state = "";
      }
    };

    const onLeaveWindow = () => {
      visible = false;
    };

    const loop = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      const hidden = !visible || state === "hidden";
      dot.style.opacity = hidden ? "0" : "1";
      ring.style.opacity = hidden ? "0" : "1";
      ring.setAttribute("data-state", hidden ? "" : state);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        onLeaveWindow
      );
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
