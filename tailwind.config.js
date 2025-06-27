/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"Helvetica Neue"', "Arial", "sans-serif"],
        geist: ['"Geist"', "sans-serif"],
        mono: ['"Geist Mono"', "monospace"],
        pinyon: ["Pinyon Script", "cursive"],
      },
    },
  },
  plugins: [],
};
