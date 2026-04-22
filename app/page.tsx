'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';

export default function LandingPage() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8f6f2'}}>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
          <Image
            src="/products/banner-1.jpg"
            alt="LL Modas Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                style={{fontFamily: 'var(--font-playfair)'}}
                className="text-4xl md:text-6xl font-bold text-white italic mb-6 leading-tight"
              >
                LL MODAS: A Arte que<br />Molda seu Estilo.
              </h1>
              <Link href="#shop" className="btn-primary">
                EXPLORAR A COLEÃ‡ÃƒO
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Nossos Vestidos */}
        <section id="shop" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <h2
            style={{fontFamily: 'var(--font-poppins)', color: '#1a3055'}}
            className="text-center text-sm font-semibold tracking-[0.4em] uppercase mb-10"
          >
            NOSSOS VESTIDOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => {
              const bgColors = ['#e6f7ef', '#333333', '#e6f1f7'];
              const textColor = i === 1 ? '#fff' : '#1a3055';
              const subtextColor = i === 1 ? 'rgba(255,255,255,0.8)' : '#555';
              return (
                <Link key={product.id} href={`/product/${product.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{backgroundColor: bgColors[i]}}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium leading-snug mb-1" style={{fontFamily: 'var(--font-poppins)', color: textColor}}>
                        {product.name}
                      </p>
                      <p className="text-sm font-bold" style={{fontFamily: 'var(--font-poppins)', color: subtextColor}}>
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ConteÃºdo adicional */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Projetos Criativos */}
            <div>
              <h3
                style={{fontFamily: 'var(--font-poppins)', color: '#1a3055', borderBottom: '2px solid #e6f7ef', display: 'inline-block', paddingBottom: '4px'}}
                className="text-xs font-semibold tracking-[0.4em] uppercase mb-5"
              >
                PROJETOS CRIATIVOS
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {PRODUCTS.slice(0, 4).map((product) => (
                  <div key={product.id} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Dicas de CriaÃ§Ã£o */}
            <div>
              <h3
                style={{fontFamily: 'var(--font-poppins)', color: '#1a3055', borderBottom: '2px solid #e6f7ef', display: 'inline-block', paddingBottom: '4px'}}
                className="text-xs font-semibold tracking-[0.4em] uppercase mb-5"
              >
                DICAS DE CRIAÃ‡ÃƒO
              </h3>
              <div className="flex flex-col gap-4">
                <Link href="#" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#1a3055] transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(26,48,85,0.1)'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3055" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <span style={{fontFamily: 'var(--font-poppins)', color: '#333'}} className="text-sm font-medium group-hover:text-[#1a3055] transition-colors">
                    Tutoriais de Arte
                  </span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#1a3055] transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'rgba(26,48,85,0.1)'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3055" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <span style={{fontFamily: 'var(--font-poppins)', color: '#333'}} className="text-sm font-medium group-hover:text-[#1a3055] transition-colors">
                    Guia de Materiais
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Todos os Produtos */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <h2
              style={{fontFamily: 'var(--font-playfair)', color: '#1a3055'}}
              className="text-3xl font-bold"
            >
              Todos os Produtos
            </h2>
            <Link
              href="/search"
              style={{fontFamily: 'var(--font-poppins)', color: '#1a3055'}}
              className="text-xs font-semibold uppercase tracking-widest hover:underline"
            >
              Ver Todos
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
