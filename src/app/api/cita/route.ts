import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { nombre, email, telefono, fecha, mensaje } = data;

    if (!nombre || !email || !telefono || !fecha) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // Guarda la cita en sqlite
    const cita = await prisma.cita.create({
      data: {
        nombre,
        email,
        telefono,
        fecha: new Date(fecha),
        mensaje,
      },
    });

    // Enviar email de confirmación al cliente
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Relotecnic" <${process.env.EMAIL_USER}>`,
          to: cita.email,
          subject: "Confirmación de cita - Relotecnic",
          html: `<p>Hola ${cita.nombre},<br/>
          Hemos recibido tu cita para el día <b>${new Date(cita.fecha).toLocaleString('es-ES')}</b>.
          </p><p>Si quieres modificarla, responde a este correo.</p>`,
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
