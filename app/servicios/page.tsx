import type { Metadata } from "next";
import { Car, Eye, Glasses, Palette, ScanFace, Shield, Sun, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { whatsapp } from "@/lib/site-data";

export const metadata: Metadata = { title: "Servicios", description: "Servicios ópticos especializados en Mérida." };
export default function Servicios() {
  return <main><PageHero eyebrow="Precisión y cuidado" title="Servicios Especializados" text="Atención clínica, tecnología y asesoría personalizada para cuidar tu salud visual." media="/assets/catalogo/RayBan/RayBan2.jpeg"><Button asChild><a href={whatsapp("Hola, quiero información sobre los servicios especializados.")} target="_blank">Solicitar información</a></Button></PageHero>
    <section className="section service-grid">{[
      {icon:<Eye/>,title:"Examen Visual Clínico",text:"Evaluación visual profesional para identificar tus necesidades y definir la graduación adecuada."},
      {icon:<Glasses/>,title:"Micas Graduadas",text:"Opciones de lentes oftálmicos y tratamientos según tu estilo de vida y receta visual."},
      {icon:<ScanFace/>,title:"Asesoría Personalizada",text:"Recomendación de armazones basada en tu rostro, uso diario, estilo y necesidades visuales."},
    ].map((item, index) => <article key={item.title}><span>0{index+1}</span>{item.icon}<h2>{item.title}</h2><p>{item.text}</p></article>)}</section>
    <section className="sun-section"><div><span className="eyebrow gold">Protección con estilo</span><h2>Lentes solares<br/><em>con graduación</em></h2><p>Disfruta protección solar y visión clara sin renunciar al diseño del armazón que elegiste.</p></div><div className="sun-grid">{[{icon:<Shield/>,title:"Filtro UV Total"},{icon:<Sun/>,title:"Fotosensibles"},{icon:<Car/>,title:"Para Conducir"},{icon:<Palette/>,title:"Tonos Especiales"}].map(item => <article key={item.title}>{item.icon}<h3>{item.title}</h3></article>)}</div></section>
    <section className="repair-section"><div className="repair-visual"><Wrench/></div><div><span className="eyebrow">Taller de óptica</span><h2>Refacciones y reparación óptica</h2><p>Servicio especializado de ajuste, reparación y sustitución de piezas para prolongar la vida útil de tus lentes.</p><p className="small-note">* Servicio sujeto a modelo, marca y disponibilidad de piezas.</p><Button asChild variant="dark"><a href={whatsapp("Hola, quiero información sobre refacciones o reparación de lentes.")} target="_blank">Consultar por WhatsApp</a></Button></div></section>
  </main>;
}
