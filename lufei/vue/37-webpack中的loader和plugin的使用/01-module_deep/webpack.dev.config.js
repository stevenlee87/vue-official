module.exports = {
    entry:{
        'main':'./main.js'
    },
    output:{
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
}