import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { HeroCarousel, type HeroCarouselSlide } from "@/components/hero-carousel";
import { Button } from "@/components/ui/button";
import { BRANDS, COLLECTIONS, WHATSAPP_MESSAGES, whatsapp } from "@/lib/site-data";
import { PageViewTracker } from "@/components/page-view-tracker";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";

export const metadata: Metadata = {
  title: "Catálogo de lentes y armazones en Mérida | Sunglass Shop",
  description:
    "Explora modelos disponibles de Ray-Ban, Guess, Carolina Herrera, Ralph Lauren y más. Confirma disponibilidad y recibe asesoría en sucursal.",
  alternates: {
    canonical: "/catalogo",
  },
};

export default function Catalogo() {
  // Recopila automáticamente la primera vista de cada producto de todas las marcas.
  // Si se agregan más lentes en el futuro, aparecerán aquí sin cambios manuales.
  const slides: HeroCarouselSlide[] = BRANDS.flatMap((brand) =>
    (COLLECTIONS[brand.id] ?? []).map((product) => ({
      src: product.gallery[0]?.src ?? product.src,
      alt: product.gallery[0]?.alt ?? product.name,
      brand: brand.name,
      name: product.name,
    })),
  );

  return (
    <main>
      <PageViewTracker eventName="view_catalogo" eventCategory="navigation" eventLabel="view_catalogo" />
      <PageHero
        eyebrow="Catálogo sin precios en línea"
        title="Catálogo de lentes y armazones en Mérida"
        text="Revisa modelos, medidas y materiales. La elección final se realiza en sucursal para comprobar proporción, puente y comodidad."
        media="/assets/catalogo/RayBan/RayBan11.jpeg"
        position="center 24%"
        carousel={<HeroCarousel slides={slides} />}
      >
        <Button asChild><a href="#marcas">Explorar marcas</a></Button>
        <Button asChild variant="outline">
          <TrackedWhatsappLink
            href={whatsapp(WHATSAPP_MESSAGES.asesoria)}
            eventName="click_whatsapp_asesoria"
            eventCategory="lead"
            eventLabel="whatsapp_asesoria"
          >
            Agendar asesoría
          </TrackedWhatsappLink>
        </Button>
      </PageHero>

      <section id="marcas" className="brand-catalog section">
        <div className="catalog-navigation">
          <Button asChild variant="ghost" size="sm"><Link href="/"><ArrowLeft /> Volver al inicio</Link></Button>
          <span>Selecciona una colección</span>
        </div>
        <div className="section-intro">
          <span className="eyebrow">Marcas disponibles</span>
          <h2>Una entrada clara.<br/><em>Un catálogo por marca.</em></h2>
          <p>Las marcas con imágenes registradas muestran su selección visual. Para las demás, el equipo confirma modelos y existencias directamente en sucursal.</p>
        </div>
        <div className="brand-catalog-grid">
          {BRANDS.map((brand) => {
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
      </section>
    </main>
  );
}
