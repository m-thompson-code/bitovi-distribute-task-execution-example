// Generated file
import { test, expect } from '@playwright/test';

test('has count title 23', async ({ page }, testInfo) => {
  await page.goto('/23');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('23');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 23 took ${testInfo.duration}ms`);
});
