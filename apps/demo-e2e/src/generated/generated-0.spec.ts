// Generated file
import { test, expect } from '@playwright/test';

test('has count title 0', async ({ page }, testInfo) => {
  await page.goto('/0');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('0');
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Test 0 took ${testInfo.duration}ms`);
});
