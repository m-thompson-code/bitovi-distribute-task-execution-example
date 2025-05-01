// Generated file
import { test, expect } from '@playwright/test';

test('has count title 13', async ({ page }, testInfo) => {
  await page.goto('/13');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('13');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 13 took ${testInfo.duration}ms`);
});
