// Generated file
import { test, expect } from '@playwright/test';

test('has count title 8', async ({ page }, testInfo) => {
  await page.goto('/8');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('8');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 8 took ${testInfo.duration}ms`);
});
