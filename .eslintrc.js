module.exports = {
  extends: [
    '@polyfillhq/eslint-config/react',
    'eslint:recommended',
    'plugin:import/typescript',
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
