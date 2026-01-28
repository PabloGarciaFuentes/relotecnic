'use client';
import { useState } from 'react';

const HORARIOS = [
  { label: '09:00 - 11:00', value: 'manana1' },
  { label: '11:30 - 13:30', value: 'manana2' },
  { label: '16:00 - 18:00', value: 'tarde' },
];

const DIAS = [
  { label: '01', value: '2024-10-01' },
  { label: '02', value: '2024-10-02' },
  { label: '03', value: '2024-10-03' },
  { label: '05', value: '2024-10-05' },
  { label: '06', value: '2024-10-06' },
  { label: '07', value: '2024-10-07' },
  { label: '08', value: '2024-10-08' },
  { label: '09', value: '2024-10-09' },
  { label: '10', value: '2024-10-10' },
]; // Puedes hacer esto dinámico según la lógica avanzada deseada

export default function CitaPrevia() {
  const [status, setStatus] = useState<string | null>(null);
  const [dia, setDia] = useState<string>('2024-10-05');
  const [horario, setHorario] = useState<string>('manana2');
  const [tipo, setTipo] = useState<string>('visita');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [notas, setNotas] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { tipo, fecha: dia, hora: horario, nombre, telefono, email, notas };
    const res = await fetch('/api/cita', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const resp = await res.json();
    setStatus(res.ok ? 'Cita solicitada con éxito, revisa tu email.' : resp.error || 'Error');
    if (res.ok) {
      // Reset form
      setDia('2024-10-05');
      setHorario('manana2');
      setTipo('visita');
      setNombre('');
      setTelefono('');
      setEmail('');
      setNotas('');
    }
  }

  return (
    <section id="contacto" className="py-32 px-6 bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect overflow-hidden gold-stroke flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-10 md:p-16 bg-primary/5 border-b lg:border-b-0 lg:border-r border-primary/10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif text-white mb-8 tracking-wide">Agende una Sesión Técnica</h2>
              <p className="text-slate-400 mb-12 font-light leading-relaxed">Para piezas de alta gama, ofrecemos una recepción privada donde se realiza un diagnóstico preliminar exhaustivo.</p>
            </div>
            <div className="space-y-10 mt-auto">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <p className="text-white font-bold tracking-widest uppercase text-xs mb-1">Ubicación</p>
                  <p className="text-slate-500">Calle de la Precisión 42, Madrid</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <p className="text-white font-bold tracking-widest uppercase text-xs mb-1">Contacto Directo</p>
                  <p className="text-slate-500">atelier@relotecnic.com</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-3/5 p-10 md:p-16 flex flex-col h-full justify-between" autoComplete="off">
            <div className="grid md:grid-cols-2 gap-16 mb-8">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-white font-serif text-xl">Octubre 2024</h3>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary cursor-pointer hover:text-accent-gold transition-colors">navigate_before</span>
                    <span className="material-symbols-outlined text-primary cursor-pointer hover:text-accent-gold transition-colors">navigate_next</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-3 text-center text-[10px] font-bold text-slate-600 mb-6 tracking-widest uppercase">
                  <div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sa</div><div>Do</div>
                </div>
                <div className="grid grid-cols-7 gap-3 mb-8">
                  {['26','27','28','01','02','03','04','05','06','07','08','09','10','11'].map(day => {
                    // Días mostrados (los del mes anterior/inactivo son más opacos, el resto activos)
                    const actualDay = day;
                    const isSelectable = DIAS.some(d => d.label === day);
                    const selectedClass = dia.endsWith(`-${day}`) ? 'bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]' : isSelectable ? 'text-white/40 hover:text-primary cursor-pointer' : 'text-slate-800';
                    if(isSelectable) {
                      const dVal = DIAS.find(d => d.label === day)?.value || '';
                      return (
                        <div key={day} className={`aspect-square flex items-center justify-center text-xs font-mono ${selectedClass}`}
                          onClick={() => setDia(dVal)}>
                          {day}
                        </div>
                      );
                    }
                    return <div key={day} className={`aspect-square flex items-center justify-center text-xs font-mono ${selectedClass}`}>{day}</div>;
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-white font-serif text-xl mb-6">Bloque Horario</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {HORARIOS.map(h => (
                      <button type="button" key={h.value} onClick={() => setHorario(h.value)}
                        className={
                          'py-3 px-5 border border-primary/20 text-xs font-bold tracking-widest text-left flex justify-between items-center ' +
                          (horario === h.value ? 'bg-primary text-background-dark' : 'text-white/60 hover:border-primary transition-all')
                        }
                      >
                        {h.label}
                        <span className="material-symbols-outlined text-[16px]">
                          {horario === h.value ? 'check_circle' : 'schedule'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="tipo" value="visita" checked={tipo==='visita'}
                        onChange={() => setTipo('visita')}
                        className="accent-primary" required
                      />
                      <span className="text-xs text-white">Venir a visitarme</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="tipo" value="domicilio" checked={tipo==='domicilio'}
                        onChange={() => setTipo('domicilio')}
                        className="accent-primary" required
                      />
                      <span className="text-xs text-white">Reparación a domicilio</span>
                    </label>
                  </div>
                  <input type="text" name="nombre" required autoComplete="name"
                    className="w-full bg-transparent border-b border-primary/30 text-xs text-white py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0"
                    placeholder="Nombre y Apellidos"
                    value={nombre} onChange={e => setNombre(e.target.value)}
                  />
                  <input type="tel" name="telefono" required autoComplete="tel" pattern="[0-9\s\-\+]{9,}"
                    className="w-full bg-transparent border-b border-primary/30 text-xs text-white py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0"
                    placeholder="Teléfono"
                    value={telefono} onChange={e => setTelefono(e.target.value)}
                  />
                  <input type="email" name="email" required autoComplete="email"
                    className="w-full bg-transparent border-b border-primary/30 text-xs text-white py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0"
                    placeholder="Correo electrónico"
                    value={email} onChange={e => setEmail(e.target.value)}
                  />
                  <textarea name="notas" rows={2}
                    className="w-full bg-transparent border-b border-primary/30 text-xs text-white py-4 px-1 focus:border-primary transition-all tracking-widest placeholder:text-slate-600 focus:ring-0"
                    placeholder="Notas (opcional)"
                    value={notas} onChange={e => setNotas(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <button type="submit" className="w-full bg-transparent border border-primary text-primary py-5 font-bold hover:bg-primary hover:text-background-dark transition-all uppercase tracking-[0.3em] text-xs">
                Confirmar Reserva
              </button>
              {status && (<p className="mt-4 text-center text-sm text-primary">{status}</p>)}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
