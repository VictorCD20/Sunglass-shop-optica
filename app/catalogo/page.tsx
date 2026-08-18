import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { BRANDS, COLLECTIONS, whatsapp } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Catálogo por marca",
  description: "Explora las marcas y modelos disponibles en Sunglass Shop Óptica.",
};

export default function Catalogo() {
  return (
    <main>
      <PageHero
        eyebrow="Catálogo sin precios en línea"
        title="Elige una marca"
        text="Revisa modelos, medidas y materiales. La elección final se realiza en sucursal para comprobar proporción, puente y comodidad."
        media="/assets/catalogo/RayBan/RayBan11.jpeg"
        position="center 18%"
      >
        <Button asChild><a href="#marcas">Explorar marcas</a></Button>
        <Button asChild variant="outline"><a href={whatsapp("Hola, quiero agendar una asesoría para elegir mis lentes.")} target="_blank" rel="noreferrer">Agendar asesoría</a></Button>
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
              <Link href={`/catalogo/${brand.id}`} className={`brand-catalog-card ${brand.media ? "" : "brand-catalog-card--logo"}`} key={brand.id}>
                {brand.media ? <img className="brand-catalog-photo" src={brand.media} alt={`Colección ${brand.name}`} /> : null}
                <span className="brand-catalog-overlay" aria-hidden="true" />
                <img className="brand-catalog-logo" src={brand.logo} alt={brand.name} />
                <div>
                  <span>{count ? `${count} referencias para explorar` : "Consultar modelos en sucursal"}</span>
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
