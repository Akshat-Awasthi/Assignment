/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {

        '200': '200px',
        '30': '30px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
      },
    },
  },
  plugins: [],
}

