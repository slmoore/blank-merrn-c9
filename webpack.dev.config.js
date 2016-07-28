module.exports = {
  entry: [
    'webpack-dev-server/client?https://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './index.js' // Your appʼs entry point
  ],
  output: { 
    path: './dist',
    filename: 'bundle.js',
    //publicPath: pathPublicCDN
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=react-hmre']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    stats: { colors: true },
    contentBase: './dist'
  }
};