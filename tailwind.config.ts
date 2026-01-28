import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#D4AF37',
        'gold-muted': '#996515',
        'background-dark': '#0A0A0B',
        'charcoal-footer': '#0F0F10',
        'glass-dark': 'rgba(10, 10, 11, 0.85)',
        'accent-gold': '#FFD700',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config