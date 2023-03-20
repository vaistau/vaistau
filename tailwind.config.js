/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "monospace", "sans-serif"],
      },
    },
  },
  plugins: [],
};
