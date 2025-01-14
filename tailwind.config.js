/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["bumblebee", "dracula"],
  },
  plugins: [require("daisyui")],
};
