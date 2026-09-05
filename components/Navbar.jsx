"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ activeId, setActiveId] = useState('home');

  const WIDE_CLASS = 'max-w-[1600px] px-16 md:px-30';
  const NARROW_CLASS = 'max-w-screen-xl px-6';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Fungsi untuk memaksa reload halaman penuh saat "Beranda" diklik
  const handleBerandaClick = (e) => {
    e.preventDefault();
    window.location.href = '/#home';
    window.location.reload();
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled ? 'bg-white/85 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className={`mx-auto flex items-center justify-between overflow-visible transition-all duration-500 ease-in-out ${
        scrolled ? `h-16 ${WIDE_CLASS}` : `h-28 ${NARROW_CLASS}`
      }`}>
        
        {/* Logo */}
        <a href="/#home" onClick={handleBerandaClick} className="flex items-center">
          <Image 
            src="/sandosayanglogo.png" 
            alt="Sando Sayang Logo" 
            width={185} 
            height={185} 
            className={`object-contain transition-all duration-500 ease-in-out ${
              scrolled ? 'scale-50 -my-6' : 'scale-100'
            }`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-neutral-600">
          <a href="/#home" onClick={handleBerandaClick} aria-current={activeId === 'home' ? 'true' : undefined} className={`hover:text-neutral-950 transition-colors ${activeId === 'home' ? 'text-[#FD6C69] font-semibold' : ''}`}>Beranda</a>
          <a href="#story" aria-current={activeId === 'story' ? 'true' : undefined} className={`hover:text-neutral-950 transition-colors ${activeId === 'story' ? 'text-[#FD6C69] font-semibold' : ''}`}>Tentang</a>
          {/* Terhubung langsung ke id="why" */}
          <a href="#why" aria-current={activeId === 'why' ? 'true' : undefined} className={`hover:text-neutral-950 transition-colors ${activeId === 'why' ? 'text-[#FD6C69] font-semibold' : ''}`}>Keunggulan</a>
          <a href="#product" aria-current={activeId === 'product' ? 'true' : undefined} className={`hover:text-neutral-950 transition-colors ${activeId === 'product' ? 'text-[#FD6C69] font-semibold' : ''}`}>Produk</a>
          <a href="#order" aria-current={activeId === 'order' ? 'true' : undefined} className={`hover:text-neutral-950 transition-colors ${activeId === 'order' ? 'text-[#FD6C69] font-semibold' : ''}`}>Pesan & Kontak</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#order" className="bg-[#741710] hover:bg-[#741710]/85 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow">
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 py-5 px-6 shadow-lg flex flex-col gap-4 font-medium text-neutral-700">
          <a href="/#home" onClick={handleBerandaClick} className={`hover:text-amber-500 ${activeId === 'home' ? 'text-[#FD6C69] font-semibold' : ''}`}>Beranda</a>
          <a href="#story" onClick={() => setIsOpen(false)} className={`hover:text-amber-500 ${activeId === 'story' ? 'text-[#FD6C69] font-semibold' : ''}`}>Tentang</a>
          <a href="#why" onClick={() => setIsOpen(false)} className={`hover:text-amber-500 ${activeId === 'why' ? 'text-[#FD6C69] font-semibold' : ''}`}>Keunggulan</a>
          <a href="#product" onClick={() => setIsOpen(false)} className={`hover:text-amber-500 ${activeId === 'product' ? 'text-[#FD6C69] font-semibold' : ''}`}>Produk</a>
          <a href="#order" onClick={() => setIsOpen(false)} className={`hover:text-amber-500 ${activeId === 'order' ? 'text-[#FD6C69] font-semibold' : ''}`}>Pesan & Kontak</a>
          <a href="#order" onClick={() => setIsOpen(false)} className="bg-[#FD6C69] text-white text-center py-2.5 rounded-full font-semibold">
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}