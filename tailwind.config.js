/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chelsea: ['"Chelsea Market"', "cursive"],
        kalnia: ['"Kalnia Glaze"', "sans-serif"],
        sevillana: ['"Sevillana"', "cursive"],
        nixie: ['"Nixie One"', "cursive"],
      },
    },
  },
  plugins: [],
};
