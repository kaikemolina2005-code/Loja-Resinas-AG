'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { motion } from 'motion/react';
import { ArrowLeft, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import { formatPrice } from '@/lib/products';

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyyicxlcyMdpOaS-PK2FgGtMYlXFfnpPfMMoHv9kheSaPqdBymso0GLXb5OxVunxfhp/exec';

    // Dados formatados exatamente como o seu script do Google espera (JSON keys)
    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      zipCode: formData.zipCode,
      productName: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
      streetAddress: formData.address
    };

    try {
      // Enviamos como JSON puro via fetch
      // Usamos 'text/plain' para evitar o erro de CORS (preflight OPTIONS) que o Google não suporta
      // O seu script receberá isso no 'e.postData.contents' e o 'JSON.parse' funcionará perfeitamente.
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(orderData),
      });
      
      console.log('Dados enviados com sucesso (modo no-cors)');

    } catch (error) {
      console.error('Erro ao enviar para planilha:', error);
    }

    // Redirecionamento para o pagamento
    const externalPaymentUrl = `https://checkout.stripe.com/pay/demo_session?amount=${Math.round(cartTotal * 100)}&email=${encodeURIComponent(formData.email)}`;
    window.location.href = externalPaymentUrl;
  };

  if (cartCount === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-24">
          <div className="text-center px-6">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Carrinho Vazio</h1>
            <Link href="/" className="btn-ll">Voltar para Loja</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-5xl font-black uppercase tracking-tighter">Finalizar Compra</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Checkout Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl"
            >
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Informações de Envio</h2>
              
              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nome</label>
                    <input 
                      required
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Seu Nome"
                      className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sobrenome</label>
                    <input 
                      required
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Seu Sobrenome"
                      className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">E-mail</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Telefone</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+55 (11) 99999-9999"
                      className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Endereço de Entrega</label>
                  <input 
                    required
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Rua, número, complemento"
                    className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cidade</label>
                    <input 
                      required
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Sua Cidade"
                      className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">CEP</label>
                    <input 
                      required
                      type="text" 
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="00000-000"
                      className="w-full bg-gray-50 border-none px-4 py-4 rounded-xl text-sm focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-ll w-full py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <><CreditCard size={20} /> Ir para o Pagamento</>
                    )}
                  </button>
                  <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center justify-center gap-2">
                    <Lock size={12} /> Transação segura e criptografada
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Order Review */}
            <div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Revisão do Pedido</h2>
                
                <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative w-16 aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-black uppercase tracking-tight">{item.name}</h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Qtd: {item.quantity}</p>
                      </div>
                      <span className="font-bold text-sm">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>Frete</span>
                    <span className="text-black">GRÁTIS</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-sm font-black uppercase tracking-tighter">Total</span>
                    <span className="text-4xl font-black text-brand-accent">{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-2xl flex items-start gap-4">
                  <ShieldCheck className="text-brand-accent flex-shrink-0" size={24} />
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-1">Garantia LL Modas</h5>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Sua compra está protegida. Se você não estiver 100% satisfeito, devolva em até 30 dias para reembolso total.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
