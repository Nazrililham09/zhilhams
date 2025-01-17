/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    darkMode: 'class',
    theme: {
      container: {
        center: true,
        padding: "30px",
      },
      extend: {
        colors: {
          primary: "#ca8a04",
          secondary: "#78350f",
          dark: "#0f172a",
        },
        screens: {
          "2xl": "1320px",
        },
      },
    },
    plugins: [],
  };
  