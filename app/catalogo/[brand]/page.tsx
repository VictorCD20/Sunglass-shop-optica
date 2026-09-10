import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { BRANDS, COLLECTIONS, getBrand, whatsapp } from "@/lib/site-data";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ brand: brand.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: brandId } = await params;
  const brand = getBrand(brandId);
  return brand
    ? {
        title: `Catálogo ${brand.name} en Mérida | Sunglass Shop`,
        description: `Modelos y referencias ${brand.name} disponibles para consulta en Sunglass Shop Óptica Mérida.`,
        alternates: {
          canonical: `/catalogo/${brand.id}`,
        },
      }
    : {};
}

export default async function BrandCatalog({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();
  const products = COLLECTIONS[brandId] ?? [];
  const whatsappMsg = `Hola, quiero conocer los modelos ${brand.name} disponibles y agendar una visita.`;

  return (
    <main>
      <PageHero
        eyebrow="Catálogo por marca"
        title={brand.name}
        text={products.length ? "Explora cada referencia y abre su ficha para revisar vistas, materiales y medidas. La disponibilidad final se confirma en sucursal." : "Esta marca forma parte de la oferta de la óptica. El equipo confirma directamente los modelos y colores disponibles."}
        media={brand.bannerMedia || brand.media}
        position="center 24%"
      >
        {products.length ? <Button asChild><a href="#modelos">Ver modelos</a></Button> : null}
        <Button asChild variant="outline">
          <TrackedWhatsappLink
            href={whatsapp(whatsappMsg)}
            eventName="click_whatsapp_catalogo"
            eventCategory="lead"
            eventLabel="whatsapp_catalogo"
          >
            Consultar por WhatsApp
          </TrackedWhatsappLink>
        </Button>
      </PageHero>

      <section id="modelos" className="brand-products section">
        <div className="catalog-navigation">
          <Button asChild variant="ghost" size="sm"><Link href="/catalogo"><ArrowLeft /> Todas las marcas</Link></Button>
          <span>{brand.name}</span>
        </div>
        {products.length ? (
          <>
            <div className="section-intro">
              <span className="eyebrow">Selección {brand.name}</span>
              <h2>Elige una referencia.<br/><em>Revísala a detalle.</em></h2>
              <p>No se muestran precios: el objetivo es agendar una prueba presencial para revisar proporción, ajuste y comodidad.</p>
            </div>
            <ProductGrid brand={brand.name} brandId={brand.id} products={products} />
          </>
        ) : (
          <div className="empty-brand-state">
            {brand.logoDark ? <img src={brand.logoDark} alt={brand.name} /> : <strong className="brand-name-mark brand-name-mark--dark">{brand.name}</strong>}
            <span className="eyebrow">Inventario en sucursal</span>
            <h2>Consulta la selección actual de {brand.name}</h2>
            <p>No publicamos modelos que no estén confirmados. Escríbenos para recibir las referencias disponibles y agendar una prueba.</p>
            <Button asChild variant="dark">
              <TrackedWhatsappLink
                href={whatsapp(whatsappMsg)}
                eventName="click_whatsapp_catalogo"
                eventCategory="lead"
                eventLabel="whatsapp_catalogo"
              >
                <MessageCircle /> Consultar disponibilidad
              </TrackedWhatsappLink>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
