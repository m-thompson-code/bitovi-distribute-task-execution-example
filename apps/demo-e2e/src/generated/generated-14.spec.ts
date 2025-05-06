// Generated file
import { test, expect } from '@playwright/test';

test('has count title 14', async ({ page }) => {
  await page.goto('/14');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('14');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 14 took ${testInfo.duration}ms`);
});
