"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  onToggleToast?: (message: string) => void;
}

export function ThemeToggle({ onToggleToast }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-white/5 animate-pulse" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    if (onToggleToast) {
      onToggleToast(nextTheme === "dark" ? "Modo Escuro ativado" : "Modo Claro ativado");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors btn-press focus:outline-none focus-visible:ring-2 focus-visible:ring-eco-500 cursor-pointer"
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
}
