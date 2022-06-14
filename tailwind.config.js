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
        'primary': 'var(--primary-color)',
        'lightprimary': 'var(--lightprimary-color)',
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
}
