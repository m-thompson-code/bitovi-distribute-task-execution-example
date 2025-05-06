// Generated file
import { test, expect } from '@playwright/test';

test('has count title 11', async ({ page }) => {
  await page.goto('/11');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('11');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 11 took ${testInfo.duration}ms`);
});
