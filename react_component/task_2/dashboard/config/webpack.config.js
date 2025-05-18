module.exports = {
  // ... other config
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      // Other loaders (CSS, images)
    ]
  }
};
