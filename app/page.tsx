"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsapp } from "@/components/layout/FloatingWhatsapp";
import { HeroSection } from "@/components/sections/HeroSection";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { WasteCalculator } from "@/components/calculator/WasteCalculator";
import { WhyRecycle } from "@/components/sections/WhyRecycle";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CorporateCallout } from "@/components/sections/CorporateCallout";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { ToastContainer, ToastMessage } from "@/components/ui/Toast";

export default function Home() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string, type: "info" | "success" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const handleCopyPhone = useCallback(() => {
    const phone = "(13) 99131-5054";
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText("13991315054")
        .then(() => {
          showToast(`Telefone do Chicão copiado: ${phone}`, "success");
        })
        .catch(() => {
          showToast(`Ligue para: ${phone}`, "info");
        });
    } else {
      showToast(`Ligue para: ${phone}`, "info");
    }
  }, [showToast]);

  return (
    <>
      {/* Background Ambient Glow */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* 1. Header / Navbar Flutuante */}
      <Navbar onToast={showToast} />

      {/* Conteúdo Principal */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onCopyPhone={handleCopyPhone} />

        {/* 3. Bento Grid - O Que Coletamos */}
        <BentoGrid />

        {/* 4. Calculadora / Seletor Consciente */}
        <WasteCalculator />

        {/* 5. Por Que Descartar (Impacto Ambiental) */}
        <WhyRecycle />

        {/* 6. Como Funciona (3 Passos) */}
        <HowItWorks />

        {/* 7. Banner B2B / Corporativo */}
        <CorporateCallout />

        {/* 8. FAQ Dúvidas Comuns */}
        <FaqSection />

        {/* 9. CTA Final */}
        <FinalCta />
      </main>

      {/* 10. Footer Institucional */}
      <Footer />

      {/* Botão Flutuante Persistente de WhatsApp */}
      <FloatingWhatsapp />

      {/* Sistema de Toasts */}
      <ToastContainer toasts={toasts} />
    </>
  );
}
