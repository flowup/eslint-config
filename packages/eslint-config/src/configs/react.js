// @ts-check

import react from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { REACT_FILE_PATTERNS } from '../lib/patterns.js';
import javascript from './javascript.js';

export default defineConfig(...javascript, {
  name: 'flowup/react',
  files: REACT_FILE_PATTERNS,
  languageOptions: {
    globals: globals.browser,
  },
  extends: [react.configs['strict-type-checked']],
});
