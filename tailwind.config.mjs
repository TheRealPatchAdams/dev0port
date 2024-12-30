export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oldeEnglish: ['"UnifrakturMaguntia"', 'cursive'], // Adds Olde English font
      },
    },
  },
  plugins: [],
};
