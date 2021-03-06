module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
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
      xs: '.875rem',
      sm: '1rem',
      base: '1.125rem',
      lg: ['1.25rem', '1.5rem'],
      xl: ['1.5rem', '1.8rem'],
      '2xl': ['1.75rem', '2.1rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.7rem'],
      '5xl': ['3rem', '4.5rem'],
      '6xl': '4rem',
      '7xl': '5rem',
    },

    fontFamily: {
      sans: ['Apercu', 'sans-serif'],
      mono: ['Roboto Mono', 'sans-serif'],
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
      height: {
        '60px': '60px',
        '70px': '70px',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75',
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.7%',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    display: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],

    extend: {
      width: ['group-hover'],
      translate: ['group-hover'],
      margin: ['group-hover', 'last'],
      padding: ['group-hover', 'last'],
      border: ['hover', 'active'],
      fill: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
};
