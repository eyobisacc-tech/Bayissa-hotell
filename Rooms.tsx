import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Rooms() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section id="rooms" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-subtitle">Accommodation</p>
          <h2 className="section-title">Our Rooms</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.rooms.map((room) => (
            <div
              key={room.name}
              className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-brown-800 font-semibold mb-2">{room.name}</h3>
                <p className="text-sm text-brown-500 leading-relaxed mb-4">{room.description}</p>
                <div className="flex items-center justify-between border-t border-beige-200 pt-4">
                  <div>
                    <span className="font-serif text-2xl text-gold-500 font-bold">{room.price}</span>
                    <span className="text-xs text-brown-400 ml-1">ETB/night</span>
                  </div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 hover:text-gold-600 transition-colors"
                    aria-label={`Book ${room.name} on WhatsApp`}
                  >
                    <MessageCircle size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
