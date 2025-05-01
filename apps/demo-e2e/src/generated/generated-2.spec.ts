// Generated file
import { test, expect } from '@playwright/test';

test('has count title 2', async ({ page }, testInfo) => {
  await page.goto('/2');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('2');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 2 took ${testInfo.duration}ms`);
});
