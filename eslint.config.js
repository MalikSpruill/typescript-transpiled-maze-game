import js from '@eslint/js';

import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

import { defineConfig } from 'eslint/config';

const nodeGlobals = {
  process: 'readonly',
  __dirname: 'readonly',
  module: 'readonly',
  require: 'readonly',
  console: 'readonly',
};

export default defineConfig([
  {
    files: ['**/*.{ts}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-undef': 'off',
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: nodeGlobals,
    },
  },
  prettierConfig,
]);
