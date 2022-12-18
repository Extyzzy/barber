module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    letterSpacing: {
      '0.3': '0.3em'
    },
    extend: {},
  },

  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },

  plugins: [],
}