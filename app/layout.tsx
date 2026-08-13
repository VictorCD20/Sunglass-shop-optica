import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollMotion } from "@/components/scroll-motion";

export const metadata: Metadata = {
  title: { default: "Sunglass Shop Óptica", template: "%s | Sunglass Shop Óptica" },
  description: "Visión perfecta. Estilo auténtico. Asesoría experta en Mérida.",
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
    <html lang="es">
      <body><SiteHeader /><ScrollMotion />{children}<SiteFooter /></body>
    </html>
  );
}
