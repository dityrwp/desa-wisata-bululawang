import Image from 'next/image';

export default function WisataPage() {
  return (
    <main className="bg-white text-[#264653]">
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 border-b border-gray-300">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 order-2 md:order-1">
          <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Wisata Muara Kondang</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
          <p className="text-lg">Suspendisse potenti. Mauris at erat nec neque fermentum dapibus. Curabitur euismod, urna eu tincidunt consectetur.</p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
          <Image src="/images/app/wisata/muara-kondang-1.jpg" alt="Wisata Muara Kondang" width={400} height={300} className="w-full h-auto max-w-md rounded-xl object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center gap-10 border-b border-gray-300">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
          <Image src="/images/app/wisata/pasur-landscape-1.JPG" alt="Wisata Pasur" width={400} height={300} className="w-full h-auto max-w-md rounded-xl object-cover" />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Wisata Pasur</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur.</p>
          <p className="text-lg">Mauris at erat nec neque fermentum dapibus. Curabitur euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 border-b border-gray-300">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 order-2 md:order-1">
          <h2 className="text-3xl font-bold text-[#4A6C6F] mb-4">Keindahan Alam</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur.</p>
          <p className="text-lg">Suspendisse potenti. Mauris at erat nec neque fermentum dapibus. Curabitur euismod, urna eu tincidunt consectetur.</p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
          <Image src="/images/app/wisata/pasur-landscape-2.jpg" alt="Keindahan Alam" width={400} height={300} className="w-full h-auto max-w-md rounded-xl object-cover" />
        </div>
      </section>
    </main>
  );
}
