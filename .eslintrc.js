module.exports = {
  root: true,
  env: {
    node: true,
    jquery : true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/prettier"
  ],
  "parser": "vue-eslint-parser",
  parserOptions: {
      parser: '@babel/eslint-parser',
    },
  rules: {
    "prettier/prettier": "off",
    'vue/multi-word-component-names': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
