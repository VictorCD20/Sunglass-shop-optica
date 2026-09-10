import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bike, Eye, Glasses, Sparkles, Sun, Wrench } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { BRANDS, COLLECTIONS, WHATSAPP_MESSAGES, whatsapp } from "@/lib/site-data";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";

export const metadata: Metadata = {
  title: "Óptica en Mérida | Sunglass Shop Plaza Dorada",
  description:
    "Visita Sunglass Shop Óptica en Plaza Dorada, Mérida. Armazones originales, lentes graduados, optometría, reparación y asesoría personalizada por tipo de rostro.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <main>
    <HomeHero />

    {/* 2. PRESENTACIÓN DE MARCAS Y MUESTRARIO */}
    <section id="catalogo-inicio" className="home-catalog section">
      <div className="catalog-heading">
        <div>
          <span className="eyebrow">Marcas y modelos</span>
          <h2>Encuentra tu estilo.<br/><em>Marcas originales en sucursal.</em></h2>
        </div>
        <div>
          <p>Algunas de las marcas que puedes encontrar en Sunglass Shop. La disponibilidad exacta de modelos se confirma directamente en sucursal.</p>
          <div className="catalog-brand-list">
            {BRANDS.map((brand) => <Link href={`/catalogo/${brand.id}`} key={brand.id}>{brand.name}</Link>)}
          </div>
        </div>
      </div>
        <div className="brand-catalog-grid" style={{ marginBottom: "3rem" }}>
          {BRANDS.slice(0, 6).map((brand) => {
            const count = COLLECTIONS[brand.id]?.length ?? 0;
            return (
              <Link href={`/catalogo/${brand.id}`} className="brand-catalog-card" key={brand.id}>
                {brand.logoDark ? (
                  <img className="brand-catalog-logo" src={brand.logoDark} alt={brand.name} />
                ) : brand.logo ? (
                  <img className="brand-catalog-logo" src={brand.logo} alt={brand.name} />
                ) : (
                  <span className="brand-catalog-name">{brand.name}</span>
                )}
                {brand.media ? (
                  <img className="brand-catalog-photo" src={brand.media} alt={`${brand.name} modelo representativo`} />
                ) : null}
                <div>
                  <span>{count ? "3 modelos para explorar" : "Consultar en sucursal"}</span>
                  <strong>Ver colección <ArrowRight /></strong>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="home-product-groups">
          <ProductGrid brand="Ray-Ban" brandId="ray-ban" products={COLLECTIONS["ray-ban"].slice(0, 3)} compact />
          <ProductGrid brand="Guess" brandId="guess" products={COLLECTIONS.guess.slice(0, 3)} compact />
          <ProductGrid brand="Carolina Herrera" brandId="carolina-herrera" products={COLLECTIONS["carolina-herrera"].slice(0, 3)} compact />
          <ProductGrid brand="Ralph Lauren" brandId="ralph-lauren" products={COLLECTIONS["ralph-lauren"].slice(0, 3)} compact />
        </div>
        <div className="catalog-actions">
          <Button asChild variant="dark"><Link href="/catalogo">Ver catálogo completo por marcas</Link></Button>
          <p>La prueba presencial en sucursal permite evaluar ajuste, puente y proporción exacta.</p>
        </div>
    </section>

    {/* 3. SERVICIOS CONFIRMADOS */}
    <section id="servicios-inicio" className="home-services section">
      <div className="section-intro">
        <span className="eyebrow gold">Servicios de la óptica</span>
        <h2>Atención visual integral.<br/><em>Breve, clara y especializada.</em></h2>
        <p>Servicios confirmados para el cuidado, adaptación y mantenimiento de tus lentes.</p>
      </div>
      <div className="essential-services">
        <article>
          <Eye/>
          <span>01</span>
          <h3>Optometría integral</h3>
          <p>Evaluación visual sencilla y profesional para determinar tu graduación y necesidad visual.</p>
        </article>
        <article>
          <Glasses/>
          <span>02</span>
          <h3>Asesoramiento en uso de lentes</h3>
          <p>Orientación para elegir el armazón y material más adecuado según tu tipo de rostro y hábitos diarios.</p>
        </article>
        <article>
          <Wrench/>
          <span>03</span>
          <h3>Refacciones originales y reparación</h3>
          <p>Disponibilidad de refacciones originales (Ray-Ban, Oakley y seleccionadas) y servicio de reparación o ajuste.</p>
        </article>
      </div>

      <div className="face-promo">
        <div><span className="eyebrow gold">Nueva guía</span><h2>¿Qué armazón va con tu rostro?</h2><p>Identifica tu tipo de rostro y descubre los diseños que te favorecen antes de tu visita.</p></div>
        <Button asChild variant="dark"><Link href="/asesoria">Ver guía de rostros</Link></Button>
      </div>

      {/* Lentes Deportivos RX */}
      <div className="sports-service">
        <div className="sports-service-media">
          <video src="/assets/catalogo/RayBan/RayBanVid4.mp4" autoPlay muted loop playsInline preload="metadata" />
        </div>
        <div className="sports-service-copy">
          <span className="eyebrow gold">Servicio diferencial</span>
          <div className="sports-icon"><Bike/><Sparkles/></div>
          <h2>Lentes deportivos RX</h2>
          <p>Soluciones graduadas para actividades deportivas y trabajos especiales, diseñadas para brindar visión clara y protección durante el movimiento.</p>
          <ul>
            <li><Glasses/>Graduación de micas curvas y envolventes</li>
            <li><Sun/>Acabados espejeados y protección UV</li>
            <li><Sparkles/>Tecnología fotocromática (se ajusta con el sol)</li>
          </ul>
          <Button asChild>
            <TrackedWhatsappLink href={whatsapp(WHATSAPP_MESSAGES.deportivo)} eventName="click_whatsapp_deportivo" eventCategory="lead" eventLabel="whatsapp_deportivo">
              Consultar lentes deportivos RX
            </TrackedWhatsappLink>
          </Button>
        </div>
      </div>
    </section>



    {/* 5. DIFERENCIADORES - ATENCIÓN QUE CONTINÚA */}
    <section className="continuity-section section">
      <div className="section-intro centered">
        <span className="eyebrow">Acompañamiento post-compra</span>
        <h2>Atención que continúa después de tu compra</h2>
        <p>Ajustes, mantenimiento y respuesta directa cuando lo requieras.</p>
      </div>
    </section>
  </main>;
}

