import type {Metadata} from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'LL Modas | Moda Feminina Elegante',
  description: 'Tendências atuais com conforto e estilo. Descubra a coleção LL Modas.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br" className={`${playfair.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
