module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // All available colors
    colors: {
      white: '#FFFFFF',
      accent: '#19BFEC',
      navy: '#061333',
      'slate-blue': '#182545',
      'light-blue': '#ABB9DB',
    },
    fill: {
      white: '#FFFFFF',
      accent: '#19BFEC',
      navy: '#061333',
      'light-blue': '#ABB9DB',
    },
    fontSize: {
      xs: '.75rem',
      sm: '1.125rem',
      base: '1.25rem',
      lg: '1.4rem',
      xl: '1.6rem',
      '2xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    fontFamily: {
      sans: ['Apercu', 'arial', 'sans-serif'],
      mono: ['Roboto Mono', 'arial', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      spacing: {
        0.25: '0.25rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    display: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],

    extend: {},
  },
  plugins: [],
};
