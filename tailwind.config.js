/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        andika: ["Andika", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        libre: ["Libre Bodoni", "serif"],
        opens: ["Open Sans", "sans-serif"],
        play: ["Play", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      textColor: {
        primary: "#4ade80",
      },
      backgroundColor: {
        primary: "#4ade80",
      },
    },
  },
  plugins: [],
};
