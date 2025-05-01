// Generated file
import { test, expect } from '@playwright/test';

test('has count title 22', async ({ page }, testInfo) => {
  await page.goto('/22');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('22');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 22 took ${testInfo.duration}ms`);
});
