import { Phone, MessageCircle, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`;
  const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`;

  return (
    <section id="home" className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={siteConfig.heroImage}
        alt="Bayissa Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brown-900/60 via-brown-900/40 to-brown-900/70" />

      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-gold-300 fill-gold-300" />
          ))}
        </div>
        <p className="text-gold-300 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
          {siteConfig.location}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-3">
          Welcome to {siteConfig.name}
        </h1>
        <p className="font-serif text-xl md:text-3xl text-cream-100 italic mb-8">
          {siteConfig.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={telLink} className="btn-gold">
            <Phone size={18} /> Call Now
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
