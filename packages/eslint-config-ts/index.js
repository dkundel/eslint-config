module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  extends: ['@dkundel/js', 'typescript', 'typescript/prettier'],
  rules: {
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'error',
    'prettier/prettier': ['error', { parser: 'typescript' }],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: 'typescript-eslint-parser',
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
