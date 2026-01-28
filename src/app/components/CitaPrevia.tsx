'use client';
import { useState } from "react";

export default function CitaPrevia() {
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      fecha: formData.get('fecha'),
      mensaje: formData.get('mensaje'),
    };

    const res = await fetch('/api/cita', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const resp = await res.json();
    setStatus(res.ok ? 'Cita solicitada con éxito, revisa tu email.' : resp.error || 'Error');
    if(res.ok) form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input required name="nombre" placeholder="Nombre" />
      <input required name="email" type="email" placeholder="Email" />
      <input required name="telefono" placeholder="Teléfono" />
      <input required name="fecha" type="datetime-local" />
      <textarea name="mensaje" placeholder="Mensaje (opcional)" />
      <button type="submit">Solicitar cita</button>
      {status && <p>{status}</p>}
    </form>
  );
}
