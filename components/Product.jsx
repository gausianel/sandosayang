"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Product() {
  const products = [
   
    {
      id: 1,
      name: "Sando Crab Stick",
      category: "Single",
      price: "Rp 15.000",
      desc: "Roti sando gurih dengan isian crab stick pilihan yang lezat dan nagih serta citarasa yang nikmat.",
      badge: "Makanan",
      image: "/crab.jpeg", // Diubah dari /public/crab.jpg menjadi /crab.jpg (pastikan file crab.jpg ada di dalam folder public)
    },
    {
      id: 2,
      name: "Sando Egg",
      category: "Single",
      price: "Rp 12.500",
      desc: "Roti sando lembut dengan isian telur gurih yang nikmat dan mengenyangkan dilengkapi dengan saos mayo.",
      badge: "Makanan",
      image: "/egg.jpeg", // Diubah dari /public/egg.jpg menjadi /egg.jpg
    },
    {
      id: 3,
      name: "Sando Beef",
      category: "Single",
      price: "Rp 12.500",
      desc: "Roti sando spesial dengan irisan daging sapi empuk dan saus lezat di dalamnya.",
      badge: "Makanan",
      image: "/crab.jpeg", // Sesuaikan dengan nama file gambar beef kamu nanti (misal: /beef.jpg)
    },
    {
      id: 4,
      name: "Infused Water",
      category: "Single",
      price: "Rp 5.000",
      desc: "Minuman dengan lemon dan mint yang segar dan sehat siap menemani harimu!",
      badge: "Minumann", 
      image: "/infusedwater.jpeg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerView = 3;

  const showCarouselControls = products.length > cardsPerView;
  const maxIndex = products.length - cardsPerView;

  const canGoPrev = startIndex > 0;
  const goPrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  useEffect(() => {
    if (!showCarouselControls || isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, showCarouselControls]);

  const visibleProducts = products.slice(startIndex, startIndex + cardsPerView);

  return (
    <section id="product" className="pt-16 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 bg-neutral-50 section-reveal scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Sando Favorit Mahasiswa
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            Dibuat fresh setiap hari menggunakan bahan-bahan pilihan berkualitas tinggi demi menjaga kelezatan di setiap gigitan dengan menunya yang variatif.
          </p>
        </div>

        {/* Product Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Tombol Panah Kiri */}
          {showCarouselControls && (
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-neutral-200 items-center justify-center shadow-md transition-all ${
                canGoPrev ? 'hover:bg-neutral-900 hover:text-white cursor-pointer' : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Produk sebelumnya"
            >
              <span className="text-xl font-bold">‹</span>
            </button>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProducts.map((item) => (
              <div 
                key={item.id} 
                className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Visual Thumbnail */}
                  <div className="w-full h-52 bg-amber-200/50 rounded-2xl relative mb-6 border border-amber-300/30 overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Detail */}
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60">
                  <div>
                    <span className="text-xs text-neutral-500 block">Harga</span>
                    <span className="text-lg font-bold text-neutral-900">{item.price}</span>
                  </div>
                  <a 
                    href="#order" 
                    className="bg-neutral-900 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                  >
                    Pesan Sando
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Panah Kanan */}
          {showCarouselControls && (
            <button
              onClick={goNext}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-neutral-200 items-center justify-center shadow-md hover:bg-neutral-900 hover:text-white cursor-pointer transition-all"
              aria-label="Produk berikutnya"
            >
              <span className="text-xl font-bold">›</span>
            </button>
          )}

          {/* Dots Indicator untuk Mobile */}
          {showCarouselControls && (
            <div className="flex md:hidden items-center justify-center gap-2 mt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setStartIndex(Math.min(index, maxIndex))}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index >= startIndex && index < startIndex + cardsPerView 
                      ? 'w-6 bg-[#FD6C69]' 
                      : 'w-2 bg-neutral-300'
                  }`}
                  aria-label={`Ke produk ${index + 1}`}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}