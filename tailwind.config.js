/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1533",
          navy2: "#0E1B3E",
          gold: "#C9A24A"
        },
        base: {
          bg: "#FFFFFF",
          text: "#0B1220",
          muted: "#5B6475",
          border: "#E6E8EE",
          soft: "#F6F7FA"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 21, 51, 0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
}
