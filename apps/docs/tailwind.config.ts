/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      pc: "1080px",
      tab: "850px",
      "max-tab": { max: "849px" },
      mobile: "300px",
    },
    extend: {},
  },
  plugins: [],
};
