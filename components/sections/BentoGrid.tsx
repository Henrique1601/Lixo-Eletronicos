"use client";

import { useSpotlight } from "@/hooks/useSpotlight";
import { categoriesData } from "@/data/categories";
import { Smartphone, Laptop, Tv, Cable, Check } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Laptop,
  Tv,
  Cable,
};

export function BentoGrid() {
  const { handleMouseMove } = useSpotlight();

  return (
    <section
      id="o-que-coletamos"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-eco-500 block mb-3">
            Guia de Triagem
          </span>
          <h2 className="section-title font-bold text-slate-900 dark:text-white tracking-tight">
            O Que É Lixo Eletrônico? <br className="hidden sm:inline" />
            Veja o que recolhemos.
          </h2>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
          São equipamentos quebrados, obsoletos ou sem uso que contêm placas, metais e circuitos. Não jogue
          na lixeira convencional!
        </p>
      </div>

      {/* Bento Grid com os 4 grupos do post original */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesData.map((category) => {
          const IconComponent = iconMap[category.iconName] || Smartphone;

          return (
            <div
              key={category.id}
              onMouseMove={handleMouseMove}
              className="bento-card p-7 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${category.badgeBg} ${category.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-eco-500 block mb-1">
                  {category.categoryNumber}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-eco-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-400">
                {category.footerNote}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
