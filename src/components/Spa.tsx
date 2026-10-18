import React from 'react';

export default function Spa() {
  return (
    <section id="spa" className="py-24 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Wellness & Relax</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold">Rejuvenating Spa Treatments</h2>
          <p className="text-stone-300 font-light leading-relaxed">
            Escape into complete serenity with therapeutic massages, sauna sessions, and personalized holistic wellness treatments.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
            alt="Spa and Wellness" 
            className="rounded-sm border border-amber-500/20 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
