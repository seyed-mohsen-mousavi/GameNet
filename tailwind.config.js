/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Peyda: ["Peyda"],
        PeydaLight: ["Peyda-light"],
      },
    },
  },
  plugins: [],
};
