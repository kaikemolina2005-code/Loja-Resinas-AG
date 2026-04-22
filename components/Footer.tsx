'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a3055', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700 }}>
              LL MODAS.
            </span>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, marginBottom: '15px', fontSize: '14px' }}>Social</h4>
            <div className="flex items-center gap-5">
              <Link href="#" className="hover:opacity-70 transition-opacity text-white"><Facebook size={22} /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity text-white"><Instagram size={22} /></Link>
              <Link href="#" className="hover:opacity-70 transition-opacity text-white"><Youtube size={22} /></Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, marginBottom: '15px', fontSize: '14px' }}>Info</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="#" style={{ color: '#fff', fontSize: '14px', textDecoration: 'none', fontFamily: 'var(--font-poppins)' }} className="hover:underline">Encomendas</Link></li>
              <li><Link href="#" style={{ color: '#fff', fontSize: '14px', textDecoration: 'none', fontFamily: 'var(--font-poppins)' }} className="hover:underline">Prazos</Link></li>
              <li><Link href="#" style={{ color: '#fff', fontSize: '14px', textDecoration: 'none', fontFamily: 'var(--font-poppins)' }} className="hover:underline">Materiais</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex gap-5" style={{ fontFamily: 'var(--font-poppins)', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
            <span>Anumateo</span>
            <span>Soniantata</span>
            <span>Ponto bralado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
