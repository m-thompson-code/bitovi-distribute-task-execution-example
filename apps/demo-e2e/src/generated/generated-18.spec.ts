// Generated file
import { test, expect } from '@playwright/test';

test('has count title 18', async ({ page }, testInfo) => {
  await page.goto('/18');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('18');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 18 took ${testInfo.duration}ms`);
});
