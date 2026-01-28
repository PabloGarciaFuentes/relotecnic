'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto glass-effect rounded-none px-8 py-4 flex items-center justify-between border border-[rgba(212,175,55,0.15)] shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 text-[#D4AF37]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <a href="#inicio" className="text-white text-2xl tracking-[0.3em] uppercase" style={{fontFamily: 'Cinzel, serif'}}>
            Relotecnic
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          <a href="#inicio" className="text-white/60 hover:text-[#D4AF37] text-xs font-bold transition-all tracking-[0.2em] uppercase">
            Inicio
          </a>
          <a href="#sobre-mi" className="text-white/60 hover:text-[#D4AF37] text-xs font-bold transition-all tracking-[0.2em] uppercase">
            Sobre Mí
          </a>
          <a href="#mis-trabajos" className="text-white/60 hover:text-[#D4AF37] text-xs font-bold transition-all tracking-[0.2em] uppercase">
            Trabajos
          </a>
          <a href="#contacto" className="text-white/60 hover:text-[#D4AF37] text-xs font-bold transition-all tracking-[0.2em] uppercase">
            Contacto
          </a>
        </nav>
        
        <a href="#cita-previa" className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0B] px-8 py-2 text-xs font-bold tracking-[0.2em] transition-all duration-300">
          CITA PREVIA
        </a>
        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white/60 hover:text-white p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="glass-effect rounded-none px-8 py-4 gold-stroke">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white/60 hover:text-primary text-xs font-bold transition-all tracking-[0.2em] uppercase">
                Inicio
              </a>
              <a href="#sobre-mi" className="text-white/60 hover:text-primary text-xs font-bold transition-all tracking-[0.2em] uppercase">
                Sobre Mí
              </a>
              <a href="#mis-trabajos" className="text-white/60 hover:text-primary text-xs font-bold transition-all tracking-[0.2em] uppercase">
                Trabajos
              </a>
              <a href="#contacto" className="text-white/60 hover:text-primary text-xs font-bold transition-all tracking-[0.2em] uppercase">
                Contacto
              </a>
              <a href="#cita-previa" className="border border-primary text-primary hover:bg-primary hover:text-background-dark px-6 py-2 text-xs font-bold tracking-[0.2em] transition-all duration-300">
                CITA PREVIA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}