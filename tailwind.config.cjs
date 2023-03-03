/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGreen: '#3CCC4A',
        myTeal: "#779341",
      },
      fontSize: {
        '1l': '1rem',
        'si': '1.23rem',
        'tf': '1.85rem',
        'tt': '2.31rem',
        'st': '1.31rem',
        'ts': '2rem',
        'tw': '1.54rem',
        '1l': '1rem',
        'ff': '3.46rem',
      },
      leading: {
        '1l': '1rem',
        'si': '1.23rem',
        'tf': '1.85rem',
        'tt': '2.31rem',
        'st': '1.31rem',
        'ts': '2rem',
        'tw': '1.54rem',
        '1l': '1rem',
        'ff': '3.46rem',
      },

    },
  },
  plugins: [],
}