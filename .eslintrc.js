module.exports = {
  extends: [
    '@polyfillhq/eslint-config/react',
    'eslint:recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
  },

  root: true,
};
