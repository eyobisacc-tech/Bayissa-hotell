import { Sparkles, CalendarHeart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Spa() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section id="spa" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="section-subtitle">Relax & Rejuvenate</p>
            <h2 className="section-title mb-6">Spa & Wellness</h2>
            <p className="text-brown-600 text-lg leading-relaxed mb-8">
              Unwind and recharge at our spa. Our professional therapists offer a range of
              treatments designed to relax your body and soothe your mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {siteConfig.spaServices.map((service) => (
                <div key={service.name} className="bg-cream-100 p-4 rounded-sm border border-beige-200 hover:border-gold-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={16} className="text-gold-400" />
                    <h3 className="font-serif text-lg text-brown-800 font-semibold">{service.name}</h3>
                  </div>
                  <p className="text-sm text-brown-500">{service.description}</p>
                </div>
              ))}
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <CalendarHeart size={18} /> Book a Treatment
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={siteConfig.spaImage}
              alt="Bayissa Hotel Spa"
              className="rounded-sm shadow-xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
