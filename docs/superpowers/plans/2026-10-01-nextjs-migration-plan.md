# Plano de Implementação: Migração para Next.js 15 (App Router)

- **Documento de Design:** [docs/superpowers/specs/2026-10-01-nextjs-migration-design.md](file:///c:/Users/henri/Programacao/Projetos/Lixo-Eletronicos/docs/superpowers/specs/2026-10-01-nextjs-migration-design.md)
- **Data:** 01 de Outubro de 2026
- **Status:** Pronto para Execução
- **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, next-themes

---

## Fase 1: Setup do Ambiente Next.js 15 & Dependências

- [ ] **Tarefa 1.1: Instalação e Atualização das Dependências**
  - Instalar `next`, `react`, `react-dom`, `typescript`, `@types/react`, `@types/node`, `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `next-themes`, `clsx`, `tailwind-merge`.
  - Atualizar `package.json` com scripts padrão (`dev`, `build`, `start`, `lint`).
  - *Critério de Verificação:* `npm run build` ou `npx next --version` reconhece Next.js 15.

- [ ] **Tarefa 1.2: Configurações de Compilação & Tailwind**
  - Configurar `tsconfig.json` com paths aliases (`@/*`).
  - Configurar `next.config.ts`.
  - Configurar `tailwind.config.ts` com a paleta botânica (`eco-50`, `eco-500`, `eco-600`, etc.), cores de superfície (`surface-dark`, `surface-darkCard`, `surface-light`, etc.) e sombras personalizadas (`eco-glow`, `eco-btn`).
  - Criar `app/globals.css` com as diretivas `@tailwind`, estilos globais, variáveis CSS de tema e classes de animação (`bento-card`, `btn-press`).
  - *Critério de Verificação:* Tailwind compila sem erros de sintaxe.

- [ ] **Tarefa 1.3: Otimização de Tipografia & Root Layout**
  - Configurar `app/layout.tsx` importando fontes via `next/font/google`:
    - `Plus Jakarta Sans` (sans)
    - `Instrument Serif` (serif itálico)
    - `JetBrains Mono` (mono)
  - Configurar metadados globais (Title, Description, Open Graph regional DDD 13, icons).
  - Integrar `ThemeProvider` (`next-themes`) com suporte a Dark Mode por classe (`class="dark"`).
  - *Critério de Verificação:* Renderização inicial de página básica sem warnings de hydration.

---

## Fase 2: Modelagem de Tipos, Dados e Lógica de Negócio (Hooks)

- [ ] **Tarefa 2.1: Definição de Interfaces TypeScript**
  - Criar `types/index.ts` contendo:
    - `WasteItem` (itens do seletor)
    - `WasteCategory` (categorias da Bento Grid)
    - `FaqItem` (perguntas e respostas)
  - *Critério de Verificação:* Tipos exportados e validados pelo compilador.

- [ ] **Tarefa 2.2: Catálogos de Dados Estáticos**
  - Criar `data/categories.ts` (Celulares, Computadores, TVs, Cabos com descrições e bullet points extraídos do cartaz).
  - Criar `data/wasteItems.ts` (Celulares, Computadores, Notebooks, Cabos, TVs, Outros).
  - Criar `data/faq.ts` (5 perguntas frequentes respondidas).
  - *Critério de Verificação:* Arquivos de dados tipados e imutáveis.

- [ ] **Tarefa 2.3: Hook `useWasteCalculator`**
  - Criar `hooks/useWasteCalculator.ts`.
  - Implementar gerenciamento de estado para quantidades por item.
  - Implementar cálculo da economia de água (`totalItems * 5000` litros).
  - Implementar gerador do link do WhatsApp com mensagem formatada e URL-encoded para o número `(13) 99131-5054`.
  - *Critério de Verificação:* Teste de saída com lista vazia (mensagem padrão) e lista com itens selecionados.

- [ ] **Tarefa 2.4: Hook `useSpotlight`**
  - Criar `hooks/useSpotlight.ts` para rastreamento suave do cursor do mouse nos cards da Bento Grid.
  - *Critério de Verificação:* Aplicação das propriedades `--mouse-x` e `--mouse-y` ao mover o ponteiro.

---

## Fase 3: Componentes de Layout & UI Básica

- [ ] **Tarefa 3.1: Componente `Navbar` & Alternador de Tema**
  - Criar `components/ui/ThemeToggle.tsx` com alternância suave de ícones sol/lua.
  - Criar `components/layout/Navbar.tsx` com:
    - Cápsula flutuante (Pill Nav) com blur backdrop.
    - Monograma ecológico SVG da Chicão Eletrônicos.
    - Links de navegação para âncoras internas.
    - Botão "Agendar Coleta" para o WhatsApp.
    - Menu drawer responsivo para mobile.
  - *Critério de Verificação:* Menu mobile abre/fecha corretamente e alterna tema claro/escuro.

- [ ] **Tarefa 3.2: Componente `Footer` & Botão Flutuante**
  - Criar `components/layout/Footer.tsx` com créditos, cidades atendidas da Baixada Santista e mote ecológico.
  - Criar `components/layout/FloatingWhatsapp.tsx` com animação pulsar (*beacon*) no canto inferior direito.
  - *Critério de Verificação:* Elementos visíveis e fixos de acordo com a viewport.

- [ ] **Tarefa 3.3: Componente Toast de Notificação**
  - Criar `components/ui/Toast.tsx` para exibir feedback de sucesso ao copiar o telefone do Chicão.
  - *Critério de Verificação:* Disparo e auto-fechamento do toast em 3,5 segundos.

---

## Fase 4: Seções Principais da Landing Page

- [ ] **Tarefa 4.1: `HeroSection`**
  - Implementar `components/sections/HeroSection.tsx`:
    - Badge com luz pulsante "Coleta Ativa na Baixada Santista • DDD (13) 99131-5054".
    - Headline editorial com tipografia mista (*Plus Jakarta Sans* + *Instrument Serif*).
    - Grid de 4 métricas de impacto (+15 Toneladas, 100% Ecológico, 6 Cidades, R$ 0,00).
    - Botão WhatsApp principal, botão de atalho para o Seletor e botão de copiar telefone com toast.
  - *Critério de Verificação:* Layout fluido responsivo via classes do Tailwind.

- [ ] **Tarefa 4.2: `BentoGrid` (O Que Recolhemos)**
  - Implementar `components/sections/BentoGrid.tsx` com os 4 cards temáticos.
  - Integrar o efeito Spotlight radial com as variáveis CSS.
  - *Critério de Verificação:* Efeito visual de iluminação ao passar o mouse.

- [ ] **Tarefa 4.3: `WasteCalculator` (Seletor Consciente)**
  - Implementar `components/calculator/WasteCalculator.tsx`, `WasteItemCard.tsx` e `ImpactBanner.tsx`.
  - Conectar ao hook `useWasteCalculator`.
  - Exibir contadores numéricos interativos e impacto dinâmico em litros de água.
  - *Critério de Verificação:* Clicar em `+` atualiza o resumo e o link gerado para o WhatsApp em tempo real.

- [ ] **Tarefa 4.4: Seções de Conscientização & Processo**
  - Implementar `components/sections/WhyRecycle.tsx` (riscos de contaminação por metais pesados, economia circular).
  - Implementar `components/sections/HowItWorks.tsx` (os 3 passos práticos do agendamento).
  - Implementar `components/sections/CorporateCallout.tsx` (banner B2B para condomínios, escolas e empresas).
  - *Critério de Verificação:* Seções renderizadas como Server Components com texto e ilustrações fiéis.

- [ ] **Tarefa 4.5: `FaqSection` & `FinalCta`**
  - Implementar `components/sections/FaqSection.tsx` com controle de acordeão e semântica ARIA (`aria-expanded`).
  - Implementar `components/sections/FinalCta.tsx` com chamada telefônica destacada.
  - *Critério de Verificação:* Apenas um item do FAQ aberto por vez ou transição suave.

---

## Fase 5: Integração, Verificação, Testes & Quality Gate

- [ ] **Tarefa 5.1: Composição em `app/page.tsx`**
  - Unir todos os componentes na página principal respeitando a ordem visual do design original.
  - Criar `public/favicon.svg` com o símbolo de reciclagem ecológico.
  - *Critério de Verificação:* Renderização completa e sem falhas no navegador.

- [ ] **Tarefa 5.2: Validação de Tipagem TypeScript**
  - Rodar `npx tsc --noEmit` para validação rigorosa de tipos.
  - *Critério de Verificação:* 0 erros de tipo.

- [ ] **Tarefa 5.3: Build de Produção**
  - Executar `npm run build`.
  - *Critério de Verificação:* Compilação bem-sucedida com geração de páginas estáticas otimizadas.

- [ ] **Tarefa 5.4: Teste de Execução e Verificação de Regressão**
  - Iniciar o servidor de produção/desenvolvimento e validar todas as interações no navegador.
  - *Critério de Verificação:* Seletor calcula corretamente, botões de WhatsApp disparam com o número correto `(13) 99131-5054`, temas alternam perfeitamente.
