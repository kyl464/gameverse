/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6c3fa5", // Warna ungu utama opsional
        secondary: "#d4a1f3", // Warna tambahan opsional
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
