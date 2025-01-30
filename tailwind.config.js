/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        darkBg: "#1E1E1E", // Dark background
        darkText: "#EAEAEA", // Light text
        darkCard: "#252525", // Dark card background
      },
    },
  },
  plugins: [],
};
