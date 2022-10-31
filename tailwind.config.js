/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
                "topcolor" : "#824444",
              "finalcolor" : "rgb(242 242 179)",
              "color" : "#eeeece",
    },
     height: {
        100: "314px"
    }},
  },
  plugins: [],
}
