module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: 1,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['node_modules'],
      },
      alias: {
        map: [
          ['components', './components'],
          ['partials', './partials'],
          ['backend-util', './backend-util'],
          ['services', './services'],
          ['util', './util'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
