import { Phone, MessageCircle, MapPin, Music, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`;
  const telLink = `tel:${siteConfig.phone.replace(/\s/g, '')}`;

  return (
    <footer className="bg-brown-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white font-bold mb-2">{siteConfig.name}</h3>
            <p className="text-gold-300 text-sm uppercase tracking-[0.2em] mb-4">{siteConfig.tagline}</p>
            <p className="text-sm text-brown-300 leading-relaxed">
              Warm Ethiopian hospitality in the heart of Dukem. Your comfort is our priority.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-gold-400 shrink-0" /> {siteConfig.address}
              </li>
              <li>
                <a href={telLink} className="flex items-center gap-2.5 hover:text-gold-300 transition-colors">
                  <Phone size={16} className="text-gold-400 shrink-0" /> {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-gold-300 transition-colors">
                  <MessageCircle size={16} className="text-gold-400 shrink-0" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-gold-300 transition-colors">
                  <Music size={16} className="text-gold-400 shrink-0" /> TikTok {siteConfig.tiktokHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Rooms & Rates', href: '#rooms' },
                { label: 'Restaurant', href: '#restaurant' },
                { label: 'Spa & Wellness', href: '#spa' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Gallery', href: '#gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-300 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brown-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-brown-400 flex items-center gap-1">
            Made with <Heart size={12} className="text-gold-400 fill-gold-400" /> in Dukem, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
