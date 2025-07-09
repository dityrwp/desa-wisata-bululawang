import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Desa Wisata Bululawang',
  description: 'Promotional website for Desa Bululawang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
