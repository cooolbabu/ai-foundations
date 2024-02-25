/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
    "./app/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
