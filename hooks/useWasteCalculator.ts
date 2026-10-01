"use client";

import { useState, useMemo, useCallback } from "react";
import { wasteItemsData } from "@/data/wasteItems";

const WHATSAPP_NUMBER = "5513991315054";

export function useWasteCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    wasteItemsData.forEach((item) => {
      initial[item.id] = 0;
    });
    return initial;
  });

  const increment = useCallback((id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }, []);

  const decrement = useCallback((id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  }, []);

  const reset = useCallback(() => {
    const resetValues: Record<string, number> = {};
    wasteItemsData.forEach((item) => {
      resetValues[item.id] = 0;
    });
    setQuantities(resetValues);
  }, []);

  const totalCount = useMemo(() => {
    return Object.values(quantities).reduce((acc, curr) => acc + curr, 0);
  }, [quantities]);

  const waterSaved = useMemo(() => {
    return totalCount * 5000;
  }, [totalCount]);

  const whatsappUrl = useMemo(() => {
    if (totalCount === 0) {
      const defaultText =
        "Olá Chicão Eletrônicos! Gostaria de agendar uma coleta de lixo eletrônico.";
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
    }

    const itemsList: string[] = [];
    wasteItemsData.forEach((item) => {
      const count = quantities[item.id] || 0;
      if (count > 0) {
        itemsList.push(`${count}x ${item.name}`);
      }
    });

    const msg = `Olá Chicão Eletrônicos! Gostaria de agendar o descarte ecológico dos seguintes itens:\n- ${itemsList.join(
      "\n- "
    )}\n\nComo podemos combinar a coleta na Baixada Santista?`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [quantities, totalCount]);

  return {
    quantities,
    increment,
    decrement,
    reset,
    totalCount,
    waterSaved,
    whatsappUrl,
  };
}
