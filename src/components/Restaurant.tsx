import React from 'react';

export default function Restaurant() {
  return (
    <section id="restaurant" className="py-24 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" 
            alt="Fine Dining Restaurant" 
            className="rounded-sm border border-amber-500/20 shadow-xl"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Fine Dining</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold">Exquisite Culinary Delights</h2>
          <p className="text-stone-300 font-light leading-relaxed">
            Our master chefs curate gourmet dishes combining local flavors with international gastronomy, paired with an extensive selection of fine drinks.
          </p>
        </div>
      </div>
    </section>
  );
}
