const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'shared-components'
]);

module.exports = withPlugins([withTM], {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
});