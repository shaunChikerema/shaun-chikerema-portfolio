/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#e8faf3',
          100: '#c8f2e0',
          200: '#94e6c4',
          300: '#3ECF8E',
          400: '#2bb378',
          500: '#1a7a52',
          600: '#155f40',
        },
        ink: {
          DEFAULT: '#0f172a',
          mid:     '#475569',
          muted:   '#94a3b8',
        },
      },
      // Font variables are defined by next/font in src/app/layout.tsx.
      fontFamily: {
        sans:    ['var(--font-dm)',       'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia',   'serif'],
        body:    ['var(--font-dm)',       'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)',     'SF Mono', 'Consolas', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}