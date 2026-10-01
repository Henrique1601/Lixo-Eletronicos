import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chicão Eletrônicos • Coleta e Descarte Consciente de Lixo Eletrônico na Baixada Santista",
  description:
    "Descarte consciente de lixo eletrônico em Santos e Baixada Santista (DDD 13). Coletamos computadores, celulares, TVs, cabos e periféricos. Não jogue no lixo comum!",
  authors: [{ name: "Chicão Eletrônicos" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Chicão Eletrônicos • Coleta de Lixo Eletrônico (DDD 13)",
    description:
      "Descarte correto, futuro melhor! Coleta de computadores, celulares, cabos e eletrônicos em geral na Baixada Santista.",
    siteName: "Chicão Eletrônicos",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070A08" },
    { media: "(prefers-color-scheme: light)", color: "#F6F9F6" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans selection:bg-eco-500 selection:text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
