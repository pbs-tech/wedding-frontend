/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
    './src/*.{vue,js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    colors: {
      'background': '#f5c8c5',
      'white': '#ffffff',
      'primary': '#ae3c41',
      'highlight': '#f87171'
    },
    extend: {
      fontFamily: {
        beth_ellen : ["Beth Ellen", "cursive"],
        averia: ["Averia", "serif"]
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

