module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode : 'class',
  theme: {
    fontFamily: {
      // Add your custom fonts.
      'Source': ["Source Sans Pro", "Sans-serif"]
    },
    colors : {
      //Light => Add your custom lightMode.
      bodyLight:"#FCF6F4",
      textLight:"#000000",
      bodyLightRgba : "252, 246, 244",
      textLightRgba:"0,0,0",

      //Dark => Add your custom darMode.
      bodyDark:"#000000",
      textDark:"#FCF6F4",
      textDarkRgba : "252, 246, 244",
      bodyDarkRgba:"0,0,0",
    },
    extend: {},
  },
  plugins: [],
}
