// eslint.config.js — ESLint v10 flat config
// https://eslint.org/docs/latest/use/migrate-to-10.0.0

import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import { globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      reactHooks.configs.flat['recommended-latest'],
      reactRefresh.configs.vite,
      ...pluginQuery.configs['flat/recommended'],
    ],

    languageOptions: {
      ecmaVersion: 2020,

      globals: {
        ...globals.browser,
      },

      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json', './tsconfig.storybook.json'],

        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },

    rules: {
      /*
       * React Refresh
       */
      'react-refresh/only-export-components': 'off',

      /*
       * Import Sorting
       */
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // External packages
            ['^react', '^@?\\w'],

            // Internal aliases
            ['^@app/component', '^@app/hooks', '^@app/store', '^@app'],

            // Styles
            ['^.+\\.(css|scss|sass|less)$'],

            // Type imports
            ['^\\u0000?type\\b', '^.*\\btype\\b'],

            // Relative imports
            ['^\\./', '^\\.\\./'],
          ],
        },
      ],

      'simple-import-sort/exports': 'error',

      /*
       * Unused imports
       */
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  {
    files: ['**/*.{test,spec}.{ts,tsx}', 'src/test/**/*.{ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },

      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  ...storybook.configs['flat/recommended'],
);
