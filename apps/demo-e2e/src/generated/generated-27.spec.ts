// Generated file
import { test, expect } from '@playwright/test';

test('has count title 27', async ({ page }, testInfo) => {
  await page.goto('/27');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('27');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 27 took ${testInfo.duration}ms`);
});
