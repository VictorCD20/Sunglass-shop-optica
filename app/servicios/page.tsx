import type { Metadata } from "next";
import { Bike, Car, Eye, Glasses, Palette, ScanFace, Shield, Sparkles, Sun, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { whatsapp } from "@/lib/site-data";

export const metadata: Metadata = { title: "Servicios", description: "Servicios ópticos especializados en Mérida." };
export default function Servicios() {
  return <main><PageHero eyebrow="Precisión y cuidado" title="Servicios Especializados" text="Atención clínica, tecnología y asesoría personalizada para cuidar tu salud visual." media="/assets/catalogo/RayBan/RayBan2.jpeg"><Button asChild><a href={whatsapp("Hola, quiero información sobre los servicios especializados.")} target="_blank">Solicitar información</a></Button></PageHero>
    <section className="section service-grid">{[
      {icon:<Eye/>,title:"Optometría integral",text:"Evaluación visual profesional para identificar tus necesidades y definir la graduación adecuada."},
      {icon:<Glasses/>,title:"Micas Graduadas",text:"Opciones de lentes oftálmicos y tratamientos según tu estilo de vida y receta visual."},
      {icon:<ScanFace/>,title:"Asesoría Personalizada",text:"Recomendación de armazones basada en tu rostro, uso diario, estilo y necesidades visuales."},
    ].map((item, index) => <article key={item.title}><span>0{index+1}</span>{item.icon}<h2>{item.title}</h2><p>{item.text}</p></article>)}</section>
    <section className="sports-service sports-service--page"><div className="sports-service-media"><video src="/assets/catalogo/RayBan/RayBanVid4.mp4" autoPlay muted loop playsInline preload="metadata" /></div><div className="sports-service-copy"><span className="eyebrow gold">Servicio especializado</span><div className="sports-icon"><Bike/><Sparkles/></div><h2>Fabricación de lentes deportivas graduadas</h2><p>Graduamos soluciones ópticas para diseños deportivos y envolventes, de acuerdo con la valoración presencial.</p><ul><li><Glasses/>Micas curvas con graduación</li><li><Sun/>Opciones de acabado espejeado</li><li><Sparkles/>Tecnología fotocromática para cambios de luz</li></ul><Button asChild><a href={whatsapp("Hola, quiero información sobre lentes deportivas graduadas.")} target="_blank">Consultar fabricación</a></Button></div></section>
    <section className="sun-section"><div><span className="eyebrow gold">Protección con estilo</span><h2>Lentes solares<br/><em>con graduación</em></h2><p>Disfruta protección solar y visión clara sin renunciar al diseño del armazón que elegiste.</p></div><div className="sun-grid">{[{icon:<Shield/>,title:"Filtro UV Total"},{icon:<Sun/>,title:"Fotosensibles"},{icon:<Car/>,title:"Para Conducir"},{icon:<Palette/>,title:"Tonos Especiales"}].map(item => <article key={item.title}>{item.icon}<h3>{item.title}</h3></article>)}</div></section>
    <section className="repair-section"><div className="repair-visual"><Wrench/></div><div><span className="eyebrow">Taller de óptica</span><h2>Reparación de lentes y refacciones</h2><p>Servicio especializado de ajuste, reparación y sustitución de piezas para prolongar la vida útil de tus lentes.</p><p className="small-note">* Servicio sujeto a modelo, marca y disponibilidad de piezas.</p><Button asChild variant="dark"><a href={whatsapp("Hola, quiero información sobre refacciones o reparación de lentes.")} target="_blank">Consultar por WhatsApp</a></Button></div></section>
  </main>;
}
