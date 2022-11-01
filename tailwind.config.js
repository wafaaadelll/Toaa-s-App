/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
                "topcolor" : "#824444",
              "finalcolor" : "rgb(242 242 179)",
      "color": "#eeeece",
      "head": "#d5d5b1",
              "responsive":"#f2f2d8"
    },
     height: {
        100: "450px"
    }},
  },
  plugins: [],
}
