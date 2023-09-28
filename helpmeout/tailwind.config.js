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
        sec: "#1B233D",
        ter: "#616163"
      },
      fontFamily:{
        def: "Work Sans",
        sora: "Sora",
        inter: "inter"
      },
      spacing:{
        '85':"5.8rem",
        '235': "14.5rem",
        '636': "39.75rem",
        '454': "28.38rem",
        '68': "4.25rem"
      },
      fontSize: {
        '28l': "1.75rem",
        '40l': "2.5rem"
      }
    },
  },
  plugins: [],
}

