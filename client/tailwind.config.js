/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "stars-pattern": "url('./src/assets/stars.gif')",
        "fireworks-pattern": "url('./src/assets/fireworks.gif')",
      },
    },
  },
  plugins: [],
};
