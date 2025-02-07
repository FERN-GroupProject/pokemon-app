const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
const ELEMENTS = [
  "undefined",
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  safelist: ELEMENTS.map((type) => `bg-back-${type}`),
  theme: {
    extend: {
      colors: Object.fromEntries(
        ELEMENTS.map((type) => [`back-${type}`, `var(--back-${type})`])
      ),
    },
  },
  plugins: [flowbite.plugin()],
};
