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
      '2xl': ['3.5rem', '4.9rem'],
      '3xl': ['5rem', '6.5rem'],
      '4xl': ['6rem', '7rem'],
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
      0.25: '0.25rem',
      0.5: '0.5rem',
      0.65: '0.65rem',
      0.75: '0.75rem',
      1: '1rem',
      1.5: '1.5rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
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
    backgroundColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    display: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],

    extend: {},
  },
  plugins: [],
};
