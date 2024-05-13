/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      // primary
      blue: "#4F7DF3",
      red: "#FF7A7A",
      green_two: "#38CC8C",
      "orange:": "#FB7413",
      desaturated_red: "#CE9797",
      soft_red: "#F96262",

      // accent
      blue_accent: "#6055A5",
      light_pink: "#F9F0FF", // faq
      grayish_purple: "#8C6991", // faq
      dark_purple: "#2F1533", // faq

      // secondary
      pale_blue: "#C2D3FF",
      light_red: "#FF5263",
      very_dark_grayish_blue: "#48556A", // article
      desaturated_dark_blue: "#6D7F97", // article
      grayish_blue_secondary: "#9EAFC2", // article
      light_grayish_blue: "#ECF2F8", // article

      // neutral
      grey_three: "#969696",
      very_dark_blue: "#151F29",
      dark_blue: "#3E3C49",
      grayish_blue: "#B9B6D3",
      white: "#FFFFFF",
      light_grey_neutral: "#959EAC",
      medium_grey: "#7C8798",
      dark_blue_neutral: "#252D37",
      very_dark_blue_neutral: "#121417",
      dark_grayish_red: "#413A3A",

      //
      nutmeg: "#854632",
      dark_raspberry: "#7B284F",

      rose_white: "#FFF5FA",
      eggshell: "#F3E6D8",
      light_grey: "#E4DED8",
      wenge_brown: "#5F574E",
      dark_charchoal: "#302D2C",
      green: "#C5F82A",
      grey: "#1F1F1F",
      drak_grey: "#333333",
      off_black: "#141414",
      yellow: "#F4D04E",
      black: "#121212",
      grey_two: "#808080",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%,_var(--tw-gradient-stops))",
        "gradient-linear-pink": "linear-gradient(135deg, #F8BFBF, #EE8C8C)",
        "gradient-linear-white": "linear-gradient(135deg, #FFFFFF, #FFF5F5)",
      },
    },
  },
  plugins: [],
};
