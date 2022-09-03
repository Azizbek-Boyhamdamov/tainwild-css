/**  @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },

    container: {
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        lightblack: '#4d4244',
        lightred: '#ff0d38',
        darkred: '#d70026',
        lightgrey: '#747474',
        darkgrey: '#272727',
      },
      boxShadow: {
        '3xl': '0px 0px 30px rgba(255, 13, 56, 0.21)',

      },
      dropShadow: {
        '3xl': '(0px 4px 10px rgba(210, 189, 193, 0.3))'
      }

    },
  },
  plugins: [],
}
