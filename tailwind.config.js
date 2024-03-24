const colors = require('./src/services/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      NotoSerifKRRegular: ["NotoSerifKR-Regular"],
      NotoSerifKRBold: ["NotoSerifKR-Bold"],
      NotoSerifKRLight: ["NotoSerifKR-Light"],
      NotoSerifKRMedium: ["NotoSerifKR-Medium"],
      NotoSerifKRSemiBold: ["NotoSerifKR-SemiBold"],
      NotoSerifKRBlack: ["NotoSerifKR-Black"],
      NotoSerifKRExtraLight: ["NotoSerifKR-ExtraLight"],
    },
  },
  plugins: [],
};
