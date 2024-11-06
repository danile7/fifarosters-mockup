import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1250": "1250px",
        "1000": "1000px",
        "750": "750px",
      },
      height: {
        "main-screen": "calc(100vh - 56px)",
      },
      colors: {
        yellow: {
          main: "#FFD841",
        },
        gray: {
          main: "#222222",
          dark: "#2e2e2e",
          "light-dark": "#383838",
        },
        blue: {
          dark: "#3175b3",
          light: "#66afe9",
          info: "#31708f",
          "info-bg": "#d9edf7",
        },
        green: {
          main: "#5cb85c",
          dark: "#449d44",
        },
        twitter: "#55acee",
        facebook: "#3b5998",
        youtube: "#bb0000",
        instagram: "#125688",
        reddit: "#ffffff",
        discord: "#7289da",
      },
      boxShadow: {
        "focus-blue":
          "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)",
      },
      fontSize: {
        "page-title": "36px",
        "page-subtitle": "24px",
      },
      boxReflect: {
        below: {
          "-webkit-box-reflect":
            "below 0 linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4))",
        },
      },
      keyframes: {
        drift: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flash: {
          "0%, 30%, 100%": { opacity: "0", boxShadow: "0 0 0vw 0vw yellow" },
          "5%": { opacity: "1", boxShadow: "0 0 2vw 0.4vw yellow" },
        },
        'spinner-wiggle': {
          '30%': { transform: 'perspective(200px) rotateX(66deg)' },
          '40%': { transform: 'perspective(200px) rotateX(65deg)' },
          '50%': { transform: 'perspective(200px) rotateX(68deg)' },
          '60%': { transform: 'perspective(200px) rotateX(64deg)' },
        },
        'spinner-spin': {
          '100%': { transform: 'rotate(360deg)' },
        },
        'spinner-fade': {
          '20%': { opacity: '.1' },
          '40%': { opacity: '1' },
          '60%': { opacity: '.1' },
          'bounce-in': 'bounceIn 0.3s ease-in-out forwards'
        },
      },
      animation: {
        drift: "drift ease alternate infinite",
        flash: "flash ease infinite",
        'wiggle': 'spinner-wiggle 1.2s infinite',
        'spin': 'spinner-spin 1.2s cubic-bezier(.6,.2,0,.8) infinite',
        'fade': 'spinner-fade 1.2s linear infinite',
        
      },
      backgroundImage: {
        "blue-dark-gradient":
          "radial-gradient( hsl(200,40%,20%), hsl(200,30%,6%))",
      },
    },
    animatedSettings: {
      animatedSpeed: 400,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ["bounce", "heartBeat", "fade", "fadeIn", "fadeInDown", "tada"],
    },
  },
  plugins: [
    // Other plugins
    require("tailwindcss-animatecss"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".reflect-below": {
          "-webkit-box-reflect":
            "below 0 linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4))",
        },
        ".backface-hidden": { "backface-visibility": "hidden" },
      });
    },
  ],
};
