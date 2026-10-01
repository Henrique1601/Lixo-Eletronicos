"use client";

import { WasteItem } from "@/types";
import { Smartphone, Cpu, Laptop, Cable, Tv, Printer } from "lucide-react";

interface WasteItemCardProps {
  item: WasteItem;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Cpu,
  Laptop,
  Cable,
  Tv,
  Printer,
};

export function WasteItemCard({
  item,
  quantity,
  onIncrement,
  onDecrement,
}: WasteItemCardProps) {
  const IconComponent = iconMap[item.iconName] || Smartphone;

  return (
    <div
      onClick={onIncrement}
      className={`item-card p-4 rounded-2xl border transition-colors cursor-pointer flex items-center justify-between ${
        quantity > 0
          ? "border-eco-500/60 bg-eco-500/[0.04] dark:bg-eco-500/[0.05]"
          : "border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] hover:border-eco-500/40"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            quantity > 0
              ? "bg-eco-500 text-slate-950 font-bold"
              : "bg-eco-500/10 text-eco-400"
          }`}
        >
          <IconComponent className="w-4 h-4" />
        </div>
        <div>
          <span className="text-sm font-semibold text-slate-900 dark:text-white block">
            {item.name}
          </span>
          <span className="text-[11px] text-slate-500 font-mono">
            {item.subtitle}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onDecrement}
          className="btn-qty-minus w-7 h-7 rounded-lg bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold hover:bg-eco-500 hover:text-slate-950 transition-colors cursor-pointer flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-eco-500"
          aria-label={`Diminuir quantidade de ${item.name}`}
        >
          -
        </button>
        <span className="item-qty font-mono text-sm font-bold w-4 text-center text-slate-900 dark:text-white">
          {quantity}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className="btn-qty-plus w-7 h-7 rounded-lg bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold hover:bg-eco-500 hover:text-slate-950 transition-colors cursor-pointer flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-eco-500"
          aria-label={`Aumentar quantidade de ${item.name}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
