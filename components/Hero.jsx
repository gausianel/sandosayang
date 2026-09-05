"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animasi jalan begitu halaman pertama kali dimuat
    setIsVisible(true);

    // Animasi jalan lagi setiap section ini masuk ke layar (misal habis diklik dari navbar / scroll balik)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          // reset dulu sebentar biar transition-nya kepicu ulang
          requestAnimationFrame(() => {
            setTimeout(() => setIsVisible(true), 50);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="flex items-center pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-white overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Headline & CTA */}
        <div 
          className={`flex flex-col items-start gap-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
            <span className="text-[#FD6C69]">Sando</span> Datang, Rasanya Bikin <span className="text-[#FD6C69]">Sayang</span>
          </h1>

          <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-xl">
           Sando Sayang hadir dengan roti super lembut dan isian manis yang melimpah di setiap gigitan. Pas buat nemenin kuliah, enak buat bikin mood balik lagi, dan tetap ramah di kantong mahasiswa!
          </p>
          
          <div 
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a 
              href="#product" 
              className="bg-[#741710] hover:bg-[#741710]/85 text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              Lihat Menu  
            </a>
            <a 
              href="#order" 
              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              Sando Sayang
            </a>
          </div>
        </div>

        {/* Right: Visual Image Container (Dengan Animasi Masuk & Interaksi) */}
        <div className="flex justify-end">
          <div 
            className={`w-80 h-80 md:w-[28rem] md:h-[28rem] bg-white rounded-3xl flex items-center justify-center relative overflow-hidden p-2 transition-all duration-700 ease-out delay-150 hover:scale-105 active:scale-95 cursor-pointer group ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-6'
            }`}
          >
            <Image 
              src="/Logo%20Sando%20Sayang.jpg.jpeg" 
              alt="Sando Sayang Hero Logo" 
              width={700} 
              height={700} 
              className="object-contain w-full h-full transition-transform duration-500 group-hover:rotate-3"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}