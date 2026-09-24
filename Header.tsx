import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Rates', href: '#rates' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Spa', href: '#spa' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waLink = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      {/* Top bar */}
      <div className="bg-brown-800 text-cream-100 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-gold-300 transition-colors">
              <Phone size={13} /> {siteConfig.phoneDisplay}
            </a>
            <span className="text-brown-400">|</span>
            <span>{siteConfig.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
              TikTok {siteConfig.tiktokHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream-50 shadow-md py-2' : 'bg-cream-50/95 py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-serif text-2xl md:text-3xl text-brown-800 font-bold tracking-wide">
              {siteConfig.name}
            </span>
            <span className="text-[10px] md:text-xs text-gold-500 uppercase tracking-[0.25em] mt-0.5">
              {siteConfig.location}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-brown-700 hover:text-gold-500 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs md:text-sm px-4 py-2"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-brown-700 hover:text-gold-500 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-cream-100 border-t border-beige-200 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-brown-700 hover:text-gold-500 font-medium py-1.5 border-b border-beige-200 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-brown-700 pt-2">
                <Phone size={15} /> {siteConfig.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
