import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <aside aria-label="Acesso rápido ao WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href="https://wa.me/5513991315054?text=Ol%C3%A1%20Chic%C3%A3o!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20coleta%20de%20eletr%C3%B4nicos."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold text-xs shadow-2xl shadow-eco-500/40 btn-press focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
        </span>
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Chamar Chicão</span>
      </a>
    </aside>
  );
}
