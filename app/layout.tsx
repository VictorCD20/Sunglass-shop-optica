import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollMotion } from "@/components/scroll-motion";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm";
import { OpticianSchema } from "@/components/optician-schema";
import { ComingSoonGuard } from "@/components/coming-soon-guard";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opticasunglasshop.com.mx"),
  title: {
    default: "Óptica en Mérida | Sunglass Shop Plaza Dorada",
    template: "%s | Sunglass Shop Óptica",
  },
  description:
    "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida. Armazones originales, lentes graduados, optometría, reparación y asesoría personalizada por tipo de rostro.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Óptica en Mérida | Sunglass Shop Plaza Dorada",
    description:
      "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida. Armazones originales, lentes graduados, optometría, reparación y asesoría personalizada por tipo de rostro.",
    url: "https://www.opticasunglasshop.com.mx/",
    siteName: "Sunglass Shop Óptica",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Sunglass Shop Óptica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Óptica en Mérida | Sunglass Shop Plaza Dorada",
    description:
      "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida. Armazones originales, lentes graduados, optometría, reparación y asesoría personalizada por tipo de rostro.",
    images: ["/assets/logo.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <GoogleTagManager />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <OpticianSchema />
        <ComingSoonGuard>
          <SiteHeader />
          <ScrollMotion />
          {children}
          <SiteFooter />
        </ComingSoonGuard>
      </body>
    </html>
  );
}
