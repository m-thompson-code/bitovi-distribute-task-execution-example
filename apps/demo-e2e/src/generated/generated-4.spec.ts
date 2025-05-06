// Generated file
import { test, expect } from '@playwright/test';

test('has count title 4', async ({ page }) => {
  await page.goto('/4');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('4');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(`Test 4 took ${testInfo.duration}ms`);
});
