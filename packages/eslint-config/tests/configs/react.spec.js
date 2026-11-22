// @ts-check

import { createLintUtils } from '../helpers/lint-utils.js';

describe('react config', () => {
  const { setup, teardown, loadConfig } = createLintUtils('react', '*.tsx');

  beforeAll(setup);

  afterAll(teardown);

  it('should include react rules for JS file', async () => {
    const config = await loadConfig('components/Button.js');
    expect(Object.keys(config.rules ?? {}).join(',')).toContain(
      '@eslint-react/',
    );
  });

  it('should include react rules for TSX file', async () => {
    const config = await loadConfig('components/Button.tsx');
    expect(Object.keys(config.rules ?? {}).join(',')).toContain(
      '@eslint-react/',
    );
  });

  it('should have rule from extended javascript config', async () => {
    const config = await loadConfig('components/Button.tsx');
    expect(config.rules).toHaveProperty('@typescript-eslint/no-explicit-any', [
      2,
    ]);
  });

  it('should have rule from extended recommended react config', async () => {
    const config = await loadConfig();
    expect(config.rules).toHaveProperty('@eslint-react/no-missing-key', [2]);
  });
});
