import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amparis Advocacia | Excelência Jurídica",
  description:
    "Escritório de advocacia especializado em Direito Civil, Trabalhista, Previdenciário, Empresarial, do Consumidor e Imobiliário. Consulta gratuita.",
  keywords: [
    "advocacia",
    "advogado",
    "escritório de advocacia",
    "direito civil",
    "direito trabalhista",
    "direito previdenciário",
    "Amparis Advocacia",
    "São Paulo",
  ],
  openGraph: {
    title: "Amparis Advocacia",
    description: "Assessoria jurídica com excelência, ética e comprometimento.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
