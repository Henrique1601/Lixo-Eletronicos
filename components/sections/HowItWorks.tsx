export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-eco-500 block mb-3">
          Faça Sua Parte
        </span>
        <h2 className="section-title font-bold text-slate-900 dark:text-white tracking-tight">
          Como agendar o descarte <br className="hidden sm:inline" />
          em 3 passos práticos.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Passo 1 */}
        <div className="p-8 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
          <div className="text-4xl font-serif italic text-eco-500 mb-4">01</div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Separe seus Eletrônicos
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Reúna em uma caixa os computadores, celulares velhos, cabos embolados e peças quebradas que você
            tem guardadas.
          </p>
          <span className="block mt-5 text-[11px] font-mono text-eco-500">
            Dica: não jogue no lixo comum!
          </span>
        </div>

        {/* Passo 2 */}
        <div className="p-8 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
          <div className="text-4xl font-serif italic text-eco-500 mb-4">02</div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Chame no WhatsApp
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Envie uma foto ou descreva brevemente os aparelhos para o WhatsApp{" "}
            <strong className="text-slate-900 dark:text-white">(13) 99131-5054</strong> do Chicão.
          </p>
          <span className="block mt-5 text-[11px] font-mono text-eco-500">
            Atendimento rápido e direto
          </span>
        </div>

        {/* Passo 3 */}
        <div className="p-8 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
          <div className="text-4xl font-serif italic text-eco-500 mb-4">03</div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Coleta na Sua Porta
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Agendamos o melhor dia e horário para a retirada na sua residência, condomínio ou empresa em toda
            a Baixada Santista.
          </p>
          <span className="block mt-5 text-[11px] font-mono text-eco-500">
            Sem complicação e sem custo
          </span>
        </div>
      </div>
    </section>
  );
}
