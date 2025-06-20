/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cti-orange': '#FF8200',
        'cti-blue': '#00338D',
      }
    },
  },
  plugins: [],
}
