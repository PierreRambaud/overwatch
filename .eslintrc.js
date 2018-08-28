module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'import',
    'html',
  ],
  rules: {
    'indent': ['error', 2, {'SwitchCase': 1}],
    'import/no-unresolved': 0,
    'function-paren-newline': ['off', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['off', 'never'],
  },
  globals: {}
}
