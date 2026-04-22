'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      background: 'rgba(242,240,235,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(200,195,183,0.45)',
      padding: '44px 0 28px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '32px' }}>

          <div>
            <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>
              AG Resinas.
            </span>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.18em', color: '#2a3a5a', marginBottom: '14px', textTransform: 'uppercase' }}>Social</h4>
            <div style={{ display: 'flex', gap: '14px', color: '#555' }}>
              <Link href="#" style={{ color: '#555' }}><Facebook size={18} /></Link>
              <Link href="#" style={{ color: '#555' }}><Instagram size={18} /></Link>
              <Link href="#" style={{ color: '#555' }}><Youtube size={18} /></Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.18em', color: '#2a3a5a', marginBottom: '14px', textTransform: 'uppercase' }}>Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link href="#" style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: '#666', textDecoration: 'none' }}>Encomendas</Link>
              <Link href="#" style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: '#666', textDecoration: 'none' }}>Prazos</Link>
              <Link href="#" style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', color: '#666', textDecoration: 'none' }}>Materiais</Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid rgba(180,175,165,0.35)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '11px', color: '#999' }}>2026 AG Resinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
