import Link from "next/link";
import { Camera, MapPin, MessageCircle, Share2 } from "lucide-react";
import { CONTACT, NAV, whatsapp } from "@/lib/site-data";

export function SiteFooter() {
  return <>
    <footer className="footer">
      <div className="footer-brand"><img src="/assets/logo.png" alt="Sunglass Shop Óptica" /><p>Visión perfecta. Estilo auténtico. Asesoría experta.</p></div>
      <div><h3>Menú</h3>{NAV.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div><h3>Contacto</h3><p><MapPin size={16} /> {CONTACT.address}</p><a href={`tel:${CONTACT.phoneDigits}`}>{CONTACT.phone}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
      <div><h3>Síguenos</h3><div className="socials"><a href="https://www.facebook.com/share/1F2hzm9b7k/" target="_blank" aria-label="Facebook"><Share2 /></a><a href="https://www.instagram.com/sunglassshopoptica?igsh=MXM1eWl6dTI5OWs4dw==" target="_blank" aria-label="Instagram"><Camera /></a></div></div>
    </footer>
    <a className="whatsapp-float" href={whatsapp()} target="_blank" aria-label="Contactar por WhatsApp"><MessageCircle /></a>
  </>;
}
