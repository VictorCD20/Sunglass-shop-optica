"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Eye, 
  Glasses, 
  Wrench, 
  Bike, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Store,
  ExternalLink,
  ShieldCheck,
  Bell
} from "lucide-react";
import { CONTACT, BRANDS, WHATSAPP_MESSAGES, whatsapp } from "@/lib/site-data";
import { TrackedWhatsappLink } from "@/components/tracked-whatsapp-link";
import { TrackedMapsLink } from "@/components/tracked-maps-link";
import { Button } from "@/components/ui/button";

interface ComingSoonLandingProps {
  onDisableComingSoon?: () => void;
}

export function ComingSoonLanding({ onDisableComingSoon }: ComingSoonLandingProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="coming-soon-root min-h-screen bg-[#080808] text-white selection:bg-[#d8a62f] selection:text-black font-sans">
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#d8a62f]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#d8a62f]/5 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-[#d8a62f]/8 rounded-full blur-[180px]" />
      </div>

      {/* Top Bar Banner */}
      <div className="relative z-20 bg-gradient-to-r from-[#d8a62f]/20 via-[#d8a62f]/30 to-[#d8a62f]/20 border-b border-[#d8a62f]/30 px-4 py-2.5 text-center text-xs font-semibold tracking-wider text-[#f5d77f] uppercase flex items-center justify-center gap-2">
        <Store className="w-4 h-4 animate-pulse text-[#d8a62f]" />
        <span>¡Atención presencial continua en nuestra sucursal de Plaza Dorada, Mérida!</span>
      </div>

      {/* Header */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/logo.png" 
            alt="Sunglass Shop Óptica" 
            className="h-10 md:h-12 w-auto filter brightness-0 invert" 
          />
        </div>

        <div className="flex items-center gap-3">
          {onDisableComingSoon && (
            <button 
              onClick={onDisableComingSoon}
              title="Alternar modo vista previa del sitio completo para desarrolladores"
              className="text-xs bg-white/10 hover:bg-white/20 text-white/80 hover:text-white px-3 py-1.5 rounded-full transition-all border border-white/15"
            >
              Ver sitio completo (Dev Preview)
            </button>
          )}

          <TrackedWhatsappLink 
            href={whatsapp(WHATSAPP_MESSAGES.general)} 
            eventName="click_whatsapp_header_comingsoon" 
            eventCategory="lead" 
            eventLabel="whatsapp_comingsoon_header"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full transition-all shadow-lg hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">WhatsApp Sucursal</span>
            <span className="sm:hidden">WhatsApp</span>
          </TrackedWhatsappLink>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8a62f]/10 border border-[#d8a62f]/30 text-[#d8a62f] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Próximamente sitio renovado</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.08] mb-6">
            Estamos creando una <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#d8a62f]">experiencia digital única.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Estamos actualizando nuestra plataforma en línea para brindarte un mejor servicio. Mientras tanto, <strong className="text-white font-medium">nuestra sucursal física en Plaza Dorada está 100% abierta</strong> para recibirte con atención personalizada, exámenes de vista y entrega inmediata.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <TrackedWhatsappLink 
              href={whatsapp("Hola, quiero consultar sobre disponibilidad de lentes o agendar cita en sucursal.")} 
              eventName="click_whatsapp_hero_comingsoon" 
              eventCategory="lead" 
              eventLabel="whatsapp_comingsoon_hero"
            >
              <Button className="bg-[#d8a62f] hover:bg-[#c49425] text-black font-bold rounded-full px-8 py-6 text-base shadow-xl hover:scale-105 transition-all">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
            </TrackedWhatsappLink>

            <TrackedMapsLink 
              href="https://maps.google.com/?q=Sunglass+Shop+Plaza+Dorada+Merida" 
            >
              <Button variant="outline" className="bg-white/5 hover:bg-white/15 text-white border-white/20 rounded-full px-8 py-6 text-base backdrop-blur-md transition-all">
                <MapPin className="w-5 h-5 mr-2 text-[#d8a62f]" />
                Ver ubicación en Google Maps
              </Button>
            </TrackedMapsLink>
          </div>
        </div>

        {/* Physical Store Location Card */}
        <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/15 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8a62f]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#d8a62f] text-xs font-bold uppercase tracking-widest">
                <Store className="w-4 h-4" />
                <span>Tu Óptica de Confianza en Mérida</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-white">
                Visítanos en nuestro local físico
              </h2>

              <p className="text-neutral-300 font-light leading-relaxed">
                Ven a probarte los armazones en persona. Podrás verificar el ajuste en tu rostro, calidad de materiales, graduación de micas y recibir recomendación personalizada por optometristas expertos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#d8a62f]/15 rounded-xl text-[#d8a62f] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Ubicación</h3>
                    <p className="text-sm font-medium text-white leading-snug">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#d8a62f]/15 rounded-xl text-[#d8a62f] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Horario</h3>
                    <p className="text-sm font-medium text-white leading-snug">{CONTACT.hours}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href={`tel:${CONTACT.phoneDigits}`} 
                  className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d8a62f]" />
                  <span>Llamar: {CONTACT.phone}</span>
                </a>

                <TrackedWhatsappLink
                  href={whatsapp("Hola, quiero consultar el inventario o cotizar micas.")}
                  eventName="click_whatsapp_store_card"
                  eventCategory="lead"
                  eventLabel="whatsapp_store_card"
                  className="inline-flex items-center gap-2 text-sm text-[#25d366] hover:text-white bg-[#25d366]/10 hover:bg-[#25d366] px-4 py-2.5 rounded-full border border-[#25d366]/30 transition-all font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar inventario activo</span>
                </TrackedWhatsappLink>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-xl relative group">
                <img 
                  src="/assets/catalogo/RayBan/RayBan10.jpeg" 
                  alt="Sunglass Shop Óptica Local Plaza Dorada" 
                  className="w-100 h-100 object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#d8a62f] text-xs font-bold uppercase tracking-wider">Plaza Dorada · Local 64</span>
                  <span className="text-white text-lg font-serif">Mérida, Yucatán</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Offerings at the Physical Store */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d8a62f]">Atención Integral Presencial</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-2">¿Qué encontrarás en nuestra tienda?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-[#d8a62f]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#d8a62f]/10 text-[#d8a62f] flex items-center justify-center mb-5 group-hover:bg-[#d8a62f] group-hover:text-black transition-colors">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Optometría Profesional</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Examen de la vista completo y adaptación de graduación exacta por especialistas para garantizar máximo confort visual.
              </p>
            </div>

            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-[#d8a62f]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#d8a62f]/10 text-[#d8a62f] flex items-center justify-center mb-5 group-hover:bg-[#d8a62f] group-hover:text-black transition-colors">
                <Glasses className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Armazones 100% Originales</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Modelos de diseñador y marcas líderes con garantía directa: Ray-Ban, Oakley, Guess, Carolina Herrera, Vogue y Ralph Lauren.
              </p>
            </div>

            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-[#d8a62f]/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#d8a62f]/10 text-[#d8a62f] flex items-center justify-center mb-5 group-hover:bg-[#d8a62f] group-hover:text-black transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Ajustes & Refacciones</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Mantenimiento, cambio de plaquetas, nivelación de varillas y repuestos originales para alargar la vida útil de tus lentes.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Logos Showcase */}
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-6">
            Marcas disponibles directamente en exhibidor
          </span>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {BRANDS.map((brand) => (
              <div key={brand.id} className="h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="max-h-8 max-w-[120px] object-contain filter brightness-0 invert" />
                ) : (
                  <span className="text-white font-serif font-bold text-lg">{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe / Notification Form */}
        <div className="bg-gradient-to-b from-[#d8a62f]/15 to-neutral-900/90 border border-[#d8a62f]/30 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-2xl">
          <Bell className="w-10 h-10 text-[#d8a62f] mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">¿Quieres ser el primero en ver la nueva web?</h3>
          <p className="text-sm text-neutral-300 mb-6 font-light">
            Déjanos tu correo y te notificaremos inmediatamente cuando la plataforma digital esté lista con nuestro catálogo completo en línea.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 text-[#f5d77f] bg-[#d8a62f]/20 border border-[#d8a62f]/40 px-6 py-3 rounded-full text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-[#25d366]" />
              <span>¡Gracias! Te avisaremos tan pronto hagamos el lanzamiento.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/60 border border-white/20 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d8a62f]"
              />
              <button
                type="submit"
                className="bg-[#d8a62f] hover:bg-[#c49425] text-black font-bold px-6 py-3.5 rounded-full text-sm transition-all whitespace-nowrap"
              >
                Notificarme
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sunglass Shop Óptica. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d8a62f]" />
            <span>Plaza Dorada, Mérida · Calle 50 no. 143 loc. 64</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
