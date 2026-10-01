"use client";

import { useCallback } from "react";

export function useSpotlight() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const currentTarget = e.currentTarget;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return { handleMouseMove };
}
