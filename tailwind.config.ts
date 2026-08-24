/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        enra: {
          green: '#74f5a1',
          yellow: '#ffe228',
          dark: '#181d27',
          gray: '#dedfe5',
          subtext: 'rgba(33, 33, 33, 0.8)',
          card: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
