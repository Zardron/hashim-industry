/** @type {import('tailwindcss').Config} */
import footer from "./src/assets/img/footer.jpg";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    backgroundImage: {
      light: "./src/assets/img/logo-b.png",
      dark: "./src/assets/img/logo-w.png",
      footerLight: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
      footerDark: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      gradientLight:
        "linear-gradient(360deg, #0581bcc7, #e0fcff 50%, #0581bcc7)",
      gradientDark: "linear-gradient(360deg, #040d12, #313131 50%, #040d12)",
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
      shadow: "#999",
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
      bounce: {
        "0%": { transform: "translate3d(0,-10%,0) scale3d(1,1,1)" },
        "40%": { transform: "translate3d(0,10%,0) scale3d(.7, 1.2,1 )" },
        "100%": { transform: "translate3d(0,30%,0) scale3d(1.2,.7, 1)" },
      },
    },
    transformOrigin: {
      bounce: "50% 50%",
    },
    animation: {
      "spin-slow": "spin 5s linear infinite",
      wiggle: "wiggle 1s ease-in-out infinite",
      bounce: "bounce .7s linear alternate infinite",
      none: "none",
    },
  },
  plugins: [],
};
