import type { Metadata } from "next";
import { HomeContainer } from "@/components/home-container";

export const metadata: Metadata = {
  title: "Óptica en Mérida | Sunglass Shop Plaza Dorada",
  description:
    "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida. Armazones originales, lentes graduados, optometría, reparación y asesoría personalizada por tipo de rostro.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const isComingSoonActive = process.env.NEXT_PUBLIC_COMING_SOON !== "false";

  return <HomeContainer defaultComingSoon={isComingSoonActive} />;
}
