import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 1,

  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'https://automationexercise.com/',

    headless: true,

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',

      testMatch: /.*\.setup\.spec\.ts/,

      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
    },

    {
      name: 'chromium',

      testIgnore: [/.*\.setup\.spec\.ts/,
        /.*api.*\.spec\.ts/,
      ],
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },

      dependencies: ['setup'],
    },
    {
      name: 'api',
      testMatch: /.*api.*\.spec\.ts/,
      use: {
        baseURL: 'https://automationexercise.com/',
      }
    }
  ],
});