/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nonPhotoBlue: "#a0e8f7",
        celeste: "#b2f7efff",
        "mint-cream": "#eff7f6ff",
        "mimi-pink": "#f7d6e0ff",
        "lavender-pink": "#f2b5d4ff",
        normalText: "#3a3737",
      },
    },
  },
  plugins: [],
};
