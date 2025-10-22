/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Libre Baskerville', 'Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
        'serif': ['Libre Baskerville', 'serif'],
        'sans': ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}