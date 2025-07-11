/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"Helvetica Neue"', "Arial", "sans-serif"],
        geist: ['"Geist"', "sans-serif"],
        mono: ['"Geist Mono"', "monospace"],
        pinyon: ["Pinyon Script", "cursive"],
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};
