const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
 
  // your other plugins here
  {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config

      config.module.rules.push({ 
      test: /\.svg$/,
      loader: 'svg-sprite-loader'   
    })
      // Example using webpack option
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
      // appreciate several push
      
      return config
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    }
  }
]);
