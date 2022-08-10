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
      'white': "#fff",
      'orange': "#fdbf85",
      'violet': "#cb77a0",
      'greyLight': "#757575",
      'greyDark': "#151515"
    },
    fontSize: {
      'base': '1.8rem',
      '8xl': '13rem',
    },
    lineHeight: {
      'base': "3.5rem",
      'title': "15rem"
    },
    borderWidth: {
      '1': '1px',
    },
    extend: {
      dropShadow: {
        'white': [
            '0 0 30px rgba(255, 255, 255, 0.58)',
            '0 -35px 41px rgba(255, 255, 255, 0.41)',
            '0 -91px 70px rgba(255, 255, 255, 0.51)',
            '0 -164px 91px rgba(255, 255, 255, 0.31)',
        ]
      },
      boxShadow: {
        'white': [
          '0px 0px 30px rgba(255, 255, 255, 0.58)',
          '0px -35px 41px rgba(255, 255, 255, 0.41)',
          '0px -91px 70px rgba(255, 255, 255, 0.51)',
          '0px -164px 91px rgba(255, 255, 255, 0.31)'
        ],
      }
    }
  },
  plugins: [],
}