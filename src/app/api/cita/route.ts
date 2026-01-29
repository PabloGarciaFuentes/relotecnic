import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { tipo, fecha, hora, nombre, telefono, email, notas } = data;

    // console.log('Datos recibidos para nueva cita:', data);

    // Validación básica
    if (!tipo || !fecha || !hora || !nombre || !telefono || !email) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }
    if (!(tipo === 'taller' || tipo === 'domicilio')) {
      return NextResponse.json({ error: 'Tipo de cita inválido' }, { status: 400 });
    }

    // Guarda la cita en sqlite
    const cita = await prisma.cita.create({
      data: {
        tipo,
        fecha: new Date(fecha),
        hora,
        nombre,
        telefono,
        email,
        notas,
      },
    });

    // Enviar email de confirmación al cliente
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
        await transporter.sendMail({
          from: `"Relotecnic" <${process.env.EMAIL_USER}>`,
          to: cita.email,
          bcc: `${process.env.EMAIL_USER}`,
          subject: "Confirmación de cita - Relotecnic",
          html: `<p>Hola ${cita.nombre},<br/>
            Hemos recibido tu solicitud de cita para el día <b>${new Date(cita.fecha).toLocaleDateString('es-ES')}</b> a las <b>${cita.hora}</b>.</p>
            <p>Tipo de cita: <b>${cita.tipo === 'taller' ? 'Venir al taller' : 'Reparación a domicilio'}</b></p>
            ${cita.notas ? `<p><b>Notas:</b><br/>${cita.notas}</p>` : ''}
            <p>Si necesitas modificar la cita, responde a este email.</p>`
        });
      } catch (mailErr) {
        console.error('No se pudo enviar email:', mailErr);
      }
    }
    return NextResponse.json({ ok: true, cita }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear la cita' }, { status: 500 });
  }
}
