/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue
        secondary: '#f97316', // orange
        accent: '#ffffff', // white
      },
    },
  },
  plugins: [],
}