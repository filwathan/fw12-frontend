/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'logo-sign': "url('/src/asset/images/background2.jpg')"
      }      
    },
  },
  plugins: [],
}
