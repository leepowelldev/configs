module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules'],
  },
  rules: {
    'import/exports-last': 'error',
    'import/group-exports': 'error',
    'import/no-deprecated': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      rules: {
        // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        // https://github.com/benmosher/eslint-plugin-import/issues/1857
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
};
