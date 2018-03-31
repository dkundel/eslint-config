module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['prettier'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'prefer-const': 'error',
    'prettier/prettier': 'error'
  },
  env: {
    node: true
  }
};
