// Tell webpack to compile the "acme" package (https://www.npmjs.com/package/next-transpile-modules)
const withTM = require('next-transpile-modules')(['@acme']);

module.exports = withTM({
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];
    return config;
  },
});
