import { useRef } from "react";
import type { MouseEvent } from "react";

import { MoonIcon, SunIcon } from "@/components/icons";
import type { ThemeMode } from "@/types/portfolio";

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: (origin?: { x: number; y: number }) => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isLight = theme === "light";

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = event.clientX || (rect ? rect.left + rect.width / 2 : window.innerWidth / 2);
    const y = event.clientY || (rect ? rect.top + rect.height / 2 : window.innerHeight / 2);
    onToggle({ x, y });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-mode-button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={handleClick}
    >
      {isLight ? <MoonIcon className="lucide-icon" /> : <SunIcon className="lucide-icon" />}
    </button>
  );
}
