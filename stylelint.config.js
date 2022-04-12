module.exports = {
  extends: ['stylelint-config-standard'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'for',
          'if',
          'else',
          'include',
          'mixin',
          'warn',
          'return',
          'content',
          'extend'
        ]
      }
    ],
    'no-descending-specificity': null
  }
}
