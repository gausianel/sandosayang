export default function WhySection() {
  const features = [
    {
      icon: "🧑‍🍳",
      title: "100% Home Made",
      description: "Dibuat dengan penuh sayang serta diracik langsung dari tangan-tangan yang telaten setiap harinya.",
    },
    {
      icon: "🍞",
      title: "Roti Lembut & Halus",
      description: "Menggunakan roti khas Jepang yang empuk dipadu isian tebal dan lumer di setiap gigitan.",
    },
    {
      icon: "💸",
      title: "Ramah di Kantong",
      description: "Harga pas banget buat pelajar dan mahasiswa, kenyang dapet, dompet pun tetap aman.",
    },
    {
      icon: "⚡",
      title: "Praktis & Higienis",
      description: "Makanan siap santap yang pas banget buat nemenin kamu di tengah kesibukan atau deadline padat.",
    },
  ];

  return (
    <section id="why" className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 bg-white border-y border-neutral-100 section-reveal scroll-mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Kenapa Harus <span className="text-[#FD6C69]">Sando</span> <span className="text-[#FD6C69]">Sayang</span>?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((item, index) => (
            <div 
              key={index}
              className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200/80 flex flex-col items-start justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}