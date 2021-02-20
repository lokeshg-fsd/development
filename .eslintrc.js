var path = require('path')

module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jasmine/recommended',
    'plugin:flowtype/recommended',
    'plugin:eslint-comments/recommended',
  ],
  parser: 'babel-eslint',
  plugins: [
    'jasmine',
    'react',
    'flowtype',
    'eslint-comments',
    'lodash',
    'react-hooks',
    'graphql',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
              path.resolve('app/javascript'),
              path.resolve('node_modules')
            ],
            alias: {
              
              react: path.resolve('node_modules/react'),
              'react-dom': path.resolve('node_modules/react-dom'),
            },
          },
        }
      }
    }
  },
  env: {
    es6: true,
    browser: true,
    jasmine: true
  },
  rules: {
    // Javascript
    'arrow-parens': [2, 'always'],
    'class-methods-use-this': [0],
    'consistent-return': [0],
    'curly': ['error', 'all'],
    'id-length': [2, { exceptions: ['i', 'j', 'x', 'y', 'z', '_', 'a', 'b'] }],
    'implicit-arrow-linebreak': [0],
    'object-curly-newline': [2, { 'consistent': true }],
    'space-unary-ops': [2],
    semi: ['error', 'never'],
    'semi-style': ['error', 'first'],
    'no-unexpected-multiline': ['error'],
    'max-len': [2, 120, 4],
    'no-magic-numbers': [2, { ignoreArrayIndexes: true, ignore: [-1, 0, 0.5, 1, 2, 100, 450, 560, 1024, 1360] }],
    'linebreak-style': [2, 'unix'],
    'indent': [0],
    'comma-dangle': [0],
    'comma-style': [2, 'last'],
    'no-negated-condition': [2],
    'no-nested-ternary': [2],
    'new-parens': [2],
    'function-paren-newline': [0],
    'space-before-function-paren': [0],
    'spaced-comment': ['error', 'always', { exceptions: ['::'] }],
    'padding-line-between-statements': [2,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}
    ],
    'newline-per-chained-call': [0],
    'no-lonely-if': [2],
    'no-mixed-spaces-and-tabs': [2],
     // These are the default groups, but without "+" and "-"
    'no-mixed-operators': [2,
      {
        "groups": [
                    ["*", "/", "%", "**"],
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                  ],
      }
    ],
    'no-underscore-dangle': ['error', { 'allow': ['__typename', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
    'func-call-spacing': [2, 'never'],
    'no-trailing-spaces': [2],
    'quotes': [2, 'single', {'avoidEscape': true}],
    'no-implicit-coercion': [2, { 'allow': ['!!'] }],
    'no-alert': [2],
    'no-console': [2],
    'prefer-const': [2],
    'no-const-assign': [2],
    'arrow-spacing': [2, {'before': true, 'after': true}],
    'no-confusing-arrow': [0],
    'no-restricted-globals': [2],
    'operator-linebreak': [0],
    'template-curly-spacing': [0], 
    // ReactJS
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'react/no-unused-prop-types': [0],
    'react/no-danger': [0],
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
    }],
    // NOTE: we should deprecate findDOMNode()
    // NOTE: piv story: https://www.pivotaltracker.com/story/show/129102343
    'react/no-find-dom-node': [0],
    'react/prefer-es6-class': [0, 'never'],
    'react/prefer-stateless-function': [2, { 'ignorePureComponents': true }],
    'react/sort-prop-types': [2],
    'react/no-deprecated': [2],
    'react/no-did-mount-set-state': [2],
    'react/no-did-update-set-state': [2],
    'react/no-direct-mutation-state': [2],
    'react/no-is-mounted': [2],
    'react/prefer-es6-class': [2],
    'react/self-closing-comp': [2],
    'react/require-default-props': [0],
    'react/no-array-index-key': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // JSX
    'react/jsx-sort-props': [2],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-no-bind': [2],
    'react/jsx-filename-extension': [0],
    'react/jsx-handler-names': [2, {'eventHandlerPrefix': 'handle', 'eventHandlerPropPrefix': 'on'}],
    'react/jsx-indent-props': [0],
    'react/jsx-indent': [0],
    'react/jsx-key': [2],
    'react/jsx-max-props-per-line': [0],
    'react/jsx-no-bind': [2],
    'react/jsx-no-duplicate-props': [2, { "ignoreCase": false }],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-wrap-multilines': [2, { prop: 'ignore' }],
    'jsx-quotes': [2, 'prefer-double'],
    'jsx-a11y/img-has-alt': [0],
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
    // NOTE: We should enable this rule after we restructure the DOM to use visible elements
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-redundant-roles': [0],
    'jsx-a11y/no-autofocus': [0],
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'to', 'hrefLeft', 'hrefRight' ],
      'aspects': [ 'noHref', 'invalidHref', 'preferButton' ]
    }],
    'jsx-a11y/click-events-have-key-events': [0],

    // Testing
    'jasmine/new-line-before-expect': [0],
    // Enable jasmine/no-spec-dups when https://github.com/tlvince/eslint-plugin-jasmine/issues/167
    // is fixed
    'jasmine/no-spec-dupes': [0, 'branch'],
    'jasmine/no-suite-dupes': [0, 'branch'],
    'jasmine/prefer-toHaveBeenCalledWith': [2],

    // Flow
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    // generic-spacing is disabled until multi-line support is added
    // https://github.com/gajus/eslint-plugin-flowtype/issues/220
    'flowtype/generic-spacing': [0],
    'flowtype/no-dupe-keys': [2],
    'flowtype/no-mutable-array': [2],
    'flowtype/no-primitive-constructor-types': [2],
    'flowtype/no-weak-types': [2],
    'flowtype/object-type-delimiter': [0],
    'flowtype/require-valid-file-annotation': [2, 'always', { 'annotationStyle': 'line' }],
    'flowtype/semi': [0],
    'flowtype/space-after-type-colon': ['off'],

    // Import
    'import/extensions': [2, 'always', { 'js': 'never', 'jsx': 'ignorePackages' }],
    'import/no-duplicates': [2],
    'import/no-named-as-default': [2],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: [
          "app/javascript/**/*Spec.js",
          "app/javascript/**/*Spec.jsx",
          "app/javascript/**/*.test.js",
          "app/javascript/**/*.test.jsx",
          "app/javascript/**/__tests__/*.js",
          "app/javascript/**/__tests__/*.jsx",
          "app/javascript/**/__factories__/*.js",
          "app/javascript/**/*.stories.js",
          "app/javascript/**/*.stories.jsx",
          "app/javascript/**/*.factory.js",
        ]
      }
    ],
    // Eslint Comments
    'eslint-comments/disable-enable-pair': [0],
    'eslint-comments/no-aggregating-enable': [0],

    // Lodash rules
    'lodash/import-scope': [2, 'method'],
    'lodash/no-extra-args': [2],

    // GraphQL Rules
    'graphql/template-strings': [2, {
      env: 'apollo',
      schemaJson: require('./schema.json'),
    }, {
      env: 'literal',
      schemaJson: require('./schema.json'),
    }],
  },
  parser: 'babel-eslint',
  globals: {
    'CKEDITOR': true,
    'jest': true,
  }
}
