// Generated file
import { test, expect } from '@playwright/test';

test('has count title 18', async ({ page }) => {
  await page.goto('/18');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('18');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 18 took ${testInfo.duration}ms`);
});
