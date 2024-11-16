/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00DC82",
        "primary-text": "#000000",
        secondary: "#003C3C",
        "secondary-text": "#838383",
        "gradient-1": "#FF5D5D",
        "gradient-2": "#4794FF",
        "cta-text": "#FFFFFF",
        form: "rgba(169, 73, 73, 1)",
      },
      fontFamily: {
        urbanist: ["Urbanist", ...fontFamily.sans],
      },
      fontSize: {
        "web-hero-h1": ["64px", { lineHeight: "76.8px" }],
        "web-hero-desc-h1": ["40px", { lineHeight: "48px" }],
        "web-h1": ["40px", { lineHeight: "40.8px" }],
        "web-h2": ["34px", { lineHeight: "40.8px" }],
        "web-h3": ["27px", { lineHeight: "1.4" }],
        "web-h4": ["18px", { lineHeight: "21.6px" }],
        "web-body1": ["18px", { fontWeight: "500", lineHeight: "1.6" }],
        "web-body2": ["16px", { fontWeight: "500", lineHeight: "19.2" }],
        "web-cta": ["18px", { fontWeight: "600", lineHeight: "21.6px" }],
        "mobile-h1": ["24px", { lineHeight: "1.2" }],
        "mobile-h2": ["20px", { lineHeight: "1.3" }],
        "mobile-h3": ["18px", { lineHeight: "1.4" }],
        "mobile-h4": ["16px", { lineHeight: "1.5" }],
        "mobile-body1": ["16px", { fontWeight: "500", lineHeight: "1.6" }],
        "mobile-body2": ["14px", { fontWeight: "500", lineHeight: "1.6" }],
        "mobile-cta": ["16px", { fontWeight: "600", lineHeight: "1.5" }],
      },
      padding: {
        1440: "150px",
        1200: "120px",
        992: "70px",
        768: "40px",
        320: "16px",
      },
    },
  },
  plugins: [],
};
