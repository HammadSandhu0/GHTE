/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        light: "#e9f7fe",
        primary: "#01ae47",
        secondary: "#ffb703",
        bgDark: "#12223b",
        textcolor: "#667282",
      },
    },
  },
  plugins: [],
};
