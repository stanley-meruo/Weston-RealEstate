/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        contactbg: ["url('src/assets/housePool.png')"],
      },
      screens: {
        xs: "480px",
        xxl: "1500px",
      },
    },
  },
  plugins: [],
};

