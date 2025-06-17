/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ifm-orange': '#FF8200',
        'ifm-blue': '#00338D',
      }
    },
  },
  plugins: [],
}
