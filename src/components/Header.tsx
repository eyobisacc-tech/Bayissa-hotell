import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 text-stone-100 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-serif font-bold text-amber-400 tracking-wider">BAYISSA</span>
            <span className="text-xs uppercase tracking-widest text-stone-400 border-l border-stone-700 pl-3">Hotel & Spa</span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-stone-300">
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#rooms" className="hover:text-amber-400 transition">Rooms</a>
            <a href="#rates" className="hover:text-amber-400 transition">Rates</a>
            <a href="#restaurant" className="hover:text-amber-400 transition">Dining</a>
            <a href="#spa" className="hover:text-amber-400 transition">Spa</a>
            <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold px-5 py-2.5 rounded-sm transition flex items-center gap-2 text-sm uppercase tracking-wider">
              <Calendar className="w-4 h-4" /> Book Now
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-300 hover:text-amber-400">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-stone-900 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-3 text-sm uppercase tracking-wider">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">About</a>
          <a href="#rooms" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">Rooms</a>
          <a href="#rates" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">Rates</a>
          <a href="#restaurant" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">Dining</a>
          <a href="#spa" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">Spa</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">Gallery</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-stone-300 hover:text-amber-400">Contact</a>
        </div>
      )}
    </header>
  );
}
