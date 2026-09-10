import type { Metadata } from "next";
import Link from "next/link";
import { Bike, Car, Eye, Glasses, Palette, ScanFace, Shield, Sparkles, Sun, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGES, whatsapp } from "@/lib/site-data";
import { PageViewTracker } from "@/components/page-view-tracker";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";

export const metadata: Metadata = {
  title: "Lentes graduados, optometría y reparación en Mérida",
  description:
    "Servicios de optometría, micas graduadas, lentes solares graduados, lentes deportivos y reparación de lentes en Sunglass Shop Óptica Mérida.",
  alternates: {
    canonical: "/servicios",
  },
};

export default function Servicios() {
  return (
    <main>
      <PageViewTracker eventName="view_servicios" eventCategory="navigation" eventLabel="view_servicios" />
      <PageHero
        eyebrow="Precisión y cuidado"
        title="Servicios ópticos en Mérida"
        text="Atención clínica, tecnología y asesoría personalizada para cuidar tu salud visual."
        media="/assets/catalogo/RayBan/RayBan2.jpeg"
      >
        <Button asChild>
          <TrackedWhatsappLink
            href={whatsapp(WHATSAPP_MESSAGES.general)}
            eventName="click_whatsapp_general"
            eventCategory="lead"
            eventLabel="whatsapp_general"
          >
            Solicitar información
          </TrackedWhatsappLink>
        </Button>
      </PageHero>
      <section className="section service-grid">
        {[
          { icon: <Eye />, title: "Optometría integral", text: "Evaluación visual profesional para identificar tus necesidades y definir la graduación adecuada." },
          { icon: <Glasses />, title: "Micas Graduadas", text: "Opciones de lentes oftálmicos y tratamientos según tu estilo de vida y receta visual." },
          { icon: <ScanFace />, title: "Asesoría Personalizada", text: "Recomendación de armazones basada en tu rostro, uso diario, estilo y necesidades visuales." },
        ].map((item, index) => (
          <article key={item.title}>
            <span>0{index + 1}</span>
            {item.icon}
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
      <section className="face-promo section">
        <div>
          <span className="eyebrow gold">Guía visual</span>
          <h2>Asesoría según tu tipo de rostro</h2>
          <p>Descubre qué diseños equilibran tu fisonomía: ovalado, redondo, cuadrado, corazón, diamante o alargado.</p>
        </div>
        <Button asChild variant="dark">
          <Link href="/asesoria">Ver la guía completa</Link>
        </Button>
      </section>
      <section className="sports-service sports-service--page">
        <div className="sports-service-media">
          <video src="/assets/catalogo/RayBan/RayBanVid4.mp4" autoPlay muted loop playsInline preload="metadata" />
        </div>
        <div className="sports-service-copy">
          <span className="eyebrow gold">Servicio especializado</span>
          <div className="sports-icon">
            <Bike />
            <Sparkles />
          </div>
          <h2>Fabricación de lentes deportivas graduadas</h2>
          <p>Graduamos soluciones ópticas para diseños deportivos y envolventes, de acuerdo con la valoración presencial.</p>
          <ul>
            <li><Glasses />Graduación de micas curvas</li>
            <li><Sun />Opciones de acabado espejeado</li>
            <li><Sparkles />Tecnología fotocromática para cambios de luz</li>
          </ul>
          <Button asChild>
            <TrackedWhatsappLink
              href={whatsapp(WHATSAPP_MESSAGES.deportivo)}
              eventName="click_whatsapp_deportivo"
              eventCategory="lead"
              eventLabel="whatsapp_deportivo"
            >
              Consultar fabricación
            </TrackedWhatsappLink>
          </Button>
        </div>
      </section>
      <section className="sun-section">
        <div>
          <span className="eyebrow gold">Protección con estilo</span>
          <h2>Lentes solares<br /><em>con graduación</em></h2>
          <p>Disfruta protección solar y visión clara sin renunciar al diseño del armazón que elegiste.</p>
        </div>
        <div className="sun-grid">
          {[{ icon: <Shield />, title: "Filtro UV Total" }, { icon: <Sun />, title: "Fotosensibles" }, { icon: <Car />, title: "Para Conducir" }, { icon: <Palette />, title: "Tonos Especiales" }].map(item => (
            <article key={item.title}>
              {item.icon}
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="repair-section">
        <div className="repair-visual">
          <Wrench />
        </div>
        <div>
          <span className="eyebrow">Taller de óptica</span>
          <h2>Reparación de lentes y refacciones</h2>
          <p>Servicio especializado de ajuste, reparación y sustitución de piezas para prolongar la vida útil de tus lentes.</p>
          <p className="small-note">* Servicio sujeto a modelo, marca y disponibilidad de piezas.</p>
          <Button asChild variant="dark">
            <TrackedWhatsappLink
              href={whatsapp(WHATSAPP_MESSAGES.reparacion)}
              eventName="click_whatsapp_reparacion"
              eventCategory="lead"
              eventLabel="whatsapp_reparacion"
            >
              Consultar por WhatsApp
            </TrackedWhatsappLink>
          </Button>
        </div>
      </section>
    </main>
  );
}
