module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'at-rule-no-unknown': null,
    'function-calc-no-invalid': null,
  },
}
