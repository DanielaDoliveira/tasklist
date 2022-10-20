module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier"
  ],
  
  globals:{
    Atomics : 'readonly',
    SharedArrayBuffer : 'readonly',
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this":"off",
    "no-params-reassign":"off",
    "camelcase": "off",
    "no-underscore-dangle":"off",
    "no-unused-vars": ["error",{ "argsIgnorePattern":"next"}]
  },
};
