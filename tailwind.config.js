/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: { 200: "#ffffff", 500: "#0090bf" }, // replace with your custom color
        secondary: "#F43F5E", // replace with your custom color
      },
    },
  },
  plugins: [],
};
