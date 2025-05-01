// Generated file
import { test, expect } from '@playwright/test';

test('has count title 28', async ({ page }, testInfo) => {
  await page.goto('/28');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('28');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 28 took ${testInfo.duration}ms`);
});
