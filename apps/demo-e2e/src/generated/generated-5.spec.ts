// Generated file
import { test, expect } from '@playwright/test';

test('has count title 5', async ({ page }, testInfo) => {
  await page.goto('/5');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('5');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 5 took ${testInfo.duration}ms`);
});
