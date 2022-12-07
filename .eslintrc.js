module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'next',
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'prettier', // Prettier must be last brodie.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'eslint-comments',
        'jest',
        'promise',
        'import',
        'prettier',
    ],
    ignorePatterns: ['src/generated/*.ts', 'src/schema/*.ts'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'jest.setup.ts',
                    '**/*.test.tsx',
                    '**/*.spec.tsx',
                    '**/*.test.ts',
                    '**/*.spec.ts',
                ],
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
}
