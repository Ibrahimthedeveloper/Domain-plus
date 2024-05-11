/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Rajdhani': ['rajdhani', 'sans'],
      bimini: ['Bimini', 'sans-serif'],
    },
    
    extend: {
      backgroundImage: {
        'pattern': "url('./images/slider-mainbg-01.jpg')",
        'headbg': "url('./images/pagetitle-bg.jpg')",
      }
    },
  },
  plugins: [],
}