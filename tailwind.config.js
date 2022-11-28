/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f7bd2d',
        primaryHover: '#f5b414',
        background: '#dedede',
        text: '#242424',
        transparent: 'transparent'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
