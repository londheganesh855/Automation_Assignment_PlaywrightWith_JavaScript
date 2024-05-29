const { devices } = require('@playwright/test');
require('dotenv').config();  // Load environment variables from .env file

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config({path: '.env.playwright'});

const config = {
  use: {
    baseURL: process.env.baseURL,
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
    actionTimeout: 10000,
    ...devices['Pixel 5'],
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  retries: 2,
  testDir: './tests',
  outputDir: './test-results',
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['html', { open: 'never' }],
  ],
};

module.exports = config;
