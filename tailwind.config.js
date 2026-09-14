/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy — primary text and dark surfaces.
        ink: {
          50: '#f4f7fb',
          100: '#e7eef7',
          200: '#c9d8ec',
          300: '#9db6d8',
          400: '#6a8cbd',
          500: '#456ca2',
          600: '#335487',
          700: '#29436d',
          800: '#1a2f4f',
          900: '#0f2039',
          950: '#081427',
        },
        // Corporate blue — accents, links, primary actions.
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bdd0ff',
          300: '#90b0ff',
          400: '#5b85fd',
          500: '#3560f7',
          600: '#1e40ec',
          700: '#172fd4',
          800: '#1829ab',
          900: '#1a2987',
        },
        // Muted teal — small highlights only, keeps the palette restrained.
        // 700 is used for the "wire" half of the wordmark: it is the only shade
        // dark enough to stay readable behind small bold text on white.
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 32, 57, 0.04), 0 8px 24px -12px rgba(15, 32, 57, 0.18)',
        lift: '0 2px 4px rgba(15, 32, 57, 0.04), 0 24px 48px -24px rgba(15, 32, 57, 0.28)',
        brand: '0 10px 30px -12px rgba(30, 64, 236, 0.55)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,32,57,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,32,57,0.055) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      keyframes: {
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
      },
      animation: {
        'dash-flow': 'dash-flow 1.1s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
