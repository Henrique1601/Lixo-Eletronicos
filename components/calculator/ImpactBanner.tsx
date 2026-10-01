import { Leaf, Send } from "lucide-react";

interface ImpactBannerProps {
  totalCount: number;
  waterSaved: number;
  whatsappUrl: string;
}

export function ImpactBanner({
  totalCount,
  waterSaved,
  whatsappUrl,
}: ImpactBannerProps) {
  return (
    <div className="p-6 rounded-2xl bg-eco-500/10 border border-eco-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 text-eco-400 text-xs font-mono uppercase tracking-wider mb-1">
          <Leaf className="w-4 h-4" />
          <span>Impacto Positivo Estimado:</span>
        </div>
        <p className="text-base font-bold text-slate-900 dark:text-white">
          {totalCount === 0 ? (
            "Selecione os itens acima para calcular seu impacto ecológico."
          ) : (
            <>
              Você está evitando a contaminação de{" "}
              <span className="text-eco-400 font-mono font-bold">
                +{waterSaved.toLocaleString("pt-BR")}L
              </span>{" "}
              de lençol freático e praias!
            </>
          )}
        </p>
        <span className="text-xs text-slate-500 font-mono">
          {totalCount} {totalCount === 1 ? "item selecionado" : "itens selecionados"}
        </span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-eco-btn btn-press whitespace-nowrap cursor-pointer transition-all"
      >
        <Send className="w-4 h-4" />
        <span>Enviar Lista no WhatsApp (13) 99131-5054</span>
      </a>
    </div>
  );
}
