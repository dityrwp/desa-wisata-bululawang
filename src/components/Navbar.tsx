

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
        <div className="absolute top-full left-0 w-full bg-[#4A6C6F] shadow-lg flex flex-col items-center py-4 md:hidden z-50 animate-fade-in">
          <Link href="/wisata" className="py-2 w-full text-center hover:bg-[#355052]" onClick={() => setMenuOpen(false)}>Wisata</Link>
          <Link href="/tradisi" className="py-2 w-full text-center hover:bg-[#355052]" onClick={() => setMenuOpen(false)}>Tradisi</Link>
          <Link href="/umkm" className="py-2 w-full text-center hover:bg-[#355052]" onClick={() => setMenuOpen(false)}>UMKM</Link>
        </div>
      )}
    </nav>
  );
}
