"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function WisataPage() {
  // Slideshow images
  const heroImages = [
    '/images/app/wisata/pasur-landscape-1.JPG',
    '/images/app/wisata/pasur-landscape-2.JPG',
    '/images/app/wisata/pasur-hill-landscape-5.JPG',
    '/images/app/wisata/pasur-big-rock-landscape-6.JPG',
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="bg-white text-[#264653]">
      {/* Module 1: Hero Section with Slideshow */}
<section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-start overflow-hidden bg-black">
  {/* 1. motion wrapper with just the image and a full‐black fade */}
  <AnimatePresence mode="wait">
    <motion.div
      key={heroImages[current]}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Image
        src={heroImages[current]}
        alt="Pantai Pasur Hero"
        fill
        priority
        className="object-cover w-full h-full"
      />
      {/* simple black fade for the cross‑fade */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  </AnimatePresence>
  <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />

  {/* Vertically and horizontally position the text overlay */}
  <div className="absolute z-20 left-0 top-0 h-full flex flex-col items-start justify-center text-left px-6 md:px-16 max-w-2xl">
    <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4 font-serif">Pantai Pasur</h1>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">Di Mana Pasir Hitam Bertemu Samudra Hijau</h2>
    <p className="text-base md:text-lg text-white/90 mb-2 font-sans">Pantai Pasur adalah jantung Desa Bululawang, tempat pasir hitam bertemu ombak hijau. Nikmati keindahan, ketenangan, dan tradisi yang hidup di setiap langkah pesisir kami.</p>
  </div>
</section>


      {/* Module 2: Feature A - Black Sand */}
      <section className="w-full py-6 md:py-16 bg-gradient-to-r from-[#EADFC9] to-[#f7f3e9] relative overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-2 md:px-4 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Overlapping image band, full bleed on mobile */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0 order-2 md:order-1 relative">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A6C6F] mb-4 md:mb-6 font-serif">Berjalan di Atas Hamparan Pasir Hitam Berkilau</h2>
            <p className="text-base md:text-lg mb-2 md:mb-4">Rasakan sensasi unik berjalan di atas pasir hitam yang berkilau, hasil dari kandungan bijih besi alami. Pasir ini bukan hanya indah dipandang, tetapi juga menjadi kanvas sempurna untuk fotografi dan momen-momen tenang di tepi samudra.</p>
            <p className="text-base md:text-lg">Fenomena pasir hitam ini adalah keunikan geologis yang jarang ditemui, menjadikan Pantai Pasur destinasi yang wajib dikunjungi bagi pencinta alam dan keindahan.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6">
              <figure className="aspect-video w-full rounded-xl overflow-hidden relative">
                <Image src="/images/app/wisata/pasur-sand-1.JPG" alt="Pasir Hitam Berkilau" fill className="object-cover" />
                <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Pasir Hitam</figcaption>
              </figure>
              <figure className="aspect-video w-full rounded-xl overflow-hidden relative">
                <Image src="/images/app/wisata/pasur-big-rock-landscape-6.JPG" alt="Batu Besar di Pantai Pasur" fill className="object-cover" />
                <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Batu Besar</figcaption>
              </figure>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center order-1 md:order-2">
            <figure className="aspect-video w-full rounded-xl overflow-hidden relative shadow-lg">
              <Image src="/images/app/wisata/pasur-landscape-2.JPG" alt="Pasir Hitam Pantai Pasur" fill className="object-cover" />
              <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Pantai Pasur</figcaption>
            </figure>
            <figure className="aspect-video w-full rounded-xl overflow-hidden relative shadow-lg">
              <Image src="/images/app/wisata/pasur-hill-landscape-5.JPG" alt="Bukit Hijau Pantai Pasur" fill className="object-cover" />
              <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Bukit Hijau</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Module 2: Feature B - Muara Kondang */}
      <section className="w-full py-6 md:py-16 bg-gradient-to-l from-[#d6e6e6] to-[#f7f3e9] relative overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-2 md:px-4 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
          <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center">
            <figure className="aspect-video w-full rounded-xl overflow-hidden relative shadow-lg">
              <Image src="/images/app/wisata/muara-kondang-1.jpg" alt="Muara Kondang" fill className="object-cover" />
              <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Muara Kondang</figcaption>
            </figure>
            <figure className="aspect-video w-full rounded-xl overflow-hidden relative shadow-lg">
              <Image src="/images/app/wisata/muara-landscape-1.jpg" alt="Muara Kondang Landscape" fill className="object-cover" />
              <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Muara Kondang Landscape</figcaption>
            </figure>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A6C6F] mb-4 md:mb-6 font-serif">Muara Kondang: Pertemuan Air Tawar dan Asin</h2>
            <p className="text-base md:text-lg mb-2 md:mb-4">Di ujung Pantai Pasur, Muara Kondang menjadi permata tersembunyi yang menawarkan suasana tenang dan damai. Estuari ini adalah tempat bertemunya air tawar dan asin, menciptakan ekosistem unik yang kaya akan kehidupan.</p>
            <p className="text-base md:text-lg">Muara ini menjadi tempat favorit keluarga untuk bermain air dengan aman, sekaligus surga bagi pengamat burung dan pecinta alam.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-6">
              <figure className="aspect-video w-full rounded-xl overflow-hidden relative">
                <Image src="/images/app/wisata/muara-landscape-2.JPG" alt="Muara Kondang Sungai" fill className="object-cover" />
                <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Muara Kondang Sungai</figcaption>
              </figure>
              <figure className="aspect-video w-full rounded-xl overflow-hidden relative">
                <Image src="/images/app/wisata/muara-portrait-2.jpg" alt="Muara Kondang Portrait" fill className="object-cover" />
                <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Muara Kondang Portrait</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: The Experience Hub */}
      <section className="w-full py-6 md:py-20 bg-gradient-to-r from-[#264653] to-[#4A6C6F] relative">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 md:mb-12 text-center font-serif">Jelajahi Berbagai Pengalaman di Pantai Pasur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto px-2 md:px-4">
          {/* Card 1: Interaksi Budaya */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black">
            <Image src="/images/app/wisata/pasur-sailor-1.jpg" alt="Nelayan Lokal" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Menyapa Nelayan Lokal</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Saksikan langsung kehidupan para nelayan yang menjadi denyut nadi Pantai Pasur. Pengunjung dapat berinteraksi, belajar, dan merasakan kehangatan budaya pesisir yang otentik.</p>
            </div>
          </div>
          {/* Card 2: Ekowisata */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black">
            <Image src="/images/app/wisata/pasur-landscape-4.jpg" alt="Konservasi Mangrove" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Berpartisipasi dalam Konservasi Mangrove</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Ikut serta dalam upaya pelestarian alam melalui program rehabilitasi mangrove di sekitar muara. Setiap kunjungan mendukung gerakan &quot;PULIH&quot; dan memberi kesempatan untuk belajar serta berkontribusi langsung.</p>
            </div>
          </div>
          {/* Card 3: Fotografi & Alam */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black">
            <Image src="/images/app/wisata/samudera-portrait-1.jpg" alt="Fotografi Alam" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Abadikan Momen Spektakuler</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Pantai Pasur adalah surga bagi fotografer dan pencinta alam. Dari pasir hitam yang dramatis, ombak yang megah, hingga perbukitan hijau yang memeluk pantai, setiap sudut menawarkan keindahan yang layak diabadikan.</p>
            </div>
          </div>
          {/* Card 4: Saksi Tradisi */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black">
            <Image src="/images/app/wisata/pasur-landscape-1.JPG" alt="Larung Sesaji" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Menyaksikan Upacara Larung Sesaji</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Pantai Pasur adalah lokasi sakral bagi tradisi Larung Sesaji, upacara adat yang menjadi puncak spiritual dan budaya masyarakat Bululawang. Jadilah saksi momen penuh makna ini saat berkunjung.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
