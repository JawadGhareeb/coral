/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      silver: "#F4F4F5",
      black: "#000",
      orange: "#FF6F61",
      blue: "#1E2832",
      white: "#fff",
      borderColor: "#e3e3e3",
    },
    screens: {
      xsm: "580px",
      sm: "800px",
      md: "1040px",
      lg: "1199px",
    },
  },
  plugins: [],
};
