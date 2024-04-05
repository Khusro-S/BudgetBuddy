/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#52b788",
        secondaryGreen: "#74c69d",
        tableGreen: "#74c69d1c",
        lightGrey: "#dad7cd",
        accent: "hsl(var(--color-accent))",
      },

      boxShadow: {
        primary: "20px 20px 30px #bebebe, -20px -20px 30px #ffffff",
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

        slideInTop: {
          "0%": {
            opacity: "0",
            // filter: "blur(5px)",
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: "1",
            // filter: "blur(0)",
            transform: "translateY(0)",
          },
        },

        slideInLeft: {
          "0%": {
            opacity: "0",
            // filter: "blur(5px)",
            transform: "translateX(-40%)",
          },
          "100%": {
            opacity: "1",
            // filter: "blur(0)",
            transform: "translateX(0)",
          },
        },

        slideInRight: {
          "0%": {
            opacity: "0",
            // filter: "blur(5px)",
            transform: "translateX(40%)",
          },
          "100%": {
            opacity: "1",
            // filter: "blur(0)",
            transform: "translateX(0)",
          },
        },

        slideInBottom: {
          "0%": {
            opacity: "0",
            // filter: "blur(5px)",
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: "1",
            // filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wave: "wave 7s cubic-bezier(0.36,0.45,0.63,0.53) infinite",
        swell:
          "swell 7s ease -1.25s infinite, wave 7s cubic-bezier(0.36,0.45,0.63,0.53) -.125s infinite ",
        slideInRight: "slideInRight 1s forwards",
        slideInTop: "slideInTop 1s forwards",
        slideInLeft: "slideInLeft 1s forwards",
        slideInBottom: "slideInBottom 1s forwards",
        fadeIn: "fadeIn 1s forwards",
      },
    },
  },
  plugins: [],
};
