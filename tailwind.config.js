/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1300px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "450px" },
    },
    extend: {
      colors: {
        hover: "#bbf7d0",
        blue: "#6366f1",
        pink: "#f43f5e",
        green: "#84cc16",
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
        blur: {
          "0%": { filter: "blur(0px)" },
          "30%": { filter: "blur(0px)" },
          "70%": { filter: "blur(1px)" },
          "100%": {
            filter: "blur(6px)",
          },
        },
      },
      animation: {
        "cursor-blink": "cursor-blink 0.6s linear infinite alternate",
        blur: "blur 1.5s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
