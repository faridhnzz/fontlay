/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "12px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      width: {
        120: "30rem",
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    base: false,
    styled: true,
    utils: true,
    logs: false,
  },
};
