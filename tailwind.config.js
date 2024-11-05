/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Personal: {
          50: '#F97316',  // Laranja
          100: '#05FF00', // Verde
        },
      },
      fontFamily: {
        k2d: ['K2D', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

