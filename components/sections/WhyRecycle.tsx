import { AlertTriangle, RefreshCw, ShieldCheck } from "lucide-react";

export function WhyRecycle() {
  return (
    <section
      id="por-que-descartar"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-eco-500 block mb-3">
          Conscientização Urgente
        </span>
        <h2 className="section-title font-bold text-slate-900 dark:text-white tracking-tight">
          Pequenas atitudes, <br className="hidden sm:inline" />
          grandes transformações.
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
          Cuidar hoje garante o amanhã. Preserve os manguezais, canais e praias da Baixada Santista.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Perigo 1: Metais Pesados */}
        <div className="bento-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-500 mb-2 block">
              O RISCO INVISÍVEL
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Contaminação por Metais Pesados
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Equipamentos jogados no lixo comum liberam Chumbo, Mercúrio e Cádmio no solo. Esses compostos
              tóxicos não se decompõem e contaminam a água e a fauna marinha.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-xs font-mono text-red-400">
            1 bateria contamina até 50.000L de água
          </div>
        </div>

        {/* Perigo 2: Economia Circular */}
        <div className="bento-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-eco-500/10 text-eco-400 flex items-center justify-center mb-6">
              <RefreshCw className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-500 mb-2 block">
              ECONOMIA CIRCULAR
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Recuperação de Minerais Raros
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Ao reciclar com a Chicão Eletrônicos, materiais como cobre, alumínio, ouro industrial e
              polímeros nobres voltam para a indústria, reduzindo a mineração predatória.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-xs font-mono text-eco-400">
            Aproveitamento sustentável de 98%
          </div>
        </div>

        {/* Perigo 3: Responsabilidade Social */}
        <div className="bento-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-500 mb-2 block">
              DESTINAÇÃO RESPONSÁVEL
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Compromisso com o Litoral
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Descarte consciente é responsabilidade de todos nós. Garantimos que nenhum componente coletado
              seja destinado a lixões clandestinos ou terrenos baldios.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-xs font-mono text-blue-400">
            Atendimento ético e pontual
          </div>
        </div>
      </div>
    </section>
  );
}
