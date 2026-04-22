'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const { cartCount } = useCart();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <Image src="/logo.jpg" alt="LL Modas Logo" fill className="object-cover" />
          </div>
          <span style={{fontFamily: 'var(--font-playfair)'}} className="text-xl font-bold text-brand-dark tracking-wide">
            LL MODAS<span className="text-brand-teal">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: 'HOME', href: '/' },
            { label: 'VESTIDOS', href: '/category/vestidos' },
            { label: 'NOVIDADES', href: '/category/novidades' },
            { label: 'COLECOES', href: '/category/conjuntos' },
            { label: 'SOBRE', href: '#' },
          ].map((item) => (
            <Link key={item.label} href={item.href} style={{fontFamily: 'var(--font-poppins)'}} className="text-xs font-semibold tracking-widest text-brand-dark hover:text-brand-teal transition-colors uppercase">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.form initial={{ width: 0, opacity: 0 }} animate={{ width: 200, opacity: 1 }} exit={{ width: 0, opacity: 0 }} onSubmit={handleSearch} className="overflow-hidden">
                <input autoFocus type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Buscar..." className="w-full border border-gray-300 rounded px-3 py-1 text-xs outline-none focus:border-brand-teal" />
              </motion.form>
            )}
          </AnimatePresence>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:text-brand-teal transition-colors"><Search size={18} /></button>
          <button className="p-2 hover:text-brand-teal transition-colors hidden md:block"><User size={18} /></button>
          <Link href="/cart" className="p-2 hover:text-brand-teal transition-colors relative">
            <ShoppingCart size={18} />
            {cartCount > 0 && (<span className="absolute -top-1 -right-1 bg-brand-teal text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>)}
          </Link>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}><Menu size={22} /></button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 bg-white z-[60] flex flex-col p-6">
            <div className="flex justify-end"><button onClick={() => setIsMenuOpen(false)} className="p-2"><X size={28} /></button></div>
            <nav className="flex flex-col space-y-6 mt-10">
              {[
                { label: 'HOME', href: '/' },
                { label: 'VESTIDOS', href: '/category/vestidos' },
                { label: 'NOVIDADES', href: '/category/novidades' },
                { label: 'COLECOES', href: '/category/conjuntos' },
                { label: 'SOBRE', href: '#' },
              ].map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} style={{fontFamily: 'var(--font-poppins)'}} className="text-2xl font-semibold uppercase tracking-widest text-brand-dark hover:text-brand-teal transition-colors">{item.label}</Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
