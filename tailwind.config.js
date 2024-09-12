/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "yellow-500": "#FDE047",
        "yellow-700": "#F59E0B",
        "yellow-900": "#B45309",
        bg: {
          primary: "#030303",
        },
      },
      screens: {
        "3xl": { min: "1700px" },
      },
    },
  },
  plugins: [],
};
