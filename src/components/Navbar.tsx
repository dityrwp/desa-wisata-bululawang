

"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  let navClass =
    'w-full py-6 px-4 md:px-8 flex justify-between items-center font-bold text-white transition-all duration-300 z-50';
  if (isHome) {
    navClass += scrolled
      ? ' bg-[#4A6C6F] shadow fixed top-0 left-0' // solid on scroll
      : ' bg-transparent absolute top-0 left-0'; // transparent at top
  } else {
    navClass += ' bg-[#4A6C6F] static'; // always solid on other pages
  }

  return (
    <nav className={navClass} style={{ position: isHome ? undefined : 'static' }}>
      <Link href="/" className="text-2xl font-bold font-serif whitespace-nowrap">
        Desa Bululawang
      </Link>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-lg whitespace-nowrap">
        <Link href="/wisata" className="px-2">Wisata</Link>
        <Link href="/tradisi" className="px-2">Tradisi</Link>
        <Link href="/umkm" className="px-2">UMKM</Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`block w-7 h-1 bg-white rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#4A6C6F]/95 flex flex-col items-center justify-start pt-8 z-[999] md:hidden animate-fade-in">
          <div className="w-full flex justify-between items-center px-6 mb-8">
            <span className="text-2xl font-bold font-serif text-white">Desa Bululawang</span>
            <button
              className="text-white text-3xl font-bold focus:outline-none"
              aria-label="Tutup menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col items-center w-full gap-4">
            <Link href="/wisata" className="py-3 w-full text-center text-xl font-bold text-white hover:bg-[#355052] transition" onClick={() => setMenuOpen(false)}>Wisata</Link>
            <Link href="/tradisi" className="py-3 w-full text-center text-xl font-bold text-white hover:bg-[#355052] transition" onClick={() => setMenuOpen(false)}>Tradisi</Link>
            <Link href="/umkm" className="py-3 w-full text-center text-xl font-bold text-white hover:bg-[#355052] transition" onClick={() => setMenuOpen(false)}>UMKM</Link>
          </nav>
        </div>
      )}
    </nav>
  );
}
