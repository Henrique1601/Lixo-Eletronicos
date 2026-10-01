"use client";

import Link from "next/link";
import { MessageCircle, SlidersHorizontal, Phone } from "lucide-react";

interface HeroSectionProps {
  onCopyPhone: () => void;
}

export function HeroSection({ onCopyPhone }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Live Status Regional Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-eco-500/10 border border-eco-500/20 text-xs font-mono text-eco-400 mb-8 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-eco-500"></span>
          </span>
          <span className="font-medium text-eco-300">Coleta Ativa na Baixada Santista</span>
          <span className="text-eco-600">•</span>
          <span className="text-slate-300 hidden sm:inline">DDD (13) 99131-5054</span>
        </div>

        {/* Headline Principal com o mote do cartaz */}
        <h1 className="hero-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-7">
          Descarte correto. <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-eco-500 dark:text-eco-400">
            Futuro melhor
          </span>{" "}
          para o planeta.
        </h1>

        {/* Subheadline reforçando a mensagem central da imagem */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
          O lixo eletrônico descartado incorretamente contamina o solo, os canais de água e o ar. A{" "}
          <strong className="text-slate-900 dark:text-white">Chicão Eletrônicos</strong> garante a destinação
          ecológica e responsável de computadores, celulares, cabos, baterias e periféricos em toda a Baixada
          Santista.
        </p>

        {/* CTAs de Ação Imediata */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-14">
          
          {/* Botão WhatsApp Principal com número do cartaz */}
          <a
            href="https://wa.me/5513991315054?text=Ol%C3%A1%20Chic%C3%A3o%20Eletr%C3%B4nicos!%20Gostaria%20de%20agendar%20uma%20coleta%20de%20lixo%20eletr%C3%B4nico."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-eco-500 hover:bg-eco-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-eco-btn btn-press cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chamar Chicão no WhatsApp</span>
          </a>

          {/* Botão Seletor Interativo */}
          <Link
            href="#calculadora"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-200 dark:bg-white/[0.06] hover:bg-slate-300 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 font-medium text-sm flex items-center justify-center gap-2 btn-press"
          >
            <span>Montar Lista de Descarte</span>
            <SlidersHorizontal className="w-4 h-4 text-eco-400" />
          </Link>

          {/* Copiar Telefone com Feedback Toast */}
          <button
            type="button"
            onClick={onCopyPhone}
            className="w-full sm:w-auto px-4 py-3.5 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent font-mono text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            title="Copiar telefone para ligar"
          >
            <Phone className="w-3.5 h-3.5 text-eco-500" />
            <span>(13) 99131-5054</span>
          </button>
        </div>

        {/* Barra de Métricas de Impacto & Social Proof */}
        <div className="w-full max-w-4xl pt-10 border-t border-slate-200 dark:border-eco-500/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              +15 Toneladas
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              E-Waste Destinado
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-eco-500 dark:text-eco-400 tracking-tight">
              100% Ecológico
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              Zero Contaminação
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              6 Cidades
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              Baixada Santista
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              R$ 0,00
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              Coleta Domiciliar
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
