// Generated file
import { test, expect } from '@playwright/test';

test('has count title 7', async ({ page }) => {
  await page.goto('/7');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('7');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 7 took ${testInfo.duration}ms`);
});
