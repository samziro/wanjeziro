/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        sand: {
          50: '#faf8f4',
          100: '#f2ede3',
          200: '#e8dfd0',
          300: '#d6c9b4',
          400: '#bfaa90',
          500: '#a68b6e',
          600: '#8a7058',
          700: '#6e5946',
          800: '#4f3f32',
          900: '#2e241c',
        },
        forest: {
          50: '#f0f7f0',
          100: '#d6ebd6',
          200: '#aed3ae',
          300: '#7ab87a',
          400: '#4f9b4f',
          500: '#2d7d2d',
          600: '#1e6120',
          700: '#174d19',
          800: '#103a12',
          900: '#08260a',
        },
        ink: '#1a1410',
        cream: '#fdfaf5',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
