const { configs } = require('@eslint/js');
const globals = require('globals');

module.exports = [
    configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: { ...globals.node, Atomics: 'readonly', SharedArrayBuffer: 'readonly' }
        },
        rules: {
            semi: 'error',
            quotes: ['error', 'single'],
            indent: ['error', 4, { 'SwitchCase': 1 }],
            'no-unused-vars':
                [
                    'warn',
                    {
                        'varsIgnorePattern': '^_',
                        'args': 'after-used',
                        'argsIgnorePattern': '^_'
                    }
                ]
        },
        ignores: []
    }
];