module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        '2': ['Arima'],
        '1': ['Passion One'],
        '3': ['Patua One'],
        '4': ['Salsa']
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
