import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Welcome to Bayissa</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold">A Sanctuary of Refined Hospitality</h2>
          <p className="text-stone-300 leading-relaxed font-light">
            Designed for travelers seeking understated luxury, Bayissa Hotel provides an exceptional blend of modern sophisticated amenities and authentic warm hospitality. 
          </p>
          <p className="text-stone-400 leading-relaxed font-light">
            Whether visiting for business, a peaceful getaway, or culinary exploration, our dedicated team ensures an unforgettable experience tailored to your every need.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80" 
            alt="Bayissa Hotel Interior" 
            className="rounded-sm shadow-2xl border border-amber-500/20"
          />
        </div>
      </div>
    </section>
  );
}
