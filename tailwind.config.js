/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#31456A",
        secondary: "#EBF3FA",
        "secondary-dark": "#D6E1EF",
        "secondary-light": "#E3EDF7",
        dark: "#121417",
        "dark-light": "#272B30",
        info: "#6D737A",
      },
    },
  },
  plugins: [],
};
