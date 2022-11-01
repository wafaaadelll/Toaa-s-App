/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
                "topcolor" : "#824444",
                "finalcolor" : "#f4eace",
    },
     height: {
        100: "450px"
    }},
  },
  plugins: [],
}
