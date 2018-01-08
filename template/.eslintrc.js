module.exports = {
  root: true,
  // extends: 'standard',
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'vue'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'no-console': 0,
    'no-undef': 0,
    'semi': [2, 'always'],
    'space-before-function-paren': 0,
    'object-property-newline': 0,
    'vue/order-in-components': 0,
    'vue/html-self-closing': 0,
    "vue/max-attributes-per-line": [2, {
      "singleline": 2,
      "multiline": {
        "max": 2,
        "allowFirstLine": false
      }
    }]
  }
}
