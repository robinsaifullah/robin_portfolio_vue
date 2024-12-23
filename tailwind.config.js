/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#facc15', // Corrected hex code
        secondary: '#65a30d',
      },
      fontFamily: {
        'dreaming': ['"Playwrite NL Guides"', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}