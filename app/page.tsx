'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Play, BookOpen, Facebook, Instagram, Youtube } from 'lucide-react';
import { Header } from '@/components/Header';
import { PRODUCTS } from '@/lib/products';

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.18 8.18 0 004.77 1.52V7a4.85 4.85 0 01-1-.31z"/>
  </svg>
);

const CARD_STYLES = [
  {
    border: 'linear-gradient(148deg, #5aaa72 0%, #2a7a48 25%, rgba(210,255,225,0.42) 50%, #1a5030 75%, #4a9a62 100%)',
    bg:     'linear-gradient(162deg, #1b4828 0%, #0c2612 100%)',
    glow:   'rgba(38,140,68,0.32)',
  },
  {
    border: 'linear-gradient(148deg, #8a6a3e 0%, #4a3016 25%, rgba(255,238,195,0.32) 50%, #1a0c04 75%, #7a5a30 100%)',
    bg:     'linear-gradient(162deg, #281804 0%, #0e0802 100%)',
    glow:   'rgba(118,78,28,0.32)',
  },
  {
    border: 'linear-gradient(148deg, #4a7aca 0%, #1a4a9a 25%, rgba(178,210,255,0.32) 50%, #081640 75%, #3a6aba 100%)',
    bg:     'linear-gradient(162deg, #0c1c42 0%, #050c20 100%)',
    glow:   'rgba(28,78,178,0.32)',
  },
];

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 3);
  const thumbs   = PRODUCTS.slice(0, 4);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: '42vh', minHeight: '250px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image src="/products/banner-1.jpg" alt="AG Resinas" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.36)' }} />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative', zIndex: 10, width: '100%', textAlign: 'center', padding: '0 16px' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.7rem, 4vw, 3rem)',
            color: '#fff',
            marginBottom: '22px',
            lineHeight: 1.25,
            textShadow: '2px 2px 10px rgba(0,0,0,0.55)',
          }}>
            AG Resinas: A Arte que Molda sua Mesa.
          </h1>
          <Link
            href="#shop"
            className="glass-hero-btn"
            style={{
              display: 'inline-block',
              padding: '11px 36px',
              borderRadius: '999px',
              color: '#fff',
              fontSize: '11px',
              letterSpacing: '0.22em',
              fontWeight: 300,
              fontFamily: 'var(--font-poppins)',
              textDecoration: 'none',
            }}
          >
            EXPLORAR A COLEÇÃO.
          </Link>
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <main id="shop" style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 20px 60px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>

          {/* Left Column ~64% */}
          <div style={{ flex: '1 1 400px', minWidth: 0 }}>
            <h2 style={{
              textAlign: 'center',
              fontFamily: 'var(--font-poppins)',
              fontSize: '12px',
              fontWeight: 300,
              letterSpacing: '0.38em',
              color: '#555',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              NOSSAS MESAS
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '14px' }}>
              {featured.map((p, i) => {
                const s = CARD_STYLES[i];
                return (
                  <Link key={p.id} href={'/product/' + p.slug} style={{ textDecoration: 'none' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.11 }}
                      whileHover={{ y: -6 }}
                      style={{
                        borderRadius: '18px',
                        padding: '3px',
                        background: s.border,
                        boxShadow: '0 8px 30px ' + s.glow + ', 0 2px 10px rgba(0,0,0,0.22)',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ borderRadius: '15px', overflow: 'hidden', background: s.bg }}>
                        <div style={{ position: 'relative', height: '190px' }}>
                          <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '10px 12px 14px' }}>
                          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '11px', color: '#fff', lineHeight: 1.45, marginBottom: '6px' }}>
                            {p.name}
                          </p>
                          <p style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                            {'R$ ' + p.price.toFixed(2).replace('.', ',')}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column ~35% */}
          <div style={{ flex: '0 1 300px', minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Projetos Criativos */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.35em',
                color: '#555',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: '14px',
              }}>
                PROJETOS CRIATIVOS
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {thumbs.map(p => (
                  <div key={p.id} style={{ position: 'relative', aspectRatio: '1', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dicas de Criação */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.35em',
                color: '#555',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: '14px',
              }}>
                DICAS DE CRIAÇÃO
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
                <Link href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #1b4828, #0c2612)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(20,80,40,0.28)', transition: 'transform 0.2s' }}>
                    <Play size={20} color="#fff" fill="#fff" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '11px', color: '#666' }}>Tutoriais de Arte</span>
                </Link>
                <Link href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #1a2e52, #091628)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(20,40,100,0.28)', transition: 'transform 0.2s' }}>
                    <BookOpen size={20} color="#fff" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-poppins)', fontSize: '11px', color: '#666' }}>Guia de Materiais</span>
                </Link>
              </div>
            </div>

            {/* Resin Cloud – footer blob */}
            <div style={{ marginTop: '4px' }}>
              <div style={{
                borderRadius: '62% 38% 52% 48% / 56% 46% 54% 44%',
                background: 'radial-gradient(ellipse at 34% 40%, rgba(255,255,255,0.80) 0%, rgba(216,232,255,0.58) 55%, rgba(192,216,255,0.36) 100%)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1.5px solid rgba(255,255,255,0.84)',
                boxShadow: '0 10px 44px rgba(168,202,255,0.30), inset 0 2px 1px rgba(255,255,255,0.92)',
                padding: '22px 20px',
              }}>
                <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0 }}>
                    <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '13px', color: '#1c2c46', marginBottom: '10px' }}>
                      Resin Cloud
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#444' }}>
                      <Facebook size={14} />
                      <Instagram size={14} />
                      <Youtube size={14} />
                      <TikTokIcon />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '18px' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.1em', color: '#1c2c46', marginBottom: '6px' }}>Social</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontFamily: 'var(--font-poppins)', fontSize: '10px', color: '#667' }}>
                        <span>Anumateo</span>
                        <span>Soniantata</span>
                        <span>Ponto bralado</span>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 600, fontSize: '10px', letterSpacing: '0.1em', color: '#1c2c46', marginBottom: '6px' }}>Info</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontFamily: 'var(--font-poppins)', fontSize: '10px', color: '#667' }}>
                        <span>Encomendas</span>
                        <span>Prazos</span>
                        <span>Materiais</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
