// Generated file
import { test, expect } from '@playwright/test';

test('has count title 12', async ({ page }) => {
  await page.goto('/12');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('12');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 12 took ${testInfo.duration}ms`);
});
