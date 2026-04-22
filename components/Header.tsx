'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const WaterDropLogo = () => (
  <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dg1" x1="10" y1="4" x2="32" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#72cce3"/>
        <stop offset="40%" stopColor="#2a9abc"/>
        <stop offset="100%" stopColor="#0d5a7a"/>
      </linearGradient>
      <linearGradient id="dg2" x1="14" y1="8" x2="24" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="rgba(255,255,255,0.55)"/>
        <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>
    </defs>
    <path d="M21 2C21 2 4 19 4 29.5C4 38.6 11.8 44 21 44C30.2 44 38 38.6 38 29.5C38 19 21 2 21 2Z" fill="url(#dg1)"/>
    <path d="M21 2C21 2 4 19 4 29.5C4 38.6 11.8 44 21 44C30.2 44 38 38.6 38 29.5C38 19 21 2 21 2Z" fill="url(#dg2)"/>
    <text x="21" y="33" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">AG</text>
  </svg>
);

const NAV_ITEMS = [
  { label: 'HOME',      href: '/' },
  { label: 'LOJA',      href: '/search' },
  { label: 'NOVIDADES', href: '/category/vestidos' },
  { label: 'PROMOÇÕES', href: '/category/conjuntos' },
  { label: 'SOBRE',     href: '#' },
];

export const Header = () => {
  const { cartCount } = useCart();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push('/search?q=' + encodeURIComponent(query.trim()));
      setSearchOpen(false);
      setQuery('');
    }
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(242,240,235,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.62)',
        boxShadow: '0 2px 20px rgba(100,120,150,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <WaterDropLogo />
          <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
            AG Resinas.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="glass-nav-item px-4 py-[7px] rounded-full"
              style={{ fontFamily: 'var(--font-poppins)', fontSize: '11px', fontWeight: 300, letterSpacing: '0.18em', color: '#3a3a3a', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {searchOpen && (
              <motion.form
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 180, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearch}
                className="overflow-hidden"
              >
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Buscar..."
                  style={{ width: '100%', border: '1px solid rgba(180,175,165,0.5)', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', outline: 'none', background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(8px)' }}
                />
              </motion.form>
            )}
          </AnimatePresence>

          <button onClick={() => setSearchOpen(v => !v)} className="glass-icon-btn w-9 h-9 rounded-full flex items-center justify-center">
            <Search size={15} style={{ color: '#555' }} />
          </button>
          <button className="glass-icon-btn w-9 h-9 rounded-full items-center justify-center hidden md:flex">
            <User size={15} style={{ color: '#555' }} />
          </button>
          <Link href="/cart" className="glass-icon-btn w-9 h-9 rounded-full flex items-center justify-center relative" style={{ textDecoration: 'none' }}>
            <ShoppingCart size={15} style={{ color: '#555' }} />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: '#2563eb', color: '#fff', fontSize: '8px', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
              {cartCount}
            </span>
          </Link>
          <button className="md:hidden glass-icon-btn w-9 h-9 rounded-full flex items-center justify-center" onClick={() => setMenuOpen(true)}>
            <Menu size={18} style={{ color: '#555' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col p-6"
            style={{ background: 'rgba(242,240,235,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="glass-icon-btn w-10 h-10 rounded-full flex items-center justify-center">
                <X size={20} style={{ color: '#555' }} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 mt-10">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 700, color: '#1a3055', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
