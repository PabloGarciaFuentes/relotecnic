import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relotecnic Premium | Heritage & Media",
  description: "Alta relojería técnica combinada con artesanía tradicional para la restauración de calibres de manufactura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="es">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
