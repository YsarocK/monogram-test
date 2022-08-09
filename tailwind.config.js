/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      screens: {
        "2xl": '1400px'
      }
    },
    colors: {
      'orange': "#fdbf85",
      'violet': "#cb77a0",
      'greyLight': "#757575"
    },
    fontSize: {
      'base': '1.8rem',
      '8xl': '13rem',
    },
    lineHeight: {
      'base': "3.5rem",
      'title': "15rem"
    }
  },
  plugins: [],
}