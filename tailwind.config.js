/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#63AB45', // Green
        'brand-secondary': '#F7921E', // Orange
        'brand-light': '#F4F4F4', // Light gray background
        'brand-dark': '#1F2421', // Dark charcoal
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Manrope', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], // Keep light theme as base
  },
}

