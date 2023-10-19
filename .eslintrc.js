module.exports = {
  extends: [
    '@polyfillhq/eslint-config/react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
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
