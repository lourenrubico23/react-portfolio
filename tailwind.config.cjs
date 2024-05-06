/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      }, 
      colors: {
        primary: "#023047",
        accent: "#8ECAE6",
        buttons: "#FFB703",
        btncircle: "#FB8500",
        lightcolor: "#F5F5F5",
        darkcolor: "#2B2B2B",
        cardsblue: "#219EBC",
      },
      fontFamily: {
        regular: "Roboto-regular",
        thick: "Roboto-medium",
        thicker: "Roboto-bold",
      },
    },
  },
  plugins: [],
}

