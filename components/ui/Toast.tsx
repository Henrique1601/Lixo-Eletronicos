"use client";

import { CheckCircle2, Info } from "lucide-react";

export interface ToastMessage {
  id: string;
  text: string;
  type?: "info" | "success";
}

interface ToastProps {
  toasts: ToastMessage[];
}

export function ToastContainer({ toasts }: ToastProps) {
  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-20 right-6 z-50 flex flex-col gap-2 pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 dark:bg-[#0E1410]/95 backdrop-blur-md border border-eco-500/20 shadow-2xl text-white text-xs font-mono transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <Info className="w-4 h-4 text-eco-400 shrink-0" />
          )}
          <span>{toast.text}</span>
        </div>
      ))}
    </div>
  );
}
