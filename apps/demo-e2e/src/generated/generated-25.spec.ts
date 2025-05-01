// Generated file
import { test, expect } from '@playwright/test';

test('has count title 25', async ({ page }, testInfo) => {
  await page.goto('/25');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('25');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 25 took ${testInfo.duration}ms`);
});
