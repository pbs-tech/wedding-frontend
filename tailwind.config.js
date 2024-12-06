/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/*.{vue,js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    colors: {
      'background': '#ffe4e6',
      'white': '#ffffff',
      'primary': '#831843',
      'highlight': '#f87171'
    },
    extend: {},
  },
  plugins: [],
}

