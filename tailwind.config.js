
module.exports = {
  theme: {
    extend: {
      fontFamily: {
      //  pt: ['Playwrite DE VA', 'cursive'], 
       alter: [ 'Montserrat Alternates', 'sans-serif'], 
       pt: ['Tektur', 'sans-serif'], poppins: ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [require('tailwindcss-text-stroke')],
};