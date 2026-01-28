const trabajos = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgk_TV5VCXISoJ3oXdj1QkkVP6hIssondOZyGSFFTsuvLeitT_JwkUTj03P8ZV-BJVDYycmtExikqX86YkExw7GrxYw_0I34OdjmFvbkliEOwG4Qh-_Dy7SC-y5g0PUlsaAqSN66V0Z4WkTowI27YiHQ8u-HPAN3mIXRW1QtbvwNyMe9M3LC3iIoM8tcI__u_1v36W60T0csTc7oamqfKUlp1x8Hcz8hsqPatk2osf2AVSZPqM-Nb97NngQMlf6P7kYy8HWy2pKAw",
    title: "Complicación 21-25",
    desc: "Restauración de Calibre",
    num: "#001",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGwRo78cO9GiWvKBpXIyzMou_HuMpajPXiGzG51fWKAjCl7IYEAKd8COiS8zSAzV8qDdW40ycoDykBGX1EAh9LOyAV55H56DtPLXWe6AgfHsyrb65E_Vp7gQuaHcPl4ayggrvQh8TSNpg_dTZNaBTxkB3-8FGksKUVrRzDop83x5C39KWu5mdyDa2Il7fF39JQLMX8MBdhazDHKXQ4j9nhKDkuoifX6MJI-3RtATCfACuPveyxH8vm8yrJvHrALkRMt1_XRahSJ_E",
    title: "Acabado Espejo",
    desc: "Tratamiento de Superficie",
    num: "#002",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb5zRVCNuJnnTcGEF9Z8lRZbfKddw50gW9LWGtI7v4-59PEWA-Xe_ifMt1WcFCw6eX8_BcWL45x6UImz39JC7SsYkUrVUAkFZEHBZqfplr_5fTxTqStKrcm9KEY5-Oqpxpw8hZYV7Szr78vyQE9OZrUHVppcth9DkGVvon63eUlJ0MKnFq5OaG14q7_OHGUE64NHfZN6LHONRt7OpWQdpII62lOEwWkUpb65sw93seRVsypyPYcvTXtOTYS9P42YcraeyH9VNk2ko",
    title: "Cronometría",
    desc: "Ajuste de Órgano Regulador",
    num: "#003",
  },
];

export default function MisTrabajos() {
  return (
    <section className="py-32 px-6 bg-black" id="mis-trabajos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-white text-4xl md:text-5xl font-serif tracking-tight mb-6">Proyectos de Restauración</h2>
            <p className="text-slate-500 text-lg">Documentación técnica de procesos complejos en piezas de alta complicación.</p>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="w-14 h-14 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-10 pb-16 snap-x no-scrollbar">
          {trabajos.map((t) => (
            <div className="min-w-87.5 md:min-w-112.5 snap-start group cursor-pointer" key={t.num}>
              <div className="relative overflow-hidden aspect-3/4 mb-8 gold-stroke">
                <div className="absolute inset-0 bg-background-dark/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase border border-primary px-4 py-2">Ver Detalles</span>
                </div>
                <div
                  className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${t.image}')` }}
                ></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-2xl font-serif mb-2">{t.title}</h3>
                  <p className="text-primary/60 text-xs font-bold uppercase tracking-widest">{t.desc}</p>
                </div>
                <span className="text-slate-600 font-mono text-sm">{t.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
