module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    // Place to specify Stylelint rules
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
};
