// Generated file
import { test, expect } from '@playwright/test';

test('has count title 6', async ({ page }, testInfo) => {
  await page.goto('/6');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('6');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 6 took ${testInfo.duration}ms`);
});
