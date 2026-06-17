"use client";

import { useEffect, useState } from "react";

/** True only on devices with hover + a fine pointer (desktop mouse/trackpad). */
export function usePointerType(): boolean {
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setFinePointer(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return finePointer;
}
