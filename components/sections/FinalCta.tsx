import { Recycle, PhoneCall } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t border-slate-200 dark:border-white/5">
      <div className="w-16 h-16 rounded-full bg-eco-500/10 text-eco-400 flex items-center justify-center mx-auto mb-6">
        <Recycle className="w-8 h-8" />
      </div>
      <h2 className="section-title font-bold text-slate-900 dark:text-white tracking-tight mb-4">
        Ligue para Chicão Eletrônicos
      </h2>
      <p className="text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto mb-8">
        Faça sua parte hoje mesmo. Separe seus aparelhos sem uso e mande uma mensagem agora mesmo no
        WhatsApp.
      </p>

      <div className="inline-flex flex-col sm:flex-row items-center gap-4">
        <a
          href="https://wa.me/5513991315054?text=Ol%C3%A1%20Chic%C3%A3o%20Eletr%C3%B4nicos!%20Quero%20agendar%20uma%20coleta."
          target="_blank"
          rel="noopener noreferrer"
          className="px-9 py-4 rounded-full bg-eco-500 hover:bg-eco-400 text-slate-950 font-extrabold text-base flex items-center gap-3 shadow-eco-btn btn-press cursor-pointer"
        >
          <PhoneCall className="w-5 h-5" />
          <span>(13) 99131-5054</span>
        </a>
      </div>
      <p className="text-xs font-mono text-slate-500 mt-4">
        Descarte consciente é responsabilidade de todos.
      </p>
    </section>
  );
}
