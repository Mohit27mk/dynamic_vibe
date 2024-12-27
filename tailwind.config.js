/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #001c32, #00060a, #001c32)',
      },
      fontFamily: {
        'lobster': ['Lobster', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      
      
    },
  },
  plugins: [],
};
