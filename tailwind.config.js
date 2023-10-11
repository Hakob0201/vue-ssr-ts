/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'blue-50': '#F3F9FF',
        'blue-350': '#016CE5',
        'blue-400': '#195CBB',
        'blue-600': '#0C3278',
        'blue-900': '#a9b4ca',
        'black-900': 'rgba(0, 0, 0, 0.20)'
      }
    }
  },
  plugins: []
};

