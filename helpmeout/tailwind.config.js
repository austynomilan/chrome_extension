/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100: "#120B48",
          400: "#413C6D",
          300: "#605C84"
        },
        sec: "#1B233D",
        ter: "#616163",
        input: "#E7E7ED",
        copy: "#929292",
        internals: "#4B4B4B"
      },
      fontFamily:{
        def: "Work Sans",
        sora: "Sora",
        inter: "inter",
        manrope: "Manrope"
      },
      spacing:{
        '85':"5.8rem",
        '235': "14.5rem",
        '636': "39.75rem",
        '454': "28.38rem",
        '68': "4.25rem",
        '347': "21.688rem",
        '550': "34.375rem",
        '427': "26.69rem",
        '75': "4.6875rem",
        '575': "35.9375rem",
        '1440': "90rem"
      },
      fontSize: {
        '28l': "1.75rem",
        '40l': "2.5rem"
      }
    },
  },
  plugins: [],
}

