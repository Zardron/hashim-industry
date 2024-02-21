/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    backgroundImage: {
      light: "./src/assets/img/logo-b.png",
      dark: "./src/assets/img/logo-w.png",
      footerLight:
        "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(./src/assets/img/footer.jpg)",
      footerDark:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./src/assets/img/footer.jpg)",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      light: "#d5d5d5",
      primary: "#0581bc",
      secondary: "#808080",
      yellow: "#FFFF00",
      dark: "#040D12",
      gray: "#030712",
      offGray: "#dbdbdb",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-45deg)" },
        "50%": { transform: "rotate(-20deg)" },
      },
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      "spin-slow": "spin 5s linear infinite",
      wiggle: "wiggle 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
