"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
const umkmData = [
  {
    slug: 'keripik-pisang-kembar',
    name: 'Keripik Pisang Kembar',
    image: '/images/app/umkm/kripik-pisang-kembar-1.jpg',
    description: 'Diproduksi secara higienis di rumah produksi keluarga, keripik ini mengutamakan cita rasa asli. Dikemas praktis menggunakan ziplock dalam berbagai ukuran, produk ini telah memiliki sertifikasi Halal dan izin PIRT yang menjamin kualitas dan keamanannya.',
    info: [
      'Pemilik:  Bapak Sutiyono',
      'Varian: Madu, Original',
      'Harga: 30.000/500 gram',
    ],
    contact: [
      {
        label: 'WhatsApp',
        value: '0857-0480-8408',
        href: 'https://wa.me/6285704808408',
      },
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5490.463159768343!2d112.0740136!3d-8.2830608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78c50032384ef7%3A0x6bc2fdb20777fd34!2sKeripik%20Pisang%20Kembar!5e1!3m2!1sen!2sid!4v1754264062697!5m2!1sen!2sid',
  },
  {
    slug: 'kita',
    name: 'KITA',
    image: '/images/app/umkm/susu-kedelai-kita-1.jpg',
    description: 'Menyediakan dua produk sehat tanpa bahan pengawet. Sale Pisang legit diolah dari pisang matang pilihan, sementara Sari Kedelai gurih dibuat dari kedelai berkualitas dengan proses higienis, cocok untuk konsumsi harian keluarga.',
    info: [
      'Pemilik:  Ibu Yati',
      'Harga Susu Kedelai: 5.000/botol',
      'Harga Sale Pisang: 55.000/kg',
    ],
    contact: [
      {
        label: 'WhatsApp',
        value: '0857-3093-4390',
        href: 'https://wa.me/6285730934390',
      },
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.5327214158556!2d112.07763221026757!3d-8.284483696280299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78c539e6ba72fd%3A0xbc5a9064ddae6b1a!2sSale%20pisang%20dan%20sari%20dele%20Ibu%20Yati!5e1!3m2!1sen!2sid!4v1754264170809!5m2!1sen!2sid',
  },
  {
    slug: 'keripik-ubi-aulya',
    name: 'Keripik Ubi Ungu Aulya',
    image: '/images/app/umkm/kripik-ubi-aulya-1.jpg',
    description: 'Camilan sehat dari ubi ungu pilihan yang diolah secara tradisional tanpa pengawet. Dengan rasa manis alami dan kaya akan antioksidan, keripik renyah ini menjadi pilihan tepat untuk oleh-oleh yang lezat sekaligus menyehatkan.',
    info: [
      'Pemilik:  Ibu Uut',
      'Harga: 60.000/kg',
    ],
    contact: [
      {
        label: 'WhatsApp',
        value: '0858-5098-3911',
        href: 'https://wa.me/6285850983911',
      },
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3120.518774344298!2d112.0743140750103!3d-8.282716791751811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTYnNTcuOCJTIDExMsKwMDQnMzYuOCJF!5e1!3m2!1sen!2sid!4v1754264256205!5m2!1sen!2sid',
  },
  {
    slug: 'camilan-sukun-sari',
    name: 'Camilan Sukun SARI',
    image: '/images/app/umkm/sukun-sari.jpg',
    description: 'Camilan gurih yang diolah secara tradisional dari buah sukun pilihan. Diiris tipis dan digoreng renyah tanpa bahan pengawet, keripik ini menawarkan cita rasa autentik yang cocok sebagai teman santai atau oleh-oleh khas desa.',
    info: [
      'Pemilik:  Ibu Ririn',
      'Harga: 60.000/kg',
    ],
    contact: [
      {
        label: 'WhatsApp',
        value: '0857-0480-8408',
        href: 'https://wa.me/6285704808408',
      },
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3120.524430338847!2d112.07445147501035!3d-8.282003391752495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTYnNTUuMiJTIDExMsKwMDQnMzcuMyJF!5e1!3m2!1sen!2sid!4v1754264399856!5m2!1sen!2sid',
  },
  {
    slug: 'rengginang',
    name: 'Rengginang',
    image: '/images/app/umkm/rengginang-1.jpg',
    description: 'Camilan tradisional renyah yang dibuat dari nasi ketan pilihan dengan resep warisan keluarga. Dibumbui secara alami dan diolah tanpa pengawet, rengginang ini menawarkan rasa gurih autentik yang selalu dirindukan sebagai suguhan.',
    info: [
      'Pemilik:  Ibu Kartini',
      'Harga: 28.000/kg',
    ],
    contact: [
      {
        label: 'WhatsApp',
        value: '0821-4146-3924',
        href: 'https://wa.me/6282141463924',
      },
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3120.5005797555687!2d112.07506177501037!3d-8.285011291749585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnMDYuMCJTIDExMsKwMDQnMzkuNSJF!5e1!3m2!1sen!2sid!4v1754264528406!5m2!1sen!2sid',
  },
  {
    slug: 'jamu-tradisional',
    name: 'Jamu Tradisional Ibu Srinatin',
    image: '/images/app/umkm/jamu-tradisional.jpg',
    description: 'Minuman herbal sehat yang diracik dari resep turun-temurun menggunakan rempah alami pilihan seperti kunyit dan jahe. Diproses higienis tanpa pengawet, tersedia dalam varian kunyit asam, beras kencur, dan lainnya untuk menjaga daya tahan tubuh.',
    info: [
      'Pemilik:  Ibu Srinatin',
      'Harga: 5.000/botol',
    ],
    contact: [
      {
        label: 'WhatsApp',
        value: '0881-0362-45802',
        href: 'https://wa.me/62881036245802',
      },
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.514097847436!2d112.07642499999999!3d-8.2833066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78c5004817cbf9%3A0xf666da5d0705bb24!2sJamu%20Tradisional%20%E2%80%9CIbu%20Srinatin%E2%80%9D!5e1!3m2!1sen!2sid!4v1754264635847!5m2!1sen!2sid',
  },
];

// FIX: Added the function component wrapper
export default function UmkmPage() {
  // Animation: fade-in on scroll
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('animate-fadein');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-[#264653] p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-[#4A6C6F] mb-10 md:mb-12 text-center">
        UMKM Lokal
      </h1>
      <div className="w-full max-w-6xl overflow-x-auto pb-4">
        <div
          className="flex gap-12 min-w-[900px] px-2"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {umkmData.map((item, idx) => (
            <section
              key={item.slug}
              ref={el => { cardsRef.current[idx] = el as HTMLDivElement; }}
              className={`flex-shrink-0 w-[320px] md:w-[340px] flex flex-col items-center bg-gradient-to-br from-[#F7E9D7] via-[#EADFC9] to-[#C9EAF7] rounded-2xl shadow-xl overflow-hidden border border-[#e0cfa3] transition-all duration-300 ease-out opacity-0 translate-y-8 scroll-snap-align-start hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl`}
              style={{
                marginRight: idx === umkmData.length - 1 ? '60px' : '0', // peek-a-boo hint
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              {/* Image with parallax effect */}
              <div className="w-full flex justify-center items-center p-4 md:p-6 relative overflow-hidden">
                <div
                  className="w-full max-w-xs aspect-[2/3] bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden parallax-img"
                  style={{
                    background: `url(${item.image}) center/cover no-repeat`,
                    willChange: 'transform',
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={320}
                    height={480}
                    className="object-contain w-full h-full opacity-0"
                    priority={idx === 0}
                  />
                </div>
              </div>
              {/* Content */}
              <div className="w-full flex flex-col gap-3 px-4 pb-4">
                {/* Header */}
                <h2 className="text-xl md:text-2xl font-bold text-[#4A6C6F] mb-1 mt-2 text-center">
                  {item.name}
                </h2>
                {/* Body */}
                <p className="text-base md:text-lg mb-1 text-center">
                  {item.description}
                </p>
                <ul className="mb-2 text-base md:text-lg list-none pl-0 text-center">
                  {item.info.map((info, i) => {
                    const isHarga = /Harga/i.test(info);
                    return (
                      <li key={i} className={`mb-1 ${isHarga ? 'font-bold text-[#E76F51] text-lg md:text-xl bg-[#FFF3E0] px-2 py-1 rounded-lg inline-block shadow-sm' : ''}`}>
                        {info}
                      </li>
                    );
                  })}
                </ul>
                {/* Action Footer */}
                <div className="flex flex-col gap-2 mb-2 items-center">
                  {item.contact.map((c, i) => (
                    <div key={i} className="text-base md:text-lg">
                      <span className="font-semibold">{c.label}:</span>{' '}
                      <a
                        href={c.href}
                        className="underline text-[#264653] break-all"
                      >
                        {c.value}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="w-full h-40 rounded-lg overflow-hidden border-2 border-[#A2B2C9]">
                  <iframe
                    src={item.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Lokasi ${item.name}`}
                  ></iframe>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
        .animate-fadein {
          opacity: 1 !important;
          transform: none !important;
        }
        .parallax-img {
          background-attachment: fixed;
        }
      `}</style>
    </main>
  );
}