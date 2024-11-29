const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000, // Set timeout for tests
  retries: 1, // Retry tests on failure
  use: {
    headless: true, // Run tests in headless mode
    baseURL: 'https://app.asana.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});

  