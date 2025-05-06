// Generated file
import { test, expect } from '@playwright/test';

test('has count title 10', async ({ page }) => {
  await page.goto('/10');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('10');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 10 took ${testInfo.duration}ms`);
});
