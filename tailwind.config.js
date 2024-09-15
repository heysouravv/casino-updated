/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 7s linear infinite",
        bounceUpDown: "bounceUpDown 5s ease-in-out infinite alternate",
      },

      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceUpDown: {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },

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
      textStroke: {
        stroke: "2px #fff",
      },
    },
  },
  plugins: [],
};
