/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#52b788",
        secondaryGreen: "#74c69d",
        lightGrey: "#dad7cd",
      },

      keyframes: {
        wave: {
          "0%": { transfrom: "translateX(0px)" },
          "100%": { transform: "translateX(-1600px)" },
        },
        swell: {
          "0%": { transform: "translate3d(0,-25px,0)" },
          "50%": { transform: "translate3d(0,5px,0)" },
          "100%": { transform: "translate3d(0,-25px,0)" },
        },
      },
      animation: {
        wave: "wave 7s cubic-bezier(0.36,0.45,0.63,0.53) infinite",
        swell:
          "swell 7s ease -1.25s infinite, wave 7s cubic-bezier(0.36,0.45,0.63,0.53) -.125s infinite ",
      },
    },
  },
  plugins: [],
};
