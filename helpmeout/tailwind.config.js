/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#120B48",
      },
      fontFamily:{
        def: "Work Sans"
      }
    },
  },
  plugins: [],
}

