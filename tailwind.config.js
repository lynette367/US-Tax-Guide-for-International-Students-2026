/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#F7C6D9",
          pinkdeep: "#E499B3",
          pinkhover: "#C87F9B",
          hotpink: "#FF69B4",
          warmwhite: "#FFF8F9",
          softgray: "#F3EDF0",
          ink: "#4E4A4C",
        },
      },
    },
  },
  plugins: [],
};
