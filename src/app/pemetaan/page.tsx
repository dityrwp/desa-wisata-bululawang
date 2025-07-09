export default function PemetaanPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-[#264653] p-8">
      <h1 className="text-5xl font-bold text-[#4A6C6F] mb-12">Pemetaan Wilayah</h1>
      <div className="w-full max-w-4xl h-[500px] bg-[#EADFC9] rounded-lg">
        {/* Placeholder for Leaflet map */}
        <div className="flex items-center justify-center h-full">
          <p className="text-[#264653]">Peta akan ditampilkan di sini.</p>
        </div>
      </div>
    </main>
  );
}
