module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jest-dom/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest', 'jest-dom'],
  parserOptions: {
    ecmaVersion: 'latest',
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
      version: 'detect',
    },
  },
  rules: {
    semi: [2, 'always'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/no-unused-vars': [1, { varsIgnorePattern: '^React$' }],
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
};
