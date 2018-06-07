module.exports = {
  plugins: ["vue"], // enable vue plugin
  extends: ["plugin:vue/recommended", "prettier"], // activate vue related rules
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": false,
      "jsx": false,
      "experimentalObjectRestSpread": false,
      "allowImportExportEverywhere": false
    }
  },
  rules: {
    "no-undef": 1,
    "eol-last": [
      "error",
      "always"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "app",
        "args": "after-used",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": [
      1,
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "indent": [
      "error",
      4
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ]
  }
};