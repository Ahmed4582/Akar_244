/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      title: ["IBM Plex Sans Arabic", "sans-serif"],
    },
    backgroundImage: {
      bgCover: "url('./src/assets/Img/Property 1=2.png')",
    },
  },
};
