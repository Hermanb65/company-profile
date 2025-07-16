/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // if you’re using the App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // all your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
