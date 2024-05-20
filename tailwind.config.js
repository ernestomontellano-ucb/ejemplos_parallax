/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif'],
    },
    backgroundImage: {
      'fondo1': "url('../ejemplos/imgs/0034.png')",
      'fondo2': "url('../ejemplos/imgs/0034_mod.png')",
      'fondo3': "url('../ejemplos/imgs/cierre.webp')",
    },
    extend: {},
  },
  plugins: [],
}

