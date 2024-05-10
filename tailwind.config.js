/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'nutmeg': "#854632",
      'dark_raspberry': "#7B284F",
      'white': "#FFFFFF",
      'rose_white': "#FFF5FA",
      'eggshell': "#F3E6D8",
      'light_grey': "#E4DED8",
      'wenge_brown': "#5F574E",
      'dark_charchoal': "#302D2C",
      'green': "#C5F82A",
      'grey': "#1F1F1F",
      'drak_grey': "#333333",
      'off_black': "#141414",
      'yellow': "#F4D04E",
      'black': "hsl(0, 0%, 7%)",
      'grey_two': "#808080",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%,_var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
