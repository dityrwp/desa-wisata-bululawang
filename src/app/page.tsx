
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import ClientLayout from './ClientLayout';

export default function Home() {
  return (
    <ClientLayout>
      <main className="bg-white text-[#264653]">
        <HeroSection />

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 border-b border-gray-300">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A6C6F] mb-6 font-serif">Tentang</h2>
            <p className="text-lg mb-4 text-justify">Terletak di pesisir selatan Kabupaten <span className="font-bold">Blitar</span>, Kecamatan <span className="font-bold">Bakung</span>, Desa Bululawang adalah sebuah permata tersembunyi di mana perbukitan hijau bertemu dengan Samudra. Desa kami adalah rumah bagi Pantai Pasur, sebuah pantai luas dengan pasir hitam unik yang kaya akan bijih besi, dan menjadi saksi bisu dari perjalanan komunitas kami dalam memulihkan alam dari bekas luka pertambangan.</p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center order-2">
            <Image src="/images/Peta-Bululawang.svg" alt="Peta Desa Bululawang" width={200} height={200} className="h-auto max-w-[200px]" />
          </div>
        </section>

        {/* Cinematic Break: SDN 02 Landscape */}
        <section className="w-full py-0">
          <img src="/images/SDN02-landscape-1.jpg" alt="SDN 02 Bululawang" className="w-full max-h-[480px] object-cover object-center rounded-none shadow-lg" />
        </section>

        {/* Sejarah Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-10 border-b border-gray-300">
          <div className="md:w-1/2 w-full order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A6C6F] mb-6 font-serif">Sejarah</h2>
            <p className="text-lg text-justify">Setiap nama menyimpan cerita. Menurut legenda yang dikisahkan turun-temurun, nama desa kami lahir dari sebuah pohon <span className="font-bold">Bolu</span> yang besar. Akar-akarnya yang kuat menjalar hingga membelah jalan, menciptakan formasi unik yang menyerupai sebuah pintu atau <span className="font-bold">Lawang</span> dalam bahasa Jawa. &quot;Bolulawang&quot; atau &quot;Bululawang&quot; ini menjadi simbol selamat datang dari alam, sebuah penanda sejarah yang menjadi inspirasi dan identitas kami hingga kini.</p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center order-2">
            <Image src="/images/app/wisata/pasur-landscape-1.JPG" alt="Sejarah Desa Bululawang" width={400} height={400} className="w-full h-auto max-w-md rounded-xl object-cover" />
          </div>
        </section>

        {/* Cinematic Break: Pertigaan JLS */}
        <section className="w-full py-0">
          <img src="/images/pertigaan-jls-1.JPG" alt="Pertigaan JLS Bululawang" className="w-full max-h-[480px] object-cover object-bottom rounded-none shadow-lg" />
        </section>

        {/* Wisata Section - Postcard Style */}
        <section className="max-w-6xl mx-auto px-4 py-16 border-b border-gray-300">
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[380px] group">
            <Image src="/images/app/wisata/pasur-landscape-2.JPG" alt="Wisata Alam" fill priority className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 text-white z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 font-serif drop-shadow-lg">Jelajahi Alam Kami</h3>
              <p className="text-lg mb-6 drop-shadow">Temukan keindahan dramatis pantai pasir hitam dan permata tersembunyi Desa Bululawang.</p>
              <Link href="/wisata" className="inline-block">
                <span className="px-6 py-2 rounded bg-white/80 text-[#264653] font-semibold shadow hover:bg-white transition">Lihat Destinasi &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Tradisi Section - Postcard Style */}
        <section className="max-w-6xl mx-auto px-4 py-16 border-b border-gray-300">
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[380px] group">
            <Image src="/images/app/tradisi/sesaji-landscape-1.JPG" alt="Tradisi" fill priority className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 text-white z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 font-serif drop-shadow-lg">Selami Budaya Kami</h3>
              <p className="text-lg mb-6 drop-shadow">Saksikan sakralnya upacara Larung Sesaji dan rasakan denyut nadi tradisi yang hidup dan diwariskan turun-temurun.</p>
              <Link href="/tradisi" className="inline-block">
                <span className="px-6 py-2 rounded bg-white/80 text-[#264653] font-semibold shadow hover:bg-white transition">Pelajari Tradisi &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* UMKM Section - Postcard Style */}
        <section className="max-w-6xl mx-auto px-4 py-16 border-b border-gray-300">
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[380px] group">
            <Image src="/images/bridge-1.JPG" alt="UMKM Lokal" fill priority className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 text-white z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 font-serif drop-shadow-lg">Dukung Karya Kami</h3>
              <p className="text-lg mb-6 drop-shadow">Bawa pulang cerita dan keunikan Bululawang melalui produk dan kerajinan tangan dari masyarakat kami.</p>
              <Link href="/umkm" className="inline-block">
                <span className="px-6 py-2 rounded bg-white/80 text-[#264653] font-semibold shadow hover:bg-white transition">Temukan Produk Lokal &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}

