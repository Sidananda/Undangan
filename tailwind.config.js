/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], 
      },
      colors: {
        primary: '#850F8D',  // Ungu tua dari palette
        secondary: '#C738BD', // Ungu muda dari palette
        accent: '#E49BFF',   // Ungu sangat muda dari palette
        light: '#F8F9D7',    // Krem dari palette
      },
    },
  },
  plugins: [],
}
