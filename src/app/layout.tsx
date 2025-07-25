import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Desa Wisata Bululawang – Pantai Pasur, Tradisi Larung Sesaji, dan Keindahan Alam Blitar',
  description: 'Jelajahi keindahan Pantai Pasur, tradisi Larung Sesaji, dan pesona alam Desa Bululawang. Temukan destinasi wisata, budaya, dan UMKM terbaik di Blitar.',
  openGraph: {
    title: 'Desa Wisata Bululawang – Pantai Pasur, Tradisi Larung Sesaji, dan Keindahan Alam Blitar',
    description: 'Jelajahi keindahan Pantai Pasur, tradisi Larung Sesaji, dan pesona alam Desa Bululawang. Temukan destinasi wisata, budaya, dan UMKM terbaik di Blitar.',
    url: 'https://desabululawang.com/',
    type: 'website',
    images: [
      {
        url: '/images/app/wisata/pasur-landscape-2.JPG',
        width: 1200,
        height: 630,
        alt: 'Pantai Pasur Desa Bululawang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desa Wisata Bululawang – Pantai Pasur, Tradisi Larung Sesaji, dan Keindahan Alam Blitar',
    description: 'Jelajahi keindahan Pantai Pasur, tradisi Larung Sesaji, dan pesona alam Desa Bululawang. Temukan destinasi wisata, budaya, dan UMKM terbaik di Blitar.',
    images: ['/images/app/wisata/pasur-landscape-2.JPG'],
    site: '@desabululawang',
  },
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
