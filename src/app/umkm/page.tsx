import { umkm } from '@/data/umkm';

export default function UmkmPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-[#264653] p-8">
      <h1 className="text-5xl font-bold text-[#4A6C6F] mb-12">UMKM Lokal</h1>
      <div className="flex flex-col gap-16 w-full max-w-4xl">
        {umkm.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={item.slug}
              className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center bg-[#EADFC9] rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="md:w-1/2 w-full flex justify-center items-center p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-xs rounded-lg object-cover shadow-md"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => { e.currentTarget.src = '/images/umkm/placeholder.jpg'; }}
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-4 p-6">
                <h2 className="text-3xl font-bold text-[#4A6C6F] mb-2">{item.name}</h2>
                <p className="text-lg mb-4">{item.description}</p>
                <div className="w-full h-56 rounded-lg overflow-hidden border-2 border-[#A2B2C9]">
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
          );
        })}
      </div>
    </main>
  );
}
