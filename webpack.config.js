const { resolve } = require('path');
const createDefaultConfigs = require('@open-wc/building-webpack/modern-and-legacy-config');

// If you don't need IE11 support, use the modern-config instead
// import createDefaultConfig from '@open-wc/building-webpack/modern-config';

const configs = createDefaultConfigs({
  input: resolve(__dirname, './src/index.html'),
});

// module.exports = createDefaultConfig({
//   input: resolve(__dirname, './src/index.html'),
// });

// Using loader example
// module.exports = configs.map(config =>
//   merge(config, {
//     module: {
//       rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
//     },
//   }),
// );

const development = !process.argv.find(arg => arg.includes('production'));
module.exports = development ? configs : configs.map(
  (config, legacy) => Object.assign(config, {
    output: {
      filename: `${legacy ? 'legacy/' : ''}index.js`,
      chunkFilename: `${legacy ? 'legacy/' : ''}[name].js`,
      path: resolve(__dirname, './dist')
    },
  })
)