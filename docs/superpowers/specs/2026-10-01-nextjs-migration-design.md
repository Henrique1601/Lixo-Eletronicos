# Especificação Técnica de Design: Migração para Next.js 15 (App Router)

- **Projeto:** Chicão Eletrônicos — Landing Page Eco-Tech
- **Data:** 01 de Outubro de 2026
- **Status:** Aprovado em Brainstorming
- **Autor / Agente:** Antigravity (Skills Orchestrator)

---

## 1. Contexto e Motivação

O projeto atual da **Chicão Eletrônicos** reside em um arquivo monólito HTML (`index.html`) com 1.157 linhas, utilizando Tailwind CSS e Lucide Icons via CDN (tempo de execução). Embora visualmente sofisticado e funcional, o monólito apresenta débitos técnicos significativos:

1. **Desempenho de Carga (LCP/CLS):** O runtime JIT do Tailwind via CDN adiciona centenas de kilobytes e reflows no carregamento inicial.
2. **SEO Orgânico Limitado:** Por ser uma landing page estática sem otimizações automáticas de metadados dinâmicos, Open Graph estruturado e fontes locais pré-carregadas, perde relevância em buscas locais no Google para a Baixada Santista (DDD 13).
3. **Falta de Modularidade:** Lógica de negócio (cálculo de impacto ambiental, gerador de payloads do WhatsApp, controle de tema e acordeão) acoplada diretamente à árvore do DOM.

### Metas da Migração
- Converter a base para **Next.js 15 (App Router)** com **TypeScript** e **Tailwind CSS**.
- Preservar 100% da identidade visual, textos, micro-interações e taxas de conversão (WhatsApp direto `(13) 99131-5054`).
- Obter pontuação 98-100 no Google Lighthouse (Performance, Acessibilidade, Melhores Práticas e SEO).
- Componentizar a interface em módulos limpos, testáveis e de fácil manutenção.

---

## 2. Arquitetura do Sistema e Estrutura de Pastas

```
Lixo-Eletronicos/
├── app/
│   ├── layout.tsx             # Root layout, metadados globais, next/font e ThemeProvider
│   ├── page.tsx               # Server Component que compõe todas as seções
│   └── globals.css            # Diretivas do Tailwind e variáveis CSS dos temas
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # 'use client' - Pill nav flutuante, menu mobile e tema
│   │   ├── Footer.tsx         # Rodapé institucional ecológico
│   │   └── FloatingWhatsapp.tsx # Botão flutuante inferior com pulso beacon
│   ├── sections/
│   │   ├── HeroSection.tsx    # Headline, métricas de impacto e CTAs principais
│   │   ├── BentoGrid.tsx      # 'use client' - 4 grupos de e-waste com spotlight dinâmico
│   │   ├── WhyRecycle.tsx     # Conscientização (metais pesados, economia circular)
│   │   ├── HowItWorks.tsx     # 3 passos do descarte simples
│   │   ├── CorporateCallout.tsx # Banner B2B para condomínios e empresas
│   │   ├── FaqSection.tsx     # 'use client' - Accordion de dúvidas frequentes
│   │   └── FinalCta.tsx       # Chamada direta para o WhatsApp
│   ├── calculator/
│   │   ├── WasteCalculator.tsx# 'use client' - Seletor de descarte consciente
│   │   ├── WasteItemCard.tsx  # Card individual de item com botões (+ / -)
│   │   └── ImpactBanner.tsx   # Painel com cálculo de litros de água poupados
│   └── ui/
│       ├── ThemeToggle.tsx    # Alternador de tema dark/light
│       └── Toast.tsx          # Notificação flutuante de feedback
├── hooks/
│   ├── useSpotlight.ts        # Cálculo vetorial de coordenadas do cursor para o card
│   └── useWasteCalculator.ts  # Estado reativo dos itens e gerador de mensagem WhatsApp
├── data/
│   ├── categories.ts          # Definição e textos dos 4 grupos de e-waste
│   ├── wasteItems.ts          # Catálogo dos 6 itens selecionáveis da calculadora
│   └── faq.ts                 # Perguntas e respostas do FAQ
├── types/
│   └── index.ts               # Interfaces TypeScript para itens, categorias e FAQ
└── public/
    └── favicon.svg            # Favicon ecológico SVG
```

---

## 3. Especificação dos Módulos e Componentes

