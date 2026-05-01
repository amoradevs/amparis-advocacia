import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amparis Advocacia | BPC e Aposentadoria — Dra. Larissa Rocha",
  description:
    "Especialistas em BPC/LOAS e Aposentadoria. Atendimento humanizado, honorários só no êxito. Consulta gratuita para todo o Brasil. Dra. Larissa Rocha — OAB/SP.",
  keywords: [
    "BPC LOAS advogado",
    "aposentadoria INSS",
    "advogada previdenciarista",
    "benefício negado INSS",
    "Amparis Advocacia",
    "Dra Larissa Rocha",
    "BPC idoso",
    "BPC deficiência",
    "aposentadoria por idade",
    "planejamento previdenciário",
  ],
  openGraph: {
    title: "Amparis Advocacia | BPC e Aposentadoria",
    description:
      "Atendimento humanizado para garantir o seu BPC ou Aposentadoria. Honorários apenas no êxito. Análise gratuita do caso.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
