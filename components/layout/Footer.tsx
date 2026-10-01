export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10 text-slate-500 text-xs font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-eco-500 flex items-center justify-center text-slate-950 font-bold text-[10px]">
            CE
          </div>
          <span>Chicão Eletrônicos • &copy; 2026. Preservando a Baixada Santista.</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span>Santos • São Vicente • Praia Grande • Cubatão • Guarujá</span>
        </div>

        <div className="text-[11px] text-eco-500 font-semibold">
          🌱 Descarte Correto, Futuro Melhor!
        </div>
      </div>
    </footer>
  );
}
