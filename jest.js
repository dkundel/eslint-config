module.exports = {
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/__{tests,mocks}__/**/*.{js,ts}'],
      rules: {
        'require-jsdoc': 'off',
        'import/first': 'off'
      }
    }
  ],
  env: {
    'jest/globals': true
  }
};
