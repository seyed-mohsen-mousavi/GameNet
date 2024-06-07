const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      mq500: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Peyda: ["Peyda"],
        PeydaLight: ["Peyda-light"],
        PeydaBlack: ["Peyda-black"],
        PeydaMed: ["Peyda-med"],
        Jaro: ["Jaro"],
      },
    },
  },
  plugins: [require("daisyui"), nextui() , require('tailwindcss-animated')],
};
