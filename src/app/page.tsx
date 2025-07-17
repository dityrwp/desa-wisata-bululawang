
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
            <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Tentang Desa Bululawang</h2>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Suspendisse potenti. Mauris at erat nec neque fermentum dapibus.</p>
            <p className="text-lg">Curabitur euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Suspendisse potenti. Mauris at erat nec neque fermentum dapibus.</p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
            <Image src="/images/Peta-Bululawang.svg" alt="Peta Desa Bululawang" width={400} height={400} className="w-full h-auto max-w-md" />
          </div>
        </section>

        {/* Sejarah Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-10 border-b border-gray-300">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
            <Image src="/images/app/wisata/pasur-landscape-1.JPG" alt="Sejarah Desa Bululawang" width={400} height={400} className="w-full h-auto max-w-md rounded-xl object-cover" />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Sejarah Desa Bululawang</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Suspendisse potenti. Mauris at erat nec neque fermentum dapibus. Curabitur euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto px-4 py-16 border-b border-gray-300">
          <h2 className="text-3xl font-bold text-[#4A6C6F] mb-10 text-center">Testimoni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#EADFC9] rounded-xl p-6 shadow text-[#264653]">
              <p className="mb-4">"Desa Bululawang sangat indah dan penduduknya ramah. Saya sangat menikmati wisata alamnya!"</p>
              <span className="font-bold">- Andi, Wisatawan</span>
            </div>
            <div className="bg-[#EADFC9] rounded-xl p-6 shadow text-[#264653]">
              <p className="mb-4">"Produk UMKM Bululawang sangat unik dan berkualitas. Saya pasti akan kembali lagi!"</p>
              <span className="font-bold">- Sari, Pengunjung</span>
            </div>
          </div>
        </section>

        {/* Wisata Section */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-b border-gray-300">
          <div className="relative bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden min-h-[340px]">
            <div className="relative md:w-2/3 w-full min-h-[340px] order-2 md:order-1 flex flex-col justify-center">
              <div className="relative w-full h-full min-h-[340px]">
                <Image src="/images/app/wisata/pasur-landscape-2.jpg" alt="Wisata Alam" fill className="object-cover rounded-2xl" />
              </div>
            </div>
            <div className="relative md:-ml-20 md:w-1/2 w-full z-10 flex flex-col justify-center bg-[#4A6C6F] p-10 rounded-2xl text-white shadow-xl md:my-10 md:mr-10 order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-4">Wisata Alam</h3>
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
              <h3 className="text-3xl font-bold mb-4">Tradisi</h3>
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
            <h3 className="text-3xl font-bold mb-4">UMKM Lokal</h3>
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

