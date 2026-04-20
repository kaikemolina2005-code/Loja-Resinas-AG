'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full shadow-lg">
            <Image 
              src="/logo.jpg" 
              alt="LL Modas Logo" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase hidden sm:block text-brand-dark">
            LL<span className="text-brand-accent">MODAS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-bold uppercase text-xs tracking-widest text-brand-dark">
          <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <Link href="/category/vestidos" className="hover:text-brand-accent transition-colors">Vestidos</Link>
          <Link href="/category/conjuntos" className="hover:text-brand-accent transition-colors">Conjuntos</Link>
          <Link href="/category/novidades" className="hover:text-brand-accent transition-colors">Novidades</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute right-0 flex items-center"
                >
                  <form onSubmit={handleSearch} className="w-full relative flex items-center">
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Buscar produtos..."
                      className="w-full bg-gray-100 border-2 border-black rounded-full py-2 pl-4 pr-10 text-xs font-bold uppercase tracking-widest outline-none"
                    />
                    <button 
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="absolute right-3 text-gray-400 hover:text-black"
                    >
                      <X size={14} />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 hover:bg-black/5 rounded-full transition-colors ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <Search size={20} />
            </button>
          </div>
          <Link href="/cart" className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 mt-12 text-3xl font-black uppercase tracking-tighter">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/category/vestidos" onClick={() => setIsMenuOpen(false)}>Vestidos</Link>
              <Link href="/category/conjuntos" onClick={() => setIsMenuOpen(false)}>Conjuntos</Link>
              <Link href="/category/novidades" onClick={() => setIsMenuOpen(false)}>Novidades</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
