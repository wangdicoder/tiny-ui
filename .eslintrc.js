module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:mdx/recommended',
    ],
    parserOptions: {
        'ecmaVersion': 2019,
        'sourceType': 'module',
    },
    env: {
        node: true,
        browser: true,
        commonjs: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react-hooks',
    ],
    globals: {},
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        semi: ['error', 'never'],
        'no-console': 'off',
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
            },
        ],
        'import/no-unresolved': 'error',
        'max-nested-callbacks': 'off',
        'react/no-children-prop': 'off',
        'typescript/member-ordering': 'off',
        'typescript/member-delimiter-style': 'off',
        'react/jsx-indent-props': 'off',
        'react/no-did-update-set-state': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        indent: [
            'off',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true,
            },
        ],
    },
}
