/* eslint import/no-extraneous-dependencies: 0 */
// @noflow
// Don't put anything in this file that is required. It should only contain
// optional config that developers can customize to their own tastes.

// Developers can override this configuration by creating
// config/webpack/optional-development-plugins-custom.js, but don't check
// the *-custom.js file in.

const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

module.exports = [
  [
    'WebpackBuildNotifierPlugin',
    new WebpackBuildNotifierPlugin({ suppressSuccess: true }),
  ],
]
