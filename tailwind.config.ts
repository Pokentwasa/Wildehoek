import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — warm limestone, deliberately off the default cream
        limestone: '#E7E0D2',
        paper: '#F2ECDF',
        bone: '#DCD3C1',
        // Ink — warm charcoal, never pure black
        ink: '#24211B',
        'ink-soft': '#3B3730',
        // Earth tones
        earth: '#6B5638',
        olive: '#565A3C',
        // A single accent — deep brick clay
        clay: '#A9542F',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale
        'display-xl': ['clamp(3.25rem, 9vw, 8.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.6rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        label: '0.18em',
      },
      maxWidth: {
        measure: '38rem',
        'measure-wide': '46rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      spacing: {
        section: 'clamp(5rem, 12vh, 11rem)',
      },
    },
  },
  plugins: [],
};

export default config;
