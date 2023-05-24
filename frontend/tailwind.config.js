/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dashboard': '#EEF0F2',
        'primary': '#04265F',
        'secondary': '#D48305',

        'primary-50': '#E8F1FD',
        'primary-400': '#448DF2',
        'primary-500': '#1570EF',
        'primary-600': '#1366D9',

        'success-100': '#B6E9D1',
        'success-700': '#0D824B',

        'error-400': '#F36960',

      },
      boxShadow: {
        'desk': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      },
      backgroundImage: {
        'iphone': "url('./assets/iphone.webp')",
        'camera': 'radial-gradient(50% 50% at 50% 50%, #0D0E10 68.49%, #1A1B1D 100%);'
      }
    },
  },
  plugins: [],
}

