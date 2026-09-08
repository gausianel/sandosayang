export default function OrderSection() {
  return (
    <section id="order" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-white border-t border-neutral-100 section-reveal scroll-mt-32">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Section Header */}
        

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
          Cobain <span className="text-[#FD6C69]">Sando Sayang</span>  Sekarang!
        </h2>

        {/* Tombol Media Sosial Bulat dengan Efek Hover & Logo Putih Bersih */}
        <div className="flex flex-wrap items-center justify-center gap-35 pt-4 w-full">
          
          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-3">
            <a 
              href="https://wa.me/6285190998495?text=Halo%20Sando%20Sayang,%20saya%20mau%20pesan%20sando%20dong!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-emerald-500/25 hover:shadow-xl"
              aria-label="WhatsApp"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.61 1.905 6.474L4 29l7.72-1.867A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-3.68.89.933-3.59-.232-.368A9.7 9.7 0 0 1 6.25 15c0-5.38 4.372-9.75 9.751-9.75S25.75 9.62 25.75 15 21.38 24.75 16.001 24.75zm5.34-7.29c-.293-.147-1.734-.856-2.003-.954-.269-.098-.464-.147-.66.147-.196.293-.757.954-.928 1.15-.171.196-.342.22-.635.073-.293-.147-1.235-.455-2.353-1.452-.87-.776-1.457-1.734-1.628-2.027-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.513.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.59-.904-2.178-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.197 3.033.147.196 2.067 3.157 5.008 4.427.7.302 1.246.483 1.672.618.702.223 1.341.192 1.846.117.563-.084 1.734-.709 1.979-1.394.244-.685.244-1.272.171-1.394-.073-.122-.269-.196-.562-.343z"/>
              </svg>
            </a>
            
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center gap-3">
            <a 
              href="https://instagram.com/sandosayang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-pink-500/25 hover:shadow-xl"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
          </div>

          {/* TikTok (Logo Putih Bersih dengan Efek Hover) */}
          <div className="flex flex-col items-center gap-3">
            <a 
              href="https://tiktok.com/@sandosayang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-neutral-900/25 hover:shadow-xl"
              aria-label="TikTok"
            >
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            
          </div>

        </div>

       

      </div>
    </section>
  );
}