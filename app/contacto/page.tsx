import type { Metadata } from "next";
import { Clock3, Glasses, MapPin, MessageCircle, Navigation } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CONTACT, whatsapp } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contacto", description: "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida." };
export default function Contacto() {
  return <main><PageHero eyebrow="Estamos para ayudarte" title="Contáctanos" text="Visítanos en Mérida o recibe asesoría visual personalizada por WhatsApp." media="/assets/catalogo/Guess/Guess8.jpeg"><Button asChild><a href={whatsapp()} target="_blank">WhatsApp directo</a></Button></PageHero>
    <section className="contact-section section"><div className="contact-details"><span className="eyebrow">Información de sucursal</span><h2>Clínica Principal</h2><article><MapPin/><div><h3>Plaza Dorada, Mérida</h3><p>{CONTACT.address}</p></div></article><article><Clock3/><div><h3>Horarios de Atención</h3><p>{CONTACT.hours}</p></div></article><article><MessageCircle/><div><h3>WhatsApp Directo</h3><a href={whatsapp()} target="_blank">{CONTACT.phone}</a></div></article></div><div className="location-card"><Navigation/><span className="eyebrow gold">Ubicación</span><h2>Mérida, Plaza Dorada</h2><p>{CONTACT.address}</p><Button asChild><a href="https://www.google.com/maps/search/?api=1&query=Plaza+Dorada+Mérida+Yucatán" target="_blank">Abrir en Google Maps</a></Button></div></section>
    <section className="appointment-note"><Glasses/><div><h2>¿Qué necesitas traer a tu cita?</h2><p>Si ya cuentas con una receta, estudios o lentes anteriores, puedes traerlos para complementar tu evaluación.</p></div></section>
  </main>;
}
