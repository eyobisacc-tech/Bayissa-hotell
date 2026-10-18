import React from 'react';

const rates = [
  { service: 'Standard Room', duration: 'Per Night', cost: '$100' },
  { service: 'Executive King', duration: 'Per Night', cost: '$140' },
  { service: 'Deluxe Suite', duration: 'Per Night', cost: '$180' },
  { service: 'Full Body Spa Massage', duration: '60 Minutes', cost: '$65' },
  { service: 'VIP Dining Experience', duration: 'Per Person', cost: '$45' },
];

export default function Rates() {
  return (
    <section id="rates" className="py-24 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold mt-2">Rates & Packages</h2>
        </div>

        <div className="bg-stone-950 border border-amber-500/20 rounded-sm divide-y divide-stone-800">
          {rates.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-5 hover:bg-stone-900/50 transition">
              <div>
                <p className="font-serif font-semibold text-amber-100">{item.service}</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider">{item.duration}</p>
              </div>
              <span className="text-amber-400 font-bold text-lg">{item.cost}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
