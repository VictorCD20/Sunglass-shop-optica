import type { Metadata } from "next";
import { Banknote, CalendarCheck, CreditCard, ShieldCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGES, whatsapp } from "@/lib/site-data";
import { PageViewTracker } from "@/components/page-view-tracker";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";

export const metadata: Metadata = {
  title: "Beneficios, garantía y mantenimiento de lentes | Sunglass Shop",
  description:
    "Conoce beneficios como mantenimiento de por vida, garantía según marca, meses sin intereses y tecnologías ópticas disponibles en Sunglass Shop Mérida.",
  alternates: {
    canonical: "/beneficios",
  },
};

export default function Beneficios() {
  return (
    <main>
      <PageViewTracker eventName="view_beneficios" eventCategory="navigation" eventLabel="view_beneficios" />
      <PageHero
        eyebrow="Ser cliente tiene ventajas"
        title="Beneficios al comprar tus lentes en Sunglass Shop"
        text="Acompañamiento, mantenimiento y garantías que continúan después de tu compra."
        media="/assets/catalogo/Guess/Guess4.jpeg"
      >
        <Button asChild>
          <TrackedWhatsappLink
            href={whatsapp(WHATSAPP_MESSAGES.general)}
            eventName="click_whatsapp_general"
            eventCategory="lead"
            eventLabel="whatsapp_general"
          >
            Conocer beneficios
          </TrackedWhatsappLink>
        </Button>
      </PageHero>
      <section className="benefit-pair section">
        <article>
          <Wrench />
          <span className="eyebrow">Cuidado continuo</span>
          <h2>Mantenimiento de por Vida</h2>
          <p>Visítanos cada 90 días para limpieza, alineación y ajuste de tus lentes, sin costo adicional.</p>
        </article>
        <article>
          <ShieldCheck />
          <span className="eyebrow">Compra respaldada</span>
          <h2>Garantía Real (2 a 3 años)</h2>
          <p>Garantía según marca y fabricante para que disfrutes tus lentes con mayor tranquilidad.</p>
        </article>
      </section>
      <section className="payment-section">
        <div>
          <span className="eyebrow gold">Facilidades de pago</span>
          <h2>Elige la opción<br />que funciona para ti.</h2>
        </div>
        <div className="payment-list">
          <article>
            <CreditCard />
            <h3>3 a 12 Meses Sin Intereses</h3>
            <p>Con tarjetas participantes.</p>
          </article>
          <article>
            <Banknote />
            <h3>Pago de Contado Especial</h3>
            <p>Consulta las condiciones disponibles.</p>
          </article>
          <article>
            <CalendarCheck />
            <h3>Exclusivo AMEX</h3>
            <p>Opciones sujetas a promociones vigentes.</p>
          </article>
        </div>
      </section>
      <section className="technology section">
        <div className="section-intro centered">
          <span className="eyebrow">Tratamientos disponibles</span>
          <h2>Opciones para cuidar tu visión</h2>
          <p>Opciones de micas y tratamientos disponibles bajo consulta presencial en sucursal.</p>
        </div>
        <div className="technology-grid">
          <article>
            <video src="/assets/videos/crizal.mp4" autoPlay muted loop playsInline />
            <div>
              <h3>Tratamiento antirreflejante</h3>
              <p>Mayor claridad y reducción de reflejos para uso diario.</p>
            </div>
          </article>
          <article>
            <video src="/assets/videos/kodak.mp4" autoPlay muted loop playsInline />
            <div>
              <h3>Filtro de luz azul</h3>
              <p>Protección visual para uso constante de pantallas.</p>
            </div>
          </article>
          <article>
            <video src="/assets/videos/infinite.mp4" autoPlay muted loop playsInline />
            <div>
              <h3>Micas fotosensibles</h3>
              <p>Adaptación progresiva a los cambios de luz solar.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

