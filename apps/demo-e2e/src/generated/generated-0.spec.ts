
import { test, expect } from '@playwright/test';

test('has count title 0', async ({ page }) => {
  await page.goto('/count/0');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('0');
});
