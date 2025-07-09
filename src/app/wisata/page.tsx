import Link from 'next/link';
import { wisata } from '@/data/wisata';

export default function WisataPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-[#264653] p-8">
      <h1 className="text-5xl font-bold text-[#4A6C6F] mb-12">Wisata Alam</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wisata.map((item) => (
          <Link key={item.slug} href={`/wisata/${item.slug}`} className="block p-6 rounded-lg bg-[#EADFC9] hover:bg-[#A2B2C9] transition-colors">
            <h2 className="text-2xl font-bold text-[#4A6C6F]">{item.name}</h2>
            <p className="mt-2 text-[#264653]">{item.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
