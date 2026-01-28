export default function Footer() {
  return (
    <footer className="bg-charcoal-footer pt-24 pb-12 px-6 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-white text-2xl font-serif tracking-[0.3em] uppercase">Relotecnic</h2>
            </div>
            <div className="space-y-6">
              <p className="text-white text-sm font-bold tracking-[0.2em] uppercase">Newsletter</p>
              <form className="flex flex-col gap-4">
                <div className="relative group">
                  <input 
                    className="w-full bg-transparent border-b border-primary/30 text-xs text-white py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0" 
                    placeholder="SU CORREO ELECTRÓNICO" 
                    type="email"
                  />
                  <button className="absolute right-0 bottom-4 text-primary hover:text-accent-gold transition-colors" type="submit">
                    <span className="material-symbols-outlined text-xl">east</span>
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-loose">
                  Suscríbase para recibir actualizaciones sobre colecciones exclusivas y eventos técnicos.
                </p>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Contacto de Atelier</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                <div>
                  <p className="text-white text-sm font-light leading-relaxed group-hover:text-primary transition-colors">
                    Calle Santo Domingo 12, 11006<br/>
                    Cádiz, Andalucía
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <p className="text-white text-sm font-light tracking-widest group-hover:text-primary transition-colors">
                  +34 956 000 000
                </p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <p className="text-white text-sm font-light tracking-widest group-hover:text-primary transition-colors">
                  private@relotecnic.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-8 text-left md:text-right">
                Redes Exclusivas
              </p>
              <div className="flex md:justify-end gap-8">
                <a className="group" href="#">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </div>
                </a>
                <a className="group" href="#">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </div>
                </a>
                <a className="group" href="#">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10">
            <a className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] font-medium" href="#">
              Términos de Servicio
            </a>
            <a className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] font-medium" href="#">
              Política de Privacidad
            </a>
            <a className="text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] font-medium" href="#">
              Cookies
            </a>
          </div>
          <div className="text-right">
            <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase">
              © 2024 Relotecnic Atelier. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}