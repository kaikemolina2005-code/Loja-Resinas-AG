'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-shrink-0">
            <span style={{fontFamily: 'var(--font-playfair)'}} className="text-2xl font-bold text-brand-dark">
              LL MODAS<span className="text-brand-teal">.</span>
            </span>
          </div>
          <div>
            <h4 style={{fontFamily: 'var(--font-poppins)'}} className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-4">Social</h4>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-brand-teal transition-colors"><Facebook size={18} /></Link>
              <Link href="#" className="hover:text-brand-teal transition-colors"><Instagram size={18} /></Link>
              <Link href="#" className="hover:text-brand-teal transition-colors"><Youtube size={18} /></Link>
            </div>
          </div>
          <div>
            <h4 style={{fontFamily: 'var(--font-poppins)'}} className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-teal transition-colors">Encomendas</Link></li>
              <li><Link href="#" className="hover:text-brand-teal transition-colors">Prazos</Link></li>
              <li><Link href="#" className="hover:text-brand-teal transition-colors">Materiais</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex gap-4 text-xs text-gray-400" style={{fontFamily: 'var(--font-poppins)'}}>
            <span>Anumateo</span>
            <span>Soniantata</span>
            <span>Ponto bralado</span>
          </div>
          <p className="text-xs text-gray-400" style={{fontFamily: 'var(--font-poppins)'}}>2026 LL MODAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
