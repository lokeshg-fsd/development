/* eslint-disable global-require, no-console */
// @noflow

const environment = require('./environment')

let optionalDevelopmentPlugins

try {
  // eslint-disable-next-line import/no-unresolved
  optionalDevelopmentPlugins = require('./optional-development-plugins-custom.js')
} catch (error) {
  optionalDevelopmentPlugins = require('./optional-development-plugins.js')
}
optionalDevelopmentPlugins.forEach(([name, plugin]) =>
  environment.plugins.append(name, plugin),
)

try {
  // eslint-disable-next-line import/no-unresolved
  const customize = require('./optional-development-customization.js')

  customize(environment)
} catch (error) {
  if (!error.message.match(/Cannot find module/)) {
    console.warn(error)
  }
}

module.exports = environment.toWebpackConfig()
