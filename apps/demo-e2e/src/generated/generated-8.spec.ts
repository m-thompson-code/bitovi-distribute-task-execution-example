// Generated file
import { test, expect } from '@playwright/test';

test('has count title 8', async ({ page }) => {
  await page.goto('/8');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('8');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 8 took ${testInfo.duration}ms`);
});
