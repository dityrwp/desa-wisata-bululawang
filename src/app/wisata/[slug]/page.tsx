import { wisata } from '@/data/wisata';

export async function generateStaticParams() {
  return wisata.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WisataDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = wisata.find((item) => item.slug === slug);

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-[#264653] p-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold text-[#4A6C6F] mb-4">{item.name}</h1>
        <p className="text-lg">{item.description}</p>
        {/* Placeholder for image */}
        <div className="w-full h-64 bg-[#EADFC9] mt-8 rounded-lg"></div>
      </div>
    </main>
  );
}
