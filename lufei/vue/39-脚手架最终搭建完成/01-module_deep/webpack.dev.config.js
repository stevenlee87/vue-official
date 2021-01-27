const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
          {
            test: /\.vue$/i,
            use: ["vue-loader"],
          },
        ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({template: './index.html'})
    ]
}