// @ts-check

import cypress from 'eslint-plugin-cypress/flat';
import { defineConfig } from 'eslint/config';
import { CYPRESS_FILE_PATTERNS } from '../lib/patterns.js';

export default defineConfig({
  name: 'flowup/cypress',
  files: CYPRESS_FILE_PATTERNS,
  extends: [
    cypress.configs.recommended,
    {
      name: 'flowup/cypress/additional',
      rules: {
        // https://github.com/cypress-io/eslint-plugin-cypress#rules
        'cypress/no-force': 'warn',
        'cypress/no-pause': 'warn',
      },
    },
  ],
});
