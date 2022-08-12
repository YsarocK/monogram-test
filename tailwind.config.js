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
      'violetLight': '#b75a9b',
      'yellow': "#fcde8e",
      'greyLight': "#757575",
      'greyDark': "#151515",
      'blocBlue': "#0165b1",
      'blocYellow': "#fec05c",
      'blocRed': "#d12510",
      'greenLight': "#EFFFE2"
    },
    fontSize: {
      'base': '1.8rem',
      '7xl': '5.5rem',
      '8xl': '7.6rem',
      '9xl': '13rem',
    },
    lineHeight: {
      'base': "3.5rem",
      'title': "15rem"
    },
    borderWidth: {
      '1': '1px',
      '4': '4px',
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
      },
      backgroundImage: {
        'sphere-gradient': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 96.35%, rgba(255, 255, 255, 0.36) 100%), linear-gradient(50.94deg, #01A6DC 14.62%, #8801E4 54.03%, #F5CBE1 85.34%)',
      }
    }
  },
  plugins: [],
}