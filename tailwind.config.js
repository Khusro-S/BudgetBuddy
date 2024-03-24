/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#588157",
        secondaryGreen: "#a3b18a",
        lightGrey: "#dad7cd",
      },
    },
  },
  plugins: [],
};
