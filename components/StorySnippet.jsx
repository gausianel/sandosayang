"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StorySnippet() {
  const carouselImages = [
    "/sandosayanglogo.png",
    "/Logo%20Sando%20Sayang.jpg.jpeg", // Pastikan file gambar ini ada di folder /public
    "/sandosayanglogo.png",          
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 2000); 

    return () => clearInterval(interval);
  }, [isPaused, carouselImages.length]);

  return (
    <section id="story" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-neutral-50 border-y border-neutral-100 section-reveal scroll-mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image Carousel (Sekarang di Kiri) */}
        <div className="relative w-full">
          <div 
            className="w-full h-80 md:h-[26rem] bg-white rounded-3xl border border-neutral-200 overflow-hidden relative flex items-center justify-center p-4 cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}  
            onMouseLeave={() => setIsPaused(false)} 
          >
            
            {/* Gambar Carousel */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={carouselImages[currentIndex]} 
                alt="Sando Sayang Story Carousel" 
                width={600} 
                height={600} 
                className="object-contain w-full h-full transition-transform duration-300"
              />
            </div>

            {/* Tombol Previous (Kiri) */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center font-bold text-lg transition-transform active:scale-90 cursor-pointer"
              aria-label="Previous Slide"
            >
              ‹
            </button>

            {/* Tombol Next (Kanan) */}
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center font-bold text-lg transition-transform active:scale-90 cursor-pointer"
              aria-label="Next Slide"
            >
              ›
            </button>

            {/* Indikator Titik (Dots) di Bawah */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-6 bg-[#FD6C69]' : 'w-2 bg-neutral-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Right: Teks Cerita (Sekarang di Kanan) */}
        <div className="flex flex-col items-start gap-6">
        

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Berawal Dari Susah Cari makan buat mahasiswa.
          </h2>

          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            Sando Sayang lahir dari keresahan kita sebagai mahasiswa yang sering kelaparan di tengah kesibukan kampus. Kami butuh makanan yang praktis, higienis, dan pas di kantong. Dari situlah sando ala Jepang ini diracik khusus untuk menemani harimu!
          </p>

          
        </div>

      </div>
    </section>
  );
}