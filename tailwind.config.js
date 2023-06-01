/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'logo':['Sacramento'],
        'body':['Nunito'],
        'test':['Monomaniac']
      },
      screens: {
        'fold': '285px'
        // => @media (min-height: 800px) { ... }
      }
      
    }
  },
  plugins: [],
}

