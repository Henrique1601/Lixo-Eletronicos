"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-eco-500 block mb-3">
          Dúvidas Comuns
        </span>
        <h2 className="section-title font-bold text-slate-900 dark:text-white tracking-tight">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.02] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-eco-500 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-base font-semibold text-slate-900 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-eco-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5 pt-4 animate-in fade-in duration-200"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
