// Generated file
import { test, expect } from '@playwright/test';

test('has count title 16', async ({ page }) => {
  await page.goto('/16');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('16');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 16 took ${testInfo.duration}ms`);
});
