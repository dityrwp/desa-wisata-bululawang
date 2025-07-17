"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/Hero.jpg"
          alt="Desa Bululawang Hero"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 font-serif">
          Desa Bululawang
        </h1>
        <p className="mt-2 text-lg md:text-2xl text-white drop-shadow">
          Kecamatan Bakung, Kabupaten Blitar, Jawa Timur
        </p>
      </div>
    </section>
  );
}
