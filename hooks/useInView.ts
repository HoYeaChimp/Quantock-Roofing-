"use client";

import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver hook for scroll reveals.
 * Falls back to "in view" when IO is unavailable so content is never hidden.
 */
export function useInView<T extends HTMLElement>(
  rootMargin = "0px 0px -10% 0px",
  once = true
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return { ref, inView };
}
