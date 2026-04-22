'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span style={{fontFamily: 'var(--font-playfair)'}} className="text-2xl font-bold text-brand-dark">
              LL MODAS<span className="text-brand-teal">.</span>
            </span>
          </div>

          {/* Social */}
          <div>
            <h4 style={{fontFamily: 'var(--font-poppins)'}} className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-4">Social</h4>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-brand-teal transition-colors"><Facebook size={18} /></Link>
              <Link href="#" className="hover:text-brand-teal transition-colors"><Instagram size={18} /></Link>
              <Link href="#" className="hover:text-brand-teal transition-colors"><Youtube size={18} /></Link>
              <Link href="#" className="hover:text-brand-teal transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Info */}
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

      {/* Footer Bottom */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex gap-4 text-xs text-gray-400" style={{fontFamily: 'var(--font-poppins)'}}>
            <span>Anumateo</span>
            <span>Soniantata</span>
            <span>Ponto bralado</span>
          </div>
          <p className="text-xs text-gray-400" style={{fontFamily: 'var(--font-poppins)'}}>
            © 2026 LL MODAS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};


export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-md">
                <Image 
                  src="/logo.jpg" 
                  alt="LL Modas Logo" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-brand-dark">
                LL<span className="text-brand-accent">MODAS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              O destino definitivo para moda minimalista moderna e itens essenciais de estilo de vida.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-6">Loja</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Todos os Produtos</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Novos Lançamentos</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Mais Vendidos</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Promoção</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Política de Envio</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Trocas e Devoluções</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-brand-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Inscreva-se para receber atualizações, acesso a ofertas exclusivas e muito mais.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-gray-100 border-none px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-brand-accent outline-none"
              />
              <button className="btn-ll w-full text-xs py-3">Inscrever-se</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <p>© 2026 LL MODAS. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#">Política de Privacidade</Link>
            <Link href="#">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
