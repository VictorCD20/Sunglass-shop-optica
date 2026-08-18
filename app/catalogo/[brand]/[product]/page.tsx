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
  const message = `Hola, quiero agendar una cita para probarme ${product.name} de ${brand.name}${product.code ? `, referencia ${product.code}` : ""}.`;

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
        {product.specs ? (
          <div className="technical-layout">
            <div className="technical-table">
              <div><span>Forma</span><strong>{product.specs.shape}</strong></div>
              <div><span>Material</span><strong>{product.specs.material}</strong></div>
              <div><span>Ancho de mica</span><strong>{product.specs.lensWidth}</strong></div>
              <div><span>Puente</span><strong>{product.specs.bridgeWidth}</strong></div>
              <div><span>Largo de varilla</span><strong>{product.specs.templeLength}</strong></div>
              <div><span>Alto de mica</span><strong>{product.specs.lensHeight}</strong></div>
              <div><span>Ajuste</span><strong>{product.specs.fit}</strong></div>
              <div><span>Puente y nariz</span><strong>{product.specs.bridgeFit}</strong></div>
              <div><span>Clip-on compatible</span><strong>{product.specs.clipOn}</strong></div>
            </div>
            <div className="technical-aside">
              <Ruler /><h3>Cómo leer la medida</h3><p>El formato ancho–puente indica el ancho de cada mica y la separación del puente en milímetros. La varilla se mide desde la bisagra hasta la punta.</p>
              {product.officialSource ? <a href={product.officialSource} target="_blank" rel="noreferrer">Consultar referencia del fabricante ↗</a> : null}
            </div>
          </div>
        ) : (
          <div className="technical-pending">
            <Glasses /><div><h3>Medidas por confirmar en sucursal</h3><p>Esta referencia visual proviene del catálogo del negocio, pero el repositorio no incluye código ni ficha técnica. Para evitar datos incorrectos, el equipo verificará material, talla, puente y variantes durante la asesoría.</p></div>
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
