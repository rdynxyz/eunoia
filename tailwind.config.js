/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'mainShadow' : '10px 10px 39px -10px rgba(0,0,0,0.1)'
      },
      colors: {
        primary : "#f8f8f8",
        secondary : "#1e1e1e",
        third : "#7269E3",
        fourth : "#fcfcfc",
      },
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'rouge': ['Rouge Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'lora' : ['Lora', 'cursive'],
        'volkhov' : ['Volkhov', 'serif']
        },
    },
  },
  plugins: [],
}