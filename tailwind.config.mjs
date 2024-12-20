/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#1a1a1a',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(250,250,250,0.05) 0%, transparent 60%, rgba(0,0,0,1) 100%)',
        'linear-gradient': 'linear-gradient(-75deg, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.1) 100%)',
      },
    },
  },
  plugins: [],
};
