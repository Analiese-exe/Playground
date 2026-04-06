import { useCallback, useEffect, useState } from "react";

import type { ThemeMode } from "@/types/portfolio";

interface ThemeTransitionState {
  active: boolean;
  nextTheme: ThemeMode;
  originX: string;
  originY: string;
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [transition, setTransition] = useState<ThemeTransitionState | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Ignore storage errors and keep the current theme in memory.
    }
  }, [theme]);

  useEffect(() => {
    if (!transition?.active) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setTransition((current) => (current ? { ...current, active: false } : current));
    }, 780);

    return () => window.clearTimeout(timer);
  }, [transition]);

  const toggleTheme = useCallback(
    (origin?: { x: number; y: number }) => {
      const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";

      setTransition({
        active: true,
        nextTheme,
        originX: origin ? `${origin.x}px` : "50%",
        originY: origin ? `${origin.y}px` : "50%"
      });
      setTheme(nextTheme);
    },
    [theme]
  );

  return {
    theme,
    isLight: theme === "light",
    toggleTheme,
    transition
  };
}
