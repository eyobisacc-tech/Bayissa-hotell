import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Music } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`;
  const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`;

  function handleWhatsAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const text = encodeURIComponent(
      `Hello Bayissa Hotel,\n\nMy name is ${name.trim()}.\n\n${message.trim()}`
    );
    window.open(`${waLink}?text=${text}`, '_blank');
    setName('');
    setMessage('');
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-beige-200">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 bg-gold-400 text-white rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brown-800 font-semibold mb-1">Address</h3>
                  <p className="text-brown-600 text-sm">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 bg-gold-400 text-white rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brown-800 font-semibold mb-1">Phone</h3>
                  <a href={telLink} className="text-brown-600 text-sm hover:text-gold-500 transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold-400 text-white rounded-sm flex items-center justify-center shrink-0">
                  <Music size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brown-800 font-semibold mb-1">TikTok</h3>
                  <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="text-brown-600 text-sm hover:text-gold-500 transition-colors">
                    {siteConfig.tiktokHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Big WhatsApp button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-lg py-4 shadow-lg"
            >
              <MessageCircle size={24} /> Chat on WhatsApp
            </a>
          </div>

          {/* Contact form → sends to WhatsApp */}
          <div className="bg-white p-6 md:p-8 rounded-sm shadow-lg border border-beige-200">
            <h3 className="font-serif text-2xl text-brown-800 font-semibold mb-2">Send a Message</h3>
            <p className="text-brown-500 text-sm mb-6">We will reply to you on WhatsApp as soon as possible.</p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 border border-beige-300 rounded-sm bg-cream-50 text-brown-800 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-beige-300 rounded-sm bg-cream-50 text-brown-800 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn-whatsapp w-full">
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
