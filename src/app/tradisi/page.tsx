import Link from 'next/link';

export default function TradisiPage() {
  return (
    <main className="bg-white text-[#264653]">
      {/* Module 1: Immersive Introduction & Video Showcase */}
      <section className="w-full bg-[#4A6C6F] text-white py-20 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Larung Sesaji</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Setiap Tahun, Laut Memanggil Kami Pulang</h2>
        <p className="max-w-2xl text-lg md:text-xl mb-10 text-center">
          Di Desa Bululawang, ada satu hari di mana daratan dan lautan bersatu dalam doa. Hari di mana kami menumpahkan rasa syukur ke dalam ombak, menghanyutkan harapan, dan merayakan harmoni antara manusia, alam, dan Sang Pencipta. Inilah Larung Sesaji, sebuah tradisi yang menjadi detak jantung komunitas kami. Saksikanlah kisahnya.
        </p>
        {/* Video Placeholder */}
        <div className="w-full max-w-3xl aspect-video bg-gray-300 rounded-xl flex items-center justify-center mb-4 shadow-lg relative">
          <span className="text-2xl text-gray-600">[Video Placeholder]</span>
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#4A6C6F"/><polygon points="16,13 28,20 16,27" fill="#fff"/></svg>
          </button>
        </div>
      </section>

      {/* Cinematic Breaker: Dancer Photo */}
      <section className="w-full py-0">
        <img src="/images/app/tradisi/dance-2.JPG" alt="Tari Tradisi" className="w-full max-h-[480px] object-cover object-center rounded-none shadow-lg" />
      </section>

      {/* Module 2: The Heart of the Ritual - Introduction (Refined Two-Column, Full-Width White) */}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 justify-center md:w-1/2 w-full">
            <div className="bg-[#EADFC9] rounded-2xl p-10 md:p-16 shadow-xl flex flex-col">
              <h3 className="text-3xl md:text-5xl font-extrabold font-serif mb-6">Apa itu Larung Sesaji?</h3>
              <p className="text-lg md:text-xl mb-8">Sebuah upacara adat di mana masyarakat pesisir mempersembahkan sesaji sebagai ungkapan rasa syukur kepada Tuhan Yang Maha Kuasa. Di Desa Bululawang, sesaji berupa hasil bumi dilarung ke Laut Selatan di Pantai Pasur, sebagai wujud doa dan penghormatan kepada para leluhur.</p>
              <h3 className="text-3xl md:text-5xl font-extrabold font-serif mt-4 mb-6">Kapan Dilaksanakan?</h3>
              <p className="text-lg md:text-xl">Tradisi ini digelar setiap tanggal 1 Suro dalam kalender Jawa, bertepatan dengan 1 Muharram dalam kalender Islam, menandai pergantian tahun yang sakral.</p>
            </div>
          </div>
          {/* Right: Two stacked images, larger */}
          <div className="flex flex-col gap-8 md:w-1/2 w-full">
            <img src="/images/app/tradisi/larung-ritual-person-1.jpg" alt="Pemimpin Ritual" className="w-full rounded-2xl object-cover shadow-xl max-h-[320px]" />
            <img src="/images/app/tradisi/sesaji-closeup-1.jpg" alt="Gunungan Sesaji" className="w-full rounded-2xl object-cover shadow-xl max-h-[320px]" />
          </div>
        </div>
      </section>

      {/* Module 2b: Sejarah - The Evolution of Gratitude (Centered, Larger, Balanced) */}
      <section className="w-full py-20 bg-gradient-to-r from-[#f7f3e9] to-[#EADFC9] flex items-center justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 mx-auto px-4">
          {/* Left: Narration, centered card, larger */}
          <div className="flex flex-col justify-center md:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-10 md:p-16 shadow-2xl flex flex-col items-start">
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#4A6C6F] mb-8">Sejarah: Dari Kesederhanaan Hingga Kemegahan</h2>
              <p className="text-lg md:text-xl">Tradisi Larung Sesaji di Desa Bululawang telah berkembang seiring waktu, mencerminkan perjalanan ekonomi dan spiritualitas masyarakat kami. Dahulu, sesaji atau ubarampe yang dipersembahkan sangatlah sederhana, seringkali hanya berupa telur ayam yang dibagikan sesuai jumlah warga. Hal ini merupakan cerminan tulus dari rasa syukur yang disesuaikan dengan kemampuan ekonomi saat itu.<br /><br />Seiring membaiknya kesejahteraan, wujud syukur kami pun menjadi lebih besar. Persembahan berevolusi menjadi ayam, kambing, bahkan sapi atau kerbau yang lebih megah. Namun, esensinya tidak pernah berubah: sebuah ungkapan terima kasih yang mendalam kepada Tuhan, serta doa tulus agar seluruh warga diberi keselamatan, kesuksesan, dan hasil bumi yang melimpah.</p>
            </div>
          </div>
          {/* Right: Three stacked images for Sejarah section */}
          <div className="flex flex-col gap-8 justify-center md:w-1/2 w-full">
            <img src="/images/app/tradisi/warrior-1.jpg" alt="Pejuang Tradisi" className="w-full rounded-2xl object-cover shadow-2xl max-h-[220px]" />
            <img src="/images/app/tradisi/sesaji-closeup-2.jpg" alt="Sesaji Closeup" className="w-full rounded-2xl object-cover shadow-2xl max-h-[220px]" />
            <img src="/images/app/tradisi/dancers-1.jpg" alt="Penari Tradisi" className="w-full rounded-2xl object-cover shadow-2xl max-h-[220px]" />
          </div>
        </div>
      </section>

      {/* Cinematic Climax: Boat Offering Photo */}
      <section className="w-full py-0">
        <img src="/images/app/tradisi/penyerahan-sesaji-laut-2.jpg" alt="Penyerahan Sesaji Laut" className="w-full max-h-[480px] object-cover object-center rounded-none shadow-lg" />
      </section>

      {/* Module 3: Makna di Balik Sesaji - The Seven Symbols of Life (Horizontal Carousel) */}
      <section className="w-full bg-white py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#4A6C6F] mb-10 text-center">Tujuh Simbol Kehidupan: Mengupas Makna di Balik Sesaji</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-8 min-w-[900px] md:min-w-[1200px]">
            {/* Card 1: Cok Bakal */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/cok-bakal.jpg" alt="Cok Bakal" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Cok Bakal</h3>
              <p className="text-base text-center">Melambangkan dua hal: asal-usul manusia (Bebakalaning Manungsa) dan sebagai tanda terima kasih kepada para pendiri desa (Cikal Bakal).</p>
            </div>
            {/* Card 2: Jenang Suro */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/jenang-suro.jpg" alt="Jenang Suro" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Jenang Suro</h3>
              <p className="text-base text-center">Bubur yang dibuat dari biji-bijian sebagai wujud penghormatan dan cara menyambut datangnya bulan suci Muharram atau Suro.</p>
            </div>
            {/* Card 3: Pisang Raja */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/pisang-raja.jpg" alt="Pisang Raja" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Pisang Raja</h3>
              <p className="text-base text-center">Lambang keseimbangan hidup yang selalu berpasangan (siang-malam, suka-duka) dan sebagai simbol penghormatan tertinggi kepada para leluhur.</p>
            </div>
            {/* Card 4: Janur */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/janur.jpg" alt="Janur" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Janur (Daun Kelapa Muda)</h3>
              <p className="text-base text-center">Merupakan simbol dari "Nur Muhammad" atau cahaya suci yang dipercaya sebagai awal mula dari semua ciptaan, termasuk manusia.</p>
            </div>
            {/* Card 5: Andong Puring */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/andong-puring.jpg" alt="Andong Puring" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Andong Puring</h3>
              <p className="text-base text-center">Sebuah ajakan untuk berdoa dengan sungguh-sungguh (andongoa) karena Tuhan pasti akan memberi (peparing) apa yang kita minta.</p>
            </div>
            {/* Card 6: Waringin */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/waringin.jpg" alt="Waringin" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Waringin (Pohon Beringin)</h3>
              <p className="text-base text-center">Lambang kesuburan, dengan harapan agar tanaman tumbuh subur, hewan ternak sehat, dan semua kehidupan berkembang dengan baik.</p>
            </div>
            {/* Card 7: Tebu */}
            <div className="min-w-[300px] bg-[#EADFC9] rounded-2xl shadow-xl p-8 flex flex-col items-center">
              <img src="/images/app/tradisi/tebu.jpg" alt="Tebu" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4A6C6F]">Tebu</h3>
              <p className="text-base text-center">Merupakan lambang dari "Manteb ing Kalbu" atau kemantapan hati dan niat yang tulus saat memanjatkan doa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: The Deeper Wisdom (Three Callout Cards) */}
      <section className="w-full bg-[#f7f3e9] py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#4A6C6F] mb-10 text-center">Kearifan di Balik Tradisi</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Mengapa Dilarung ke Laut? */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#4A6C6F]">Mengapa Dilarung ke Laut?</h3>
            <p className="text-base text-center">Laut adalah tempat berkumpulnya semua air dari darat. Melarung sesaji ke laut dimaknai sebagai pengembalian semua unsur ke asalnya, dengan harapan agar doa dan rasa syukur kita dibalas dengan rezeki yang seluas dan sedalam lautan.</p>
          </div>
          {/* Card 2: Fun Fact: Petik Laut */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#4A6C6F]">Fun Fact: Petik Laut</h3>
            <p className="text-base text-center">Selain pada tanggal 1 Suro, upacara serupa juga dapat dilaksanakan sebagai tradisi 'Petik Laut', yaitu sebagai rasa syukur yang diadakan ketika hasil tangkapan ikan para nelayan sedang sangat melimpah.</p>
          </div>
          {/* Card 3: Fun Fact: Panggilan Hati */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#4A6C6F]">Fun Fact: Panggilan Hati</h3>
            <p className="text-base text-center">Pemimpin adat Larung Sesaji tidak dipilih secara formal. Seseorang yang akan menggantikan pemimpin sebelumnya akan mendapatkan intuisi atau 'panggilan dari dalam hati' untuk melanjutkan tugas mulia ini.</p>
          </div>
        </div>
      </section>

      {/* Cinematic Breaker: Karawitan Photo */}
      <section className="w-full py-0">
        <img src="/images/app/tradisi/karawitan-1.jpg" alt="Karawitan Tradisi" className="w-full max-h-[480px] object-cover object-center rounded-none shadow-lg" />
      </section>

      {/* Module 5: A Living Tradition - Community in Action (No Gallery) */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Gotong Royong Menjaga Warisan</h2>
            <p className="text-lg mb-4">Pelestarian Larung Sesaji adalah tanggung jawab bersama. Pada perayaan tahun ini, semangat itu terwujud nyata melalui kolaborasi antara masyarakat desa di bawah pimpinan Bapak Sumarmo dengan para mahasiswa KKN-PPM UGM. Keterlibatan generasi muda ini bukan hanya saat prosesi, tapi dimulai dari persiapan menghias gunungan, menjadi bagian dari kirab budaya, hingga mendokumentasikan setiap momen berharga. Semangat gotong royong ini memastikan bahwa nilai-nilai kebersamaan, spiritualitas, dan harmoni dengan alam akan terus hidup dan diwariskan ke generasi selanjutnya.</p>
            {/* Article Card */}
            <div className="bg-[#EADFC9] rounded-xl p-6 shadow flex flex-col mt-8">
              <h3 className="text-xl font-bold mb-2">Baca Artikel Lengkap</h3>
              <p className="text-base mb-4">Baca kisah lengkap kolaborasi masyarakat dan mahasiswa dalam menjaga tradisi Larung Sesaji di Desa Bululawang.</p>
              <Link href="/tradisi/article" className="inline-block px-6 py-2 rounded bg-[#4A6C6F] text-white font-semibold hover:bg-[#355052] transition">Read Full Article</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5b: Booklet PDF Viewer & Download (Fixed Path) */}
      <section className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#4A6C6F] mb-4 text-center">Baca atau Unduh Booklet Sejarah & Makna Larung Sesaji</h2>
        <div className="w-full max-w-2xl aspect-[4/5] bg-gray-100 rounded-lg shadow mb-4 overflow-hidden">
          <iframe
            src="/Booklet Sejarah dan Makna Larung Sesaji.pdf"
            title="Booklet Sejarah dan Makna Larung Sesaji"
            className="w-full h-full min-h-[500px]"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <a
          href="/Booklet Sejarah dan Makna Larung Sesaji.pdf"
          download
          className="px-6 py-2 rounded bg-[#4A6C6F] text-white font-semibold hover:bg-[#355052] transition"
        >
          Download Booklet (PDF)
        </a>
      </section>


    </main>
  );
}
