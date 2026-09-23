/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 100: "#b0ddeb", 200: "#ffffff", 500: "#0090bf" },
        secondary: "#F43F5E",
      },
    },
  },
  plugins: [],
};
