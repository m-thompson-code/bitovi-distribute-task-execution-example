// Generated file
import { test, expect } from '@playwright/test';

test('has count title 13', async ({ page }) => {
  await page.goto('/13');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('13');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 13 took ${testInfo.duration}ms`);
});
