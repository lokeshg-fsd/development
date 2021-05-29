// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config
const path = require('path')
const devConfig = require('../../../config/webpack/development')

module.exports = async ({ config }) => {
  config.module.rules = devConfig.module.rules
  config.plugins = config.plugins.concat(devConfig.plugins)
  config.resolve.modules = devConfig.resolve.modules
  config.resolve.alias = devConfig.resolve.alias

  return config
}
