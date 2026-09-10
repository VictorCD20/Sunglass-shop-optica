import type { Metadata } from "next";
import { Clock3, Glasses, MapPin, MessageCircle, Navigation } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES, whatsapp } from "@/lib/site-data";
import { PageViewTracker } from "@/components/page-view-tracker";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";
import { TrackedMapsLink } from "@/components/tracked-maps-link";

export const metadata: Metadata = {
  title: "Contacto Sunglass Shop Óptica | Plaza Dorada Mérida",
  description:
    "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida. Consulta horarios, ubicación, WhatsApp y cómo llegar a la sucursal.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function Contacto() {
  return (
    <main>
      <PageViewTracker eventName="view_contacto" eventCategory="navigation" eventLabel="view_contacto" />
      <PageHero
        eyebrow="Estamos para ayudarte"
        title="Contacto y ubicación en Plaza Dorada Mérida"
        text="Visítanos en Mérida o recibe asesoría visual personalizada por WhatsApp."
        media="/assets/catalogo/Guess/Guess8.jpeg"
      >
        <Button asChild>
          <TrackedWhatsappLink
            href={whatsapp(WHATSAPP_MESSAGES.general)}
            eventName="click_whatsapp_general"
            eventCategory="lead"
            eventLabel="whatsapp_general"
          >
            WhatsApp directo
          </TrackedWhatsappLink>
        </Button>
      </PageHero>
      <section className="contact-section section">
        <div className="contact-details">
          <span className="eyebrow">Información de sucursal</span>
          <h2>Casa Matriz</h2>
          <article>
            <MapPin />
            <div>
              <h3>Plaza Dorada, Mérida</h3>
              <p>{CONTACT.address}</p>
            </div>
          </article>
          <article>
            <Clock3 />
            <div>
              <h3>Horarios de Atención</h3>
              <p>{CONTACT.hours}</p>
            </div>
          </article>
          <article>
            <MessageCircle />
            <div>
              <h3>WhatsApp Directo</h3>
              <TrackedWhatsappLink
                href={whatsapp(WHATSAPP_MESSAGES.general)}
                eventName="click_whatsapp_general"
                eventCategory="lead"
                eventLabel="whatsapp_general"
              >
                {CONTACT.phone}
              </TrackedWhatsappLink>
            </div>
          </article>
        </div>
        <div className="location-card">
          <Navigation />
          <span className="eyebrow gold">Ubicación</span>
          <h2>Mérida, Plaza Dorada</h2>
          <p>{CONTACT.address}</p>
          <Button asChild>
            <TrackedMapsLink href="https://www.google.com/maps/search/?api=1&query=Plaza+Dorada+Mérida+Yucatán">
              Abrir en Google Maps
            </TrackedMapsLink>
          </Button>
        </div>
      </section>
      <section className="appointment-note">
        <Glasses />
        <div>
          <h2>¿Qué necesitas traer a tu cita?</h2>
          <p>Si ya cuentas con una receta, estudios o lentes anteriores, puedes traerlos para complementar tu evaluación.</p>
        </div>
      </section>
    </main>
  );
}

