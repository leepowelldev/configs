const { rules } = require('@commitlint/config-conventional');

const { 'type-enum': typeEnumRule } = rules;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': () => {
      const [level, applicable, value] = typeEnumRule;
      return [level, applicable, [...value, 'wip']];
    },
  },
};
