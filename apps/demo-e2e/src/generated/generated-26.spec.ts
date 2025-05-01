// Generated file
import { test, expect } from '@playwright/test';

test('has count title 26', async ({ page }, testInfo) => {
  await page.goto('/26');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('26');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 26 took ${testInfo.duration}ms`);
});
