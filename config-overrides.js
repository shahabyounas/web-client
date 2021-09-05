module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.worker\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: 'comlink-loader',
        },
        {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-react-app'],
          },
        }],
    });
  
    return config;
  };
  