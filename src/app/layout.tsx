import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const BASE_URL = "https://www.amparis.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    "aposentadoria por invalidez",
    "recurso INSS",
    "planejamento previdenciário São Paulo",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Amparis Advocacia | BPC e Aposentadoria — Dra. Larissa Rocha",
    description:
      "Atendimento humanizado para garantir o seu BPC ou Aposentadoria. Honorários apenas no êxito. Análise gratuita do caso.",
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Amparis Advocacia",
    images: [
      {
        url: "/Larissa_Perfil.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Larissa Rocha — Advogada Previdenciarista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amparis Advocacia | BPC e Aposentadoria",
    description:
      "Honorários só no êxito. Análise gratuita. Atendimento online para todo o Brasil.",
    images: ["/Larissa_Perfil.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "GaB28BBke-HfAnUud6fu7wY4jq1RrMjCm13t3damJj4",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      name: "Amparis Advocacia",
      url: BASE_URL,
      telephone: "+55-11-99790-4557",
      email: "larissarocha@amparis.com.br",
      description:
        "Escritório de advocacia especializado em BPC/LOAS e Aposentadoria. Atendimento humanizado com honorários apenas no êxito.",
      areaServed: "BR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Barcelona, 340, B — Sala 05",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "05331-011",
        addressCountry: "BR",
      },
      openingHours: "Mo-Fr 08:00-18:00",
      priceRange: "Honorários apenas no êxito",
    },
    {
      "@type": "Person",
      name: "Larissa Rocha",
      jobTitle: "Advogada Previdenciarista",
      worksFor: { "@type": "LegalService", name: "Amparis Advocacia" },
      alumniOf: "Universidade Presbiteriana Mackenzie",
      knowsAbout: ["BPC/LOAS", "Aposentadoria por Invalidez", "Aposentadoria por Idade", "Direito Previdenciário"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/Favicom.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Favicom.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
