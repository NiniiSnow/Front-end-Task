/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily:{
        noto:['Noto Sans Georgian']
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'whitesmoke': "#f5f8ff",
        'dark-blue': "#000e5c",
        'light': "#9193ad",
        'custom-purple': '#585EE3',
        'custom-grey': {
          100: '#EEEEEE',
          200: '#DCDCDC',
          300: '#C0C0C0',
          400: '#9A9D9F',
          500: '#63686F',
          600: '#48515F',
          700: '#313B4F',
          800: '#1F2940',
          900: '#131B35'
        }, 
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
}

