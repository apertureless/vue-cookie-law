// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['eslint:recommended', "plugin:vue/essential"],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // no semicolon
    'semi': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  "overrides": [{
    "files": [
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/__tests__/*.{j,t}s?(x)",
        "**/test/unit/**/*.spec.{j,t}s?(x)"
    ],
    "env": {
      "jest": true
    }
  }]
}
