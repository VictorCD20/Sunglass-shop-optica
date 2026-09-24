import type { Metadata } from "next";
import { ComingSoonLanding } from "@/components/coming-soon-landing";

export const metadata: Metadata = {
  title: "Próximamente | Sunglass Shop Óptica Plaza Dorada",
  description:
    "Estamos renovando nuestra plataforma digital. Te esperamos en nuestra sucursal física en Plaza Dorada, Mérida para atención presencial, exámenes de la vista y marcas originales.",
  alternates: {
    canonical: "/coming-soon",
  },
};

export default function ComingSoonPage() {
  return <ComingSoonLanding />;
}
