// @noflow
/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */
const { environment } = require('@rails/webpacker')
// eslint-disable-next-line no-unused-vars
const { join, resolve } = require('path')
const { sync } = require('glob')

const loadersDir = join(__dirname, 'loaders')

environment.config.merge({
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: {
      name: 'manifest',
    },
    /* splitChunks: {
      cacheGroups: {
        'vendor-react': {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors-react',
          chunks: 'all',
          priority: 10,
        },
        'vendor-material': {
          test: /[\\/]node_modules[\\/]@material-ui[\\/]/,
          name: 'vendors-material',
          chunks: 'all',
          priority: 10,
        },
        'vendor-material-old': {
          test: /[\\/]node_modules[\\/]material-ui-old[\\/]/,
          name: 'vendors-material-old',
          chunks: 'all',
          priority: 10,
        },
        'vendor-moment': {
          test: /[\\/]node_modules[\\/](moment|moment-timezone)[\\/]/,
          name: 'vendors-moment',
          chunks: 'all',
          priority: 10,
        },
        'vendor-lodash': {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          name: 'vendors-lodash',
          chunks: 'all',
          priority: 10,
        },
        vendors: {
          chunks: (chunk) => chunk.name !== 'test_utils',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors-all',
          priority: 1,
        },
      },
    }, */
  },
  resolve: {
    alias: {
      'lodash-es': 'lodash',
      debug: 'true',
      devtool: '(none)',
      /* facilities_editor: resolve(
        __dirname,
        '../../app/javascript/manager/editor',
      ),
      move_manager: resolve(
        __dirname,
        '../../app/javascript/manager/move_manager',
      ), */
      React: 'react',
    },
  },
})

environment.loaders
  // .delete('css')
  .delete('moduleCss')
  .delete('moduleSass')
  .delete('sass')

sync(join(loadersDir, '*.js')).forEach((loader) =>
  environment.loaders.append(loader.match(/\/([^/]*).js$/)[1], require(loader)),
)

module.exports = environment
