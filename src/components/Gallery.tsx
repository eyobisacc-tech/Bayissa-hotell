import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Visual Tour</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold mt-2">Photo Gallery</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img key={i} src={img} alt="Gallery" className="w-full h-48 object-cover rounded-sm border border-amber-500/20 hover:opacity-80 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
