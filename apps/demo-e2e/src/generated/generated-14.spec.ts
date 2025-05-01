// Generated file
import { test, expect } from '@playwright/test';

test('has count title 14', async ({ page }, testInfo) => {
  await page.goto('/14');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('14');
});

test.afterEach(async (_, testInfo) => {
  console.log(`Test 14 took ${testInfo.duration}ms`);
});
