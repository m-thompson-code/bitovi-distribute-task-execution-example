// Generated file
import { test, expect } from '@playwright/test';

test('has count title 24', async ({ page }, testInfo) => {
  await page.goto('/24');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('24');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 24 took ${testInfo.duration}ms`);
});
