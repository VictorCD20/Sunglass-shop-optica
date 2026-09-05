import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FaceShapePortrait, type FaceShapeId } from "@/components/face-shape-portrait";
import { Button } from "@/components/ui/button";
import { whatsapp } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Asesoría según tu rostro",
  description: "Descubre qué armazón favorece tu tipo de rostro. Asesoría presencial en Sunglass Shop Óptica, Mérida.",
};

type FaceShape = {
  id: FaceShapeId;
  name: string;
  traits: string;
  recommend: string[];
  avoid: string;
};

const SHAPES: FaceShape[] = [
  {
    id: "ovalado",
    name: "Rostro ovalado",
    traits: "Ligeramente más largo que ancho, pómulos definidos y mandíbula suave. Proporción simétrica y armoniosa.",
    recommend: ["Casi cualquier armazón", "Cat-eye", "Rectangular", "Aviador"],
    avoid: "Evita armazones desproporcionadamente grandes que oculten tu equilibrio natural.",
  },
  {
    id: "redondo",
    name: "Rostro redondo",
    traits: "Ancho y largo similares, mejillas llenas y contornos suaves. Sin puente nasal muy pronunciado.",
    recommend: ["Rectangulares", "Cuadrados", "Cat-eye", "Geométricos angulares"],
    avoid: "Evita los redondos pequeños: acentúan la redondez y suelen quedar cortos de varilla.",
  },
  {
    id: "cuadrado",
    name: "Rostro cuadrado",
    traits: "Frente ancha, pómulos alineados y mandíbula marcada con ángulo recto definido.",
    recommend: ["Redondos", "Ovalados", "Cat-eye suaves", "Metálicos finos"],
    avoid: "Evita los cuadrados o angulares duros: duplican la rigidez de tus facciones.",
  },
  {
    id: "corazon",
    name: "Rostro corazón",
    traits: "Frente amplia con pico de viuda en el cabello, pómulos altos y barbilla fina o en punta.",
    recommend: ["Redondos", "Ovalados finos", "Cat-eye invertidos", "Metálicos ligeros"],
    avoid: "Evita los cat-eye muy pesados o frentes gruesas: ensanchan aún más la parte superior.",
  },
  {
    id: "diamante",
    name: "Rostro diamante",
    traits: "Frente y mandíbula estrechas; los pómulos son altos y representan el punto más ancho del rostro.",
    recommend: ["Cat-eye", "Ovalados", "Mariposa", "Browline"],
    avoid: "Evita los armazones muy angostos: exageran la distancia de los pómulos.",
  },
  {
    id: "alargado",
    name: "Rostro alargado",
    traits: "Visiblemente más largo que ancho, frente amplia y despejada, con laterales rectos y mejillas estilizadas.",
    recommend: ["Cuadrados anchos", "Aviador", "Browline", "Armazones con puente bajo"],
    avoid: "Evita los redondos pequeños y muy angostos: alargan aún más el rostro.",
  },
];

export default function Asesoria() {
  return (
    <main>
      <PageHero
        eyebrow="Encontramos tu armazón ideal"
        title="¿Qué armazón va con tu rostro?"
        text="Cada rostro es distinto. Identifica tu forma y descubre qué diseños te favorecen; la prueba final siempre se hace en sucursal para revisar proporción, puente y comodidad."
        media="/assets/catalogo/Guess/Guess4.jpeg"
      >
        <Button asChild><a href="#rostros">Ver tipos de rostro</a></Button>
        <Button asChild variant="outline"><a href={whatsapp("Hola, quiero agendar una asesoría para elegir el armazón ideal para mi rostro.")} target="_blank" rel="noreferrer">Agendar asesoría</a></Button>
      </PageHero>

      <section id="rostros" className="face-guide section">
        <div className="section-intro centered">
          <span className="eyebrow">Guía visual anatómica</span>
          <h2>Identifica tu tipo de rostro.<br/><em>Descubre tu armazón.</em></h2>
          <p>Muchas personas eligen armazones que no corresponden a su fisonomía y terminan con lentes apretados, cortos o que no favorecen su cara. Esta guía te ayuda a reconocer tu forma y los diseños que la equilibran.</p>
        </div>
        <div className="face-guide-grid">
          {SHAPES.map((shape) => (
            <article key={shape.id} className="face-card">
              <div className="face-card-portrait">
                <FaceShapePortrait id={shape.id} />
              </div>
              <h3>{shape.name}</h3>
              <p>{shape.traits}</p>
              <div className="face-recommend">
                <span className="eyebrow gold">Te favorecen</span>
                <ul>{shape.recommend.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <p className="face-avoid">{shape.avoid}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="face-size-note section">
        <div className="section-intro">
          <span className="eyebrow gold">Además de la forma: la medida</span>
          <h2>El tamaño correcto<br/><em>importa tanto como el diseño.</em></h2>
          <p>Un armazón muy pequeño (medida 55, de niño) obliga a las varillas a abrirse a la fuerza: queda apretado, deja marcas en la piel y se oxida más rápido por el contacto constante con el sudor. El estándar de adulto es 58 y también existen medidas de 62 para rostros más amplios.</p>
        </div>
        <div className="face-size-grid">
          <article><strong>55</strong><span>Medida de niño</span><p>Suele quedar corto en adultos: causa presión y marcas en las sienes.</p></article>
          <article><strong>58</strong><span>Estándar de adulto</span><p>La medida más común para rostros proporcionados.</p></article>
          <article><strong>62</strong><span>Rostros anchos</span><p>Mayor cobertura y comodidad para rostros grandes o anchos.</p></article>
        </div>
      </section>

      <section className="face-cta">
        <span className="eyebrow gold">Asesoría presencial</span>
        <h2>Tenemos la duda de cómo te queda.<br/><em>La resolvemos probándotelos.</em></h2>
        <p>Agenda una asesoría sin costo: evaluamos tu rostro, tu graduación y tu estilo para recomendarte los armazones que realmente te favorecen.</p>
        <Button asChild variant="dark"><a href={whatsapp("Hola, quiero agendar una asesoría para elegir el armazón ideal para mi tipo de rostro.")} target="_blank" rel="noreferrer"><MessageCircle /> Agendar asesoría por WhatsApp</a></Button>
      </section>
    </main>
  );
}
