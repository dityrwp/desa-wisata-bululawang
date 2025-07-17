import Link from 'next/link';
import Image from 'next/image';

export default function TradisiArticle() {
  return (
    <main className="bg-white text-[#264653] min-h-screen px-4 py-12 flex flex-col items-center">
      <article className="max-w-3xl w-full bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#4A6C6F] text-center">Tim KKN-PPM UGM Turut Sukseskan Tradisi Larung Sesaji 2025 di Pantai Pasur Desa Bululawang, Kecamatan Bakung, Blitar, Jawa Timur</h1>
        <div className="text-center text-base text-gray-500 mb-8">
          <span className="mr-2">Penulis: Firdhauzy Nuzula</span>|
          <span className="mx-2">Editor: Muhammad Aditya Rahmansyah Baskoro</span>|
          <span className="ml-2">Fotografer: Naufal Java Fakhriansyah & Fahrun Fahrudin</span>
        </div>
        {/* Collage Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/app/tradisi/collage.png"
            alt="Kolase foto Larung Sesaji di Pantai Pasur, Desa Bululawang"
            width={900}
            height={375}
            className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]"
            priority
          />
        </div>
        <div className="prose prose-lg max-w-none text-justify">
          <p className="indent-8">Mahasiswa Kuliah Kerja Nyata Pengabdian Pemberdayaan Masyarakat (KKN-PPM) dari Universitas Gadjah Mada (UGM) yang berada di Desa Bululawang Kecamatan Bakung, Blitar, Jawa Timur turut berpartisipasi dalam tradisi Larung Sesaji di Pantai Pasur. Acara tersebut dilaksanakan pada hari sabtu, tanggal 28 Juni 2025. Tradisi Larung Sesaji di Desa Bululawang rutin diselenggarakan setiap tahun di bawah kepemimpinan Bapak Sumarmo selaku penanggung jawab utama kegiatan. Tradisi Larung Sesaji merupakan sarana spiritual bagi masyarakat untuk memohon perlindungan dan pengayoman kepada Allah SWT, yang diwujudkan melalui prosesi pelarungan sesaji sebagai ungkapan rasa syukur. Artikel ini bertujuan untuk mendokumentasikan partisipasi tim KKN-PPM UGM Desa Bululawang dalam upaya pelestarian budaya lokal. Keterlibatan mahasiswa tidak hanya terbatas pada hari pelaksanaan, tetapi juga dimulai sejak tahap persiapan hingga proses dokumentasi dan publikasi kegiatan.</p>
          <p className="indent-8">Tim KKN-PPM UGM turut berperan dalam menyusun dan menghias gunungan buah dan sayur, serta menjadi bagian dari prosesi sebagai pambiwara, dayang, prajurit, dan penari saat puncak pelaksanaan tradisi. Selain itu, tim KKN-PPM UGM juga melakukan kegiatan pendukung berupa pembuatan publikasi digital untuk memperluas jangkauan informasi mengenai Tradisi Larung Sesaji kepada masyarakat luas, melakukan wawancara serta pendataan sejarah lisan dengan tokoh-tokoh masyarakat setempat, guna mengarsipkan nilai-nilai budaya yang terkandung dalam Tradisi Larung Sesaji.</p>
          <p className="indent-8">Tradisi Larung Sesaji dilaksanakan sebagai bentuk pelestarian budaya Jawa, sekaligus menjadi sarana untuk mengungkapkan rasa syukur, memohon keselamatan, serta untuk memohon keberkahan atas hasil laut, pertanian, dan perkebunan masyarakat Desa Bululawang. Tradisi Larung sesaji dilaksanakan dengan melarungkan sesaji ke laut karena laut dipandang sebagai tempat berkumpulnya unsur-unsur metafisik. Selain itu, seluruh air di daratan pada akhirnya akan mengalir ke laut, sehingga pelarungan ke laut dimaknai sebagai bentuk pengembalian segala unsur kepada asalnya. Isi sesaji dimaknai sebagai simbol hasil bumi Desa Bululawang, yang terdiri atas hasil pertanian berupa tanaman dan tumbuhan, serta hasil peternakan berupa hewan ternak. Hasil bumi dari tumbuhan diwujudkan dalam bentuk tumpeng, gunungan buah dan sayuran. Sementara itu, hasil dari hewan biasanya berupa kepala dan keempat kaki kambing, sapi, atau kerbau, serta ingkung ayam.</p>
          <p className="indent-8">Keterlibatan tim KKN-PPM UGM dalam Tradisi Larung Sesaji tidak hanya memberikan dampak positif bagi pelestarian budaya lokal, tetapi juga menjadi sarana pembelajaran kontekstual bagi para mahasiswa, melalui partisipasi langsung dalam tradisi yang mengandung nilai-nilai spiritual, sosial, dan kultural. Tujuan utama dari tim KKN-PPM UGM adalah mendukung pelestarian budaya lokal melalui pendekatan pemberdayaan masyarakat yang partisipatif dan berkelanjutan.</p>
          <p className="indent-8"> Keterlibatan dalam Tradisi Larung Sesaji juga menjadi momen reflektif bagi tim KKN-PPM UGM dalam memahami pentingnya menjaga dan merawat warisan budaya lokal. Tradisi seperti ini bukan hanya tentang ritual semata, melainkan mencerminkan nilai-nilai kebersamaan, spiritualitas, dan hubungan harmonis antara manusia dengan alam. Tim KKN-PPM UGM  menyadari bahwa pelestarian budaya adalah tanggung jawab kolektif, termasuk generasi muda yang memiliki peran penting dalam menjaga keberlanjutan tradisi yang ada di tengah arus modernisasi. Tim KKN-PPM UGM berharap agar Tradisi Larung Sesaji dapat terus dilestarikan dan dikembangkan sebagai identitas budaya Desa Bululawang. Tradisi ini tidak hanya memiliki nilai spiritual dan kultural yang tinggi, tetapi juga berpotensi menjadi daya tarik wisata budaya yang dapat memberikan manfaat ekonomi bagi masyarakat setempat. Dengan promosi yang tepat dan kolaborasi berbagai pihak, Larung Sesaji dapat menjadi agenda unggulan yang menarik minat wisatawan untuk mengenal lebih dekat kearifan lokal Blitar.</p>
          <p className="indent-8">Sebagai bagian dari program pengabdian masyarakat, Tim KKN-PPM UGM berkomitmen untuk terus mendukung kegiatan positif yang dilakukan oleh masyarakat Desa Bululawang. Dukungan tersebut tidak hanya terbatas pada pelestarian budaya, tetapi juga dalam hal pemberdayaan masyarakat melalui dokumentasi, publikasi, edukasi, serta kolaborasi berkelanjutan selama masa pengabdian. Semangat gotong royong, kepedulian terhadap nilai lokal, dan keterlibatan aktif menjadi wujud nyata komitmen tim dalam berkontribusi bagi kemajuan desa.</p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/tradisi" className="inline-block px-6 py-2 rounded bg-[#4A6C6F] text-white font-semibold hover:bg-[#355052] transition">Kembali ke Tradisi</Link>
        </div>
      </article>
    </main>
  );
} 