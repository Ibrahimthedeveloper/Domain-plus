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
        'shadow-4xl': '0 0 5px 0 rgba(0, 0, 0, 0.2)',
      }
    },

    boxShadow: {
      '4xl': '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
      '3xl': '3px 3px 10px 5px #0b0b0b',
      '2.5xl': '0 0 5px 3px rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}