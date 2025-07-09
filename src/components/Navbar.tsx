

"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import useScrollY from './useScrollY';

export default function Navbar() {
  const scrollY = useScrollY();
  const isScrolled = scrollY > 60;
  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(74,108,111,0.95)' : 'rgba(0,0,0,0)',
        boxShadow: isScrolled ? '0 2px 16px 0 rgba(0,0,0,0.08)' : 'none',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 text-white p-4 transition-all`}
      style={{
        color: '#fff',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Desa Bululawang</Link>
        <div className="flex gap-8">
          <Link href="/wisata" className="hover:text-[#F4A261] transition-colors">Wisata</Link>
          <Link href="/tradisi" className="hover:text-[#F4A261] transition-colors">Tradisi</Link>
          <Link href="/umkm" className="hover:text-[#F4A261] transition-colors">UMKM</Link>
          <Link href="/pemetaan" className="hover:text-[#F4A261] transition-colors">Pemetaan</Link>
        </div>
      </div>
    </motion.nav>
  );
}
