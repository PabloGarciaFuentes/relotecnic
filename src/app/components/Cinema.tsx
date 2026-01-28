export default function Cinema() {
  return (
    <>
      <section className="py-32 px-6 bg-black" id="cinema">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">En Movimiento</span>
              <h2 className="text-white text-4xl md:text-5xl font-serif tracking-tight mb-8">Cinema Atelier</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                Descubra el arte silencioso de la alta relojería a través de nuestra lente cinematográfica. Una mirada íntima al proceso de restauración.
              </p>
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-full border border-primary/30 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/10 transition-all">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-widest uppercase">Ver Cortometraje</p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">Duración: 4:25 min</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="aspect-video gold-stroke gold-glow relative overflow-hidden group">
                <div className="absolute inset-0 bg-background-dark/30 z-10 group-hover:bg-background-dark/10 transition-all duration-700"></div>
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCotMFlS9yklOI-fUjaSHXaVHC-VEhs-QnTAiuS6x9z9O3RqOaUhBAoPBfX1Ze6MghaxVueLJDk9WCkdvTWPqHqoYYbmKnQHxbgMiT6eeR6ispevBIc8MZnSGN7GzTq3EqsibjJLfby1gwV-T1X8WFGlfi07ynyytN_AsP-NtIYzvJ5M7ekpkkWhoucoUeIF8Je81qoLivGmKgqyfuivUPNKxRNxYC8zOkbvBk7gn17cgMv2lpPRTxUOsVs9t8VL52ZjXYOlS3PN0I")'}}></div>
                <div className="absolute top-4 left-4 size-8 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-4 right-4 size-8 border-b-2 border-r-2 border-primary"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="size-24 border border-primary bg-background-dark/60 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-primary text-5xl">play_circle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-background-dark border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/4">
              <h3 className="text-white/40 text-xs font-bold tracking-[0.4em] uppercase">Menciones en Prensa</h3>
            </div>
            <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              <div className="flex items-center gap-2 group cursor-pointer grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-white font-serif text-lg tracking-tighter">HOROLOGY</span>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-white font-serif text-lg tracking-tighter">LUXURY WEEK</span>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-white font-serif text-lg tracking-tighter">PRECISION</span>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="text-white font-serif text-lg tracking-tighter">MASTERPIECE</span>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
