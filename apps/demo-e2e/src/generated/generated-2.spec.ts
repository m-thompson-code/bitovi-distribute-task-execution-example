// Generated file
import { test, expect } from '@playwright/test';

test('has count title 2', async ({ page }) => {
  await page.goto('/2');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('2');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 2 took ${testInfo.duration}ms`);
});
