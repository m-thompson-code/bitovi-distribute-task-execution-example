import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';
import { CONFIG } from '@bitovi-distribute-task-execution-example/config';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const getWebServerTimeout = () => {
  if (typeof CONFIG.serveTime !== 'number') {
    throw new Error('Unexpected missing serveTime from config.json');
  }

  return CONFIG.serveTime + 60_000;// Expected serve for application + default 60 seconds
}

const getTestTimeout = () => {
  if (typeof CONFIG.pageLoadTime !== 'number') {
    throw new Error('Unexpected missing pageLoadTime from config.json');
  }

  return CONFIG.pageLoadTime + getWebServerTimeout();// Expected load time for single test + serve time + default 60 seconds
}

const getGlobalTimeout = () => {
  if (typeof CONFIG.pageLoadTime !== 'number') {
    throw new Error('Unexpected missing pageLoadTime from config.json');
  }

  return CONFIG.numberOfTests * getTestTimeout() + 3_600_000;// Expected load time for every test + default 1 hour
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  timeout: getTestTimeout(),
  globalTimeout: getGlobalTimeout(),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    timeout: getWebServerTimeout(),
    command: 'npx nx run demo:dev',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
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

    // Uncomment for mobile browsers support
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

    // Uncomment for branded browsers
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    } */
  ],
});
