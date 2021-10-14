module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // All available colors
    colors: {
      white: '#FFFFFF',
      accent: '#19BFEC',
      navy: '#061333',
      'light-blue': '#ABB9DB',
    },
    fill: {
      white: '#FFFFFF',
      accent: '#19BFEC',
      navy: '#061333',
      'light-blue': '#ABB9DB',
    },
    fontSize: {
      sm: ['1.4rem', '2rem'],
      base: ['1.6rem', '2.4rem'],
      lg: ['2rem', '2.8rem'],
      xl: ['2.4rem', '3.2rem'],
    },
    fontFamily: {
      sans: ['Apercu', 'arial', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    spacing: {
      1: '1rem',
      2: '2rem',
      4: '4rem',
      6: '6rem',
      8: '8rem',
      10: '10rem',
      14: '14rem',
      18: '18rem',
      24: '24rem',
      32: '32rem',
      40: '40rem',
      60: '30rem',
    },

    extend: {},
  },
  variants: {
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    extend: {},
  },
  plugins: [],
};
