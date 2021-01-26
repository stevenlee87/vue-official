const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        'main':'./src/main.js'
    },
    output:{
        path: path.resolve('./dist'),
        'filename':'./bundle.js'
    },
    watch:true,
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({template: './index.html'})
    ]
}