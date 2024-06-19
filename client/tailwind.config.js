/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "binary-pattern": "url('./src/assets/bgHome.gif')",
        "stars-pattern": "url('./src/assets/stars.gif')",
        "portal-pattern": "url('./src/assets/portal.gif')",
      },
    },
  },
  plugins: [],
};
