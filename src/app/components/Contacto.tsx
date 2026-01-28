export default function Contacto() {
  return (
    <section className="py-32 px-6 bg-background-dark" id="contacto">
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect overflow-hidden gold-stroke flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-16 bg-primary/5 border-b lg:border-b-0 lg:border-r border-primary/10">
            <h2 className="text-4xl font-serif text-white mb-8 tracking-wide">Contáctame</h2>
            <p className="text-slate-400 mb-12 font-light leading-relaxed">Para piezas de alta gama, ofrecemos una recepción privada donde se realiza un diagnóstico preliminar exhaustivo.</p>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <p className="text-white font-bold tracking-widest uppercase text-xs mb-1">Ubicación</p>
                  <p className="text-slate-500">Calle Santo Domingo 12, Cádiz</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <p className="text-white font-bold tracking-widest uppercase text-xs mb-1">Email</p>
                  <p className="text-slate-500">atelier@relotecnic.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-10 md:p-16 flex items-center">
            <form className="w-full space-y-8">
              <input type="text" placeholder="Nombre" className="w-full bg-transparent border-b border-primary/30 text-slate-200 py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0" />
              <input type="email" placeholder="Correo Electrónico" className="w-full bg-transparent border-b border-primary/30 text-slate-200 py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0" />
              <textarea placeholder="Mensaje" className="w-full bg-transparent border-b border-primary/30 text-slate-200 py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0 min-h-[120px]" />
              <button type="submit" className="w-full bg-transparent border border-primary text-primary py-5 font-bold hover:bg-primary hover:text-background-dark transition-all uppercase tracking-[0.3em] text-xs">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
