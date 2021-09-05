module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // 'prettier/prettier': 'warn',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx'] }
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn'
    }
};