### 3.1. Dados e Tipagem (`types/index.ts`)
```typescript
export interface WasteItem {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  category: 'smartphones' | 'computers' | 'tvs' | 'cables' | 'others';
}

export interface WasteCategory {
  id: string;
  title: string;
  categoryNumber: string;
  description: string;
  bulletPoints: string[];
  footerNote: string;
  icon: string;
  colorTheme: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
```

### 3.2. Seletor de Descarte Consciente (`components/calculator/`)
- **`useWasteCalculator`:**
  - Armazena as quantidades em `items: Record<string, number>`.
  - Métodos: `increment(id: string)`, `decrement(id: string)`, `reset()`.
  - Propriedades computadas:
    - `totalCount`: soma de todas as unidades selecionadas.
    - `waterSaved`: `totalCount * 5000` (litros de água poupados de contaminação).
    - `whatsappMessage`: texto pré-formatado e codificado via `encodeURIComponent` para envio ao número `5513991315054`.
  - Exemplo do payload gerado:
    > "Olá Chicão Eletrônicos! Gostaria de agendar o descarte ecológico dos seguintes itens:\n- 2x Celulares / Tablets\n- 1x Computadores / Gabinetes\n\nComo podemos combinar a coleta na Baixada Santista?"

### 3.3. Bento Grid com Efeito Spotlight (`components/sections/BentoGrid.tsx`)
- Utiliza o hook `useSpotlight` para monitorar o evento `mousemove` localmente em cada cartão.
- Define as variáveis de estilo CSS `--mouse-x` e `--mouse-y` diretamente no elemento `div`, renderizando um gradiente radial suave (`rgba(16, 185, 129, 0.08)`) que acompanha o cursor sem re-renderizações desnecessárias.

### 3.4. Tema Dark/Light & Design System
- Padrão: **Dark Mode** (`#070A08` background, `#0E1410` card).
- Suporte a **Light Mode** (`#F6F9F6` background, `#FFFFFF` card).
- Acentos ecológicos: Verde Esmeralda (`#10b981`, `#059669`).
- Tipografia via `next/font/google`:
  - `Plus Jakarta Sans` para corpo e interface.
  - `Instrument Serif` (itálico) para contrastes editoriais humanizados.
  - `JetBrains Mono` para dados técnicos, números e badges.

---

## 4. Tratamento de Erros e Resiliência

1. **Hydration Seguro:** Utilização de `next-themes` ou flag de montagem (`isMounted`) para evitar discrepâncias de tema entre o SSR do servidor e o `localStorage` do cliente.
2. **Fallback da Área de Transferência:** Ao copiar o telefone `(13) 99131-5054`, se `navigator.clipboard` for bloqueado por política de segurança do navegador, a interface aciona um fallback seguro via elemento temporário e abre o link `tel:13991315054`.
3. **Codificação Segura de Links:** Parâmetros de mensagem do WhatsApp são sanitizados com `encodeURIComponent`, garantindo compatibilidade entre navegadores desktop e aplicativos mobile do WhatsApp.

---

## 5. Acessibilidade (WCAG 2.2)

- Todos os elementos interativos possuem indicadores visuais de foco acessíveis (`focus-visible:ring-2 focus-visible:ring-eco-500`).
- O acordeão de dúvidas comuns adota a semântica WAI-ARIA com botões controlando os atributos `aria-expanded` e `aria-controls`.
- Notificações Toast utilizam `role="status"` e `aria-live="polite"`.
- Suporte completo à diretiva de acessibilidade `@media (prefers-reduced-motion: reduce)`.

---

## 6. Critérios de Aceite e Verificação

- [ ] Instalação e configuração de Next.js 15, React 19, TypeScript e Tailwind CSS executada com sucesso.
- [ ] Todos os 4 componentes interativos (Seletor, Spotlight, Accordion, ThemeToggle) funcionando exatamente como no HTML original.
- [ ] Geração dinâmica correta dos links do WhatsApp `(13) 99131-5054` com lista de itens selecionados e cálculo de litros de água.
- [ ] Zero erros de compilação no TypeScript (`tsc --noEmit`).
- [ ] Build de produção (`npm run build` ou `npx next build`) finalizado com sucesso sem warnings impeditivos.
- [ ] Navegação totalmente responsiva (mobile, tablet, desktop).
