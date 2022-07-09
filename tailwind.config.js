module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        '2': ['Arima'],
        '1': ['Passion One']
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
