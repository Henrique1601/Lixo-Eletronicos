# 🌿 Chicão Eletrônicos — Landing Page Eco-Tech (Next.js 15 App Router)

Landing page institucional e de alta conversão para coleta e destinação ambientalmente responsável de lixo eletrônico (**E-Waste**), baseada no cartaz da **Chicão Eletrônicos** (Baixada Santista, DDD 13).

Construída e orquestrada pelo **Agente Mestre (Skills Orchestrator)** no conceito *Apple Environment / Stripe Climate*, migrada de monólito HTML para **Next.js 15 + React 19 + TypeScript + Tailwind CSS**.

---

## 📱 Dados Centrais do Negócio (Extraídos do Cartaz)

* **Marca:** Chicão Eletrônicos
* **WhatsApp / Telefone Direto:** `(13) 99131-5054`
* **Região de Atuação:** DDD 13 — Baixada Santista (Santos, São Vicente, Praia Grande, Cubatão, Guarujá, etc.)
* **Slogan:** *"Descarte Correto, Futuro Melhor!"*
* **Mote Ecológico:** *"Pequenas atitudes, grandes transformações. Cuidar hoje garante o amanhã. Não jogue no lixo comum!"*

---

## 🚀 Arquitetura & Stack Tecnológica

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org) + [React 19](https://react.dev)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org) com tipagem estrita
* **Estilização:** [Tailwind CSS](https://tailwindcss.com) com variáveis CSS e paleta botânica personalizada
* **Ícones:** [Lucide React](https://lucide.dev) com tree-shaking
* **Tema:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark Mode nativo e suporte a Light Mode)
* **Fontes:** `next/font/google` com *Plus Jakarta Sans*, *Instrument Serif* e *JetBrains Mono*

---

## 📂 Estrutura Modular do Projeto

```
Lixo-Eletronicos/
├── app/
│   ├── layout.tsx             # Root Layout (fontes locais via next/font, metadata SEO DDD 13, tema)
│   ├── page.tsx               # Server Component orquestrando as seções
│   └── globals.css            # Tailwind compilado e variáveis CSS de tema (dark/light)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # 'use client' - Cápsula flutuante, mobile menu e alternador de tema
│   │   ├── Footer.tsx         # Rodapé institucional e cidades atendidas
│   │   └── FloatingWhatsapp.tsx # Botão flutuante inferior com animação beacon
│   ├── sections/
│   │   ├── HeroSection.tsx    # Headline, métricas de impacto e CTAs principais
│   │   ├── BentoGrid.tsx      # 'use client' - Cards de categorias com spotlight dinâmico
│   │   ├── WhyRecycle.tsx     # Conscientização (metais pesados, economia circular)
│   │   ├── HowItWorks.tsx     # 3 passos do agendamento
│   │   ├── CorporateCallout.tsx # Banner B2B para condomínios e empresas
│   │   ├── FaqSection.tsx     # 'use client' - Accordion acessível
│   │   └── FinalCta.tsx       # Chamada direta para o WhatsApp
│   ├── calculator/
│   │   ├── WasteCalculator.tsx# 'use client' - Seletor interativo de descarte
│   │   ├── WasteItemCard.tsx  # Card individual com controle numérico (+ / -)
│   │   └── ImpactBanner.tsx   # Cálculo em tempo real dos litros de água poupados
│   └── ui/
│       ├── ThemeToggle.tsx    # Alternador de tema acessível
│       └── Toast.tsx          # Notificação toast estilo Sonner
├── hooks/
│   ├── useSpotlight.ts        # Coordenadas do mouse para iluminação radial
│   └── useWasteCalculator.ts  # Estado reativo dos itens e geração do link do WhatsApp
├── data/
│   ├── categories.ts          # Dados dos 4 grupos de e-waste recolhidos
│   ├── wasteItems.ts          # Catálogo de itens do seletor consciente
│   └── faq.ts                 # Perguntas e respostas do FAQ
├── types/
│   └── index.ts               # Contratos e interfaces TypeScript
└── legacy/
    └── index.html             # Arquivo HTML original preservado para referência
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
* Node.js 18+ (recomendado Node 20+)
* npm, yarn ou pnpm

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção
```bash
npm run build
npm run start
```

---

## 📄 Documentação do Orquestrador de Skills

* **Especificação Técnica (Design Spec):** [`docs/superpowers/specs/2026-10-01-nextjs-migration-design.md`](docs/superpowers/specs/2026-10-01-nextjs-migration-design.md)
* **Plano de Implementação:** [`docs/superpowers/plans/2026-10-01-nextjs-migration-plan.md`](docs/superpowers/plans/2026-10-01-nextjs-migration-plan.md)
