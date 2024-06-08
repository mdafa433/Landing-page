/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
         'biru' : '#0B63DC'
      },
      fontFamily: {
        'viga' : ['viga']
      },
      backgroundImage: {
        'hero-pattern': "url('/img/jumbotron-bg.jpg')",
      },
    },
  },
  plugins: [],
}
