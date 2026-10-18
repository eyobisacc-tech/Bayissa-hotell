import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Abebe T.', text: 'Exceptional hospitality and wonderful ambience. The food at the restaurant was world-class!' },
  { name: 'Sarah M.', text: 'The rooms are spotless, modern, and extremely comfortable. Will definitely return.' },
  { name: 'Daniel K.', text: 'The spa experience was pure bliss. Highly recommend Bayissa Hotel for any traveler.' },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Guest Stories</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold mt-2">Customer Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-stone-900 p-6 border border-amber-500/10 rounded-sm space-y-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-stone-300 text-sm italic font-light">"{rev.text}"</p>
              <p className="text-amber-200 font-serif font-bold text-sm">— {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
