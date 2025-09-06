/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from your palette
        "brand-light": "#FCFCFC",
        "brand-purple-light": "#FAFFFF",
        "brand-purple": "#884998",
        "brand-purple-dark": "#531B63",
        "brand-navy": "#011936",
        primary: "#884998",
        secondary: "#531B63",
      },
      fontFamily: {
        futura: ["Futura", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typography scale matching your design system
        h1: ["50px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "1.4", fontWeight: "700" }],
        body1: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        body2: ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        caption: [
          "12px",
          { lineHeight: "1.4", fontWeight: "400", textTransform: "uppercase" },
        ],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        brand: "0 4px 20px rgba(136, 73, 152, 0.15)",
        "brand-lg": "0 10px 40px rgba(136, 73, 152, 0.2)",
      },
    },
  },
  plugins: [],
};
