/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#f8f8f8',
        'border-color': '#e4e2e0',
        'text-main': '#2d2d2d',
        'link-primary': '#2557a7',
        'text-secondary': '#595959',
        'button-primary-bg': '#164081',
        'text-dark': '#333333',
        'border-light': '#dddddd',
        'border-input': '#949494',
        'pill-bg': '#f3f2f1',
        'link-external': '#0073b1',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 