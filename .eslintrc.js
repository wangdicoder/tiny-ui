module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {},
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    semi: [2, 'always'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
}
