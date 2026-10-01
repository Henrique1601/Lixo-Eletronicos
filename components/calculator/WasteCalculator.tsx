"use client";

import { useWasteCalculator } from "@/hooks/useWasteCalculator";
import { wasteItemsData } from "@/data/wasteItems";
import { WasteItemCard } from "./WasteItemCard";
import { ImpactBanner } from "./ImpactBanner";

export function WasteCalculator() {
  const {
    quantities,
    increment,
    decrement,
    totalCount,
    waterSaved,
    whatsappUrl,
  } = useWasteCalculator();

  return (
    <section
      id="calculadora"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      <div className="bento-card p-8 sm:p-12 border-eco-500/30 shadow-eco-glow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-eco-500/10 text-eco-400 border border-eco-500/20 uppercase tracking-widest font-semibold inline-block mb-3">
            Ferramenta Interativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Seletor de Descarte Consciente
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Clique nos itens que você tem em casa ou na sua empresa. Criamos a mensagem formatada para você
            enviar direto no WhatsApp do Chicão!
          </p>
        </div>

        {/* Grid de Itens Selecionáveis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {wasteItemsData.map((item) => (
            <WasteItemCard
              key={item.id}
              item={item}
              quantity={quantities[item.id] || 0}
              onIncrement={() => increment(item.id)}
              onDecrement={() => decrement(item.id)}
            />
          ))}
        </div>

        {/* Painel de Resumo & Disparo de WhatsApp */}
        <ImpactBanner
          totalCount={totalCount}
          waterSaved={waterSaved}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </section>
  );
}
