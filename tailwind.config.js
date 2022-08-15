/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-100": "hsl(207, 26%, 17%)",
        "very-dark-blue-200": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
