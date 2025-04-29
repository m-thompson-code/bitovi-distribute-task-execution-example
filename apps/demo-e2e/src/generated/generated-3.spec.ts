// Generated file
import { test, expect } from '@playwright/test';

test('has count title 3', async ({ page }, testInfo) => {
  await page.goto('/3');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('3');
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Test 3 took ${testInfo.duration}ms`);
});
