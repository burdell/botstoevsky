const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    twitter: './src/twitter/index.ts',
    instagram: './src/instagram/index.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: { configFileName: 'tsconfig.json' },
        },
        exclude: /node_modules/,
      },
      {
        test: /re2$/i,
        use: 'raw-loader',
      },
    ],
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    libraryTarget: 'umd',
  },
}
