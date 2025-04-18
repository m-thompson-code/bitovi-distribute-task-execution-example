
import { test, expect } from '@playwright/test';

test('has count title 29', async ({ page }) => {
  await page.goto('/count/29');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('29');
});
