export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/20 via-[#0A0A0B]/80 to-[#0A0A0B] z-10"></div>
        <div className="w-full h-full bg-center bg-cover scale-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCotMFlS9yklOI-fUjaSHXaVHC-VEhs-QnTAiuS6x9z9O3RqOaUhBAoPBfX1Ze6MghaxVueLJDk9WCkdvTWPqHqoYYbmKnQHxbgMiT6eeR6ispevBIc8MZnSGN7GzTq3EqsibjJLfby1gwV-T1X8WFGlfi07ynyytN_AsP-NtIYzvJ5M7ekpkkWhoucoUeIF8Je81qoLivGmKgqyfuivUPNKxRNxYC8zOkbvBk7gn17cgMv2lpPRTxUOsVs9t8VL52ZjXYOlS3PN0I")'}}></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-70 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block text-primary font-bold tracking-[0.6em] uppercase text-xs mb-8">
          Jesús Moreno • Maestro Artesano Relojero
        </span>
        <h1 className="text-white text-5xl md:text-8xl font-serif leading-none mb-10 tracking-tight">
          Ingeniería de la <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-gold to-gold-muted">
            Eternidad
          </span>
        </h1>
        <p className="text-slate-400 font-semibold text-lg md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto tracking-wide">
          «Cada reloj guarda una historia, y su valor está en lo que significa para ti.»
        </p>
        <p id="hero_description" className="text-slate-400 text-lg md:text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto tracking-wide">
          En mi taller de relojería, combino pasión, precisión y experiencia para devolverle vida a tu reloj, cuidando cada detalle como si fuera único. No importa la marca o su precio en el mercado, lo que realmente importa es el significado que tiene para ti. Si ese reloj es importante en tu vida, también lo es para mí. 
          <br/><br/>
          Confía en mis manos expertas para garantizar una reparación impecable y personalizada. Tu reloj merece lo mejor, porque su historia continúa contigo.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#mis-trabajos" className="bg-primary text-background-dark px-12 py-5 font-bold hover:bg-accent-gold transition-all tracking-widest text-sm">
            VER PORTAFOLIO
          </a>
          <a href="#heritage" className="glass-effect text-white px-12 py-5 font-bold hover:border-primary transition-all gold-stroke tracking-widest text-sm">
            EL TALLER
          </a>
        </div> */}
      </div>
    </section>
  );
}
