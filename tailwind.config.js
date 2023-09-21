/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      gridTemplateRows: {
        layout: "min-content 1fr min-content",
      },
      gridTemplateColumns: {
        sidebarLayout: "max-content 1fr",
      },
    },
    plugins: [],
  },
  plugins: [],
};
