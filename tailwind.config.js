module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'black': '#000',
        'grey': 'var(--grey-color)',
        'focus': 'var(--focus-color)',
        'focusbackground': 'var(--focusbackground-color)',
        'primary': 'var(--primary-color)',
        'lightprimary': 'var(--lightprimary-color)',
        'darkprimary': 'var(--darkprimary-color)',
        'secondary': 'var(--secondary-color)',
        'footer': 'var(--footer-color)',
        'content': '#cecece',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'light-gradient-radial': 'radial-gradient(var(--light-gradient-color-stops))',
        'gradient-linear': 'linear-gradient(var(--gradient-linear-stops))',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
    },
    {
      pattern: /flex-.*/
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/
    },
    {
      pattern: /(w|h)-[0-9]+/
    }
  ]
}
