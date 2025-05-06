// Generated file
import { test, expect } from '@playwright/test';

test('has count title 15', async ({ page }) => {
  await page.goto('/15');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('15');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 15 took ${testInfo.duration}ms`);
});
