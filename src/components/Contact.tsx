import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-serif text-amber-100 font-bold mt-2">Reservations & Contact</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-stone-900 border border-amber-500/10 rounded-sm space-y-3">
            <Phone className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold">Phone</h3>
            <p className="text-stone-400 text-sm">+251 900 000 000</p>
          </div>
          <div className="p-8 bg-stone-900 border border-amber-500/10 rounded-sm space-y-3">
            <Mail className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold">Email</h3>
            <p className="text-stone-400 text-sm">info@bayissahotel.com</p>
          </div>
          <div className="p-8 bg-stone-900 border border-amber-500/10 rounded-sm space-y-3">
            <MapPin className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold">Location</h3>
            <p className="text-stone-400 text-sm">Main Avenue, City Center</p>
          </div>
        </div>
      </div>
    </section>
  );
}
