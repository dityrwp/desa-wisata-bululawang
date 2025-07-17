import Image from 'next/image';
import Link from 'next/link';

export default function TradisiPage() {
  return (
    <main className="bg-white text-[#264653]">
      {/* Module 1: Immersive Introduction & Video Showcase */}
      <section className="w-full bg-[#4A6C6F] text-white py-20 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Larung Sesaji: The Soul of Our Shore</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Setiap Tahun, Laut Memanggil Kami Pulang</h2>
        <p className="max-w-2xl text-lg md:text-xl mb-10 text-center">
          Di Desa Bululawang, ada satu hari di mana daratan dan lautan bersatu dalam doa. Hari di mana kami menumpahkan rasa syukur ke dalam ombak, menghanyutkan harapan, dan merayakan harmoni antara manusia, alam, dan Sang Pencipta. Inilah Larung Sesaji, sebuah tradisi sakral yang menjadi detak jantung komunitas kami. Saksikanlah kisahnya.
        </p>
        {/* Video Placeholder */}
        <div className="w-full max-w-3xl aspect-video bg-gray-300 rounded-xl flex items-center justify-center mb-4 shadow-lg relative">
          <span className="text-2xl text-gray-600">[Video Placeholder]</span>
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#4A6C6F"/><polygon points="16,13 28,20 16,27" fill="#fff"/></svg>
          </button>
        </div>
      </section>

      {/* Module 2: The Heart of the Ritual - Meaning & Symbolism */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-[#4A6C6F] mb-12 text-center">Lebih dari Sekadar Persembahan</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sub-section 1 */}
          <div className="bg-[#EADFC9] rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold mb-2">Apa itu Larung Sesaji?</h3>
            <p className="text-base">Sebuah upacara adat di mana masyarakat pesisir mempersembahkan sesaji sebagai ungkapan rasa syukur kepada Tuhan Yang Maha Kuasa. Di Desa Bululawang, sesaji berupa hasil bumi dilarung ke Laut Selatan di Pantai Pasur, sebagai wujud doa dan penghormatan kepada para leluhur.</p>
          </div>
          {/* Sub-section 2 */}
          <div className="bg-[#EADFC9] rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold mb-2">Kapan Dilaksanakan?</h3>
            <p className="text-base">Tradisi ini digelar setiap tanggal 1 Suro dalam kalender Jawa, bertepatan dengan 1 Muharram dalam kalender Islam, menandai pergantian tahun yang sakral.</p>
          </div>
          {/* Sub-section 3 */}
          <div className="bg-[#EADFC9] rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold mb-2">Makna di Balik Sesaji</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><b>Cok Bakal:</b> Melambangkan asal-usul kehidupan manusia dan rasa terima kasih kepada para pendiri desa yang telah "membabat alas".</li>
              <li><b>Jenang Suro:</b> Bubur yang dibuat untuk menyambut bulan suci Suro, sebagai wujud doa dan penghormatan.</li>
              <li><b>Pisang Raja:</b> Lambang keseimbangan hidup yang selalu berpasangan (siang-malam, suka-duka) dan rasa hormat tertinggi kepada para leluhur.</li>
              <li><b>Tebu (Sugar Cane):</b> Merupakan simbol dari "Manteb ing Kalbu" atau kemantapan hati dalam memanjatkan doa.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Module 3: A Living Tradition - Community in Action */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="md:w-1/2 w-full order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Gotong Royong Menjaga Warisan</h2>
            <p className="text-lg mb-4">Pelestarian Larung Sesaji adalah tanggung jawab bersama. Pada perayaan tahun ini, semangat itu terwujud nyata melalui kolaborasi antara masyarakat desa di bawah pimpinan Bapak Sumarmo dengan para mahasiswa KKN-PPM UGM. Keterlibatan generasi muda ini bukan hanya saat prosesi, tapi dimulai dari persiapan menghias gunungan, menjadi bagian dari kirab budaya, hingga mendokumentasikan setiap momen berharga. Semangat gotong royong ini memastikan bahwa nilai-nilai kebersamaan, spiritualitas, dan harmoni dengan alam akan terus hidup dan diwariskan ke generasi selanjutnya.</p>
            {/* Article Card */}
            <div className="bg-[#EADFC9] rounded-xl p-6 shadow flex flex-col mt-8">
              <h3 className="text-xl font-bold mb-2">Baca Artikel Lengkap</h3>
              <p className="text-base mb-4">Baca kisah lengkap kolaborasi masyarakat dan mahasiswa dalam menjaga tradisi Larung Sesaji di Desa Bululawang.</p>
              <Link href="/tradisi/article" className="inline-block px-6 py-2 rounded bg-[#4A6C6F] text-white font-semibold hover:bg-[#355052] transition">Read Full Article</Link>
            </div>
          </div>
          {/* Gallery Placeholder */}
          <div className="md:w-1/2 w-full order-1 md:order-2 flex flex-wrap gap-4 justify-center">
            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">[Foto 1]</div>
            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">[Foto 2]</div>
            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">[Foto 3]</div>
            <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">[Foto 4]</div>
          </div>
        </div>
      </section>

      {/* Module 3b: Booklet PDF Viewer & Download */}
      <section className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#4A6C6F] mb-4 text-center">Baca atau Unduh Booklet Sejarah & Makna Larung Sesaji</h2>
        <div className="w-full max-w-2xl aspect-[4/5] bg-gray-100 rounded-lg shadow mb-4 overflow-hidden">
          <iframe
            src="/Booklet%20Sejarah%20dan%20Makna%20Larung%20Sesaji.pdf"
            title="Booklet Sejarah dan Makna Larung Sesaji"
            className="w-full h-full min-h-[500px]"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <a
          href="/Booklet%20Sejarah%20dan%20Makna%20Larung%20Sesaji.pdf"
          download
          className="px-6 py-2 rounded bg-[#4A6C6F] text-white font-semibold hover:bg-[#355052] transition"
        >
          Download Booklet (PDF)
        </a>
      </section>

      {/* Module 4: An Invitation to Witness */}
      <section className="w-full bg-[#4A6C6F] text-white py-20 px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Rasakan Langsung Keagungan Larung Sesaji</h2>
        <p className="max-w-2xl text-lg md:text-xl mb-10 text-center">
          Larung Sesaji adalah daya tarik wisata budaya yang unik dan penuh makna. Kami mengundang Anda untuk datang ke Desa Bululawang dan menyaksikan langsung kearifan lokal kami. Rencanakan kunjungan Anda bertepatan dengan perayaan 1 Suro untuk menjadi bagian dari pengalaman spiritual yang tak terlupakan.
        </p>
        <Link href="/wisata" className="px-8 py-4 rounded bg-white text-[#264653] font-semibold text-lg shadow hover:bg-gray-200 transition">Rencanakan Kunjungan Anda</Link>
      </section>
    </main>
  );
}
