const MiniCss = require('mini-css-extract-plugin')


module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  module:{
    rules:[{
    test: /\.css$/,
    use:[MiniCss.loader, 'css-loader']
  }]
  },
  plugins: [
    new MiniCss()
  ]
}