// Generated file
import { test, expect } from '@playwright/test';

test('has count title 21', async ({ page }, testInfo) => {
  await page.goto('/21');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('21');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 21 took ${testInfo.duration}ms`);
});
