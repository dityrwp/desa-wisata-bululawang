

"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  let navClass =
    'w-full py-6 px-8 flex justify-between items-center font-bold text-white transition-all duration-300 z-50';
  if (isHome) {
    navClass += scrolled
      ? ' bg-[#4A6C6F] shadow fixed top-0 left-0' // solid on scroll
      : ' bg-transparent absolute top-0 left-0'; // transparent at top
  } else {
    navClass += ' bg-[#4A6C6F] static'; // always solid on other pages
  }

  return (
    <nav className={navClass} style={{ position: isHome ? undefined : 'static' }}>
      <Link href="/" className="text-3xl font-bold font-serif">
        Desa Bululawang
      </Link>
      <div className="flex gap-8 text-lg">
        <Link href="/wisata">Wisata</Link>
        <Link href="/tradisi">Tradisi</Link>
        <Link href="/umkm">UMKM</Link>
      </div>
    </nav>
  );
}
