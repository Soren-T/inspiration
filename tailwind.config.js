const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Roboto", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        blue: colors.blue,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      },
      fontSize: {
        xxs: "0.625rem",
      },
      maxHeight: {
        48: "12rem",
        "80vh": "80vh",
        "90vh": "90vh",
        none: "none",
      },
    },
  },
  variants: {},
  plugins: [],
}
