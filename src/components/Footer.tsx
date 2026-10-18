import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-amber-500/20 text-center text-xs uppercase tracking-widest">
      <p>© {new Date().getFullYear()} Bayissa Hotel. All Rights Reserved.</p>
    </footer>
  );
}
