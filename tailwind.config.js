/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#80BBAD',
          secondary: '#81a1c1',
          accent: '#D08770',
          neutral: '#2E3440',
          'neutral-content': '#A6ADBB',
          'base-100': '#434c5e',
          'base-200': '#3b4252',
          'base-300': '#2e3440',
          'base-content': '#A6ADBB',
          info: '#5E81ac',
          success: '#a3be8c',
          warning: '#EBCB8B',
          error: '#BF616A'
        }
      }
    ]
  },
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
