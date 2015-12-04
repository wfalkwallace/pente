var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'bin/js'),
        filename: 'bundle.js',
    },
    resolve: {
      root: [
        path.resolve(__dirname, 'app'),
      ],
      extensions: [
        "",
        ".js",
        ".jsx",
      ],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: { presets:['react'] },
        },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.html$/, loader: 'html-loader' },
      ],
    },

};
