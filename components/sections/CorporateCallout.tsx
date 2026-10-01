import { Building2 } from "lucide-react";

export function CorporateCallout() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bento-card p-8 sm:p-12 bg-gradient-to-r from-eco-950/40 to-slate-950/60 border-eco-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-eco-500/10 text-eco-400 border border-eco-500/20 uppercase tracking-widest font-semibold inline-block mb-3">
            Para Empresas, Condomínios & Escolas
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Tem grande volume de lixo eletrônico?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Realizamos mutirões ecológicos e coletas em lote para prédios residenciais, escritórios de
            contabilidade, agências, escolas e indústrias da Baixada Santista.
          </p>
        </div>
        <a
          href="https://wa.me/5513991315054?text=Ol%C3%A1%20Chic%C3%A3o!%20Represento%20uma%20empresa/condom%C3%ADnio%20e%20gostaria%20de%20agendar%20uma%20coleta%20de%20eletr%C3%B4nicos%20em%20volume."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold text-sm btn-press whitespace-nowrap shadow-eco-btn flex items-center gap-2 cursor-pointer"
        >
          <Building2 className="w-4 h-4" />
          <span>Agendar Coleta Corporativa</span>
        </a>
      </div>
    </section>
  );
}
