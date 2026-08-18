import type { Metadata } from "next";
import { BadgeCheck, Building2, HeartHandshake, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { whatsapp } from "@/lib/site-data";

export const metadata: Metadata = { title: "Convenios", description: "Convenios ópticos para empresas e instituciones." };
export default function Convenios() {
  return <main><PageHero eyebrow="Bienestar visual para equipos" title="Convenios ópticos para empresas" text="Acercamos servicios visuales y beneficios preferenciales a tus colaboradores." media="/assets/catalogo/RayBan/RayBan7.jpeg" />
    <section className="convenios-intro section"><div><span className="eyebrow">Convenios institucionales</span><h2>Una alianza que<br/><em>cuida a tu equipo.</em></h2><p>Diseñamos esquemas de atención para empresas e instituciones, con asesoría profesional y opciones adaptadas a sus necesidades.</p></div><div className="compact-benefits"><article><Building2/><h3>Atención para empresas</h3></article><article><Users/><h3>Beneficios para colaboradores</h3></article><article><BadgeCheck/><h3>Servicio profesional</h3></article><article><HeartHandshake/><h3>Acompañamiento cercano</h3></article></div></section>
    <section className="simple-contact-cta"><div><span className="eyebrow gold">Sin formularios largos</span><h2>Solicitar una alianza corporativa</h2><p>Conversa directamente con el equipo de la óptica y recibe información según las necesidades de tu organización.</p></div><Button asChild><a href={whatsapp("Hola, quiero solicitar información sobre convenios corporativos.")} target="_blank">Hablar por WhatsApp</a></Button></section>
  </main>;
}
