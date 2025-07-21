import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import jestPlugin from 'eslint-plugin-jest';

export default defineConfig([
  // 1) Ignore build output and caches
  {
    ignores: ['node_modules/**', 'dist/**', '**/node_modules/.cache/**'],
  },

  // 2) Core JavaScript rules (js/recommended)
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js, react: reactPlugin },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript
      'react/jsx-uses-react': 'off', // Not needed with React 17+
      'react/react-in-jsx-scope': 'off', // Not needed with React
    },
  },

  // 3) TypeScript rules (plugin:@typescript-eslint/recommended)
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // 4) React-specific rules (plugin:react/recommended)
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: reactPlugin },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
    },
  },

  // 5) Prettier integration
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // 6) Jest test files
  {
    files: [
      '**/*.test.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
      '**/__tests__/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
    ],
    languageOptions: {
      // bring in all the Jest globals (test, describe, expect, etc.)
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin, // optional: for jest-specific rules
    },
    rules: {
      // if you don’t want any extra Jest rules, you can omit `plugins`/`extends`
      ...jestPlugin.configs.recommended.rules,
    },
  },
]);
