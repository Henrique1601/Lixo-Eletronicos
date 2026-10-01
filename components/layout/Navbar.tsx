"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface NavbarProps {
  onToast?: (message: string, type?: "info" | "success") => void;
}

export function Navbar({ onToast }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-slate-950/80 dark:bg-[#080C0A]/85 backdrop-blur-xl border border-white/10 dark:border-eco-500/20 shadow-2xl shadow-black/40 text-slate-100 transition-all duration-300">
        
        {/* Brand Logo / Monogram */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-eco-500 rounded-full"
          aria-label="Página Inicial - Chicão Eletrônicos"
          onClick={closeMobileMenu}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-eco-600 to-emerald-400 flex items-center justify-center text-slate-950 font-bold text-sm tracking-tight shadow-md shadow-eco-500/30 group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-5 h-5 text-slate-950"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
              <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
              <path d="m14 16-3 3 3 3" />
              <path d="M8.294 4.5h7.412a1.83 1.83 0 0 1 1.57.881 1.785 1.785 0 0 1 .004 1.784L13.33 13" />
              <path d="m10 8 3-3-3-3" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm text-white tracking-tight">CHICÃO ELETRÔNICOS</span>
            <span className="text-[11px] text-eco-400 font-mono tracking-wide hidden sm:block">
              Descarte Consciente • DDD 13
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <Link href="#o-que-coletamos" className="hover:text-eco-400 transition-colors duration-150 py-1">
            O Que Coletamos
          </Link>
          <Link href="#calculadora" className="hover:text-eco-400 transition-colors duration-150 py-1">
            Seletor de Descarte
          </Link>
          <Link href="#por-que-descartar" className="hover:text-eco-400 transition-colors duration-150 py-1">
            Impacto Ambiental
          </Link>
          <Link href="#como-funciona" className="hover:text-eco-400 transition-colors duration-150 py-1">
            Como Funciona
          </Link>
          <Link href="#faq" className="hover:text-eco-400 transition-colors duration-150 py-1">
            Dúvidas
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle onToggleToast={(msg) => onToast && onToast(msg, "info")} />

          {/* CTA Principal WhatsApp */}
          <a
            href="https://wa.me/5513991315054?text=Ol%C3%A1%20Chic%C3%A3o%20Eletr%C3%B4nicos!%20Vi%20sua%20landing%20page%20e%20gostaria%20de%20agendar%20o%20descarte%20de%20alguns%20eletr%C3%B4nicos."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold text-xs btn-press shadow-md shadow-eco-500/25 transition-all"
          >
            <span>Agendar Coleta</span>
            <MessageCircle className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu mobile" : "Abrir menu mobile"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-5 rounded-3xl bg-[#090E0B]/95 backdrop-blur-2xl border border-eco-500/20 shadow-2xl text-slate-200 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <Link
              href="#o-que-coletamos"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              O Que Coletamos
            </Link>
            <Link
              href="#calculadora"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Seletor de Descarte
            </Link>
            <Link
              href="#por-que-descartar"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Impacto Ambiental
            </Link>
            <Link
              href="#como-funciona"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Como Funciona
            </Link>
            <Link
              href="#faq"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              Perguntas Frequentes
            </Link>
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://wa.me/5513991315054?text=Ol%C3%A1%20Chic%C3%A3o%20Eletr%C3%B4nicos!%20Gostaria%20de%20agendar%20uma%20coleta."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full py-3 rounded-xl bg-eco-500 text-slate-950 font-bold text-center text-sm btn-press flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp (13) 99131-5054</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
