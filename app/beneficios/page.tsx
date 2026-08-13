import type { Metadata } from "next";
import { Banknote, CalendarCheck, CreditCard, ShieldCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { whatsapp } from "@/lib/site-data";

export const metadata: Metadata = { title: "Beneficios", description: "Beneficios, garantías, facilidades de pago y tecnologías ópticas." };
export default function Beneficios() {
  return <main><PageHero eyebrow="Ser cliente tiene ventajas" title="Beneficios Exclusivos" text="Acompañamiento, mantenimiento y garantías que continúan después de tu compra." media="/assets/catalogo/Guess/Guess4.jpeg"><Button asChild><a href={whatsapp()} target="_blank">Conocer beneficios</a></Button></PageHero>
    <section className="benefit-pair section"><article><Wrench/><span className="eyebrow">Cuidado continuo</span><h2>Mantenimiento de por Vida</h2><p>Visítanos cada 90 días para limpieza, alineación y ajuste de tus lentes, sin costo adicional.</p></article><article><ShieldCheck/><span className="eyebrow">Compra respaldada</span><h2>Garantía Real (2 a 3 años)</h2><p>Garantía según marca y fabricante para que disfrutes tus lentes con mayor tranquilidad.</p></article></section>
    <section className="payment-section"><div><span className="eyebrow gold">Facilidades de pago</span><h2>Elige la opción<br/>que funciona para ti.</h2></div><div className="payment-list"><article><CreditCard/><h3>3 a 12 Meses Sin Intereses</h3><p>Con tarjetas participantes.</p></article><article><Banknote/><h3>Pago de Contado Especial</h3><p>Consulta las condiciones disponibles.</p></article><article><CalendarCheck/><h3>Exclusivo AMEX</h3><p>Opciones sujetas a promociones vigentes.</p></article></div></section>
    <section className="technology section"><div className="section-intro centered"><span className="eyebrow">Tecnología para tu visión</span><h2>Tratamientos y tecnologías disponibles</h2></div><div className="technology-grid"><article><video src="/assets/videos/crizal.mp4" autoPlay muted loop playsInline/><div><h3>Crizal®: Claridad y Protección Total</h3><p>Protección avanzada para una visión más clara en las actividades de todos los días.</p></div></article><article><video src="/assets/videos/kodak.mp4" autoPlay muted loop playsInline/><div><h3>KODAK UVBlue: Defensa de Luz Azul</h3><p>Tecnología diseñada para proteger tus ojos frente a la exposición cotidiana.</p></div></article><article><video src="/assets/videos/infinite.mp4" autoPlay muted loop playsInline/><div><h3>Vision First Infinite</h3><p>Soluciones ópticas avanzadas disponibles en nuestra sucursal.</p></div></article></div></section>
  </main>;
}
