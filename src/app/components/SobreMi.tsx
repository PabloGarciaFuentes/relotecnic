export default function SobreMi() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0B] overflow-hidden relative" id="sobre-mi">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-center bg-cover blur-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgk_TV5VCXISoJ3oXdj1QkkVP6hIssondOZyGSFFTsuvLeitT_JwkUTj03P8ZV-BJVDYycmtExikqX86YkExw7GrxYw_0I34OdjmFvbkliEOwG4Qh-_Dy7SC-y5g0PUlsaAqSN66V0Z4WkTowI27YiHQ8u-HPAN3mIXRW1QtbvwNyMe9M3LC3iIoM8tcI__u_1v36W60T0csTc7oamqfKUlp1x8Hcz8hsqPatk2osf2AVSZPqM-Nb97NngQMlf6P7kYy8HWy2pKAw")'}}></div>
      </div>
       <div className="max-w-7xl mx-auto relative z-10">
         <div className="text-center mb-8">
           <h2 className="text-white text-4xl md:text-6xl font-serif tracking-tight">
             Sobre Mí
           </h2>
           <div className="h-[1px] w-24 bg-primary mx-auto mt-8"></div>
         </div>

         {/* Artisan Block start */}
         <section className="py-16 md:py-24 px-0 md:px-6 bg-background-light dark:bg-transparent" id="artisan">
           <div className="max-w-[1200px] mx-auto">
             <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="relative w-full lg:w-1/2">
                 <div
                   className="aspect-[4/5] bg-center bg-no-repeat bg-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 max-w-xs md:max-w-sm lg:max-w-md mx-auto"
                   data-alt="Retrato en blanco y negro de maestro relojero en banco de trabajo"
                   style={{ backgroundImage: "url('/images/sobre-mi/avatar.jpg')" }}
                 ></div>
                 <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl hidden md:block">
                   <p className="text-charcoal-footer font-bold text-4xl font-serif">20+</p>
                   <p className="text-charcoal-footer/80 text-sm font-bold uppercase tracking-widest">Años de Excelencia</p>
                 </div>
               </div>
               <div className="w-full lg:w-1/2">
                 <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Mi legado</span>
                 <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif dark:text-white">Las Manos Tras el Tiempo</h2>
                 <div className="space-y-6 text-slate-600 dark:text-[#92a4c9] text-lg leading-relaxed">
                   <p>
                     Soy Jesús y resido en Cádiz. Me apasiona cuidar los relojes y con con más de dos décadas de experiencia ininterrumpida en el sector joyero y relojero, estoy aquí para cuidar de tu reloj.
                   </p>
                   <p>
                     Me he formado en escuelas de Madrid y Barcelona, adquiriendo una amplia gama de conocimientos. Entre mis logros destacados se encuentra la obtención de un certificado de alto nivel en reparación de relojes de pulsera, lo cual me capacita para realizar tareas como equilibrar volantes, mover rubíes y llevar a cabo reparaciones complicadas. Además, he sido nombrado maestro artesano por la Junta de Andalucía, un reconocimiento a toda una vida dedicada a este oficio. También he sido reconocido por la Junta de Andalucía con el Premio Andaluz a la Calidad en la Promoción de la Artesanía en el año 2024.
                   </p>
                   <div className="pt-4">
                     <p className="text-primary font-serif text-2xl italic">Jesús Moreno</p>
                     <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Maestro Artesano Relojero</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         {/* Artisan Block end */}

         {/* Título del timeline */}
         <div className="text-center mb-24 mt-10">
           <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
             Hitos del Taller
           </span>
           <div className="h-[1px] w-24 bg-primary mx-auto mt-8"></div>
         </div>
         <div className="relative">
           <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] timeline-line hidden md:block"></div>
           <div className="space-y-32">
            {/* First Entry */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-[45%] text-right mb-8 md:mb-0">
                <span className="text-primary font-serif text-3xl mb-4 block">2024</span>
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-4">
                  Premio Andaluz a la Calidad en la Promoción de la Artesanía
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  También fui nombrado maestro artesano por la Junta de Andalucía, un reconocimiento a toda una vida dedicada a este oficio
                </p>
              </div>
              <div className="relative z-20 flex items-center justify-center md:w-[10%]">
                <div className="w-4 h-4 bg-primary rounded-full ring-8 ring-primary/20"></div>
                <div className="absolute w-12 h-[1px] bg-primary/40 hidden md:block left-1/2 -translate-x-1/2"></div>
              </div>
              <div className="md:w-[45%] pl-12">
                <div className="aspect-square w-32 gold-stroke p-1">
                  <div className="w-full h-full bg-cover bg-center grayscale opacity-50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAksZosJH1RimIgBBuwggJKfiLbjVvC7Yb7xc5ym5mWmVUTyrVuIp0_NfACSctWKU6_7cnG_Fs87leYy9_EewOTQHbUlqESJtowTyNuau7YMLtOXjuR0Hfv66-Xhqj2S77nGbuWQtNxpxRyJqVGTlH-wpyTvs1zMIdoQlWAphlZ7JMsLkmJn9aUsO78mc4poLTknFn2lWdBEhF3_S2WC7dD9gzaTpcTf1jkAaciw0Pors-xyaz8h77aBTh-vTLJrwpSEOum_t15KAc")'}}></div>
                </div>
              </div>
            </div>
            {/* Second Entry */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
              <div className="md:w-[45%] text-left mb-8 md:mb-0">
                <span className="text-primary font-serif text-3xl mb-4 block">2005</span>
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-4">
                  Certificación de Manufactura
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Obtención de las máximas acreditaciones para la intervención de calibres con complicaciones astronómicas y tourbillones.
                </p>
              </div>
              <div className="relative z-20 flex items-center justify-center md:w-[10%]">
                <div className="w-4 h-4 bg-primary rounded-full ring-8 ring-primary/20"></div>
              </div>
              <div className="md:w-[45%] flex justify-end pr-12">
                <div className="aspect-square w-32 gold-stroke p-1">
                  <div className="w-full h-full bg-cover bg-center grayscale opacity-50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb5zRVCNuJnnTcGEF9Z8lRZbfKddw50gW9LWGtI7v4-59PEWA-Xe_ifMt1WcFCw6eX8_BcWL45x6UImz39JC7SsYkUrVUAkFZEHBZqfplr_5fTxTqStKrcm9KEY5-Oqpxpw8hZYV7Szr78vyQE9OZrUHVppcth9DkGVvon63eUlJ0MKnFq5OaG14q7_OHGUE64NHfZN6LHONRt7OpWQdpII62lOEwWkUpb65sw93seRVsypyPYcvTXtOTYS9P42YcraeyH9VNk2ko")'}}></div>
                </div>
              </div>
            </div>
            {/* Third Entry */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-[45%] text-right mb-8 md:mb-0">
                <span className="text-primary font-serif text-3xl mb-4 block">2001</span>
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-4">
                  Relotecnic Modern
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Integración de tecnologías de escaneo 3D y metalurgia avanzada para la restauración de piezas históricas irreemplazables.
                </p>
              </div>
              <div className="relative z-20 flex items-center justify-center md:w-[10%]">
                <div className="w-4 h-4 bg-primary rounded-full ring-8 ring-primary/20"></div>
              </div>
              <div className="md:w-[45%] pl-12">
                <div className="aspect-square w-32 gold-stroke p-1">
                  <div className="w-full h-full bg-cover bg-center grayscale opacity-50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGwRo78cO9GiWvKBpXIyzMou_HuMpajPXiGzG51fWKAjCl7IYEAKd8COiS8zSAzV8qDdW40ycoDykBGX1EAh9LOyAV55H56DtPLXWe6AgfHsyrb65E_Vp7gQuaHcPl4ayggrvQh8TSNpg_dTZNaBTxkB3-8FGksKUVrRzDop83x5C39KWu5mdyDa2Il7fF39JQLMX8MBdhazDHKXQ4j9nhKDkuoifX6MJI-3RtATCfACuPveyxH8vm8yrJvHrALkRMt1_XRahSJ_E")'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
