import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, Glasses, MapPin, MessageCircle, Ruler } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product-gallery";
import { Button } from "@/components/ui/button";
import { BRANDS, COLLECTIONS, getBrand, getProduct, whatsapp } from "@/lib/site-data";

export function generateStaticParams() {
  return BRANDS.flatMap((brand) => (COLLECTIONS[brand.id] ?? []).map((product) => ({ brand: brand.id, product: product.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string; product: string }> }): Promise<Metadata> {
  const { brand: brandId, product: productSlug } = await params;
  const brand = getBrand(brandId);
  const product = getProduct(brandId, productSlug);
  return brand && product ? { title: `${product.name} · ${brand.name}`, description: product.detail } : {};
}

export default async function ProductDetail({ params }: { params: Promise<{ brand: string; product: string }> }) {
  const { brand: brandId, product: productSlug } = await params;
  const brand = getBrand(brandId);
  const product = getProduct(brandId, productSlug);
  if (!brand || !product) notFound();
  const message = `Hola, vi en el catálogo ${product.name} de ${brand.name}${product.code ? `, referencia ${product.code}` : ""}. Quiero solicitar una cita personal para verlo y probármelo en la sucursal.`;
  const specRows = product.specs ? [
    ["Forma", product.specs.shape],
    ["Material", product.specs.material],
    ["Ancho de mica", product.specs.lensWidth],
    ["Puente", product.specs.bridgeWidth],
    ["Largo de varilla", product.specs.templeLength],
    ["Alto de mica", product.specs.lensHeight],
    ["Ajuste", product.specs.fit],
    ["Puente y nariz", product.specs.bridgeFit],
    ["Clip-on compatible", product.specs.clipOn],
  ].filter((entry): entry is [string, string] => Boolean(entry[1])) : [];

  return (
    <main className="product-detail-page">
      <section className="product-detail-shell">
        <nav className="product-breadcrumb" aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link><span>/</span><Link href="/catalogo">Catálogo</Link><span>/</span><Link href={`/catalogo/${brand.id}`}>{brand.name}</Link><span>/</span><strong>{product.name}</strong>
        </nav>
        <div className="product-detail-layout">
          <ProductGallery items={product.gallery} productName={product.name} />
          <aside className="product-detail-summary">
            <Button asChild variant="ghost" size="sm"><Link href={`/catalogo/${brand.id}`}><ArrowLeft /> Volver a {brand.name}</Link></Button>
            <span className="eyebrow">{brand.name}</span>
            <h1>{product.name}</h1>
            {product.code ? <p className="product-code">{product.code}</p> : null}
            <p className="product-description">{product.detail}</p>
            {product.color ? <div className="product-color"><span>Acabado de referencia</span><strong>{product.color}</strong></div> : null}
            <div className="no-price-note"><BadgeCheck /><div><strong>Sin precio en línea</strong><span>Confirma disponibilidad y recibe asesoría presencial.</span></div></div>
            <Button asChild variant="dark"><a href={whatsapp(message)} target="_blank" rel="noreferrer"><MessageCircle /> Agendar prueba por WhatsApp</a></Button>
            <div className="visit-note"><MapPin /><span>Plaza Dorada · Local 64 · Mérida</span></div>
          </aside>
        </div>
      </section>

      <section className="product-technical section">
        <div className="section-intro">
          <span className="eyebrow">Ficha resumida</span>
          <h2>Lo importante,<br/><em>antes de probártelos.</em></h2>
          <p>Las medidas ayudan a comparar, pero el ajuste final depende del puente, las varillas y las proporciones reales del rostro.</p>
        </div>
        {specRows.length ? (
          <div className="technical-layout">
            <div className="technical-table">
              {specRows.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
            </div>
            <div className="technical-aside">
              <Ruler /><h3>Información verificada</h3><p>La marca, forma y acabado se obtuvieron de las fotografías reales del local. Las medidas y el código exacto se confirman físicamente en sucursal para evitar publicar datos incorrectos.</p>
              {product.officialSource ? <a href={product.officialSource} target="_blank" rel="noreferrer">Consultar referencia del fabricante ↗</a> : null}
            </div>
          </div>
        ) : (
          <div className="technical-pending">
            <Glasses /><div><h3>Datos por confirmar en sucursal</h3><p>Esta referencia visual proviene del inventario real del negocio, pero la fotografía no permite verificar marca, código ni medidas. El equipo confirmará esos datos durante la asesoría.</p></div>
          </div>
        )}
      </section>

      <section className="product-appointment">
        <div><span className="eyebrow gold">El siguiente paso</span><h2>Comprueba cómo se siente en tu rostro.</h2><p>Agenda una visita para recibir orientación visual, comparar proporciones y revisar la disponibilidad real del modelo.</p></div>
        <Button asChild><a href={whatsapp(message)} target="_blank" rel="noreferrer">Agendar cita <MessageCircle /></a></Button>
      </section>
    </main>
  );
}
