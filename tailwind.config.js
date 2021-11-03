module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        "-1": "-1",
      },
      keyframes: {
        barGrowX: {
          "100%": { transform: "scaleX(1)" },
          "0%": { transform: "scaleX(0)" },
        },
        barGrowY: {
          "100%": { transform: "scaleY(1)" },
          "0%": { transform: "scaleY(0)" },
        },
        pageGrow: {
          "100%": { transform: "scale(1, 1)" },
          "0%": { transform: "scale(0, 0)" },
        },
      },
      animation: {
        barGrowX: "barGrowX 1s cubic-bezier(1,.7,.5,1) forwards",
        barGrowY: "barGrowY 1s cubic-bezier(1,.7,.5,1) forwards",
        pageGrow: "pageGrow .5s cubic-bezier(1,.7,.5,1) forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
