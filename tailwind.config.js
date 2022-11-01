/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
                "topcolor" : "#824444",
                "finalcolor" : "#f4eace",
                "color": "#f4eace",
                "responsive":"#f4eacea1"
    },
     height: {
        100: "450px"
    }},
  },
  plugins: [],
}
