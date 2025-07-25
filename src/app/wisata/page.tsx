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
                <Image src="/images/app/wisata/pasur-landscape-4.jpg" alt="Pasir Hitam Berkilau" fill className="object-cover" />
              </figure>
              <figure className="aspect-video w-full rounded-xl overflow-hidden relative">
                <Image src="/images/app/wisata/pasur-big-rock-landscape-6.JPG" alt="Batu Besar di Pantai Pasur" fill className="object-cover" />
              </figure>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center order-1 md:order-2">
            <figure className="aspect-video w-full rounded-xl overflow-hidden relative shadow-lg">
              <Image src="/images/app/wisata/pasur-sand-1.JPG" alt="Pasir Hitam Pantai Pasur" fill className="object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* Cinematic Break: Black Sand Beach */}
      <section className="w-full py-0">
        <img src="/images/app/wisata/muara-kondang-1.jpg" alt="Bukit Hijau Pantai Pasur" className="w-full max-h-[480px] object-cover object-center rounded-none shadow-lg" />
      </section>

      {/* Module 2: Feature B - Muara Kondang (Creative 1 portrait + 1 landscape) */}
      <section className="w-full py-6 md:py-20 relative overflow-x-hidden">
        {/* Landscape image as a soft background band */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <Image src="/images/app/wisata/muara-landscape-1.jpg" alt="Muara Kondang Landscape" fill priority className="object-cover w-full h-full opacity-60 blur-[1.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#d6e6e6]/90 via-[#f7f3e9]/80 to-white/90" />
        </div>
        <div className="relative max-w-6xl mx-auto px-2 md:px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10">
          {/* Text content */}
          <div className="md:w-3/5 w-full order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#4A6C6F] mb-4 md:mb-6 font-serif drop-shadow-lg">Muara Kondang: Pertemuan Air Tawar dan Asin</h2>
            <p className="text-base md:text-lg mb-2 md:mb-4 drop-shadow">Di ujung Pantai Pasur, Muara Kondang menjadi permata tersembunyi yang menawarkan suasana tenang dan damai. Estuari ini adalah tempat bertemunya air tawar dan asin, menciptakan ekosistem unik yang kaya akan kehidupan.</p>
            <p className="text-base md:text-lg drop-shadow">Muara ini menjadi tempat favorit keluarga untuk bermain air dengan aman, sekaligus surga bagi pengamat burung dan pecinta alam.</p>
          </div>
          {/* Portrait image as a floating card */}
          <div className="md:w-2/5 w-full flex justify-center order-2 mt-6 md:mt-0">
            <figure className="w-64 h-80 rounded-2xl overflow-hidden relative shadow-2xl border-4 border-white bg-white/80">
              <Image src="/images/app/wisata/muara-portrait-2.jpg" alt="Muara Kondang" fill className="object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* Cinematic Break: Muara Kondang Landscape */}
      <section className="w-full py-0">
        <img src="/images/app/wisata/muara-landscape-2.JPG" alt="Muara Kondang Sungai" className="w-full max-h-[480px] object-cover object-center rounded-none shadow-lg" />
      </section>

      {/* Module 3: The Experience Hub */}
      <section className="w-full py-6 md:py-20 bg-gradient-to-r from-[#264653] to-[#4A6C6F] relative">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 md:mb-12 text-center font-serif">Jelajahi Berbagai Pengalaman di Pantai Pasur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto px-2 md:px-4">
          {/* Card 1: Interaksi Budaya */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black">
            <Image src="/images/app/wisata/pasur-sailor-1.jpg" alt="Nelayan Lokal" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Menyapa Nelayan Lokal</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Saksikan langsung kehidupan para nelayan yang menjadi denyut nadi Pantai Pasur. Pengunjung dapat berinteraksi, belajar, dan merasakan kehangatan budaya pesisir yang otentik.</p>
            </div>
          </div>
          {/* Card 2: Saksi Tradisi (center, links to tradisi page) */}
          <a href="/tradisi" className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black transition-transform hover:scale-105 focus:scale-105">
            <Image src="/images/app/wisata/samudera-portrait-1.jpg" alt="Larung Sesaji" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Menyaksikan Upacara Larung Sesaji</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Pantai Pasur adalah lokasi sakral bagi tradisi Larung Sesaji, upacara adat yang menjadi puncak spiritual dan budaya masyarakat Bululawang. <span className="underline">Pelajari tradisi ini lebih lanjut &rarr;</span></p>
            </div>
          </a>
          {/* Card 3: Ekowisata */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col items-start justify-end min-h-[220px] md:min-h-[260px] bg-black">
            <Image src="/images/app/wisata/pasur-landscape-4.jpg" alt="Konservasi Mangrove" fill className="object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-2 font-serif text-white">Berpartisipasi dalam Konservasi Mangrove</h3>
              <p className="text-sm md:text-base mb-2 text-white/90">Ikut serta dalam upaya pelestarian alam melalui program rehabilitasi mangrove di sekitar muara. Setiap kunjungan mendukung gerakan &quot;PULIH&quot; dan memberi kesempatan untuk belajar serta berkontribusi langsung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Embedded Google Maps */}
      <section className="w-full py-12 bg-white border-t border-gray-200 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#264653] mb-4 font-serif text-center">Kunjungi Pantai Pasur</h2>
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4256.282010438634!2d112.0695805696647!3d-8.31712715484003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec6eaaaaaaab%3A0x61ef0982e9703053!2sPantai%20Pasur!5e1!3m2!1sen!2sid!4v1753431504450!5m2!1sen!2sid"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Pantai Pasur"
          />
        </div>
      </section>
    </main>
  );
}
