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
        'pattern': "url('../images/slider-mainbg-01.jpg')",
        'headbg': "url('../images/pagetitle-bg.jpg')",
        'business': "url('../images/project.jpg')",
        'consulting': "url('../images/consultong.jpg')",
        'transform': "url('../images/person_analyze.jpg')",
        'solution': "url('../images/analysis.jpg')",
        'solutioncreative': "url('../images/solutioncreative.jpg')",
        'support': "url('../images/internet_support.jpg')",
        'sys': "url('../images/business-person.jpg')",
        'digital': "url('../images/digital.jpg')",
        'accounting': "url('../images/finance-accounting.jpeg')",
        'IT': "url('../images/IT_Consultant.jpg')",
        'artificial': "url('../images/tech_artificial.jpeg')",
        'light': "url('../images/tech_light.jpeg')",
        'api': "url('../images/tech_success.jpeg')",
        'work': "url('../images/tech_work.jpeg')",
        'sage': "url('../images/sage_solution.jpg')",
        'microsoft': "url('../images/microsoft_solution.jpeg')",
        'instana': "url('../images/intana_solution.jpeg')",
        'quickbook': "url('../images/quickbook_solution.jpeg')",
      }
    },

    boxShadow: {
      '4xl': '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
      '3xl': '5px 5px 5px 2px rgba(0, 0, 0, 1)',
      '2.5xl': '0 0 5px 5px rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}