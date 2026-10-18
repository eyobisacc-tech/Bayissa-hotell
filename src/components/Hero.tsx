import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-stone-900 text-stone-100 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80')" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/70 z-0" />

      <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
        <div className="flex justify-center items-center gap-1 text-amber-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400" />
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-amber-100 tracking-wide">
          BAYISSA HOTEL
        </h1>
        <p className="text-lg md:text-xl text-stone-300 font-light tracking-widest uppercase">
          Luxury, Elegance & Timeless Comfort
        </p>
        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#rooms" className="bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold px-8 py-3.5 uppercase tracking-widest text-sm transition">
            Explore Rooms
          </a>
          <a href="#contact" className="border border-amber-400/50 hover:bg-amber-400/10 text-amber-300 font-bold px-8 py-3.5 uppercase tracking-widest text-sm transition">
            Reserve a Stay
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-stone-400 hover:text-amber-400 transition animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
