/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        ml: '975px',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        yellow: '#F2C938',
        'grey-dark': '#222224',
        'grey-light': '#343436',
      },
    },
  },
  plugins: [],
};
