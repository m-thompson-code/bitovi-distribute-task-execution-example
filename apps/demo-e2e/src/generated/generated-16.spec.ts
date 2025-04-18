
import { test, expect } from '@playwright/test';

test('has count title 16', async ({ page }) => {
  await page.goto('/count/16');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('16');
});
