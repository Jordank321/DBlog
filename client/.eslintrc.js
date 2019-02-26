module.exports = {
    'extends': 'airbnb-base',
    'plugins': [
      'import',
    ],
    'rules': {
      'linebreak-style': 'error',
      'no-unused-vars': [2, { 'varsIgnorePattern': 'h' }]
    },
    'parser': 'babel-eslint',
    'parserOptions': {
      'allowImportExportEverywhere': true,
      'ecmaFeatures': {
        'jsx': true,
      },
    },
    'env': {
      'browser': true
    }
  };