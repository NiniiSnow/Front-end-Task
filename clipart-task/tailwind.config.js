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
        'custom-black':{
          100: '#EEEEEE',
          200: '#DCDCDC',
          300: '#C0C0C0',
          400: '#9A9D9F',
          500: '#63686F',
          600: '#657178', //these one edited
          700: '#313B4F',
          800: '#1F2940',
          900: '#000000'
        },
        'primary-light': "#f5f8ff",
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
      },
      boxShadow: {
        'custom-shadow-1': '0 0 20px rgba(0, 0, 0, 0.1)', 
        'custom-shadow-40': '0 0 40px rgba(0, 0, 0, 0.08)'
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

