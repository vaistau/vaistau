/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: "#bbf7d0",
      },
      boxShadow: {
        glow: "0 0 7px white",
        hover: "0 0 7px hover",
      },
      fontFamily: {
        "press-start": [
          "'Press Start 2P'",
          "cursive",
          "monospace",
          "sans-serif",
        ],
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
        "blur-blink": {
          "0%": { filter: "blur(0px)" },
          "20%": { filter: "blur(0px)" },
          "90%": { filter: "blur(7px)" },
          "100%": {
            filter: "blur(14px)",
          },
        },
      },
      animation: {
        "cursor-blink": "cursor-blink 0.6s linear infinite alternate",
        "blur-blink": "blur-blink 3s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
