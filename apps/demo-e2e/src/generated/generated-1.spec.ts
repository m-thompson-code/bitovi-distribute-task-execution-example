// Generated file
import { test, expect } from '@playwright/test';

test('has count title 1', async ({ page }) => {
  await page.goto('/1');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('1');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 1 took ${testInfo.duration}ms`);
});
