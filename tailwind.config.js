/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-page': "url('./src/assets/images/pictures/desktop2.jpg')",
       }),
      boxShadow: {
        'mainShadow' : '10px 10px 39px -10px rgba(0,0,0,0.1)'
      },
      colors: {
        primary : "#fdfdfd",
        secondary : "#23282D",
        third : "#7269E3",
        fourth : "#2e353b",
        fift : "rgba(35,40,45,0.9)",
      },
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'rouge': ['Rouge Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'lora' : ['Lora', 'cursive'],
        'volkhov' : ['Volkhov', 'serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
        },
    },
  },
  plugins: [],
}