import React from 'react';
import { Wifi, Tv, Coffee, ShieldCheck } from 'lucide-react';

const rooms = [
  {
    title: 'Deluxe Suite',
    price: '$180 / night',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    description: 'Spacious suite featuring king bed, panoramic balcony, and plush seating area.'
  },
  {
    title: 'Executive King Room',
    price: '$140 / night',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    description: 'Designed for business and relaxation with ergonomic workspace and high-speed WiFi.'
  },
  {
    title: 'Standard Double Room',
    price: '$100 / night',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    description: 'Cozy and elegant accommodation with premium bedding and quiet courtyard view.'
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Accommodations</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold mt-2">Luxurious Rooms & Suites</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div key={idx} className="bg-stone-900 border border-amber-500/10 rounded-sm overflow-hidden hover:border-amber-500/40 transition">
              <img src={room.image} alt={room.title} className="w-full h-60 object-cover" />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-serif font-bold text-amber-100">{room.title}</h3>
                  <span className="text-amber-400 font-semibold text-sm">{room.price}</span>
                </div>
                <p className="text-stone-400 text-sm font-light leading-relaxed">{room.description}</p>
                <div className="flex gap-4 text-stone-500 pt-2 border-t border-stone-800">
                  <Wifi className="w-4 h-4" />
                  <Tv className="w-4 h-4" />
                  <Coffee className="w-4 h-4" />
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
