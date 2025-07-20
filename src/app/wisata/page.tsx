
import Image from 'next/image';

export default function WisataPage() {
  return (
    <main className="bg-white text-[#264653]">
      {/* Module 1: Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden mb-16">
        <Image
          src="/images/app/wisata/pasur-landscape-1.JPG"
          alt="Pantai Pasur Hero"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 font-serif">Pantai Pasur: Di Mana Pasir Hitam Bertemu Samudra Hijau</h1>
          <p className="text-lg md:text-2xl text-white drop-shadow mb-2 max-w-2xl mx-auto">Pantai Pasur adalah jantung dan jiwa dari Desa Bululawang. Sebuah bentangan pantai yang luas dan megah, dikenal dengan pasir hitamnya yang unik akibat kandungan bijih besi, menawarkan pengalaman alam yang tak terlupakan dan menjadi pusat kehidupan serta budaya kami.</p>
        </div>
      </section>

      {/* Module 2: Feature A - Black Sand */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 border-b border-gray-300">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A6C6F] mb-6 font-serif">Berjalan di Atas Hamparan Pasir Hitam Berkilau</h2>
          <p className="text-lg mb-4">Rasakan sensasi unik berjalan di atas pasir hitam yang berkilau, hasil dari kandungan bijih besi alami. Pasir ini bukan hanya indah dipandang, tetapi juga menjadi kanvas sempurna untuk fotografi dan momen-momen tenang di tepi samudra.</p>
          <p className="text-lg">Fenomena pasir hitam ini adalah keunikan geologis yang jarang ditemui, menjadikan Pantai Pasur destinasi yang wajib dikunjungi bagi pencinta alam dan keindahan.</p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
          <Image src="/images/app/wisata/pasur-landscape-2.jpg" alt="Pasir Hitam Pantai Pasur" width={500} height={350} className="w-full h-auto max-w-lg rounded-xl object-cover shadow-lg" />
        </div>
      </section>

      {/* Module 2: Feature B - Muara Kondang */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-10 border-b border-gray-300">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
          <Image src="/images/app/wisata/muara-kondang-1.jpg" alt="Muara Kondang" width={500} height={350} className="w-full h-auto max-w-lg rounded-xl object-cover shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A6C6F] mb-6 font-serif">Muara Kondang: Pertemuan Air Tawar dan Asin</h2>
          <p className="text-lg mb-4">Di ujung Pantai Pasur, Muara Kondang menjadi permata tersembunyi yang menawarkan suasana tenang dan damai. Estuari ini adalah tempat bertemunya air tawar dan asin, menciptakan ekosistem unik yang kaya akan kehidupan.</p>
          <p className="text-lg">Muara ini menjadi tempat favorit keluarga untuk bermain air dengan aman, sekaligus surga bagi pengamat burung dan pecinta alam.</p>
        </div>
      </section>

      {/* Module 3: The Experience Hub */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A6C6F] mb-12 text-center font-serif">Jelajahi Berbagai Pengalaman di Pantai Pasur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1: Interaksi Budaya */}
          <div className="bg-[#EADFC9] rounded-2xl p-8 shadow flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2 font-serif">Menyapa Nelayan Lokal</h3>
            <p className="text-base mb-2">Saksikan langsung kehidupan para nelayan yang menjadi denyut nadi Pantai Pasur. Pengunjung dapat berinteraksi, belajar, dan merasakan kehangatan budaya pesisir yang otentik.</p>
          </div>
          {/* Card 2: Ekowisata */}
          <div className="bg-[#EADFC9] rounded-2xl p-8 shadow flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2 font-serif">Berpartisipasi dalam Konservasi Mangrove</h3>
            <p className="text-base mb-2">Ikut serta dalam upaya pelestarian alam melalui program rehabilitasi mangrove di sekitar muara. Setiap kunjungan mendukung gerakan "PULIH" dan memberi kesempatan untuk belajar serta berkontribusi langsung.</p>
          </div>
          {/* Card 3: Fotografi & Alam */}
          <div className="bg-[#EADFC9] rounded-2xl p-8 shadow flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2 font-serif">Abadikan Momen Spektakuler</h3>
            <p className="text-base mb-2">Pantai Pasur adalah surga bagi fotografer dan pencinta alam. Dari pasir hitam yang dramatis, ombak yang megah, hingga perbukitan hijau yang memeluk pantai, setiap sudut menawarkan keindahan yang layak diabadikan.</p>
          </div>
          {/* Card 4: Saksi Tradisi */}
          <div className="bg-[#EADFC9] rounded-2xl p-8 shadow flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2 font-serif">Menyaksikan Upacara Larung Sesaji</h3>
            <p className="text-base mb-2">Pantai Pasur adalah lokasi sakral bagi tradisi Larung Sesaji, upacara adat yang menjadi puncak spiritual dan budaya masyarakat Bululawang. Jadilah saksi momen penuh makna ini saat berkunjung.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
