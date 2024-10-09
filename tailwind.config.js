/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        Reg: ["Reg", "sans-serif"], // Add your custom font
        SB: ["SB", "sans-serif"],
        mid: ["mid","sans-serif"], // Add your custom font
      },
    },
  },
  plugins: [],
};
