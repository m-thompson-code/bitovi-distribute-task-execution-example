// Generated file
import { test, expect } from '@playwright/test';

test('has count title 9', async ({ page }, testInfo) => {
  await page.goto('/9');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('9');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 9 took ${testInfo.duration}ms`);
});
