// Generated file
import { test, expect } from '@playwright/test';

test('has count title 20', async ({ page }, testInfo) => {
  await page.goto('/20');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('20');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 20 took ${testInfo.duration}ms`);
});
