
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
          <div className="md:w-1/2 w-full mb-8 md:mb-0 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A6C6F] mb-6 font-serif">Tentang Desa Bululawang</h2>
            <p className="text-lg mb-4 text-justify">Terletak di pesisir selatan Kabupaten <span className="font-bold">Blitar</span>, Kecamatan <span className="font-bold">Bakung</span>, Desa Bululawang adalah sebuah permata tersembunyi di mana perbukitan hijau bertemu dengan Samudra. Desa kami adalah rumah bagi Pantai Pasur, sebuah pantai luas dengan pasir hitam unik yang kaya akan bijih besi, dan menjadi saksi bisu dari perjalanan komunitas kami dalam memulihkan alam dari bekas luka pertambangan.</p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <Image src="/images/Peta-Bululawang.svg" alt="Peta Desa Bululawang" width={200} height={200} className="h-auto max-w-[200px]" />
          </div>
        </section>

        {/* Sejarah Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-10 border-b border-gray-300">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
            <Image src="/images/app/wisata/pasur-landscape-1.JPG" alt="Sejarah Desa Bululawang" width={400} height={400} className="w-full h-auto max-w-md rounded-xl object-cover" />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A6C6F] mb-6 font-serif">Sejarah Desa Bululawang</h2>
            <p className="text-lg text-justify">Setiap nama menyimpan cerita. Menurut legenda yang dikisahkan turun-temurun, nama desa kami lahir dari sebuah pohon <span className="font-bold">Bolu</span> yang besar. Akar-akarnya yang kuat menjalar hingga membelah jalan, menciptakan formasi unik yang menyerupai sebuah pintu atau <span className="font-bold">Lawang</span> dalam bahasa Jawa. "Bolulawang" atau "Bululawang" ini menjadi simbol selamat datang dari alam, sebuah penanda sejarah yang menjadi inspirasi dan identitas kami hingga kini.</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto px-4 py-16 border-b border-gray-300">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A6C6F] mb-10 text-center font-serif">Testimoni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#EADFC9] rounded-xl p-6 shadow text-[#264653]">
              <p className="mb-4">&quot;Desa Bululawang sangat indah dan penduduknya ramah. Saya sangat menikmati wisata alamnya!&quot;</p>
              <span className="font-bold">- Andi, Wisatawan</span>
            </div>
            <div className="bg-[#EADFC9] rounded-xl p-6 shadow text-[#264653]">
              <p className="mb-4">&quot;Produk UMKM Bululawang sangat unik dan berkualitas. Saya pasti akan kembali lagi!&quot;</p>
              <span className="font-bold">- Sari, Pengunjung</span>
            </div>
          </div>
        </section>

        {/* Wisata Section */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-b border-gray-300">
          <div className="relative bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden min-h-[340px]">
            <div className="relative md:w-2/3 w-full min-h-[340px] order-2 md:order-1 flex flex-col justify-center">
              <div className="relative w-full h-full min-h-[340px]">
                <Image src="/images/app/wisata/pasur-landscape-2.JPG" alt="Wisata Alam" fill className="object-cover rounded-2xl" />
              </div>
            </div>
            <div className="relative md:-ml-20 md:w-1/2 w-full z-10 flex flex-col justify-center bg-[#4A6C6F] p-10 rounded-2xl text-white shadow-xl md:my-10 md:mr-10 order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">Wisata Alam</h3>
              <p className="text-base mb-6">Jelajahi keindahan alam Desa Bululawang yang mempesona.</p>
              <Link href="/wisata" className="inline-block mt-auto">
                <span className="px-5 py-2 rounded bg-gray-200 text-[#264653] font-semibold">Jelajahi Sekarang</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Tradisi Section */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-b border-gray-300">
          <div className="relative bg-white rounded-2xl shadow-xl flex flex-col md:flex-row-reverse overflow-hidden min-h-[340px]">
            <div className="relative md:w-2/3 w-full min-h-[340px] flex flex-col justify-center">
              <div className="relative w-full h-full min-h-[340px]">
                <Image src="/images/app/tradisi/sesaji-landscape-1.JPG" alt="Tradisi" fill className="object-cover rounded-2xl" />
              </div>
            </div>
            <div className="relative md:-mr-20 md:w-1/2 w-full z-10 flex flex-col justify-center bg-[#F4A261] p-10 rounded-2xl text-white shadow-xl md:my-10 md:ml-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">Tradisi</h3>
              <p className="text-base mb-6">Pelajari tradisi dan budaya khas Desa Bululawang yang kaya dan menarik.</p>
              <Link href="/tradisi" className="inline-block mt-auto">
                <span className="px-5 py-2 rounded bg-gray-200 text-[#264653] font-semibold">Lihat Tradisi</span>
              </Link>
            </div>
          </div>
        </section>

        {/* UMKM Section */}
        <section className="max-w-4xl mx-auto px-4 py-20 border-b border-gray-300 flex justify-center">
          <div className="w-full bg-[#EADFC9] rounded-2xl shadow-xl flex flex-col items-center p-10 text-[#264653]">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">UMKM Lokal</h3>
            <p className="text-base mb-6 text-center">Dukung produk lokal dan temukan kerajinan tangan yang unik dari Desa Bululawang. Jelajahi berbagai UMKM yang menjadi kebanggaan masyarakat kami dan temukan inspirasi dari kreativitas lokal.</p>
            <Link href="/umkm" className="inline-block mt-auto">
              <span className="px-5 py-2 rounded bg-[#4A6C6F] text-white font-semibold">Lihat Kerajinan</span>
            </Link>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}

