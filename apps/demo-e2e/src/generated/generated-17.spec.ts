// Generated file
import { test, expect } from '@playwright/test';

test('has count title 17', async ({ page }) => {
  await page.goto('/17');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('17');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 17 took ${testInfo.duration}ms`);
});
