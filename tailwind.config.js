/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 5px rgb(230, 230, 230)",
      },
      fontFamily: {
        "press-start": ["Press Start 2P", "cursive", "monospace", "sans-serif"],
      },
      keyframes: {
        "cursor-blink": {
          "0%": { opacity: "0" },
          "49%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "cursor-blink": "cursor-blink 0.6s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
